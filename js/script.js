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
            renderAllMovies(contLibMovies);
        } else if (targetView === "genresSection") {
            renderGenres();
        } else if (targetView === "releaseDateSection") {
            renderReleaseDate();
        } else if (targetView === "contentRatingSection") {
            renderContentRating();
        }
    });
});

// 3. Render Layout Functions (Generating elements dynamically)
function renderAllMovies(movies) {
    movies.forEach(movie => {
        const cardHtml = `
            <div class="col-6 col-sm-6 col-md-3 col-lg-2">
                <div class="card bg-dark text-white border-0 h-100 shadow">
                    <img src="${movie.image}" class="card-img-top rounded" alt="${movie.title}">
                </div>
            </div>
        `; //API will probably be inserted here where the <img> is
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





//API start
class MediaItem {
    constructor(_title, _type, _url, _image) {
        this.title = _title;
        this.type = _type;
        this.url = _url;
        this.image = _image;
    }
}

(async function() {
  const url = 'https://imdb236.p.rapidapi.com/api/imdb/top250-movies';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'a1d7a9357bmsh5a45f4a1368e12fp17474fjsn43a1b2c1f0ba',
		'x-rapidapi-host': 'imdb236.p.rapidapi.com',
		'Content-Type': 'application/json'
        }
    };

    let response = await fetch(url, options);
    let data = await response.json();

    console.log("Fetched data:", data);

    if (!data || !Array.isArray(data) || data.length === 0) {
        console.error("Data is empty or not an array");
        return;
    }

    let title = data[0].primaryTitle;
    let type = data[0].type;
    let itemUrl = data[0].url;
    let image = data[0].primaryImage;

    let mediaItem = new MediaItem(title, type, itemUrl, image);

    document.getElementById('title').innerHTML = mediaItem.title;
    document.getElementById('content').innerHTML = 
        mediaItem.type + "<br>" + mediaItem.url + "<br><img src='" + mediaItem.image + "'>";

    console.log(mediaItem);
})();

//API end
















