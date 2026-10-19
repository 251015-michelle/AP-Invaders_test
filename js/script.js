// 1. Mock Data simulating your future API response
const contLibMovies = [
    {image: "../assets/img/Movie_placeholder.png" },
    {image: "../assets/img/Movie_placeholder.png" },
    {image: "../assets/img/Movie_placeholder.png" },
    {image: "../assets/img/Movie_placeholder.png" },
    {image: "../assets/img/Movie_placeholder.png" },
    {image: "../assets/img/Movie_placeholder.png" },
    {image: "../assets/img/Movie_placeholder.png" },
    {image: "../assets/img/Movie_placeholder.png" },
    {image: "../assets/img/Movie_placeholder.png" },
    {image: "../assets/img/Movie_placeholder.png" },
    {image: "../assets/img/Movie_placeholder.png" },
    {image: "../assets/img/Movie_placeholder.png" },
    {image: "../assets/img/Movie_placeholder.png" },
    {image: "../assets/img/Movie_placeholder.png" },
];

const container = document.getElementById('movieGridContainer');

// 2. Click Handler for Filter Buttons
document.querySelectorAll('.contLibFilterButton').forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from ALL filter buttons
        document.querySelectorAll('.contLibFilterButton').forEach(btn => {
            btn.classList.remove('active');
        });

        // Add active class to the button that was clicked
        button.classList.add('active');
        
        const targetView = button.getAttribute('data-target');

        // Clear old section's contents before displaying the new layout
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
                <div class="h-100 shadow">
                    <img src="${movie.image}" class="card-img-top rounded">
                </div>
            </div>
        `; //API will probably be inserted here where the <img> is
        container.insertAdjacentHTML('beforeend', cardHtml);
    });
}

const genres = [
    "Action",
    "Adventure",
    "Comedy",
    "Crime",
    "Documentary",
    "Drama",
    "Fantasy",
    "Horror",
    "Musical",
    "Romance",
    "Sci-Fi",
    "Thriller"
];

const decades = [
    "2020s",
    "2010s",
    "2000s",
    "1990s",
    "1980s"
];

const contentRatings = [
    "G",
    "PG",
    "PG-13",
    "R",
    "NC-17"
];

function createCarousel(title, id) {
    return `
        <div class="genreTitle">
            <div class="d-flex justify-content-between align-items-center mb-3">
                <h4 class="genreTitle">${title}</h4>
                <div>
                    <button class="btn btn-sm carouselArrow"
                            type="button"
                            data-scroll="prev"
                            data-carousel="${id}">
                        &#10094;
                    </button>

                    <button class="btn btn-sm carouselArrow"
                            type="button"
                            data-scroll="next"
                            data-carousel="${id}">
                        &#10095;
                    </button>
                </div>
            </div>

            <div id="${id}" class="movieCarousel">
                ${Array(9).fill().map(() => `
                    <div class="movieCarouselItem">
                        <img src="../assets/img/Movie_placeholder.png"
                             alt="Movie poster">
                    </div>
                `).join("")}
            </div>
        </div>
    `;
}

function renderGenres() {
    container.innerHTML = genres.map(genre =>
        createCarousel(genre, `${genre}Carousel`)
    ).join("");

    setupCarouselArrows();
}

function renderReleaseDate() {
    container.innerHTML = decades.map(decade =>
        createCarousel(decade, `${decade}Carousel`)
    ).join("");

    setupCarouselArrows();
}

function renderContentRating() {
    container.innerHTML = contentRatings.map(rating =>
        createCarousel(rating, `${rating.replace(/[^a-zA-Z0-9]/g, "")}Carousel`)
    ).join("");

    setupCarouselArrows();
}

function setupCarouselArrows() {
    document.querySelectorAll("[data-scroll]").forEach(btn => {
        btn.onclick = () => {
            const carousel = document.getElementById(btn.dataset.carousel);

            carousel.scrollBy({
                left: btn.dataset.scroll === "next" ? carousel.clientWidth : -carousel.clientWidth,
                behavior: "smooth"
            });
        };
    });
}

// Automatically load the default "All Movies" view on startup
renderAllMovies(contLibMovies);

document.querySelector(
    '.contLibFilterButton[data-target="allMoviesSection"]'
).classList.add('active');




//API code that Talya gave
class Movie{
  constructor(_title, _rating, _link, _image){
    this.title = _title;
    this.rating = _rating;
    this.link = _link;
    this.image = _image;
  }
}

!async function(){

const options = {
  method: 'GET',
  headers: {accept: 'application/json',  Authorization: 'Bearer  eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNDM2YjBmZDlhNjJiZTI2MDUxMTI2MDA2NmM0ZWIzYiIsIm5iZiI6MTc5MjEzODE4NC4xNTUsInN1YiI6IjZhZDFkYmM4ZGI0YmYxMmI2MmIzZTc5ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mLj37yAOQSPUr6bmuhkc_T1XO0z1fGPEkcOrl6fizTc'}
};

 let data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
            .then(res => res.json())
            .then(result => {return result})
            .catch(err => console.error(err));

  console.log(data);

  console.log(data.results[0].title);

  let title = data[0].title;
  let rating = data[0].rating;
  let link = data[0].imdb_link;
  let image = data[0].image;

  let newMovie = new Movie(title, rating, link, image);

  document.getElementById('title').innerHTML = newMovie.title;
  document.getElementById('content').innerHTML = newMovie.rating + "<br>" + newMovie.link + "<br>" + "<img src='" + newMovie.image + "'>";

  console.log(newMovie);

}();