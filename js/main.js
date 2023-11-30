"use strict";!function(){var n=$("html"),t=function(){$(".btn-menu").on("click",function(t){t.preventDefault(),n.toggleClass("menu-opened")})},e=function(){t()};e()}();

document.addEventListener('DOMContentLoaded', function () {
    const body = document.body;
    const themeButton = document.getElementById('theme-toggle-button');

    themeButton.addEventListener('click', function () {
        body.classList.toggle('theme-dark');
        body.classList.toggle('theme-light');
    });

    const apiKey = 'ab61fa8b06e0e9a5f3d73518cb10a19c';
    const city = 'Denton';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Weather data request failed with status ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const weatherCondition = data.weather[0].description;
            const temperature = (data.main.temp - 273.15).toFixed(2);

            updateWeatherDisplay(weatherCondition, temperature);
            announceWeather(weatherCondition);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            // Handle error display or logging here
        });
});

function updateWeatherDisplay(weatherCondition, temperature) {
    const weatherConditionElement = document.getElementById('weather-condition');
    const temperatureElement = document.getElementById('temperature');

    weatherConditionElement.textContent = weatherCondition;
    temperatureElement.textContent = temperature;
}

function announceWeather(weatherCondition) {
    // Integrate with AWS Polly or provide user feedback
    // You need to implement this function based on your requirements
    // Consider providing audio feedback or displaying a message to the user
}


