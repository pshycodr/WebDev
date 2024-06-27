from flask import Flask, request, jsonify, render_template
import spotipy
from spotipy.oauth2 import SpotifyClientCredentials
import matplotlib.pyplot as plt
import seaborn as sns
import pandas as pd
import io
import base64

# Replace with your Spotify API credentials
CLIENT_ID = '5ca6d6dc11764e7e920a6de3068f7650'
CLIENT_SECRET = '21017e64a08d4530845b6e2fa7c2d705'

# Authenticate with Spotify
sp = spotipy.Spotify(auth_manager=SpotifyClientCredentials(client_id=CLIENT_ID, client_secret=CLIENT_SECRET))

# Function to search for a track
def search_track(query):
    results = sp.search(q=query, type='track', limit=1)
    if results['tracks']['items']:
        return results['tracks']['items'][0]['id']
    else:
        return None

# Function to get song recommendations
def get_recommendations(seed_tracks=None, seed_genres=None, limit=10):
    results = sp.recommendations(seed_tracks=seed_tracks, seed_genres=seed_genres, limit=limit)
    tracks = results['tracks']
    track_data = []
    for track in tracks:
        track_info = {
            'name': track['name'],
            'artist': track['artists'][0]['name'],
            'popularity': track['popularity'],
            'duration_ms': track['duration_ms'],
            'explicit': track['explicit'],
            'album_cover': track['album']['images'][0]['url'] if track['album']['images'] else None,
            'external_url': track['external_urls']['spotify']
        }
        track_data.append(track_info)
    return pd.DataFrame(track_data)

# Create the Flask app
app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/get_recommendations', methods=['POST'])
def recommendations():
    data = request.json
    user_input = data['user_input']
    
    # Check if input is genre or track
    if user_input.lower() in sp.recommendation_genre_seeds()['genres']:
        seed_genres = [user_input.lower()]
        seed_tracks = None
    else:
        seed_genres = None
        seed_tracks = [search_track(user_input)]
    
    if seed_tracks or seed_genres:
        recommendations_df = get_recommendations(seed_tracks=seed_tracks, seed_genres=seed_genres)
        
        # Create a plot
        plt.figure(figsize=(10, 6))
        sns.barplot(data=recommendations_df, x='popularity', y='name', palette='viridis')
        plt.xlabel('Popularity')
        plt.ylabel('Song')
        plt.title('Song Recommendations')
        
        # Save the plot to a PNG image in memory
        img = io.BytesIO()
        plt.savefig(img, format='png')
        img.seek(0)
        plot_url = base64.b64encode(img.getvalue()).decode()
        
        return jsonify({
            'recommendations': recommendations_df.to_dict(orient='records'),
            'plot_url': plot_url
        })
    else:
        return jsonify({'error': 'No recommendations found. Please try a different query.'})

if __name__ == '__main__':
    app.run(debug=True)



# REQUIRMENTS
# pip install requests spotipy matplotlib seaborn
