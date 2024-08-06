document.getElementById('search-button').addEventListener('click', () => {
    const city = document.getElementById('city-input').value;
    fetchWeatherData(city);
});

function fetchWeatherData(city) {
    const apiKey = 'c27b6dd2771afea1bf46540a6c17749a'; // replace with you OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            displayWeatherData(data);
            fetchForecastData(city);
        })
        .catch(error => console.error('Error fetching weather data:', error));
}

function fetchForecastData(city) {
    const apiKey = 'c27b6dd2771afea1bf46540a6c17749a'; // replace with you OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            displayForecastData(data);
            expandContainer();
        })
        .catch(error => console.error('Error fetching forecast data:', error));
}

function displayWeatherData(data) {
    const weatherInfo = document.getElementById('weather-info');
    const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    weatherInfo.innerHTML = `
        <h2>${data.name}</h2>
        <img src="${iconUrl}" alt="${data.weather[0].description}">
        <p>Temperature: ${data.main.temp} °C</p>
        <p>Condition: ${data.weather[0].description}</p>
    `;
}

function displayForecastData(data) {
    const forecastInfo = document.getElementById('forecast-info');
    forecastInfo.innerHTML = '';

    for (let i = 0; i < data.list.length; i += 8) {
        const forecast = data.list[i];
        const date = new Date(forecast.dt * 1000);
        const iconUrl = `http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`;
        forecastInfo.innerHTML += `
            <div class="forecast-item">
                <p>${date.toDateString().slice(0, 3)}</p>
                <img src="${iconUrl}" alt="${forecast.weather[0].description}">
                <p>${forecast.main.temp} °C</p>
                <p>${forecast.weather[0].description}</p>
            </div>
        `;
    }
}

function expandContainer() {
    const container = document.getElementById('container');
    container.classList.add('expanded');
}


const canvas = document.getElementById('effects');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const raindrops = [];

function initRain() {
    for (let i = 0; i < 100; i++) {
        raindrops.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            speed: Math.random() * 10 + 5,
            length: Math.random() * 20 + 5,
            thickness: Math.random() * 2 + 1
        });
    }
}

function drawRain() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (const raindrop of raindrops) {
        ctx.beginPath();
        ctx.moveTo(raindrop.x, raindrop.y);
        ctx.lineTo(raindrop.x, raindrop.y + raindrop.length);
        ctx.strokeStyle = '#00f';
        ctx.lineWidth = raindrop.thickness;
        ctx.stroke();

        raindrop.y += raindrop.speed;

        if (raindrop.y > canvas.height) {
            raindrop.y = 0;
        }
    }
    requestAnimationFrame(drawRain);
}

initRain();
drawRain();