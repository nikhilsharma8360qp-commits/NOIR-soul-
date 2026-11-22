const searchInput = document.getElementById("searchInput");
const movieCards = document.querySelectorAll(".movie-card");
const genreButtons = document.querySelectorAll(".genre");
const noResults = document.getElementById("noResults");

let selectedGenre = "all";

function filterMovies() {
  const searchText = searchInput.value.toLowerCase().trim();
  let visibleCount = 0;

  movieCards.forEach((card) => {
    const title = card.dataset.title.toLowerCase();
    const genres = card.dataset.genre.split(" ");

    const matchesSearch = title.includes(searchText);
    const matchesGenre =
      selectedGenre === "all" || genres.includes(selectedGenre);

    if (matchesSearch && matchesGenre) {
      card.style.display = "";
      visibleCount++;
    } else {
      card.style.display = "none";
    }
  });

  noResults.style.display = visibleCount === 0 ? "block" : "none";
}

searchInput.addEventListener("input", filterMovies);

genreButtons.forEach((button) => {
  button.addEventListener("click", () => {
    genreButtons.forEach((btn) => btn.classList.remove("active"));

    button.classList.add("active");
    selectedGenre = button.dataset.genre;

    filterMovies();
  });
});
    