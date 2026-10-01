// ===== WANDERLY DESTINATION PAGE LOGIC (destination.html) =====

document.addEventListener('DOMContentLoaded', () => {
  initPage('');

  const urlParams = new URLSearchParams(window.location.search);
  const slug = urlParams.get('slug');
  const dest = typeof getDestinationBySlug === 'function' ? getDestinationBySlug(slug) : null;

  if (!dest) {
    document.body.innerHTML = '<div class="container" style="padding-top:100px;text-align:center"><h1>Destination not found</h1><a href="explore.html" class="btn btn-primary" style="margin-top:1rem">Back to explore</a></div>';
    return;
  }

  document.title = `${dest.name} — Wanderly`;

  // Render Hero
  const heroContainer = document.getElementById('hero-container');
  if (heroContainer) {
    heroContainer.innerHTML = `
      <div class="art-container" style="position:absolute;inset:0">${generateArt(dest.artPalette, window.innerWidth, window.innerHeight * 0.40)}</div>
      <div class="hero-content">
        <div class="container" style="padding:0">
          <div style="display:flex;gap:0.5rem;margin-bottom:1rem">
            <span class="card-tag" style="color:var(--text);background:var(--bg)">${dest.difficulty}</span>
            <span class="rating" style="background:rgba(255,255,255,0.2);backdrop-filter:blur(4px);padding:0.2rem 0.6rem;border-radius:var(--radius-pill);color:#fff">${icons.star} ${dest.rating} (${dest.reviewCount})</span>
          </div>
          <h1 class="text-display-xl" style="color:white;margin-bottom:0.5rem">${dest.name}</h1>
          <p style="font-size:1.125rem;color:rgba(255,255,255,0.9);display:flex;align-items:center;gap:0.5rem">${icons.mapPin} ${dest.region}, ${dest.country}</p>
        </div>
      </div>
    `;
  }

  // Render Main Content
  const mainContent = document.getElementById('main-content');
  if (mainContent) {
    mainContent.innerHTML = `
      <div style="margin-bottom:3rem">
        <h2 class="text-hand text-lagoon" style="font-size:1.5rem;margin-bottom:0.5rem">${dest.tagline}</h2>
        <p style="font-size:1.125rem;color:var(--text-muted);line-height:1.7">${dest.description}</p>
        <div class="chip-row mt-4">
          ${dest.activities.map(act => `<span class="chip" style="background:var(--sky);color:var(--lagoon)">${act}</span>`).join('')}
        </div>
      </div>

      <div style="margin-bottom:3rem">
        <h2 class="text-display-sm mb-4 flex items-center gap-2">${icons.sparkles} Highlights</h2>
        <div style="background:var(--bg-surface);border-radius:var(--radius-card);padding:1.5rem;box-shadow:var(--shadow-card)">
          <ul class="inclusion-list included">
            ${dest.highlights.map(h => `<li>${icons.check} ${h}</li>`).join('')}
          </ul>
        </div>
      </div>
      
      <div style="margin-bottom:3rem">
        <h2 class="text-display-sm mb-4 flex items-center gap-2">${icons.calendar} Best Time to Visit</h2>
        <div style="background:var(--bg-surface);border-radius:var(--radius-card);padding:1.5rem;box-shadow:var(--shadow-card)">
           <div class="heatmap">
              ${['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'].map((month, i) => {
                const m = i + 1;
                const isBest = dest.bestMonths.includes(m);
                return `
                  <div class="heatmap-cell" style="background:${isBest ? 'var(--lagoon)' : 'var(--bg)'};color:${isBest ? 'white' : 'var(--text-muted)'};border:${isBest ? 'none' : '1px solid var(--border)'}">
                    ${month.charAt(0)}
                    <span class="month" style="opacity:${isBest ? 0.9 : 0.6}">${month}</span>
                  </div>
                `;
              }).join('')}
           </div>
        </div>
      </div>

      <div style="margin-bottom:3rem">
        <h2 class="text-display-sm mb-4">Popular Packages</h2>
        <div class="grid-2">
          ${getPackagesForDestination(dest.id).map(renderPackageCard).join('')}
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
        <div class="price" style="font-size:2rem">${formatPrice(dest.priceFrom)}</div>
        
        <table style="width:100%;margin:1.5rem 0;font-size:0.875rem">
          <tbody>
            <tr><td style="color:var(--text-muted);padding:0.5rem 0">Difficulty</td><td style="text-align:right;font-weight:500">${dest.difficulty}</td></tr>
            <tr><td style="color:var(--text-muted);padding:0.5rem 0">Best Months</td><td style="text-align:right;font-weight:500">${dest.bestMonths.map(m => ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'][m-1]).slice(0,3).join(', ')}...</td></tr>
            <tr><td style="color:var(--text-muted);padding:0.5rem 0">Rating</td><td style="text-align:right;font-weight:500">${dest.rating} ★ (${dest.reviewCount} reviews)</td></tr>
            <tr><td style="color:var(--text-muted);padding:0.5rem 0;vertical-align:top">Activities</td><td style="text-align:right;font-weight:500">${dest.activities.join(', ')}</td></tr>
          </tbody>
        </table>

        <a href="packages.html" class="btn btn-primary" style="width:100%;justify-content:center;margin-bottom:1rem">
          View Packages ${icons.arrowRight}
        </a>
        <button class="btn btn-secondary" style="width:100%;justify-content:center;margin-bottom:1.5rem" onclick="showToast('Agent will contact you soon.', 'success')">
          Ask a Question
        </button>

        <div class="trust-row">${icons.shield} Free Cancellation Available</div>
        <div class="trust-row">${icons.star} Verified Reviews Only</div>
        <div class="trust-row">${icons.compass} Expert Local Guides</div>
      </div>
    `;
  }
});
