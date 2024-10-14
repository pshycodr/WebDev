document.getElementById('searchButton').addEventListener('click', () => {
    const movie = document.getElementById('searchInput').value;

    if(movie){
        fetchMovies(movie);
    }
})



const apiKey = 'ecd4994957622afacd2c825cbe5420e2';
const baseUrl = 'https://image.tmdb.org/t/p/w200';


async function fetchMovies(movie){
try{
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(movie)}&api_key=${apiKey}`);
    const data = await res.json();

    // Constructing HTML with current movie details 
    const movieHTML = `
    <h1>Title: ${data.results[0].original_title}</h1>
    <img src="${baseUrl}${data.results[0].poster_path}" alt="${movie.title}" />
    <p>Release Date: ${data.results[0].release_date}</p>
    <button onClick="fetchMovieDetails('${data.results[0].id}')">More Info</button>
    `;

    // Injecting the constructed HTML into the movieResults
    document.getElementById('movieResults').innerHTML = movieHTML;

    console.log(data);
    

}catch(error){
    console.error("Error fetching weather data:", error);
}

}

// Function to fetch and display detailed movie information
async function fetchMovieDetails(movieId){
    try{
        const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&append_to_response=credits`);
        const data = await res.json();


        // Extracting director and actors from the credits response
        const director = data.credits.crew.find(member => member.job === "Director")?.name || 'N/A';
        const actors = data.credits.cast.slice(0, 5).map(actor => actor.name).join(', ');
   

         // Constructing HTML with detailed movie information
         const movieDetailsHTML = `
         <h2>Title: ${data.original_title}</h2>
         <p><strong>Plot:</strong> ${data.overview}</p>
         <p><strong>Director:</strong> ${director}</p>
         <p><strong>Actors:</strong> ${actors}</p>
     `;

      // Injecting the constructed HTML into the modalDetails
      document.getElementById('modalDetails').innerHTML = movieDetailsHTML;

      // Display the modal
      document.getElementById('movieModal').style.display = 'block';

        console.log(data);
        
    }catch(error){
        console.error("Error fetching movie details:", error);
    }
}

// Function to close the modal
document.getElementById('closeModal').addEventListener('click', () => {
    document.getElementById('movieModal').style.display = 'none';
})

// Close the modal if the user clicks outside of it
window.addEventListener('click', (event) => {
    if (event.target === document.getElementById('movieModal')) {
        document.getElementById('movieModal').style.display = 'none';
    }
});



