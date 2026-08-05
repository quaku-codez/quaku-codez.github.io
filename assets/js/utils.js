// assets/js/utils.js

let activeTagFilter = 'all';
let activePostId = null;
let activePostTabId = null;

function clearContainer(element) {
  element.innerHTML = '';
}

function renderTabs(tabsData, activeTabId, onTabClick) {
  const navContainer = document.getElementById('nav-container');
  if (!navContainer) return;  
  
  clearContainer(navContainer);

  tabsData.forEach((tab, index) => {
    const button = document.createElement('button');
    button.className = `nav-tab ${tab.id === activeTabId ? 'active' : ''}`;
    button.textContent = (tab.label || tab.id).toLowerCase();
    
    button.addEventListener('click', () => {
      activePostId = null;
      activePostTabId = null;
      renderTabs(tabsData, tab.id, onTabClick);
      onTabClick(tab.id);
    });
    navContainer.appendChild(button);

    if (index < tabsData.length - 1) {
      const dot = document.createElement('span');
      dot.className = 'nav-dot';
      dot.textContent = '•';
      navContainer.appendChild(dot);
    }
  });
}

function renderPage(tabId) {
  const contentArea = document.getElementById('app-content');
  if (!contentArea) return;  

  contentArea.classList.remove('animate-fade');
  void contentArea.offsetWidth; 
  contentArea.classList.add('animate-fade');

  const page = PAGES_DATA[tabId];

  if (tabId === 'blog') {
    renderBlog(contentArea);
  } else if (page && page.linksList) {
    renderLinksPage(contentArea, page);
  } else if (page) {
    renderStandardPage(contentArea, page);
  } else {
    contentArea.innerHTML = `<p>Page not found.</p>`;
  }
}

function renderStandardPage(container, page) {
  container.innerHTML = `
    <section class="page-section">
      <h1>${page.title}</h1>
      <p class="tagline">${page.tagline}</p>
      <div class="content-body">
        ${page.content}
      </div>
    </section>
  `;
}

function renderLinksPage(container, page) {
  const linksHtml = page.linksList.map(link => `
    <a href="${link.url}" target="_blank" rel="noopener noreferrer" class="link-card">
      <h3>${link.name} ↗</h3>
      <p>${link.desc}</p>
    </a>
  `).join('');

  container.innerHTML = `
    <section class="page-section">
      <h1>${page.title}</h1>
      <p class="tagline">${page.tagline}</p>
      <div class="links-grid">
        ${linksHtml}
      </div>
    </section>
  `;
}

function renderBlog(container) {
  if (activePostId) {
    renderSinglePost(container, activePostId);
  } else {
    renderBlogList(container);
  }
}

