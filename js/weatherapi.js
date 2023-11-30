document.addEventListener('DOMContentLoaded', function () {
    const apiKey = 'ab61fa8b06e0e9a5f3d73518cb10a19c';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=yourCity&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherDescription = data.weather[0].description;
            const temperature = data.main.temp;

            // Display weather on the page
            const weatherElement = document.getElementById('weather-info');
            weatherElement.textContent = `Current Weather: ${weatherDescription}, Temperature: ${temperature}°C`;

            // Use AWS Polly to announce weather conditions
            announceWeather(weatherDescription);
        })
        .catch(error => console.error('Error fetching weather data:', error));
});

function announceWeather(weatherDescription) {
    // Use AWS Polly to announce weather conditions
    // You need to integrate AWS Polly, provide access credentials, and call the service to generate a voice.
}
