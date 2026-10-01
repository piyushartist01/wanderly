// ===== WANDERLY EXPLORE PAGE LOGIC (explore.html) =====

function renderGrid(data) {
  const grid = document.getElementById('destinations-grid');
  if (!grid) return;
  if (data.length === 0) {
    grid.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:4rem"><p class="text-muted">No destinations found matching your criteria.</p></div>';
  } else {
    grid.innerHTML = data.map(renderDestinationCard).join('');
  }
}

function filterDestinations() {
  const searchInput = document.getElementById('search-input');
  const regionFilter = document.getElementById('region-filter');
  if (!searchInput || !regionFilter || typeof destinations === 'undefined') return;

  const searchTerm = searchInput.value.toLowerCase();
  const region = regionFilter.value;

  const filtered = destinations.filter(d => {
    const matchesSearch = d.name.toLowerCase().includes(searchTerm) || d.tagline.toLowerCase().includes(searchTerm);
    const matchesRegion = region === 'All' || d.region === region;
    return matchesSearch && matchesRegion;
  });

  renderGrid(filtered);
}

// Make accessible to inline handlers
window.filterDestinations = filterDestinations;

document.addEventListener('DOMContentLoaded', () => {
  initPage('explore');
  if (typeof destinations !== 'undefined') {
    renderGrid(destinations);
  }
});
