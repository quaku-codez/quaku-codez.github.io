import { TABS_DATA } from './config.js';

let currentTabId = 'home';

async function loadPageModule(tabId) {
  const tab = TABS_DATA.find(t => t.id === tabId) || TABS_DATA[0];
  const contentArea = document.getElementById('app-content');
  if (!contentArea) return;

  contentArea.classList.remove('animate-fade');
  void contentArea.offsetWidth;
  contentArea.classList.add('animate-fade');

  try {
    const pageModule = await import(tab.modulePath);
    if (pageModule && typeof pageModule.render === 'function') {
      pageModule.render(contentArea);
    }
  } catch (error) {
    console.error(`Failed to load module for tab "${tabId}":`, error);
    contentArea.innerHTML = `<p style="color: #ff5555;">Error loading section.</p>`;
  }
}

function renderNavigation() {
  const navContainer = document.getElementById('nav-container');
  if (!navContainer) return;

  navContainer.innerHTML = '';

  TABS_DATA.forEach((tab, index) => {
    const btn = document.createElement('button');
    btn.className = `nav-tab ${tab.id === currentTabId ? 'active' : ''}`;
    btn.textContent = (tab.label || tab.id).toLowerCase();

    btn.addEventListener('click', () => {
      currentTabId = tab.id;
      renderNavigation();
      loadPageModule(currentTabId);
    });

    navContainer.appendChild(btn);

    if (index < TABS_DATA.length - 1) {
      const dot = document.createElement('span');
      dot.className = 'nav-dot';
      dot.textContent = '•';
      navContainer.appendChild(dot);
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderNavigation();
  loadPageModule(currentTabId);
});