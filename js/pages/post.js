// ===== WANDERLY SINGLE POST ARTICLE LOGIC (post.html) =====

document.addEventListener('DOMContentLoaded', () => {
  initPage('blog');

  const urlParams = new URLSearchParams(window.location.search);
  const slug = urlParams.get('slug');
  const post = typeof getBlogBySlug === 'function' ? getBlogBySlug(slug) : null;

  if (!post) {
    document.body.innerHTML = '<div class="container" style="padding-top:100px;text-align:center"><h1>Post not found</h1><a href="blog.html" class="btn btn-primary" style="margin-top:1rem">Back to journal</a></div>';
    return;
  }

  document.title = `${post.title} — Wanderly`;
  const formattedDate = new Date(post.date).toLocaleDateString('en-IN', { month: 'long', day: 'numeric', year: 'numeric' });

  const postContainer = document.getElementById('post-container');
  if (postContainer) {
    postContainer.innerHTML = `
      <div class="post-header">
        <div class="post-meta">
          <span style="color:var(--lagoon)">${post.category}</span>
          <span>•</span>
          <span>${formattedDate}</span>
          <span>•</span>
          <span>${post.readTime} min read</span>
        </div>
        <h1 class="text-display-lg mb-6">${post.title}</h1>
        <div style="font-weight:600;color:var(--text)">By ${post.author}</div>
      </div>
      
      <div style="width:100%;height:400px;background:var(--bg-surface);border-radius:var(--radius-card);margin-bottom:4rem;overflow:hidden">
        <svg viewBox="0 0 800 400" preserveAspectRatio="xMidYMid slice" style="width:100%;height:100%">
          <defs><linearGradient id="pg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#1A3A50"/><stop offset="100%" stop-color="#1F7A8C"/></linearGradient></defs>
          <rect width="100%" height="100%" fill="url(#pg)"/>
          <circle cx="200" cy="200" r="150" fill="white" opacity="0.1"/>
          <circle cx="600" cy="100" r="250" fill="white" opacity="0.05"/>
        </svg>
      </div>

      <div class="post-content">
        ${post.content.split('. ').map(sentence => `<p>${sentence}.</p>`).join('')}
        
        <div class="chip-row mt-8" style="padding-top:2rem;border-top:1px solid var(--border)">
          <span style="font-size:0.875rem;font-weight:600;margin-right:1rem;color:var(--text-muted)">Tags:</span>
          ${post.tags.map(t => `<span class="chip">${t}</span>`).join('')}
        </div>
      </div>
    `;
  }
});
