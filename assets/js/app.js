// Current App State
let currentTab = 'home';

// Function to handle switching tabs and updating the view
function switchTab(newTabId) {
  currentTab = newTabId;
  
  // Render tabs in top right navigation
  renderTabs(TABS_DATA, currentTab, switchTab);
  
  // Render active page content inside glass container
  renderPage(currentTab);
}

// Boot the application once DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  switchTab(currentTab);
});