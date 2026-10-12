// 1. Mock Data simulating your future API response
const contLibMovies = [
    { title: "Movie One", image: "https://placeholder.com" },
    { title: "Movie Two", image: "https://placeholder.com" },
    { title: "Movie Three", image: "https://placeholder.com" },
    { title: "Movie Four", image: "https://placeholder.com" },
    { title: "Movie Five", image: "https://placeholder.com" },
    { title: "Movie Six", image: "https://placeholder.com" },
    { title: "Movie Seven", image: "https://placeholder.com" },
    { title: "Movie Eight", image: "https://placeholder.com" }
];

const container = document.getElementById('movieGridContainer');

// 2. Click Handler for Filter Buttons
document.querySelectorAll('.contLibFilterButton').forEach(button => {
    button.addEventListener('click', () => {
        const targetView = button.getAttribute('data-target');
        
        // Clear old section contents before drawing the new view
        container.innerHTML = '';

        if (targetView === "allMoviesSection") {
            renderMovieGrid(contLibMovies);
        } else if (targetView === "genresSection") {
            renderGenres();
        } else if (targetView === "releaseDateSection") {
            renderYears();
        }
    });
});

// 3. Render Layout Functions (Generating elements dynamically)
function renderMovieGrid(movies) {
    movies.forEach(movie => {
        const cardHtml = `
            <div class="col-6 col-sm-6 col-md-3 col-lg-2">
                <div class="card bg-dark text-white border-0 h-100 shadow">
                    <img src="${movie.image}" class="card-img-top rounded" alt="${movie.title}">
                </div>
            </div>
        `;
        container.insertAdjacentHTML('beforeend', cardHtml);
    });
}

function renderGenres() {
    const genres = ["Action", "Comedy", "Drama", "Sci-Fi", "Horror", "Romance"];
    genres.forEach(genre => {
        const genreHtml = `
            <div class="col-6 col-sm-4 col-md-3">
                <div class="bg-dark text-center p-4 rounded text-white border border-info fs-5 cursor-pointer">
                    ${genre}
                </div>
            </div>
        `;
        container.insertAdjacentHTML('beforeend', genreHtml);
    });
}

function renderYears() {
    const decades = ["2020s", "2010s", "2000s", "90s", "80s"];
    decades.forEach(decade => {
        const yearHtml = `
            <div class="col-12 mb-2">
                <div class="bg-dark p-3 rounded text-white border-start border-4 border-primary">
                    <h5>${decade} Releases</h5>
                </div>
            </div>
        `;
        container.insertAdjacentHTML('beforeend', yearHtml);
    });
}

// Automatically load the default "All Movies" view on startup
renderMovieGrid(contLibMovies);