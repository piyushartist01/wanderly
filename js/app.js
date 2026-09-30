// ===== WANDERLY APP.JS — Shared Components & Logic =====

// ===== SVG ICONS (inline, no library needed) =====
const icons = {
  search: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>',
  heart: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>',
  heartFill: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>',
  moon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>',
  sun: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>',
  star: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
  starEmpty: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
  clock: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
  users: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  mapPin: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',
  arrowRight: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>',
  check: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>',
  x: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>',
  shield: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>',
  chevronRight: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>',
  menu: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>',
  home: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
  compass: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>',
  sparkles: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>',
  calendar: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg>',
  user: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/></svg>',
  mountain: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m8 3 4 8 5-5 5 15H2L8 3z"/></svg>',
  waves: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/></svg>',
  bike: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18.5" cy="17.5" r="3.5"/><circle cx="5.5" cy="17.5" r="3.5"/><circle cx="15" cy="5" r="1"/><path d="M12 17.5V14l-3-3 4-3 2 3h2"/></svg>',
  treePine: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m17 14 3 3.3a1 1 0 0 1-.7 1.7H4.7a1 1 0 0 1-.7-1.7L7 14l-3-3.3a1 1 0 0 1 .7-1.7h4.6L7 6.3a1 1 0 0 1 .7-1.7h8.6a1 1 0 0 1 .7 1.7L15 9h4.6a1 1 0 0 1 .7 1.7L17 14z"/><path d="M12 22v-3"/></svg>',
  tent: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3.5 21 14 3"/><path d="M20.5 21 10 3"/><path d="M15.5 21 12 15l-3.5 6"/><path d="M2 21h20"/></svg>',
  send: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>',
  phone: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
  mail: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>',
  globe: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>',
  trash: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>',
  plus: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>',
};

// ===== THEME MANAGEMENT =====
function initTheme() {
  const saved = localStorage.getItem('wanderly-theme');
  if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
}

function toggleTheme() {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  document.documentElement.setAttribute('data-theme', isDark ? 'light' : 'dark');
  localStorage.setItem('wanderly-theme', isDark ? 'light' : 'dark');
  updateThemeIcon();
}

function updateThemeIcon() {
  const btn = document.getElementById('theme-toggle');
  if (!btn) return;
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  btn.innerHTML = isDark ? icons.sun : icons.moon;
}

// ===== WISHLIST =====
function getWishlist() {
  return JSON.parse(localStorage.getItem('wanderly-wishlist') || '[]');
}
function toggleWishlist(id) {
  let list = getWishlist();
  if (list.includes(id)) { list = list.filter(i => i !== id); showToast('Removed from wishlist', 'info'); }
  else { list.push(id); showToast('Added to wishlist ♥', 'success'); }
  localStorage.setItem('wanderly-wishlist', JSON.stringify(list));
  return list.includes(id);
}
function isWishlisted(id) { return getWishlist().includes(id); }

// ===== TOAST NOTIFICATIONS =====
function showToast(message, type = 'info') {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.textContent = message;
  container.appendChild(toast);
  setTimeout(() => { toast.style.animation = 'slideOut 0.3s var(--ease) forwards'; setTimeout(() => toast.remove(), 300); }, 3000);
}

