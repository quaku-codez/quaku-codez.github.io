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
  
  clearContainer(contentArea);

  if (tabId === 'home') {
    const page = PAGES_DATA.home;
    contentArea.innerHTML = `
      <section class="page-section">
        <h1>${page.title}</h1>
        <p class="tagline">${page.tagline}</p>
        ${page.content}
      </section>
    `;
  } 
  else if (tabId === 'links') {
    const page = PAGES_DATA.links;
    const linksHTML = page.linksList.map(link => `
      <a href="${link.url}" target="_blank" rel="noopener noreferrer" class="link-card">
        <h3>${link.name} ↗</h3>
        <p>${link.desc}</p>
      </a>
    `).join('');

    contentArea.innerHTML = `
      <section class="page-section">
        <h1>${page.title}</h1>
        <p class="tagline">${page.tagline}</p>
        <div class="links-grid">${linksHTML}</div>
      </section>
    `;
  } 
  else if (tabId === 'blog') {
    if (activePostId) {
      renderSinglePost(contentArea, activePostId);
    } else {
      renderBlogPosts(contentArea);
    }
  }
}

function renderBlogPosts(container) {
  const allTags = ['all', ...new Set(BLOG_POSTS.flatMap(post => post.tags || []))];

  const filteredPosts = activeTagFilter === 'all'
    ? BLOG_POSTS
    : BLOG_POSTS.filter(post => post.tags && post.tags.includes(activeTagFilter));

  const tagsFilterHTML = allTags.map(tag => `
    <button class="tag-pill ${tag === activeTagFilter ? 'active' : ''}" onclick="setTagFilter('${tag}')">
      #${tag}
    </button>
  `).join('');

  const postsHTML = filteredPosts.length > 0 ? filteredPosts.map(post => {
    return `
      <article class="blog-card" onclick="openPost('${post.id}')">
        <div class="blog-header">
          <h2>${post.title}</h2>
          <span class="blog-date">${post.date}</span>
        </div>
        <p class="blog-summary">${post.summary}</p>

        <div class="blog-tags">
          ${(post.tags || []).map(t => `<span class="post-tag">#${t}</span>`).join('')}
        </div>

        <div class="blog-footer">
          <span class="read-more">Read full post →</span>
        </div>
      </article>
    `;
  }).join('') : `<p class="no-posts">No posts found for #${activeTagFilter}</p>`;

  container.innerHTML = `
    <section class="page-section">
      <h1>blog</h1>
      <p class="tagline">thoughts, guides, and puzzle breakdowns</p>
      <div class="tag-filter-bar">${tagsFilterHTML}</div>
      <div class="blog-list">${postsHTML}</div>
    </section>
  `;
}

function renderSinglePost(container, postId) {
  const post = BLOG_POSTS.find(p => p.id === postId);
  if (!post) return renderBlogPosts(container);

  let tabsBarHTML = '';
  if (post.tabs && post.tabs.length > 0) {
    if (!activePostTabId) {
      activePostTabId = post.tabs[0].id;
    }

    const tabsButtons = post.tabs.map(tab => `
      <button 
        class="post-inner-tab ${tab.id === activePostTabId ? 'active' : ''}" 
        onclick="switchPostTab('${post.id}', '${tab.id}')">
        ${tab.name}
      </button>
    `).join('');

    tabsBarHTML = `<div class="post-tabs-bar">${tabsButtons}</div>`;
  }

  let currentTabPage = null;
  if (post.tabpages && post.tabpages.length > 0) {
    currentTabPage = post.tabpages.find(tp => tp.tabid === activePostTabId) || post.tabpages[0];
  }

  let mainPostBody = post.body || '';
  let tabPostBody = currentTabPage ? (currentTabPage.body || '') : '';
  const puzzlesList = currentTabPage ? currentTabPage.puzzles : (post.puzzles || []);

  if (puzzlesList && puzzlesList.length > 0) {
    const puzzleCards = puzzlesList.map(p => {
      const isWhiteBg = p.difficulty_color && (
        p.difficulty_color.toLowerCase() === '#ffffff' || 
        p.difficulty_color.toLowerCase() === '#fff' || 
        p.difficulty_color.toLowerCase() === 'white'
      );

      const diffStyle = p.difficulty_color 
        ? `style="background: ${p.difficulty_color}; border-color: ${p.difficulty_color}; color: ${isWhiteBg ? '#000000' : '#ffffff'};"` 
        : '';
      const imageHTML = p.image ? `<div class="puzzle-card-img-wrap"><img src="${p.image}" alt="${p.title}" /></div>` : '';

      return `
        <div class="puzzle-grid-card ${p.status || 'solved'}" onclick="toggleSolution('${p.id}')">
          <div class="puzzle-card-header">
            <span class="puzzle-index">${p.index || ''}</span>
            <span class="puzzle-diff" ${diffStyle}>${p.difficulty || ''}</span>
          </div>
          <div class="puzzle-card-body">
            ${imageHTML}
            <h4>${p.title}</h4>
            <p class="puzzle-sub">${p.subtitle || ''}</p>
          </div>
        </div>
      `;
    }).join('');

    const puzzleIndexHTML = `
      <div class="puzzle-index-container">
        <h3>puzzles documented (${currentTabPage.numdocumented}/${currentTabPage.numpuzzles})</h3>
        <div class="puzzle-grid">${puzzleCards}</div>
      </div>
    `;

    if (tabPostBody.includes('<puzzle-index></puzzle-index>')) {
      tabPostBody = tabPostBody.replace('<puzzle-index></puzzle-index>', puzzleIndexHTML);
    } else if (mainPostBody.includes('<puzzle-index></puzzle-index>')) {
      mainPostBody = mainPostBody.replace('<puzzle-index></puzzle-index>', puzzleIndexHTML);
    }
  }

  container.innerHTML = `
    <article class="single-post-view">
      <button class="back-btn" onclick="closePost()">← Back to posts</button>
      
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
}

function switchPostTab(postId, tabId) {
  activePostTabId = tabId;
  const contentArea = document.getElementById('app-content');
  if (contentArea) {
    renderSinglePost(contentArea, postId);
  }
}

function toggleSolution(id) {
  const card = document.getElementById(id);
  if (!card) return;

  const isOpen = card.classList.contains('open');

  document.querySelectorAll('puzzle-card').forEach(el => el.classList.remove('open'));

  if (!isOpen) {
    card.classList.add('open');
    card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}

function openPost(postId) {
  activePostId = postId;
  activePostTabId = null;
  renderPage('blog');
}

function closePost() {
  activePostId = null;
  activePostTabId = null;
  renderPage('blog');
}

function setTagFilter(tag) {
  activeTagFilter = tag;
  activePostId = null;
  activePostTabId = null;
  renderPage('blog');
}