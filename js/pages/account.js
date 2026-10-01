// ===== WANDERLY MY ACCOUNT LOGIC (account.html) =====

function renderWishlist() {
  const grid = document.getElementById('wishlist-grid');
  const counter = document.getElementById('wishlist-counter');
  if (!grid) return;
  const list = typeof getWishlist === 'function' ? getWishlist() : [];
  if (counter) counter.textContent = `${list.length} saved`;

  if (list.length === 0) {
    grid.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:3rem;background:var(--card);border-radius:var(--radius-card);border:1.5px dashed var(--line)"><p class="text-muted" style="margin-bottom:12px">Your saved list is empty.</p><a href="packages.html" class="btn btn-primary" style="border-radius:999px">Explore Packages</a></div>';
  } else {
    const items = list.map(id => {
      let item = typeof packages !== 'undefined' ? packages.find(p => p.id === id) : null;
      if (item) return renderPackageCard(item);
      item = typeof destinations !== 'undefined' ? destinations.find(d => d.id === id) : null;
      if (item) return renderDestinationCard(item);
      return '';
    });
    grid.innerHTML = items.join('');
  }
}

window.renderWishlist = renderWishlist;

document.addEventListener('DOMContentLoaded', () => {
  initPage('account');

  // Populate user profile
  const user = typeof getAuthUser === 'function' ? getAuthUser() : null;
  const profName = document.getElementById('prof-name');
  const profEmail = document.getElementById('prof-email');
  const profAvatar = document.getElementById('prof-avatar');
  const profSince = document.getElementById('prof-since');
  const profRole = document.getElementById('prof-role');
  const guestBanner = document.getElementById('guest-state-banner');
  const authAction = document.getElementById('auth-header-action');

  if (user) {
    if (profName) profName.textContent = user.name;
    if (profEmail) profEmail.textContent = user.email;
    if (profAvatar) profAvatar.textContent = user.avatar || user.name.charAt(0);
    if (profSince) profSince.textContent = user.since || 'October 2026';
    if (user.role && profRole) {
      profRole.textContent = user.role;
    }
  } else {
    if (guestBanner) guestBanner.style.display = 'block';
    if (authAction) {
      authAction.innerHTML = `
        <a href="login.html" class="btn btn-primary" style="border-radius:999px">Sign In</a>
      `;
    }
    if (profName) profName.textContent = 'Guest Explorer';
    if (profEmail) profEmail.textContent = 'Sign in to access your cloud profile';
    if (profAvatar) profAvatar.textContent = 'GE';
  }

  renderWishlist();

  // Override toggleWishlist to refresh grid
  if (typeof toggleWishlist === 'function') {
    const origToggle = toggleWishlist;
    window.toggleWishlist = function(id) {
      origToggle(id);
      renderWishlist();
    };
  }
});
