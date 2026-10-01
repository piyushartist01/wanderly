// ===== WANDERLY PACKAGE DETAIL PAGE LOGIC (package-detail.html) =====

document.addEventListener('DOMContentLoaded', () => {
  initPage('');

  const urlParams = new URLSearchParams(window.location.search);
  const slug = urlParams.get('slug');
  const pkg = typeof getPackageBySlug === 'function' ? getPackageBySlug(slug) : null;

  if (!pkg) {
    document.body.innerHTML = '<div class="container" style="padding-top:100px;text-align:center"><h1>Package not found</h1><a href="packages.html" class="btn btn-primary" style="margin-top:1rem">Back to packages</a></div>';
    return;
  }

  document.title = `${pkg.title} — Wanderly`;
  const dest = typeof getDestinationById === 'function' ? getDestinationById(pkg.destinationId) : null;

  // Render Hero
  const heroContainer = document.getElementById('hero-container');
  if (heroContainer && dest) {
    heroContainer.innerHTML = `
      <div class="art-container" style="position:absolute;inset:0">${generateArt(dest.artPalette, window.innerWidth, window.innerHeight * 0.45)}</div>
      <div class="hero-content">
        <div class="container" style="padding:0">
          <div style="display:flex;gap:0.5rem;margin-bottom:1rem">
            <span class="card-tag" style="color:var(--text);background:var(--bg)">${pkg.difficulty}</span>
            ${pkg.bestSeller ? '<span class="card-tag best-seller">⭐ Best Seller</span>' : ''}
          </div>
          <h1 class="text-display-lg" style="color:white;margin-bottom:0.5rem">${pkg.title}</h1>
          <p style="font-size:1.125rem;color:rgba(255,255,255,0.9);display:flex;align-items:center;gap:0.5rem">${icons.mapPin} ${dest.name}, ${dest.country}</p>
        </div>
      </div>
    `;
  }

  // Render Main Content
  const mainContent = document.getElementById('main-content');
  if (mainContent) {
    mainContent.innerHTML = `
      <div style="margin-bottom:3rem">
        <h2 class="text-display-sm mb-4">The Experience</h2>
        <p style="font-size:1.125rem;color:var(--text-muted);line-height:1.7">${dest ? dest.description : ''}</p>
      </div>

      <div style="margin-bottom:3rem">
        <h2 class="text-display-sm mb-4">Itinerary (${pkg.days} Days / ${pkg.nights} Nights)</h2>
        <div class="itinerary">
          ${pkg.itinerary.map(day => `
            <div class="itinerary-day">
              <div class="itinerary-marker">D${day.day}</div>
              <div style="background:var(--bg-surface);padding:1.5rem;border-radius:var(--radius-card);border:1px solid var(--border)">
                <h3>${day.title}</h3>
                <p>${day.description}</p>
                <div class="itinerary-tags">
                  ${day.meals ? `<span class="itinerary-tag meals">Meals: ${day.meals.join(', ')}</span>` : ''}
                  ${day.stay && day.stay !== 'N/A' ? `<span class="itinerary-tag stay">Stay: ${day.stay}</span>` : ''}
                  ${day.elevation ? `<span class="itinerary-tag elevation">Altitude: ${day.elevation}</span>` : ''}
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="grid-2 mb-8">
        <div class="card" style="padding:1.5rem">
          <h3 class="font-semibold mb-4 text-lagoon flex items-center gap-2">${icons.check} What's Included</h3>
          <ul class="inclusion-list included">
            ${pkg.inclusions.map(inc => `<li>${icons.check} ${inc}</li>`).join('')}
          </ul>
        </div>
        <div class="card" style="padding:1.5rem">
          <h3 class="font-semibold mb-4 text-terracotta flex items-center gap-2">${icons.x} What's Not Included</h3>
          <ul class="inclusion-list excluded">
            ${pkg.exclusions.map(exc => `<li>${icons.x} ${exc}</li>`).join('')}
          </ul>
        </div>
      </div>
    `;
  }

  // Render Sidebar
  const sidebarContent = document.getElementById('sidebar-content');
  if (sidebarContent) {
    sidebarContent.innerHTML = `
      <div class="sidebar-card">
        <div style="color:var(--text-muted);font-size:0.875rem;margin-bottom:0.25rem">Starting from</div>
        <div class="price" style="font-size:2rem">${formatPrice(pkg.price)} <span style="font-size:0.875rem;font-weight:400;color:var(--text-muted)">/ person</span></div>
        
        <div style="margin:1.5rem 0;padding:1rem 0;border-top:1px solid var(--border);border-bottom:1px solid var(--border)">
          <div class="flex items-center justify-between mb-2">
            <span class="text-sm text-muted flex items-center gap-2">${icons.clock} Duration</span>
            <span class="font-semibold">${pkg.days} Days / ${pkg.nights} Nights</span>
          </div>
          <div class="flex items-center justify-between mb-2">
            <span class="text-sm text-muted flex items-center gap-2">${icons.users} Group Size</span>
            <span class="font-semibold">${pkg.groupSize.min} - ${pkg.groupSize.max} people</span>
          </div>
        </div>

        <button class="btn btn-amber" style="width:100%;justify-content:center;margin-bottom:1rem" onclick="showToast('Booking flow coming soon!', 'info')">
          Book Now
        </button>
        <button class="btn btn-secondary" style="width:100%;justify-content:center;margin-bottom:1.5rem" onclick="toggleWishlist('${pkg.id}')">
          ${icons.heart} Save to Wishlist
        </button>

        <div class="trust-row">${icons.shield} Free cancellation up to 15 days</div>
        <div class="trust-row">${icons.star} Verified reviews only</div>
        <div class="trust-row">${icons.compass} Expert local guides</div>
      </div>

      <div class="sidebar-card">
        <h3 class="font-semibold mb-4">Upcoming Departures</h3>
        <div class="flex-col gap-2">
          ${pkg.departures.map(d => `
            <div class="flex items-center justify-between p-3 border rounded" style="border:1px solid var(--border);border-radius:var(--radius-chip);font-size:0.875rem">
              <div>
                <div class="font-semibold">${new Date(d.date).toLocaleDateString('en-IN', {day:'numeric',month:'short',year:'numeric'})}</div>
                <div class="text-xs ${d.status === 'filling' ? 'text-terracotta' : 'text-lagoon'}">${d.spotsLeft} spots left</div>
              </div>
              <div class="font-semibold text-lagoon">${formatPrice(d.price)}</div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }
});
