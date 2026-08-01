
const searchBtn = document.getElementById('search-btn')
const movieSection = document.getElementById('movies')
const searchInput = document.getElementById('search-input')
const explore =document.getElementById('explore')
const emptyWatchList = document.getElementById('empty-watchlist')
const watchListMovies = document.getElementById('watchlist-movies')

searchBtn.addEventListener('click',function(){
    const movie = searchInput.value
    let html=''
    fetch(`http://www.omdbapi.com/?apikey=982ada8&s=${movie}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            movieSection.innerHTML =''
            data.Search.forEach(movie => {
            fetch(`http://www.omdbapi.com/?apikey=982ada8&i=${movie.imdbID}`)
                .then(res => res.json())
                .then(details => {
                    explore.style.display = 'none'
                    movieSection.innerHTML += `
                        <div class="movie-result">
                            
                                <img src="${details.Poster}" alt="${details.Title}" class="poster">
                            

                            <div class="movie-info">
                                <h2>${details.Title}</h2>

                                <div class="movie-meta">
                                    <span>⭐ ${details.imdbRating}</span>
                                    <span>${details.Runtime}</span>
                                    <span>${details.Genre}</span>
                                    <span id="watchlist"><button class="add-btn"><i class="fa-solid fa-plus"></i> Watchlist</button> </span> 
                                </div>

                                <p class="plot">${details.Plot}</p>
                            </div>
                        </div>
                    `
                })
            })

        })
    
})

const watchListAddBtn = document.getElementById('add-movie')

movieSection.addEventListener("click", function(e) {
    if (e.target.closest(".add-btn")) {
        console.log("clicked");
    }

});
