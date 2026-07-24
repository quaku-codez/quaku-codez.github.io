let currentTab = 'home';

function switchTab(newTabId) {
  currentTab = newTabId;
  
  renderTabs(TABS_DATA, currentTab, switchTab);
  renderPage(currentTab);
}

document.addEventListener('DOMContentLoaded', () => {
  switchTab(currentTab);
});
