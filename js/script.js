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

function renderGenres() {

    const genreHtml = `
        <div class="genreTitle">

            <div class="d-flex justify-content-between align-items-center mb-3">
                <h3>Action</h3>

                <div>
                    <button class="btn btn-outline-light btn-sm"
                            type="button"
                            data-scroll="prev"
                            data-carousel="actionCarousel">
                        &#10094;
                    </button>

                    <button class="btn btn-outline-light btn-sm"
                            type="button"
                            data-scroll="next"
                            data-carousel="actionCarousel">
                        &#10095;
                    </button>
                </div>
            </div>

            <div id="actionCarousel" class="movieCarousel">

                <div class="movieCarouselItem">
                    <img src="../assets/img/Movie_placeholder.png" alt="Movie 1">
                </div>

                <div class="movieCarouselItem">
                    <img src="../assets/img/Movie_placeholder.png" alt="Movie 2">
                </div>

                <div class="movieCarouselItem">
                    <img src="../assets/img/Movie_placeholder.png" alt="Movie 3">
                </div>

                <div class="movieCarouselItem">
                    <img src="../assets/img/Movie_placeholder.png" alt="Movie 4">
                </div>

                <div class="movieCarouselItem">
                    <img src="../assets/img/Movie_placeholder.png" alt="Movie 5">
                </div>

                <div class="movieCarouselItem">
                    <img src="../assets/img/Movie_placeholder.png" alt="Movie 5">
                </div>

                <div class="movieCarouselItem">
                    <img src="../assets/img/Movie_placeholder.png" alt="Movie 5">
                </div>

                <div class="movieCarouselItem">
                    <img src="../assets/img/Movie_placeholder.png" alt="Movie 5">
                </div>

                <div class="movieCarouselItem">
                    <img src="../assets/img/Movie_placeholder.png" alt="Movie 5">
                </div>

            </div>
        </div>
    `;

    container.insertAdjacentHTML('beforeend', genreHtml);
}
            
            
            
    //         <div class="genreTitle">
    //             <h3>Adventure</h3>
    //             <p>insert carousel here</p>
    //         </div>
    //         <div class="genreTitle">
    //             <h3>Comedy</h3>
    //             <p>insert carousel here</p>
    //         </div>
    //         <div class="genreTitle">
    //             <h3>Crime</h3>
    //             <p>insert carousel here</p>
    //         </div>
    //         <div class="genreTitle">
    //             <h3>Documentary</h3>
    //             <p>insert carousel here</p>
    //         </div>
    //         <div class="genreTitle">
    //             <h3>Drama</h3>
    //             <p>insert carousel here</p>
    //         </div>
    //         <div class="genreTitle">
    //             <h3>Fantasy</h3>
    //             <p>insert carousel here</p>
    //         </div>
    //         <div class="genreTitle">
    //             <h3>Horror</h3>
    //             <p>insert carousel here</p>
    //         </div>
    //         <div class="genreTitle">
    //             <h3>Musical</h3>
    //             <p>insert carousel here</p>
    //         </div>
    //         <div class="genreTitle">
    //             <h3>Romance</h3>
    //             <p>insert carousel here</p>
    //         </div>
    //         <div class="genreTitle">
    //             <h3>Sci-Fi</h3>
    //             <p>insert carousel here</p>
    //         </div>
    //         <div class="genreTitle">
    //             <h3>Thriller</h3>
    //             <p>insert carousel here</p>
    //         </div>
    //     `;
    //     container.insertAdjacentHTML('beforeend', genreHtml);
    // }


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
renderAllMovies(contLibMovies);

document.querySelector(
    '.contLibFilterButton[data-target="allMoviesSection"]'
).classList.add('active');





//API start
// class MediaItem {
//     constructor(_title, _type, _url, _image) {
//         this.title = _title;
//         this.type = _type;
//         this.url = _url;
//         this.image = _image;
//     }
// }

// (async function() {
//   const url = 'https://imdb236.p.rapidapi.com/api/imdb/top250-movies';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'x-rapidapi-key': 'a1d7a9357bmsh5a45f4a1368e12fp17474fjsn43a1b2c1f0ba',
// 		'x-rapidapi-host': 'imdb236.p.rapidapi.com',
// 		'Content-Type': 'application/json'
//         }
//     };

//     let response = await fetch(url, options);
//     let data = await response.json();

//     console.log("Fetched data:", data);

//     if (!data || !Array.isArray(data) || data.length === 0) {
//         console.error("Data is empty or not an array");
//         return;
//     }

//     let title = data[0].primaryTitle;
//     let type = data[0].type;
//     let itemUrl = data[0].url;
//     let image = data[0].primaryImage;

//     let mediaItem = new MediaItem(title, type, itemUrl, image);

//     document.getElementById('title').innerHTML = mediaItem.title;
//     document.getElementById('content').innerHTML = 
//         mediaItem.type + "<br>" + mediaItem.url + "<br><img src='" + mediaItem.image + "'>";

//     console.log(mediaItem);
// })();

//API end







//class code API
// class Movie{
//     constructor(_title, _rating, _link, _image){
//         this.title = _title;
//         this.rating = _rating;
//         this.link = _link;
//         this.image = _image;
//     }
// }

// //header - gets info from the API
// !async function(){
// const url = 'https://imdb-top-100-movies.p.rapidapi.com/';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'x-rapidapi-key': 'a1d7a9357bmsh5a45f4a1368e12fp17474fjsn43a1b2c1f0ba',//authorisation key
// 		'x-rapidapi-host': 'imdb-top-100-movies.p.rapidapi.com',
// 		// 'Content-Type': 'application/json'
// 	}
// };

// //fetch request - it check with the url if the authentication key is valid and if it can connect to the api
// //LW this is like a universal code that can be used for any API
// let data = await fetch(url, options)
//             .then((response)=> response.json())
//             .then((result)=> {return result})
//             .catch((error)=> console.error(error));

// console.log(data);

// //this will be different
// console.log(data[4].title); //data.movies[] ... waar "title" kom is wat jy kry met die console log wat bo hierdie een is

// let title = data[0].title;
// let rating = data[0].rating;
// let link = data[0].imdb_link;
// let image = data[0].image;

// let newMovie = new Movie(title, rating, link, image);

// document.getElementById('title').innerHTML = newMovie.title;
// document.getElementById('content').innerHTML = newMovie.rating + "<br>" + newMovie.link + "<br>" + "<img src='" + newMovie.image + "'>";

// console.log(newMovie);

// }(); //an async function cant be called so we have to put (); after the functions closing }

