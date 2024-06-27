import spotipy
from spotipy.oauth2 import SpotifyClientCredentials
import matplotlib.pyplot as plt
import seaborn as sns
import pandas as pd

# Replace with your Spotify API credentials
CLIENT_ID = '5ca6d6dc11764e7e920a6de3068f7650'
CLIENT_SECRET = '21017e64a08d4530845b6e2fa7c2d705'

# Authenticate with Spotify
sp = spotipy.Spotify(auth_manager=SpotifyClientCredentials(client_id=CLIENT_ID, client_secret=CLIENT_SECRET))

# Function to get song recommendations
def get_recommendations(seed_tracks, limit=10):
    results = sp.recommendations(seed_tracks=seed_tracks, limit=limit)
    tracks = results['tracks']
    track_data = []
    for track in tracks:
        track_info = {
            'name': track['name'],
            'artist': track['artists'][0]['name'],
            'popularity': track['popularity'],
            'duration_ms': track['duration_ms'],
            'explicit': track['explicit']
        }
        track_data.append(track_info)
    return pd.DataFrame(track_data)

# Get recommendations based on a seed track
seed_tracks = ['3n3Ppam7vgaVa1iaRUc9Lp']  # Replace with your seed track ID
recommendations = get_recommendations(seed_tracks)

# Visualize the data
sns.set(style="whitegrid")
plt.figure(figsize=(10, 6))
sns.barplot(x='popularity', y='name', data=recommendations, palette='viridis')
plt.title('Song Recommendations by Popularity')
plt.xlabel('Popularity')
plt.ylabel('Song')
plt.show()