// ===== DESTINATION ART SVG GENERATOR =====
function generateArt(palette, width = 400, height = 200) {
  const { sky, mountains, ground, accent, sun, timeOfDay } = palette;
  const skyGradId = 'sky-' + Math.random().toString(36).substr(2, 6);
  const sunY = timeOfDay === 'sunset' ? 45 : timeOfDay === 'dawn' ? 55 : 30;
  const sunX = timeOfDay === 'sunset' ? 75 : 50;
  const sunR = timeOfDay === 'sunset' ? 28 : 22;

  return `<svg viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
    <defs><linearGradient id="${skyGradId}" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${sky[0]}"/><stop offset="50%" stop-color="${sky[1]}"/><stop offset="100%" stop-color="${sky[2]}"/>
    </linearGradient></defs>
    <rect width="${width}" height="${height}" fill="url(#${skyGradId})"/>
    <circle cx="${width * sunX / 100}" cy="${height * sunY / 100}" r="${sunR}" fill="${sun}" opacity="0.85"/>
    <path d="M0,${height * 0.55} Q${width * 0.15},${height * 0.3} ${width * 0.3},${height * 0.45} T${width * 0.55},${height * 0.35} T${width * 0.8},${height * 0.5} T${width},${height * 0.4} V${height} H0Z" fill="${mountains[0]}" opacity="0.7"/>
    <path d="M0,${height * 0.65} Q${width * 0.2},${height * 0.5} ${width * 0.4},${height * 0.6} T${width * 0.7},${height * 0.5} T${width},${height * 0.6} V${height} H0Z" fill="${mountains[1]}" opacity="0.8"/>
    <path d="M0,${height * 0.78} Q${width * 0.25},${height * 0.68} ${width * 0.5},${height * 0.75} T${width},${height * 0.72} V${height} H0Z" fill="${mountains[2]}" opacity="0.9"/>
    <rect y="${height * 0.85}" width="${width}" height="${height * 0.15}" fill="${ground}"/>
    ${generateTrees(width, height, accent, palette.type)}
    <path d="M${width * 0.2},${height * 0.25} Q${width * 0.35},${height * 0.18} ${width * 0.5},${height * 0.22} T${width * 0.8},${height * 0.2}" fill="none" stroke="${sun}" stroke-width="1" stroke-dasharray="4 6" opacity="0.3"/>
  </svg>`;
}

function generateTrees(w, h, color, type) {
  if (type === 'desert') return `<circle cx="${w*0.15}" cy="${h*0.82}" r="3" fill="${color}" opacity="0.5"/><circle cx="${w*0.85}" cy="${h*0.80}" r="2.5" fill="${color}" opacity="0.4"/>`;
  if (type === 'beach') return `<path d="M${w*0.1},${h*0.7} Q${w*0.1},${h*0.55} ${w*0.15},${h*0.52} Q${w*0.12},${h*0.55} ${w*0.1},${h*0.7}" fill="#3a7a4a" opacity="0.6"/><path d="M${w*0.9},${h*0.72} Q${w*0.9},${h*0.58} ${w*0.85},${h*0.55} Q${w*0.88},${h*0.58} ${w*0.9},${h*0.72}" fill="#3a7a4a" opacity="0.5"/>`;
  let trees = '';
  const positions = [0.12, 0.25, 0.45, 0.65, 0.78, 0.9];
  positions.forEach((px, i) => {
    const ty = h * (0.78 + Math.random() * 0.06);
    const size = 6 + Math.random() * 4;
    trees += `<path d="M${w * px},${ty} l${size / 2},-${size * 1.5} l${size / 2},${size * 1.5}Z" fill="${color}" opacity="${0.3 + Math.random() * 0.3}"/>`;
  });
  return trees;
}

// ===== USER AUTHENTICATION STATE =====
function getAuthUser() {
  try {
    const raw = localStorage.getItem('wanderly_user');
    return raw ? JSON.parse(raw) : null;
  } catch (e) {
    return null;
  }
}

function setAuthUser(user) {
  localStorage.setItem('wanderly_user', JSON.stringify(user));
}

function logoutUser() {
  localStorage.removeItem('wanderly_user');
  showToast('Logged out of Wanderly', 'info');
  setTimeout(() => {
    window.location.href = 'login.html';
  }, 400);
}

