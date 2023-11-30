"use strict";!function(){var n=$("html"),t=function(){$(".btn-menu").on("click",function(t){t.preventDefault(),n.toggleClass("menu-opened")})},e=function(){t()};e()}();

document.addEventListener('DOMContentLoaded', function () {
    // Theme Toggle
    const body = document.body;
    const themeButton = document.getElementById('theme-toggle-button');

    themeButton.addEventListener('click', function () {
        body.classList.toggle('theme-dark');
        body.classList.toggle('theme-light');
    });

    // Weather Information
    const apiKey = 'c0ddcbdb2c385543e29203e219d9b871';
    const city = 'Denton';  // Replace with the desired city name
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            console.log('Weather API Response:', data);  // Log the API response
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
    // Integrate with AWS Polly to announce weather conditions
    // You need to implement this function with AWS Polly integration
    // Similar to the one mentioned in the previous example
}