function renderBlogList(container) {
  const posts = BLOG_DATA.posts || [];

  const allTags = new Set();
  posts.forEach(p => (p.tags || []).forEach(t => allTags.add(t)));

  const tagsNavHtml = `
    <div class="blog-tags-nav">
      <button class="tag-btn ${activeTagFilter === 'all' ? 'active' : ''}" data-tag="all">#all</button>
      ${Array.from(allTags).map(t => `
        <button class="tag-btn ${activeTagFilter === t ? 'active' : ''}" data-tag="${t}">#${t}</button>
      `).join('')}
    </div>
  `;

  const filteredPosts = activeTagFilter === 'all' 
    ? posts 
    : posts.filter(p => p.tags && p.tags.includes(activeTagFilter));

  const postsGridHtml = filteredPosts.map(post => `
    <div class="blog-card" data-post-id="${post.id}">
      <div class="blog-card-header">
        <h2>${post.title}</h2>
        <span class="blog-date">${post.date}</span>
      </div>
      <p class="blog-summary">${post.summary}</p>
      <div class="blog-tags">
        ${(post.tags || []).map(t => `<span class="post-tag">#${t}</span>`).join('')}
      </div>
    </div>
  `).join('');

  container.innerHTML = `
    <section class="page-section">
      <h1>${BLOG_DATA.title}</h1>
      <p class="tagline">${BLOG_DATA.tagline}</p>
      ${tagsNavHtml}
      <div class="blog-grid">
        ${postsGridHtml || '<p>No posts found for this tag.</p>'}
      </div>
    </section>
  `;

  // Attach Tag Filter Listeners safely
  container.querySelectorAll('.tag-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      activeTagFilter = btn.getAttribute('data-tag');
      renderBlog(container);
    });
  });

  // Attach Blog Post Card Click Listeners
  container.querySelectorAll('.blog-card').forEach(card => {
    card.addEventListener('click', () => {
      activePostId = card.getAttribute('data-post-id');
      activePostTabId = null;
      renderBlog(container);
    });
  });
}

function buildPuzzleGridHtml(puzzles) {
  if (!puzzles || puzzles.length === 0) return '';

  return `
    <div class="puzzle-grid">
      ${puzzles.map(puzzle => `
        <div class="puzzle-item-card ${puzzle.status || ''}" data-puzzle-id="${puzzle.id}">
          ${puzzle.image ? `<img src="${puzzle.image}" alt="${puzzle.title}" class="puzzle-thumb" />` : ''}
          <h4 class="puzzle-title">${puzzle.title}</h4>
          ${puzzle.difficulty ? `
            <span class="difficulty-badge" style="color: ${puzzle.difficulty_color || '#fff'};">
              ${puzzle.difficulty}
            </span>
          ` : ''}
        </div>
      `).join('')}
    </div>
  `;
}

function renderSinglePost(container, postId) {
  const post = BLOG_DATA.posts.find(p => p.id === postId);
  if (!post) {
    activePostId = null;
    activePostTabId = null;
    renderBlog(container);
    return;
  }

  if (post.postTabs && post.postTabs.length > 0 && !activePostTabId) {
    activePostTabId = post.postTabs[0].tabid;
  }

  let tabsBarHTML = '';
  let mainPostBody = post.body || '';
  let tabPostBody = '';

  if (post.postTabs && post.postTabs.length > 0) {
    tabsBarHTML = `
      <div class="post-tabs-bar">
        ${post.postTabs.map(t => `
          <button class="post-tab-btn ${t.tabid === activePostTabId ? 'active' : ''}" data-tab-id="${t.tabid}">
            ${t.label || t.tabid}
          </button>
        `).join('')}
      </div>
    `;

    const activeTabObj = post.postTabs.find(t => t.tabid === activePostTabId);
    if (activeTabObj) {
      const tabBodyText = activeTabObj.body || '';
      const tabPuzzlesHtml = buildPuzzleGridHtml(activeTabObj.puzzles);
      tabPostBody = tabBodyText + tabPuzzlesHtml;
    }
  } else if (post.puzzles && post.puzzles.length > 0) {
    mainPostBody += buildPuzzleGridHtml(post.puzzles);
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

  // Back Button Listener
  const backBtn = container.querySelector('#back-to-blog-btn');
  if (backBtn) {
    backBtn.addEventListener('click', () => {
      activePostId = null;
      activePostTabId = null;
      renderBlog(container);
    });
  }

  // Post Sub-Tab Listeners
  container.querySelectorAll('.post-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      activePostTabId = btn.getAttribute('data-tab-id');
      renderSinglePost(container, postId);
    });
  });

  // Puzzle Card Listeners (both inline puzzle-card tags and generated cards)
  container.querySelectorAll('puzzle-card, .puzzle-item-card').forEach(card => {
    card.addEventListener('click', () => {
      const cardId = card.id || card.getAttribute('data-puzzle-id');
      if (cardId) {
        toggleSolutionCard(container, cardId);
      }
    });
  });
}

function toggleSolutionCard(container, cardId) {
  const targetCard = container.querySelector(`#${cardId}`) || container.querySelector(`[data-puzzle-id="${cardId}"]`);
  if (!targetCard) return;

  const isOpen = targetCard.classList.contains('open');

  container.querySelectorAll('puzzle-card, .puzzle-item-card').forEach(el => el.classList.remove('open'));

  if (!isOpen) {
    targetCard.classList.add('open');
    targetCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}