// ===== RENDER NAVBAR =====
function renderNavbar(activePage) {
  const links = [
    { href: 'index.html', label: 'Home', id: 'home' },
    { href: 'explore.html', label: 'Explore', id: 'explore' },
    { href: 'packages.html', label: 'Packages', id: 'packages' },
    { href: 'trip-builder.html', label: 'Trip Builder', id: 'trip-builder' },
    { href: 'blog.html', label: 'Stories', id: 'blog' },
    { href: 'about.html', label: 'About', id: 'about' },
    { href: 'contact.html', label: 'Contact', id: 'contact' },
  ];

  const currentUser = getAuthUser();

  const nav = document.createElement('nav');
  nav.className = 'navbar';
  nav.id = 'navbar';
  nav.innerHTML = `
    <div class="navbar-inner">
      <a href="index.html" class="navbar-brand">
        <svg viewBox="0 0 32 32" width="28" height="28"><circle cx="16" cy="16" r="15" fill="#0E7C86"/><path d="M16 6 L20 14 L28 14 L22 19 L24 27 L16 22 L8 27 L10 19 L4 14 L12 14 Z" fill="#F4B41A" stroke="#FFFFFF" stroke-width="0.5"/></svg>
        <span>Wanderly</span>
      </a>
      <ul class="navbar-links" id="nav-links">
        ${links.map(l => `<li><a href="${l.href}" class="${activePage === l.id ? 'active' : ''}">${l.label}</a></li>`).join('')}
      </ul>
      <div class="navbar-actions">
        <button id="theme-toggle" onclick="toggleTheme()" aria-label="Toggle theme">${icons.moon}</button>
        ${currentUser ? `
          <a href="account.html" class="user-chip" title="Account (${currentUser.name})" style="display:inline-flex;align-items:center;gap:8px;text-decoration:none;padding:5px 14px;border-radius:999px;background:color-mix(in srgb, var(--teal) 12%, var(--card));border:1.5px solid var(--line);font-size:0.875rem;font-weight:700;color:var(--ink);transition:all 0.2s">
            <span style="width:24px;height:24px;border-radius:50%;background:var(--teal);color:#fff;display:grid;place-items:center;font-size:0.75rem">${currentUser.avatar || 'JD'}</span>
            <span style="max-width:80px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${currentUser.name.split(' ')[0]}</span>
          </a>
        ` : `
          <a href="login.html" class="btn btn-sm btn-primary" style="border-radius:999px;padding:8px 20px;font-weight:700;background:var(--ink);color:var(--bg)">Log in</a>
        `}
        <button class="mobile-menu-btn" onclick="document.getElementById('nav-links').classList.toggle('open')" aria-label="Menu">${icons.menu}</button>
      </div>
    </div>
  `;
  document.body.prepend(nav);

  // Auto-hide on scroll
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const current = window.scrollY;
    if (current > 80 && current > lastScroll) nav.classList.add('hidden');
    else nav.classList.remove('hidden');
    lastScroll = current;
  });

  updateThemeIcon();
}

