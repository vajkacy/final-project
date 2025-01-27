export const displayMovies = (movies) => {
  moviesList.innerHTML = ""; // Clear the current movies
  movies.forEach((movie) => {
    const movieCard = document.createElement("div");
    movieCard.classList.add("col");
    movieCard.innerHTML = `
              <div class="card h-100 shadow movieCard" id="movieCard">
                  <div class="card-body">
                      <h4 class="card-title">${movie.title}</h4>
                      <h10 class="card-title">${movie.original_title}</h10>
                      <p class="card-text"></p>
                      <p class="card-text"><small class="text-body-secondary">Release Date: ${movie.release_date}</small></p>
                  </div>
                  <img src="https://image.tmdb.org/t/p/original/${movie.poster_path}" class="card-img-bottom" alt="${movie.title}"/>
              </div>
          `;
    moviesList.appendChild(movieCard);

    movieCard.addEventListener("click", () => {
      let clickedMoviesInfo = movie.id;
      localStorage.setItem("clickedMovieId", clickedMoviesInfo);
      console.log(`Clicked on ${movie.title}`);
      console.log(clickedMoviesInfo);
      window.location.href = "./detalPage.html";
    });
  });
};
