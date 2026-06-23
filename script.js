const videoGrid = document.getElementById("videoGrid");
const searchInput = document.getElementById("searchInput");
const ageFilter = document.getElementById("ageFilter");
const audienceFilter = document.getElementById("audienceFilter");
const chips = document.querySelectorAll(".chip");
const totalVideos = document.getElementById("totalVideos");

let selectedCategory = "all";

totalVideos.textContent = videos.length;

function renderVideos() {
  const searchText = searchInput.value.toLowerCase();
  const selectedAge = ageFilter.value;
  const selectedAudience = audienceFilter.value;

  const filteredVideos = videos.filter(video => {
    const matchesSearch =
      video.title.toLowerCase().includes(searchText) ||
      video.description.toLowerCase().includes(searchText) ||
      video.category.toLowerCase().includes(searchText);

    const matchesAge = selectedAge === "all" || video.age === selectedAge;
    const matchesCategory = selectedCategory === "all" || video.category === selectedCategory;
    const matchesAudience =
      selectedAudience === "all" ||
      video.audience === selectedAudience ||
      video.audience === "Both";

    return matchesSearch && matchesAge && matchesCategory && matchesAudience;
  });

  videoGrid.innerHTML = "";

  if (filteredVideos.length === 0) {
    videoGrid.innerHTML = "<p>No videos found. Try another search or category.</p>";
    return;
  }

  filteredVideos.forEach(video => {
    const card = document.createElement("article");
    card.className = "video-card";

    card.innerHTML = `
      <iframe
        src="https://www.youtube.com/embed/${video.youtubeId}"
        title="${video.title}"
        allowfullscreen>
      </iframe>
      <div class="card-content">
        <h3>${video.title}</h3>
        <p>${video.description}</p>
        <div class="tags">
          <span class="tag">Age ${video.age}</span>
          <span class="tag">${video.category}</span>
          <span class="tag">${video.audience}</span>
        </div>
      </div>
    `;

    videoGrid.appendChild(card);
  });
}

chips.forEach(chip => {
  chip.addEventListener("click", () => {
    chips.forEach(item => item.classList.remove("active"));
    chip.classList.add("active");
    selectedCategory = chip.dataset.category;
    renderVideos();
  });
});

searchInput.addEventListener("input", renderVideos);
ageFilter.addEventListener("change", renderVideos);
audienceFilter.addEventListener("change", renderVideos);

renderVideos();