// ===== RENDER FOOTER =====
function renderFooter() {
  const footer = document.createElement('footer');
  footer.className = 'footer';
  footer.innerHTML = `
    <div class="container">
      <div class="footer-grid">
        <div>
          <a href="index.html" class="navbar-brand" style="color:#fff;margin-bottom:1rem;display:inline-flex">
            <svg viewBox="0 0 32 32" width="24" height="24"><circle cx="16" cy="16" r="15" fill="#1F7A8C"/><path d="M16 6 L20 14 L28 14 L22 19 L24 27 L16 22 L8 27 L10 19 L4 14 L12 14 Z" fill="#F2A03D"/></svg>
            Wanderly
          </a>
          <p style="font-size:0.875rem;line-height:1.7;margin-bottom:1rem">Discover, plan and book your next adventure. From Himalayan summits to tropical shores.</p>
          <p class="text-hand" style="color:var(--amber);font-size:1.125rem">"Good Vibes, Bigger Adventures"</p>
          <div class="footer-social">
            <a href="#" aria-label="Social 1">${icons.globe}</a>
            <a href="#" aria-label="Social 2">${icons.compass}</a>
            <a href="#" aria-label="Social 3">${icons.mail}</a>
          </div>
        </div>
        <div>
          <h3>Explore</h3>
          <ul style="list-style:none;display:flex;flex-direction:column;gap:0.5rem">
            <li><a href="explore.html">All Destinations</a></li>
            <li><a href="packages.html">Packages</a></li>
            <li><a href="trip-builder.html">Trip Builder</a></li>
            <li><a href="blog.html">Travel Journal</a></li>
          </ul>
        </div>
        <div>
          <h3>Company</h3>
          <ul style="list-style:none;display:flex;flex-direction:column;gap:0.5rem">
            <li><a href="about.html">About Us</a></li>
            <li><a href="contact.html">Contact</a></li>
            <li><a href="support.html">Help Centre</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Press</a></li>
          </ul>
        </div>
        <div>
          <h3>Contact</h3>
          <ul style="list-style:none;display:flex;flex-direction:column;gap:0.5rem">
            <li style="display:flex;align-items:center;gap:0.5rem"><span style="width:16px;height:16px">${icons.phone}</span> +91 1234 567 890</li>
            <li style="display:flex;align-items:center;gap:0.5rem"><span style="width:16px;height:16px">${icons.mail}</span> hello@wanderly.in</li>
            <li style="display:flex;align-items:center;gap:0.5rem"><span style="width:16px;height:16px">${icons.mapPin}</span> Bangalore, India</li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© 2026 Wanderly. All rights reserved.</p>
        <div style="display:flex;gap:1.5rem">
          <a href="#">Privacy</a><a href="#">Terms</a><a href="#">Cookies</a>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(footer);
}

// ===== RENDER MOBILE TAB BAR =====
function renderMobileTabBar(activePage) {
  const tabs = [
    { href: 'index.html', label: 'Home', icon: icons.home, id: 'home' },
    { href: 'explore.html', label: 'Explore', icon: icons.search, id: 'explore' },
    { href: 'trip-builder.html', label: 'Plan', icon: icons.compass, id: 'trip-builder' },
    { href: 'account.html', label: 'Account', icon: icons.user, id: 'account' },
  ];
  const bar = document.createElement('div');
  bar.className = 'mobile-tabbar';
  bar.innerHTML = `<div class="mobile-tabbar-inner">${tabs.map(t => `<a href="${t.href}" class="${activePage === t.id ? 'active' : ''}">${t.icon}<span>${t.label}</span></a>`).join('')}</div>`;
  document.body.appendChild(bar);
}

// ===== RENDER STAR RATING =====
function renderStars(rating, size = 12) {
  let html = '';
  for (let i = 1; i <= 5; i++) {
    html += `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="${i <= rating ? 'var(--amber)' : 'none'}" stroke="${i <= rating ? 'var(--amber)' : '#ccc'}" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`;
  }
  return html;
}

// ===== RENDER PACKAGE CARD =====
function renderPackageCard(pkg) {
  const dest = getDestinationById(pkg.destinationId);
  const wishlisted = isWishlisted(pkg.id);
  return `
    <div class="card" id="card-${pkg.id}">
      <div class="card-img" style="position:relative">
        <div class="art-container">${dest ? generateArt(dest.artPalette) : ''}</div>
        <div style="position:absolute;top:12px;left:12px;display:flex;gap:6px">
          <span class="card-tag">${pkg.category}</span>
          ${pkg.bestSeller ? '<span class="card-tag best-seller">⭐ Best Seller</span>' : ''}
        </div>
        <button class="wishlist-btn ${wishlisted ? 'active' : ''}" onclick="event.preventDefault();event.stopPropagation();toggleWishlist('${pkg.id}');this.classList.toggle('active')" style="position:absolute;top:12px;right:12px" aria-label="Toggle wishlist">
          ${wishlisted ? icons.heartFill : icons.heart}
        </button>
        ${pkg.freeCancellation ? `<div class="badge-free-cancel" style="position:absolute;bottom:12px;left:12px">${icons.shield} Free Cancellation</div>` : ''}
      </div>
      <a href="package-detail.html?slug=${pkg.slug}" class="card-body" style="text-decoration:none;color:inherit;display:block">
        <div class="flex items-center gap-2 mb-2">
          <div class="rating"><svg width="14" height="14" viewBox="0 0 24 24" fill="var(--amber)" stroke="var(--amber)" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg> ${pkg.rating}</div>
          <span class="text-xs text-muted">(${pkg.reviewCount})</span>
          <span class="badge-difficulty" style="margin-left:auto">${pkg.difficulty}</span>
        </div>
        <h3 style="font-family:var(--font-display);font-size:1.1rem;font-weight:600;margin-bottom:0.25rem">${pkg.title}</h3>
        <p class="text-sm text-muted line-clamp-1 mb-3">${pkg.subtitle}</p>
        <div class="flex items-center justify-between">
          <div class="package-meta">
            <span class="flex items-center gap-1"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>${pkg.days}D/${pkg.nights}N</span>
            <span class="flex items-center gap-1"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>${pkg.groupSize.max}</span>
          </div>
          <div style="text-align:right">
            ${pkg.originalPrice ? `<span class="price-old">${formatPrice(pkg.originalPrice)}</span>` : ''}
            <span class="price">${formatPrice(pkg.price)}</span>
          </div>
        </div>
      </a>
    </div>
  `;
}

// ===== RENDER DESTINATION CARD =====
function renderDestinationCard(dest) {
  const wishlisted = isWishlisted(dest.id);
  return `
    <a href="destination.html?slug=${dest.slug}" class="card" style="text-decoration:none;color:inherit;display:block">
      <div class="card-img" style="position:relative">
        <div class="art-container">${generateArt(dest.artPalette)}</div>
        <button class="wishlist-btn ${wishlisted ? 'active' : ''}" onclick="event.preventDefault();event.stopPropagation();toggleWishlist('${dest.id}');this.classList.toggle('active')" style="position:absolute;top:12px;right:12px" aria-label="Toggle wishlist">
          ${wishlisted ? icons.heartFill : icons.heart}
        </button>
        <span class="card-tag" style="position:absolute;bottom:12px;left:12px">${dest.difficulty}</span>
      </div>
      <div class="card-body">
        <div class="flex items-center gap-2 mb-1">
          <div class="rating"><svg width="14" height="14" viewBox="0 0 24 24" fill="var(--amber)" stroke="var(--amber)" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg> ${dest.rating}</div>
          <span class="text-xs text-muted">(${dest.reviewCount})</span>
        </div>
        <h3 style="font-family:var(--font-display);font-size:1.1rem;font-weight:600">${dest.name}</h3>
        <p class="text-xs text-muted mb-2">${dest.region}, ${dest.country}</p>
        <p class="text-sm text-muted line-clamp-2 mb-3">${dest.tagline}</p>
        <div class="flex items-center justify-between">
          <span class="text-sm font-semibold" style="color:var(--lagoon)">From ${formatPrice(dest.priceFrom)}</span>
          <span class="flex items-center gap-1 text-xs text-muted"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg> ${dest.region}</span>
        </div>
      </div>
    </a>
  `;
}

// ===== INIT SHARED LAYOUT =====
function initPage(activePage) {
  initTheme();
  renderNavbar(activePage);
  renderFooter();
  renderMobileTabBar(activePage);

  // Check for login success query param
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('login_success') === '1') {
    const user = getAuthUser();
    const name = user ? user.name.split(' ')[0] : 'Adventurer';
    setTimeout(() => {
      showToast(`Welcome back, ${name}! Your journey begins here.`, 'success');
    }, 350);
    const cleanUrl = window.location.pathname + window.location.hash;
    window.history.replaceState({}, document.title, cleanUrl);
  }
}
