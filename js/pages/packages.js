// ===== WANDERLY PACKAGES PAGE LOGIC (packages.html) =====

function renderGrid(data) {
  const grid = document.getElementById('packages-grid');
  if (!grid) return;
  grid.innerHTML = data.map(renderPackageCard).join('');
}

function filterCategory(cat, btnElement) {
  document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
  if (btnElement) {
    btnElement.classList.add('active');
  } else {
    Array.from(document.querySelectorAll('.chip')).find(el => el.textContent.trim() === cat)?.classList.add('active');
  }

  if (typeof packages === 'undefined') return;
  const filtered = cat === 'All' ? packages : packages.filter(p => p.category === cat);
  renderGrid(filtered);
}

// Make accessible to inline onclick handlers
window.filterCategory = filterCategory;

document.addEventListener('DOMContentLoaded', () => {
  initPage('packages');

  const urlParams = new URLSearchParams(window.location.search);
  const initialCategory = urlParams.get('cat') || 'All';
  filterCategory(initialCategory);
});
