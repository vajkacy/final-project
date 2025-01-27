import { displayMovies } from "./functions.js";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5M2JkM2ExYTIyZjhiNjBkMDQ0YmE3OWM3OTZlZDFmYiIsIm5iZiI6MTczNzQwMjIzOC44OTEsInN1YiI6IjY3OGVhNzdlMjU3NWM4YWRiMzQzMDVmZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aR2HW4A1sD1GihoQmmzEMcEZMZFifJj2dCZDzgSnkF8",
  },
};

const searchInput = document.querySelector("#searchForm");

let allMovies = [];

// Fetch movies from API
fetch(
  "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
  options
)
  .then((res) => {
    if (!res.ok) {
      throw new Error("Failed to fetch");
    }
    return res.json();
  })
  .then((data) => {
    allMovies = data.results; // Store all movies for filtering
    displayMovies(allMovies); // Initial display
  })
  .catch((error) => console.error(error));

// Display movies on the page

// Search functionality
searchInput.addEventListener("input", (e) => {
  const searchValue = e.target.value.toLowerCase();
  const filteredMovies = allMovies.filter((movie) =>
    movie.title.toLowerCase().includes(searchValue)
  );
  displayMovies(filteredMovies);
});
