export function render(container) {
  container.innerHTML = `
    <section class="page-section">
      <h1>welcome</h1>
      <p class="tagline">math lover, puzzle solver, programmer and duck enthusiast!</p>
      
      <div class="hero-card">
        <h3>hi</h3>
        <p>welcome to my personal site on the web. explore my links or check out my blog posts for puzzle breakdowns and code experiments!</p>
      </div>

      <h3 style="margin-top: 1.5rem; margin-bottom: 0.75rem;">check out my best friend's matching site!</h3>
      <div class="links-grid">
        <a href="https://nippythedev.github.io/" target="_blank" rel="noopener noreferrer" class="link-card">
          <h3>sister site ↗</h3>
          <p>matching sites with my best friend - check out their cool space on the web!</p>
        </a>
      </div>
    </section>
  `;
}