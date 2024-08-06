const API_KEY = 'd20ecfe4'; // Replace with your API key
const BASE_URL = 'https://www.omdbapi.com/';

async function fetchMovies(query) {
    try {
        const response = await fetch(`${BASE_URL}?s=${query}&apikey=${API_KEY}`);
        const data = await response.json();
        displayMovies(data.Search);
    } catch (error) {
        console.error('Error fetching movies:', error);
    }
}

function displayMovies(movies) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';

    movies.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie');

        movieElement.innerHTML = `
            <img src="${movie.Poster}" alt="${movie.Title}">
            <h3>${movie.Title}</h3>
            <p>${movie.Year}</p>
            <button class="more-info-button" data-imdbid="${movie.imdbID}">More Info</button>
        `;

        resultsContainer.appendChild(movieElement);
    });

    document.querySelectorAll('.more-info-button').forEach(button => {
        button.addEventListener('click', async (event) => {
            const imdbID = event.target.getAttribute('data-imdbid');
            await fetchMovieDetails(imdbID);
        });
    });
}

async function fetchMovieDetails(imdbID) {
    try {
        const response = await fetch(`${BASE_URL}?i=${imdbID}&apikey=${API_KEY}`);
        const movie = await response.json();
        displayMovieDetails(movie);
    } catch (error) {
        console.error('Error fetching movie details:', error);
    }
}

function displayMovieDetails(movie) {
    const modal = document.createElement('div');
    modal.classList.add('modal');

    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-button">&times;</span>
            <h2>${movie.Title}</h2>
            <p><strong>Plot:</strong> ${movie.Plot}</p>
            <p><strong>Director:</strong> ${movie.Director}</p>
            <p><strong>Actors:</strong> ${movie.Actors}</p>
        </div>
    `;

    document.body.appendChild(modal);

    document.querySelector('.close-button').addEventListener('click', () => {
        document.body.removeChild(modal);
    });
}

document.getElementById('search-button').addEventListener('click', () => {
    const query = document.getElementById('search-input').value;
    fetchMovies(query);
});
