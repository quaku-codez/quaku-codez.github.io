const TABS_DATA = [
  { id: 'home', label: 'home' },
  { id: 'links', label: 'links' },
  { id: 'blog', label: 'blog' }
];

const PAGES_DATA = {
  home: {
    title: 'welcome',
    tagline: 'math lover, puzzle solver, programmer and duck enthusiast!',
    content: `
      <div class="hero-card">
        <h3>hi</h3>
        <p>welcome to my personal site on the web. explore my links or check out my blog posts for puzzle breakdowns and code experiments!</p>
      </div>

      <h3 style="margin-top: 1.5rem; margin-bottom: 0.75rem;">check out my labubu friend's matching site!</h3>
      <div class="links-grid">
        <a href="https://nippythedev.github.io/" target="_blank" rel="noopener noreferrer" class="link-card">
          <h3>sister site ↗</h3>
          <p>matching sites with my labubuicious friend - check out their cool space on the web!</p>
        </a>
      </div>
    `
  },
  links: {
    title: 'links',
    tagline: 'find me around the web',
    linksList: [
      { name: 'GitHub', url: 'https://github.com/quaku-codez', desc: 'my repositories and projects' },
      { name: 'Twitter / X', url: '#', desc: 'filler' },
      { name: 'Roblox Profile', url: '#', desc: 'filler' }
    ]
  }
};

const BLOG_POSTS = [
  {
    id: 'test',
    title: 'test post!!',
    date: 'July 24, 2026',
    summary: 'just a test.. definately',
    tags: ['test'],
    puzzles: [
      {
        id: 'puzzle-1',
        index: '#1',
        difficulty: '999',
        title: 'Labubu puzzle',
        subtitle: 'very hard 9',
        status: 'solved'
      }
    ],
    body: `
      <p>Welcome to my test post</p>

      <puzzle-index></puzzle-index>

      <p>cacapoopy</p>

      <puzzle-card id="puzzle-1" class="solved">
        <h3>#1: Labubu puzzle</h3>
        <p>puzzle.....</p>
        <solution-box>
          <strong>Solution:</strong> Be tuff
        </solution-box>
      </puzzle-card>
    `
  }
];

/*

const BLOG_POSTS = [
  {
    id: 'test',
    title: 'test post!!',
    date: 'July 24, 2026',
    summary: 'just a test.. definately',
    tags: ['test'],
    puzzles: [
      {
        id: 'puzzle-1',
        index: '#1',
        difficulty: '999',
        title: 'Labubu puzzle',
        subtitle: 'very hard 9',
        status: 'solved'
      },
      {
        id: 'puzzle-2',
        index: '#2',
        difficulty: '992',
        title: 'Double Jeopardy',
        subtitle: 'Pattern Cipher',
        status: 'solved'
      },
      {
        id: 'puzzle-3',
        index: '#3',
        difficulty: '942',
        title: 'Secret Multiverse',
        subtitle: 'Frequency Alignment',
        status: 'unsolved'
      }
    ],
    body: `
      <p>Introductory notes or thoughts go here...</p>

      <puzzle-index></puzzle-index>

      <p>Text after the index grid grid...</p>

      <puzzle-card id="puzzle-1" class="solved">
        <h3>#1 Labubu puzzle</h3>
        <p>Reflect light beams using angle mechanics to activate energy nodes.</p>
        <p>Make sure you align the mirrors properly before toggling the main power switch.</p>
        <solution-box>
          <strong>Solution:</strong> Position the central pillar at 45° to split the light beam into two distinct receivers simultaneously.
        </solution-box>
      </puzzle-card>

      <puzzle-card id="puzzle-2" class="solved">
        <h3>#2 Double Jeopardy</h3>
        <p>Step on ancient stone tiles in an order hinted at by wall murals.</p>
        <solution-box>
          <strong>Solution:</strong> Follow the natural element cycle depicted in the murals: Fire → Water → Earth → Wind.
        </solution-box>
      </puzzle-card>

      <puzzle-card id="puzzle-3" class="unsolved">
        <h3>#3 Secret Multiverse</h3>
        <p>Decipher the hidden portal sequence across parallel dimensions.</p>
        <solution-box>
          <strong>Status:</strong> Unsolved — Aligning resonance frequencies in progress...
        </solution-box>
      </puzzle-card>
    `
  }
];

*/