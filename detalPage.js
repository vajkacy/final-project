const clickedMoviesInfo = localStorage.getItem("clickedMovieId");

if (clickedMoviesInfo) {
  console.log(clickedMoviesInfo);
  // Fetch and display movie details using clickedMoviesInfo
} else {
  console.log("No movie selected");
}

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5M2JkM2ExYTIyZjhiNjBkMDQ0YmE3OWM3OTZlZDFmYiIsIm5iZiI6MTczNzQwMjIzOC44OTEsInN1YiI6IjY3OGVhNzdlMjU3NWM4YWRiMzQzMDVmZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aR2HW4A1sD1GihoQmmzEMcEZMZFifJj2dCZDzgSnkF8",
  },
};

fetch(
  `https://api.themoviedb.org/3/movie/${clickedMoviesInfo}?language=en-US`,
  options
)
  .then((res) => res.json())
  .then((movie) => {
    const movieDetails = document.querySelector("#movieDetails");
    movieDetails.innerHTML = `
            <div class="card mb-3 w-100">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="https://image.tmdb.org/t/p/original/${
        movie.poster_path
      }" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h2 class="card-title">${movie.title}</h2>

        <h5 class="card-title"> Original title : ${movie.original_title}</h5>
        <p class="card-text"><small class="text-body-secondary">${
          movie.status
        } : ${movie.release_date}</small></p>
        <p class="card-text">${movie.overview}</p>
        <h5 class="card-title">ganres: ${movie.genres
          .map((genre) => genre.name)
          .join(", ")}</h5>
          <div class="card-company">
          <h5 class="card-company">companiese: ${movie.production_companies
            .map((companies) => companies.name)
            .join(", ")}</h5>
          </div>
      </div>
    </div>
  </div>
</div> `;
  })
  .catch((err) => console.error(err));
