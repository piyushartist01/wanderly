// ===== WANDERLY TRAVEL JOURNAL LOGIC (blog.html) =====

function renderBlogCard(post, index) {
  const colors = [
    ['#1A3A50', '#1F7A8C'],
    ['#2E8B57', '#3CB371'],
    ['#D9694A', '#F2A03D'],
    ['#4A6B7F', '#8a7a6a']
  ][index % 4];

  const art = `<svg viewBox="0 0 400 200" preserveAspectRatio="xMidYMid slice" style="width:100%;height:100%">
    <defs><linearGradient id="g${index}" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="${colors[0]}"/><stop offset="100%" stop-color="${colors[1]}"/></linearGradient></defs>
    <rect width="100%" height="100%" fill="url(#g${index})"/>
    <circle cx="${Math.random()*400}" cy="${Math.random()*200}" r="${Math.random()*100 + 50}" fill="white" opacity="0.1"/>
    <circle cx="${Math.random()*400}" cy="${Math.random()*200}" r="${Math.random()*100 + 50}" fill="white" opacity="0.1"/>
  </svg>`;

  return `
    <a href="post.html?slug=${post.slug}" class="blog-card">
      <div class="blog-card-img">${art}</div>
      <div class="blog-card-body">
        <div class="blog-meta">
          <span>${post.category}</span>
          <span>${post.readTime} min read</span>
        </div>
        <h2 style="font-family:var(--font-display);font-size:1.25rem;font-weight:600;margin-bottom:0.5rem;line-height:1.4">${post.title}</h2>
        <p class="text-muted text-sm line-clamp-2" style="margin-bottom:1rem;flex:1">${post.excerpt}</p>
        <div style="font-size:0.875rem;font-weight:500">${post.author}</div>
      </div>
    </a>
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  initPage('blog');
  const blogGrid = document.getElementById('blog-grid');
  if (blogGrid && typeof blogPosts !== 'undefined') {
    blogGrid.innerHTML = blogPosts.map(renderBlogCard).join('');
  }
});
