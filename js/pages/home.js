// ===== WANDERLY HOME PAGE LOGIC (index.html) =====

document.addEventListener('DOMContentLoaded', () => {
  // Initialize common layout (navbar, footer, theme, mobile bar)
  initPage('home');

  // Display welcome banner if user is logged in
  const authUser = getAuthUser();
  const welcomeBadge = document.getElementById('hero-welcome-badge');
  const heroUserName = document.getElementById('hero-user-name');
  if (authUser && welcomeBadge && heroUserName) {
    welcomeBadge.style.display = 'inline-flex';
    heroUserName.textContent = authUser.name.split(' ')[0];
  }

  // ===== DYNAMIC HERO SCENE & VIBE SWITCHER =====
  const S = [
    {
      h: ["Sleep under", "the Thar sky."],
      sky: "#F6C58B",
      sun: ["#FFF3D0", 860, 170],
      tag: "Desert trip",
      n: "Jaisalmer dune safari",
      d: "2 days",
      p: "₹6,999",
      r: "⭐ 4.6",
      slug: "jaisalmer-desert-safari"
    },
    {
      h: ["Walk into", "the snow line."],
      sky: "#BFD9E6",
      sun: ["#FFFFFF", 300, 140],
      tag: "Trekking",
      n: "Kedarkantha winter trek",
      d: "5 days",
      p: "₹8,999",
      r: "⭐ 4.9",
      slug: "kedarkantha-winter-trek"
    },
    {
      h: ["Dive where the", "map turns blue."],
      sky: "#9ADBE0",
      sun: ["#FFE9A8", 640, 170],
      tag: "Water adventure",
      n: "Andaman scuba diving",
      d: "4 days",
      p: "₹14,999",
      r: "⭐ 4.8",
      slug: "andaman-scuba-experience"
    }
  ];

  const hero = document.getElementById('hero');
  const h1 = document.getElementById('h1');
  const vibeChips = [...document.querySelectorAll('.vibe-chip')];
  const scs = [...document.querySelectorAll('.sc')];
  const sun = document.getElementById('sun');

  function showVibe(i, first) {
    if (!S[i] || !hero || !h1 || !sun) return;
    const s = S[i];
    const go = () => {
      h1.querySelectorAll('i').forEach((el, k) => {
        if (s.h[k]) el.textContent = s.h[k];
      });
      h1.classList.remove('out');
      hero.style.setProperty('--sky', s.sky);
      sun.setAttribute('fill', s.sun[0]);
      sun.style.transform = `translate(${s.sun[1]}px, ${s.sun[2]}px)`;
      scs.forEach((g, k) => g.classList.toggle('on', k === i));
      vibeChips.forEach((c, k) => c.setAttribute('aria-pressed', k === i));

      const tagEl = document.getElementById('t-tag');
      const nameEl = document.getElementById('t-name');
      const daysEl = document.getElementById('t-days');
      const priceEl = document.getElementById('t-price');
      const rateEl = document.getElementById('t-rate');
      const linkEl = document.getElementById('t-link');

      if (tagEl) tagEl.textContent = s.tag;
      if (nameEl) nameEl.textContent = s.n;
      if (daysEl) daysEl.textContent = s.d;
      if (priceEl) priceEl.textContent = s.p;
      if (rateEl) rateEl.textContent = s.r;
      if (linkEl) linkEl.href = `package-detail.html?slug=${s.slug}`;
    };

    if (first) {
      go();
    } else {
      h1.classList.add('out');
      setTimeout(go, 220);
    }
  }

  let curVibe = 0;
  vibeChips.forEach((c, i) => {
    c.onclick = () => {
      curVibe = i;
      showVibe(i);
    };
  });

  if (hero && h1) {
    showVibe(0, true);

    // Auto rotate vibe every 7 seconds when idle
    setInterval(() => {
      if (!document.hidden && !matchMedia('(prefers-reduced-motion:reduce)').matches && !hero.matches(':hover') && !document.activeElement.closest('.hero-concept')) {
        curVibe = (curVibe + 1) % 3;
        showVibe(curVibe);
      }
    }, 7000);
  }

  // ===== 5-STOP JOURNEY ANIMATION (INTERSECTION OBSERVER) =====
  const pathSection = document.getElementById('path');
  if (pathSection) {
    new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.25 }).observe(pathSection);
  }

  // ===== INTERACTIVE TRIP BUILDER WIDGET =====
  const extras = [
    ["Sunrise camel ride across virgin dunes", 1200],
    ["Swiss luxury private tent upgrade", 2400],
    ["Expedition group photographer", 1800],
    ["Heritage fort storyteller & guide", 900]
  ];
  const BASE_PRICE = 6999;
  let selectedExtras = new Set();
  let numTravellers = 2;
  let shownTotal = 0;

  const optsContainer = document.getElementById('opts');
  if (optsContainer) {
    optsContainer.innerHTML = extras.map((x, i) => `
      <button type="button" class="builder-opt" aria-pressed="false" data-i="${i}">
        <span class="tick">✓</span>
        <span>${x[0]}</span>
        <em>+₹${x[1].toLocaleString('en-IN')}</em>
      </button>
    `).join('');

    const fmtPrice = v => '₹' + Math.round(v).toLocaleString('en-IN');

    function updateBill() {
      const perPerson = BASE_PRICE + [...selectedExtras].reduce((sum, i) => sum + extras[i][1], 0);
      const grandTotal = perPerson * numTravellers;
      const fromVal = shownTotal;
      const startTime = performance.now();

      // Smooth odometer rolling animation
      (function animateTotal(now) {
        const progress = Math.min(1, (now - startTime) / 450);
        const ease = 1 - Math.pow(1 - progress, 3);
        const totalEl = document.getElementById('total');
        if (totalEl) totalEl.textContent = fmtPrice(fromVal + (grandTotal - fromVal) * ease);
        if (progress < 1) {
          requestAnimationFrame(animateTotal);
        } else {
          shownTotal = grandTotal;
        }
      })(startTime);

      const eachEl = document.getElementById('each');
      const travEl = document.getElementById('trav');
      if (eachEl) eachEl.textContent = `${fmtPrice(perPerson)} per traveller • ${numTravellers} ${numTravellers > 1 ? 'travellers' : 'traveller'} • all taxes included`;
      if (travEl) travEl.textContent = `${numTravellers} ${numTravellers > 1 ? 'travellers' : 'traveller'}`;

      // Toggle timeline day entries
      document.querySelectorAll('.bill-day.x').forEach(d => {
        d.classList.toggle('show', selectedExtras.has(+d.dataset.i));
      });
    }

    optsContainer.onclick = e => {
      const btn = e.target.closest('.builder-opt');
      if (!btn) return;
      const idx = +btn.dataset.i;
      if (selectedExtras.has(idx)) {
        selectedExtras.delete(idx);
      } else {
        selectedExtras.add(idx);
      }
      btn.setAttribute('aria-pressed', selectedExtras.has(idx));
      updateBill();
    };

    const minusBtn = document.getElementById('minus');
    const plusBtn = document.getElementById('plus');
    if (minusBtn) {
      minusBtn.onclick = () => {
        numTravellers = Math.max(1, numTravellers - 1);
        updateBill();
      };
    }
    if (plusBtn) {
      plusBtn.onclick = () => {
        numTravellers = Math.min(8, numTravellers + 1);
        updateBill();
      };
    }

    updateBill();
  }

  // ===== RENDER TRENDING DESTINATIONS =====
  const trendingDestContainer = document.getElementById('trending-destinations');
  if (trendingDestContainer && typeof destinations !== 'undefined') {
    const topDestinations = destinations.slice(0, 4);
    trendingDestContainer.innerHTML = topDestinations.map(renderDestinationCard).join('');
  }

  // ===== RENDER TRAVEL STORIES TEASER =====
  const storiesTeaserContainer = document.getElementById('stories-teaser-grid');
  if (storiesTeaserContainer && typeof blogPosts !== 'undefined') {
    storiesTeaserContainer.innerHTML = blogPosts.slice(0, 3).map(post => `
      <div class="card" style="display:flex;flex-direction:column">
        <div style="height:140px;background:color-mix(in srgb, var(--teal) 15%, var(--card));display:flex;align-items:center;justify-content:center;position:relative">
          <span style="font-size:2.4rem">📖</span>
          <span style="position:absolute;top:12px;left:12px;background:var(--card);padding:3px 10px;border-radius:999px;font-size:0.75rem;font-weight:700;color:var(--teal)">${post.category}</span>
        </div>
        <div style="padding:1.25rem;flex:1;display:flex;flex-direction:column">
          <div style="font-size:0.75rem;color:var(--mute);margin-bottom:6px">${post.date} • by ${post.author}</div>
          <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 8px;line-height:1.25">${post.title}</h3>
          <p style="font-size:0.875rem;color:var(--mute);line-height:1.55;flex:1;margin-bottom:14px">${post.excerpt}</p>
          <a href="post.html?slug=${post.slug}" style="color:var(--teal);font-weight:700;font-size:0.875rem;display:inline-flex;align-items:center;gap:4px">Read dispatch →</a>
        </div>
      </div>
    `).join('');
  }
});
