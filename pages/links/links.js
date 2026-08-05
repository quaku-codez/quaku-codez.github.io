export function render(container) {
  container.innerHTML = `
    <section class="page-section">
      <h1>links</h1>
      <p class="tagline">find me around the web</p>
      <div class="links-grid">
        <a href="https://github.com/quaku-codez" target="_blank" rel="noopener noreferrer" class="link-card">
          <h3>GitHub ↗</h3>
          <p>my repositories and projects</p>
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" class="link-card">
          <h3>Youtube ↗</h3>
          <p>soon :3</p>
        </a>
        <a href="https://www.roblox.com/users/1897123" target="_blank" rel="noopener noreferrer" class="link-card">
          <h3>Roblox Profile ↗</h3>
          <p>my roblox profile</p>
        </a>
      </div>
    </section>
  `;
}