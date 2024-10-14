// Add an event listener to the 'search-button' element for click events
document.getElementById('search-button').addEventListener('click', () => {
    // Get the value entered by the user in the 'city-input' element
    const city = document.getElementById('city-input').value;
    
    // If a city name is provided, fetch the weather and forecast data
    if (city) {
        fetchWeatherData(city); // Fetch current weather data
        fetchForecastData(city); // Fetch 5-day forecast data
    }
});

// Define the API key for the current weather API
const apikey = 'e52f0a93b0764b2bbc6130033240508';
// Define the API key for the 5-day forecast API
const fiveDayApiKey = 'e9de04caa7c242f43bc6ef9fd383e933';

// Async function to fetch current weather data based on the city name
async function fetchWeatherData(city) {
    // Construct the URL for the current weather API request with the provided city and API key
    const url = `http://api.weatherapi.com/v1/current.json?key=${apikey}&q=${encodeURIComponent(city)}`;

    try {
        // Perform a fetch request to the weather API
        const res = await fetch(url);
        // Parse the JSON response from the API
        const data = await res.json();

        // Construct HTML with current weather details and an icon
        const weatherHTML = `
            <h1>${data.location.name}</h1> <!-- City name -->
            <p>Description: ${data.current.condition.text}</p> <!-- Weather description -->
            <p>Temperature (F): ${data.current.temp_f}</p> <!-- Temperature in Fahrenheit -->
            <p>Temperature (C): ${data.current.temp_c}</p> <!-- Temperature in Celsius -->
            <p>Humidity: ${data.current.humidity}%</p> <!-- Humidity percentage -->
        `;

        // Inject the constructed HTML into the 'current-weather' container
        document.getElementById('current-weather').innerHTML = weatherHTML;
        // Log the weather data to the console for debugging
        console.log(data);
    } catch (error) {
        // Handle any errors that occur during the fetch request
        console.error("Error fetching weather data:", error);
    }
}

// Async function to fetch 5-day weather forecast data based on the city name
async function fetchForecastData(city) {
    // Construct the URL for the 5-day forecast API request with the provided city and API key
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(city)}&appid=${fiveDayApiKey}&units=metric`;

    try {
        // Perform a fetch request to the forecast API
        const res = await fetch(forecastUrl);
        // Parse the JSON response from the API
        const data = await res.json();

        // Initialize HTML for the 5-day forecast section
        let forecastHTML = '<h2>5-Day Forecast</h2>';
        // Iterate over the forecast data list
        data.list.forEach(item => {
            // Construct HTML for each day's forecast
            forecastHTML += `
                <div>
                    <h3>${new Date(item.dt * 1000).toLocaleDateString()}</h3> <!-- Date -->
                    <p>${item.weather[0].description}</p> <!-- Weather description -->
                    <p>${item.main.temp}°C</p> <!-- Temperature in Celsius -->
                    <img src="http://openweathermap.org/img/wn/${item.weather[0].icon}.png" alt="${item.weather[0].description}"> <!-- Weather icon -->
                </div>
            `;
        });

        // Inject the constructed HTML into the 'forecast' container
        document.getElementById('forecast').innerHTML = forecastHTML;
        // Log the forecast data to the console for debugging
        console.log(data);
    } catch (error) {
        // Handle any errors that occur during the fetch request
        console.error('Error fetching forecast data:', error);
    }
}
