import * as DataModule from './blog.data.js';

const BLOG_POSTS = DataModule.BLOG_POSTS 
  || (DataModule.blogData && DataModule.blogData.posts) 
  || (DataModule.BLOG_DATA && DataModule.BLOG_DATA.posts)
  || [];

let activeTagFilter = 'all';
let activePostId = null;
let activePostTabId = null;

export function render(container) {
  if (activePostId) {
    renderSinglePost(container, activePostId);
  } else {
    renderBlogList(container);
  }
}

function renderBlogList(container) {
  const allTags = new Set();
  BLOG_POSTS.forEach(p => (p.tags || []).forEach(t => allTags.add(t)));

  const tagsNavHtml = `
    <div class="tag-filter-bar">
      <button class="tag-pill ${activeTagFilter === 'all' ? 'active' : ''}" data-tag="all">#all</button>
      ${Array.from(allTags).map(t => `
        <button class="tag-pill ${activeTagFilter === t ? 'active' : ''}" data-tag="${t}">#${t}</button>
      `).join('')}
    </div>
  `;

  const filteredPosts = activeTagFilter === 'all' 
    ? BLOG_POSTS 
    : BLOG_POSTS.filter(p => p.tags && p.tags.includes(activeTagFilter));

  const postsGridHtml = filteredPosts.map(post => `
    <div class="blog-card" data-post-id="${post.id}">
      <div class="blog-header">
        <h2>${post.title}</h2>
        <span class="blog-date">${post.date}</span>
      </div>
      <p class="blog-summary">${post.summary}</p>
      <div class="blog-tags">
        ${(post.tags || []).map(t => `<span class="post-tag">#${t}</span>`).join('')}
      </div>
      <div class="blog-footer">
        <span class="read-more">Read post →</span>
      </div>
    </div>
  `).join('');

  container.innerHTML = `
    <section class="page-section">
      <h1>blog</h1>
      <p class="tagline">puzzle breakdowns and code experiments</p>
      ${tagsNavHtml}
      <div class="blog-list">
        ${postsGridHtml || '<div class="no-posts">No posts found for this tag.</div>'}
      </div>
    </section>
  `;

  // Attach Tag Filters
  container.querySelectorAll('.tag-pill').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      activeTagFilter = btn.getAttribute('data-tag');
      render(container);
    });
  });

  // Attach Blog Card clicks
  container.querySelectorAll('.blog-card').forEach(card => {
    card.addEventListener('click', () => {
      activePostId = card.getAttribute('data-post-id');
      activePostTabId = null;
      render(container);
    });
  });
}

function buildPuzzleGridHtml(puzzles) {
  if (!puzzles || puzzles.length === 0) return '';

  // Sort so solved puzzles come first, and unsolved puzzles are pushed to the end
  const sortedPuzzles = [...puzzles].sort((a, b) => {
    const aUnsolved = (a.status || '').includes('unsolved');
    const bUnsolved = (b.status || '').includes('unsolved');
    if (aUnsolved === bUnsolved) return 0;
    return aUnsolved ? 1 : -1;
  });

  return `
    <div class="puzzle-index-container">
      <div class="puzzle-grid">
        ${sortedPuzzles.map(puzzle => `
          <div class="puzzle-grid-card ${puzzle.status || ''}" data-puzzle-id="${puzzle.id}">
            <div class="puzzle-card-header">
              <span class="puzzle-index">${puzzle.index || ''}</span>
              <span class="puzzle-diff" style="color: ${puzzle.difficulty_color || '#fff'};">${puzzle.difficulty || ''}</span>
            </div>
            <div class="puzzle-card-body">
              <div class="puzzle-card-img-wrap">
                ${puzzle.image ? `<img src="${puzzle.image}" alt="${puzzle.title}">` : ''}
              </div>
              <h4>${puzzle.title}</h4>
              ${puzzle.subtitle ? `<span class="puzzle-sub">${puzzle.subtitle}</span>` : ''}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderSinglePost(container, postId) {
  const post = BLOG_POSTS.find(p => p.id === postId);
  if (!post) {
    activePostId = null;
    activePostTabId = null;
    render(container);
    return;
  }

  const tabsArray = post.tabs || post.postTabs || [];
  const tabPagesArray = post.tabpages || post.postTabs || [];

  if (tabsArray.length > 0 && !activePostTabId) {
    activePostTabId = tabsArray[0].id || tabsArray[0].tabid;
  }

  let tabsBarHTML = '';
  let mainPostBody = post.body || '';
  let tabPostBody = '';

  // Insert puzzle grid at <puzzle-index></puzzle-index> in main post body
  if (post.puzzles && post.puzzles.length > 0) {
    const gridHtml = buildPuzzleGridHtml(post.puzzles);
    if (mainPostBody.includes('<puzzle-index></puzzle-index>')) {
      mainPostBody = mainPostBody.replace('<puzzle-index></puzzle-index>', gridHtml);
    } else {
      mainPostBody += gridHtml;
    }
  }

  if (tabsArray.length > 0) {
    tabsBarHTML = `
      <div class="post-tabs-bar">
        ${tabsArray.map(t => {
          const tId = t.id || t.tabid;
          const tLabel = t.name || t.label || t.tabid;
          return `
            <button class="post-inner-tab ${tId === activePostTabId ? 'active' : ''}" data-tab-id="${tId}">
              ${tLabel}
            </button>
          `;
        }).join('')}
      </div>
    `;

    const activePage = tabPagesArray.find(tp => (tp.tabid || tp.id) === activePostTabId);
    if (activePage) {
      let pageBody = activePage.body || '';
      const pagePuzzles = activePage.puzzles || [];
      
      // Insert puzzle grid at <puzzle-index></puzzle-index> in tab page body
      if (pagePuzzles.length > 0) {
        const gridHtml = buildPuzzleGridHtml(pagePuzzles);
        if (pageBody.includes('<puzzle-index></puzzle-index>')) {
          pageBody = pageBody.replace('<puzzle-index></puzzle-index>', gridHtml);
        } else {
          pageBody += gridHtml;
        }
      }
      tabPostBody = pageBody;
    }
  }

  container.innerHTML = `
    <article class="single-post">
      <button class="back-btn" id="back-to-blog-btn">← Back to Blog</button>

      <header class="single-post-header">
        <h1>${post.title}</h1>
        <div class="single-post-meta">
          <span>${post.date}</span> • 
          <span class="blog-tags inline">
            ${(post.tags || []).map(t => `<span class="post-tag">#${t}</span>`).join('')}
          </span>
        </div>
      </header>

      <hr class="divider">

      <div class="single-post-body top-body">
        ${mainPostBody}
      </div>

      ${tabsBarHTML}

      ${tabPostBody ? `<div class="single-post-body tab-body">${tabPostBody}</div>` : ''}
    </article>
  `;

  // Back Button Event
  const backBtn = container.querySelector('#back-to-blog-btn');
  if (backBtn) {
    backBtn.addEventListener('click', () => {
      activePostId = null;
      activePostTabId = null;
      render(container);
    });
  }

  // Tab Switching Events
  container.querySelectorAll('.post-inner-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      activePostTabId = btn.getAttribute('data-tab-id');
      renderSinglePost(container, postId);
    });
  });

  // Puzzle Grid Card Click -> Open corresponding puzzle-card in body (using attribute selector for numeric IDs)
  container.querySelectorAll('.puzzle-grid-card').forEach(gridCard => {
    gridCard.addEventListener('click', () => {
      const puzzleId = gridCard.getAttribute('data-puzzle-id');
      if (!puzzleId) return;

      const targetCard = container.querySelector(`[id="${puzzleId}"]`);
      if (targetCard) {
        const isOpen = targetCard.classList.contains('open');
        container.querySelectorAll('puzzle-card').forEach(el => el.classList.remove('open'));
        if (!isOpen) {
          targetCard.classList.add('open');
          targetCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      }
    });
  });
}