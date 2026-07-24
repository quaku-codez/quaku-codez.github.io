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
      { name: 'Youtube', url: '#', desc: 'soon :3' },
      { name: 'Roblox Profile', url: 'https://www.roblox.com/users/1897123635/profile', desc: 'filler' }
    ]
  }
};

const BLOG_POSTS = [
  {
    id: 'find-the-burgers',
    title: 'Find the Burgers // All Burgers Explained',
    date: 'July 24, 2026',
    summary: 'Work in Progress!',
    tags: ['puzzle', 'wip'],
    
    body: `
      <p>Welcome to my guide to Find The Burgers!</p>
      <p>In this post, I will explain all the burgers and how to find them in the game. This is a work in progress, so stay tuned for more updates!</p>
      <p>I have never seen YouTube videos explaining the burgers, and the wiki does not explain it very well, so as a solver of this game, I will explain them for you!</p>
    `,

    tabs: [
      { id: 'burgers', name: 'Burgers' },
      { id: 'realms', name: 'Realms' },
      { id: 'hidden-burgers', name: 'Hidden Burgers' }
    ],

    tabpages: [
      {
        tabid: 'burgers',
        body: `
          <p>Here are all the standard burgers!</p>

          <puzzle-index></puzzle-index>

          <puzzle-card id="10k-visits-burger" class="solved">
            <h3>10K Visits Burger</h3>
            <p>puzzle.....</p>
            <solution-box>
              <strong>Solution:</strong> Be tuff
            </solution-box>
          </puzzle-card>

          <puzzle-card id="apple-burger" class="solved">
            <h3>Apple Burger</h3>
            <p>Look around the tree area.</p>
            <solution-box>
              <strong>Solution:</strong> Climb the tree.
            </solution-box>
          </puzzle-card>

          <puzzle-card id="basic-burger" class="solved">
            <h3>Basic Burger</h3>
            <p>Spawns right at the start.</p>
            <solution-box>
              <strong>Solution:</strong> Walk straight ahead.
            </solution-box>
          </puzzle-card>
        `,
        puzzles: [
          {
            id: '10k-visits-burger',
            index: '',
            difficulty: 'Easy',
            difficulty_color: '#55ff7f',
            image: 'assets/images/blog-assets/findtheburgers/10k-visits-burger.png',
            title: '10K Visits Burger',
            subtitle: '',
            status: 'solved'
          },
          {
            id: '1m-visits-burger',
            index: '',
            difficulty: 'Easy',
            difficulty_color: '#55ff7f',
            image: 'assets/images/blog-assets/findtheburgers/1m-visits-burger.png',
            title: '1M Visits Burger',
            subtitle: '',
            status: 'solved'
          },
          {
            id: 'apple-burger',
            index: '',
            difficulty: 'Easy',
            difficulty_color: '#55ff7f',
            image: 'assets/images/blog-assets/findtheburgers/apple-burger.png',
            title: 'Apple Burger',
            subtitle: '',
            status: 'solved'
          },
          {
            id: 'basic-burger',
            index: '',
            difficulty: 'Easy',
            difficulty_color: '#55ff7f',
            image: 'assets/images/blog-assets/findtheburgers/basic-burger.png',
            title: 'Basic Burger',
            subtitle: '',
            status: 'solved'
          },
          {
            id: 'bitten-burger',
            index: '',
            difficulty: 'Easy',
            difficulty_color: '#55ff7f',
            image: 'assets/images/blog-assets/findtheburgers/bitten-burger.png',
            title: 'Bitten Burger',
            subtitle: '',
            status: 'solved'
          },
          
          {
            id: 'bee-burger',
            index: '',
            difficulty: 'Easy',
            difficulty_color: '#55ff7f',
            image: 'assets/images/blog-assets/findtheburgers/bee-burger.png',
            title: 'Bee Burger',
            subtitle: '',
            status: 'solved'
          },
          {
            id: 'beach-ball-burger',
            index: '',
            difficulty: 'Easy',
            difficulty_color: '#55ff7f',
            image: 'assets/images/blog-assets/findtheburgers/beach-ball-burger.png',
            title: 'Beach Ball Burger',
            subtitle: '',
            status: 'solved'
          },
          {
            id: 'burger-phone',
            index: '',
            difficulty: 'Easy',
            difficulty_color: '#55ff7f',
            image: 'assets/images/blog-assets/findtheburgers/burger-phone.png',
            title: 'Burger Phone',
            subtitle: '',
            status: 'solved'
          },
          {
            id: 'burger-bush',
            index: '',
            difficulty: 'Easy',
            difficulty_color: '#55ff7f',
            image: 'assets/images/blog-assets/findtheburgers/burger-bush.png',
            title: 'Burger Bush',
            subtitle: '',
            status: 'solved'
          },
          {
            id: 'cat-burger',
            index: '',
            difficulty: 'Easy',
            difficulty_color: '#55ff7f',
            image: 'assets/images/blog-assets/findtheburgers/cat-burger.png',
            title: 'Cat Burger',
            subtitle: '',
            status: 'solved'
          },
          {
            id: 'cake-burger',
            index: '',
            difficulty: 'Easy',
            difficulty_color: '#55ff7f',
            image: 'assets/images/blog-assets/findtheburgers/cake-burger.png',
            title: 'Cake Burger',
            subtitle: '',
            status: 'solved'
          },
          {
            id: 'cool-burger',
            index: '',
            difficulty: 'Easy',
            difficulty_color: '#55ff7f',
            image: 'assets/images/blog-assets/findtheburgers/cool-burger.png',
            title: 'Cool Burger',
            subtitle: '',
            status: 'solved'
          },
          {
            id: 'cave-exploring-burger',
            index: '',
            difficulty: 'Easy',
            difficulty_color: '#55ff7f',
            image: 'assets/images/blog-assets/findtheburgers/cave-exploring-burger.png',
            title: 'Cave Exploring Burger',
            subtitle: '',
            status: 'solved'
          },
          {
            id: 'clam-burger',
            index: '',
            difficulty: 'Easy',
            difficulty_color: '#55ff7f',
            image: 'assets/images/blog-assets/findtheburgers/clam-burger.png',
            title: 'Clam Burger',
            subtitle: '',
            status: 'solved'
          },
          {
            id: 'cozy-burger',
            index: '',
            difficulty: 'Easy',
            difficulty_color: '#55ff7f',
            image: 'assets/images/blog-assets/findtheburgers/cozy-burger.png',
            title: 'Cozy Burger',
            subtitle: '',
            status: 'solved'
          },
          {
            id: 'dj-burger',
            index: '',
            difficulty: 'Easy',
            difficulty_color: '#55ff7f',
            image: 'assets/images/blog-assets/findtheburgers/dj-burger.png',
            title: 'DJ Burger',
            subtitle: '',
            status: 'solved'
          },
          {
            id: 'farmer-burger',
            index: '',
            difficulty: 'Easy',
            difficulty_color: '#55ff7f',
            image: 'assets/images/blog-assets/findtheburgers/farmer-burger.png',
            title: 'Farmer Burger',
            subtitle: '',
            status: 'solved'
          },
          {
            id: 'group-burger',
            index: '',
            difficulty: 'Easy',
            difficulty_color: '#55ff7f',
            image: 'assets/images/blog-assets/findtheburgers/group-burger.png',
            title: 'Group Burger',
            subtitle: '',
            status: 'solved'
          },
          {
            id: 'lilypad-burger',
            index: '',
            difficulty: 'Easy',
            difficulty_color: '#55ff7f',
            image: 'assets/images/blog-assets/findtheburgers/lilypad-burger.png',
            title: 'Lilypad Burger',
            subtitle: '',
            status: 'solved'
          },
          {
            id: 'spicy-burger',
            index: '',
            difficulty: 'Easy',
            difficulty_color: '#55ff7f',
            image: 'assets/images/blog-assets/findtheburgers/spicy-burger.png',
            title: 'Spicy Burger',
            subtitle: '',
            status: 'solved'
          },
          {
            id: 'scared-burger',
            index: '',
            difficulty: 'Easy',
            difficulty_color: '#55ff7f',
            image: 'assets/images/blog-assets/findtheburgers/scared-burger.png',
            title: 'Scared Burger',
            subtitle: '',
            status: 'solved'
          },
          {
            id: 'tropical-burger',
            index: '',
            difficulty: 'Easy',
            difficulty_color: '#55ff7f',
            image: 'assets/images/blog-assets/findtheburgers/tropical-burger.png',
            title: 'Tropical Burger',
            subtitle: '',
            status: 'solved'
          },
          {
            id: 'traffic-cone-burger',
            index: '',
            difficulty: 'Easy',
            difficulty_color: '#55ff7f',
            image: 'assets/images/blog-assets/findtheburgers/traffic-cone-burger.png',
            title: 'Traffic Cone Burger',
            subtitle: '',
            status: 'solved'
          },
          {
            id: 'wheat-burger',
            index: '',
            difficulty: 'Easy',
            difficulty_color: '#55ff7f',
            image: 'assets/images/blog-assets/findtheburgers/wheat-burger.png',
            title: 'Wheat Burger',
            subtitle: '',
            status: 'solved'
          },
          {
            id: 'brainstormed-burger',
            index: '',
            difficulty: 'Medium',
            difficulty_color: '#ffff00',
            image: 'assets/images/blog-assets/findtheburgers/brainstormed-burger.png',
            title: 'Brainstormed Burger',
            subtitle: '',
            status: 'solved'
          },
          {
            id: 'chezburger',
            index: '',
            difficulty: 'Medium',
            difficulty_color: '#ffff00',
            image: 'assets/images/blog-assets/findtheburgers/chezburger.png',
            title: 'Chezburger',
            subtitle: '',
            status: 'solved'
          },
          {
            id: 'chef-burger',
            index: '',
            difficulty: 'Medium',
            difficulty_color: '#ffff00',
            image: 'assets/images/blog-assets/findtheburgers/chef-burger.png',
            title: 'Chef Burger',
            subtitle: '',
            status: 'solved'
          },
          {
            id: 'coconut-burger',
            index: '',
            difficulty: 'Medium',
            difficulty_color: '#ffff00',
            image: 'assets/images/blog-assets/findtheburgers/coconut-burger.png',
            title: 'Coconut Burger',
            subtitle: '',
            status: 'solved'
          },
          {
            id: 'campfire-burger',
            index: '',
            difficulty: 'Medium',
            difficulty_color: '#ffff00',
            image: 'assets/images/blog-assets/findtheburgers/campfire-burger.png',
            title: 'Campfire Burger',
            subtitle: '',
            status: 'solved'
          },
          {
            id: 'inverted-burger',
            index: '',
            difficulty: 'Medium',
            difficulty_color: '#ffff00',
            image: 'assets/images/blog-assets/findtheburgers/inverted-burger.png',
            title: 'Inverted Burger',
            subtitle: '',
            status: 'solved'
          },
          {
            id: 'kiddie-burger',
            index: '',
            difficulty: 'Medium',
            difficulty_color: '#ffff00',
            image: 'assets/images/blog-assets/findtheburgers/kiddie-burger.png',
            title: 'Kiddie Burger',
            subtitle: '',
            status: 'solved'
          },
          {
            id: 'low-quality-burger',
            index: '',
            difficulty: 'Medium',
            difficulty_color: '#ffff00',
            image: 'assets/images/blog-assets/findtheburgers/low-quality-burger.png',
            title: 'Low Quality Burger',
            subtitle: '',
            status: 'solved'
          },
          {
            id: 'light-sand-burger',
            index: '',
            difficulty: 'Medium',
            difficulty_color: '#ffff00',
            image: 'assets/images/blog-assets/findtheburgers/light-sand-burger.png',
            title: 'Light Sand Burger',
            subtitle: '',
            status: 'solved'
          },
          {
            id: 'lava-burger',
            index: '',
            difficulty: 'Medium',
            difficulty_color: '#ffff00',
            image: 'assets/images/blog-assets/findtheburgers/lava-burger.png',
            title: 'Lava Burger',
            subtitle: '',
            status: 'solved'
          },
          {
            id: 'lotus-burger',
            index: '',
            difficulty: 'Medium',
            difficulty_color: '#ffff00',
            image: 'assets/images/blog-assets/findtheburgers/lotus-burger.png',
            title: 'Lotus Burger',
            subtitle: '',
            status: 'solved'
          },
          {
            id: 'lantern-burger',
            index: '',
            difficulty: 'Medium',
            difficulty_color: '#ffff00',
            image: 'assets/images/blog-assets/findtheburgers/lantern-burger.png',
            title: 'Lantern Burger',
            subtitle: '',
            status: 'solved'
          },
          {
            id: 'miner-burger',
            index: '',
            difficulty: 'Medium',
            difficulty_color: '#ffff00',
            image: 'assets/images/blog-assets/findtheburgers/miner-burger.png',
            title: 'Miner Burger',
            subtitle: '',
            status: 'solved'
          },
          {
            id: 'orange-burger',
            index: '',
            difficulty: 'Medium',
            difficulty_color: '#ffff00',
            image: 'assets/images/blog-assets/findtheburgers/orange-burger.png',
            title: 'Orange Burger',
            subtitle: '',
            status: 'solved'
          },
          {
            id: 'popsicle-burger',
            index: '',
            difficulty: 'Medium',
            difficulty_color: '#ffff00',
            image: 'assets/images/blog-assets/findtheburgers/popsicle-burger.png',
            title: 'Popsicle Burger',
            subtitle: '',
            status: 'solved'
          },
          {
            id: 'painting-burger',
            index: '',
            difficulty: 'Medium',
            difficulty_color: '#ffff00',
            image: 'assets/images/blog-assets/findtheburgers/painting-burger.png',
            title: 'Painting Burger',
            subtitle: '',
            status: 'solved'
          },
          {
            id: 'reversed-burger',
            index: '',
            difficulty: 'Medium',
            difficulty_color: '#ffff00',
            image: 'assets/images/blog-assets/findtheburgers/reversed-burger.png',
            title: 'Reversed Burger',
            subtitle: '',
            status: 'solved'
          },
          {
            id: 'statue-burger',
            index: '',
            difficulty: 'Medium',
            difficulty_color: '#ffff00',
            image: 'assets/images/blog-assets/findtheburgers/statue-burger.png',
            title: 'Statue Burger',
            subtitle: '',
            status: 'solved'
          },
          {
            id: '3d-burger',
            index: '',
            difficulty: 'Hard',
            difficulty_color: '#ff5500',
            image: 'assets/images/blog-assets/findtheburgers/3d-burger.png',
            title: '3D Burger',
            subtitle: '',
            status: 'solved'
          },
          {
            id: 'beach-burger',
            index: '',
            difficulty: 'Hard',
            difficulty_color: '#ff5500',
            image: 'assets/images/blog-assets/findtheburgers/beach-burger.png',
            title: 'Beach Burger',
            subtitle: '',
            status: 'solved'
          },
          {
            id: 'caramel-apple-burger',
            index: '',
            difficulty: 'Hard',
            difficulty_color: '#ff5500',
            image: 'assets/images/blog-assets/findtheburgers/caramel-apple-burger.png',
            title: 'Caramel Apple Burger',
            subtitle: '',
            status: 'solved'
          },
          {
            id: 'crab-burger',
            index: '',
            difficulty: 'Hard',
            difficulty_color: '#ff5500',
            image: 'assets/images/blog-assets/findtheburgers/crab-burger.png',
            title: 'Crab Burger',
            subtitle: '',
            status: 'solved'
          },
          {
            id: 'crystal-burger',
            index: '',
            difficulty: 'Hard',
            difficulty_color: '#ff5500',
            image: 'assets/images/blog-assets/findtheburgers/crystal-burger.png',
            title: 'Crystal Burger',
            subtitle: '',
            status: 'solved'
          },
          {
            id: 'frostbite-burger',
            index: '',
            difficulty: 'Hard',
            difficulty_color: '#ff5500',
            image: 'assets/images/blog-assets/findtheburgers/frostbite-burger.png',
            title: 'Frostbite Burger',
            subtitle: '',
            status: 'solved'
          },
          {
            id: 'obsidian-burger',
            index: '',
            difficulty: 'Hard',
            difficulty_color: '#ff5500',
            image: 'assets/images/blog-assets/findtheburgers/obsidian-burger.png',
            title: 'Obsidian Burger',
            subtitle: '',
            status: 'solved'
          },
          {
            id: 'rat-burger',
            index: '',
            difficulty: 'Hard',
            difficulty_color: '#ff5500',
            image: 'assets/images/blog-assets/findtheburgers/rat-burger.png',
            title: 'Rat Burger',
            subtitle: '',
            status: 'solved'
          },
          {
            id: 'rose-burger',
            index: '',
            difficulty: 'Hard',
            difficulty_color: '#ff5500',
            image: 'assets/images/blog-assets/findtheburgers/rose-burger.png',
            title: 'Rose Burger',
            subtitle: '',
            status: 'solved'
          },
          {
            id: 'small-burger',
            index: '',
            difficulty: 'Hard',
            difficulty_color: '#ff5500',
            image: 'assets/images/blog-assets/findtheburgers/small-burger.png',
            title: 'Small Burger',
            subtitle: '',
            status: 'solved'
          },
          {
            id: 'template-burger',
            index: '',
            difficulty: 'Hard',
            difficulty_color: '#ff5500',
            image: 'assets/images/blog-assets/findtheburgers/template-burger.png',
            title: 'Template Burger',
            subtitle: '',
            status: 'solved'
          },
          {
            id: 'teamwork-burger',
            index: '',
            difficulty: 'Hard',
            difficulty_color: '#ff5500',
            image: 'assets/images/blog-assets/findtheburgers/teamwork-burger.png',
            title: 'Teamwork Burger',
            subtitle: '',
            status: 'solved'
          },
          {
            id: 'aesthetic-burger',
            index: '',
            difficulty: 'Severe',
            difficulty_color: '#ff0000',
            image: 'assets/images/blog-assets/findtheburgers/aesthetic-burger.png',
            title: 'Aesthetic Burger',
            subtitle: '',
            status: 'solved'
          },
          {
            id: 'bat-burger',
            index: '',
            difficulty: 'Severe',
            difficulty_color: '#ff0000',
            image: 'assets/images/blog-assets/findtheburgers/bat-burger.png',
            title: 'Bat Burger',
            subtitle: '',
            status: 'solved'
          },
          {
            id: 'corny-burger',
            index: '',
            difficulty: 'Severe',
            difficulty_color: '#ff0000',
            image: 'assets/images/blog-assets/findtheburgers/corny-burger.png',
            title: 'Corny Burger',
            subtitle: '',
            status: 'solved'
          },
          {
            id: 'crafter-burger',
            index: '',
            difficulty: 'Severe',
            difficulty_color: '#ff0000',
            image: 'assets/images/blog-assets/findtheburgers/crafter-burger.png',
            title: 'Crafter Burger',
            subtitle: '',
            status: 'solved'
          },
          {
            id: 'chillin-burger',
            index: '',
            difficulty: 'Severe',
            difficulty_color: '#ff0000',
            image: 'assets/images/blog-assets/findtheburgers/chillin-burger.png',
            title: 'Chillin Burger',
            subtitle: '',
            status: 'solved'
          },
          {
            id: 'drip-burger',
            index: '',
            difficulty: 'Severe',
            difficulty_color: '#ff0000',
            image: 'assets/images/blog-assets/findtheburgers/drip-burger.png',
            title: 'Drip Burger',
            subtitle: '',
            status: 'solved'
          },
          {
            id: 'ruby-burger',
            index: '',
            difficulty: 'Severe',
            difficulty_color: '#ff0000',
            image: 'assets/images/blog-assets/findtheburgers/ruby-burger.png',
            title: 'Ruby Burger',
            subtitle: '',
            status: 'solved'
          },
          {
            id: 'spawn-burger',
            index: '',
            difficulty: 'Severe',
            difficulty_color: '#ff0000',
            image: 'assets/images/blog-assets/findtheburgers/spawn-burger.png',
            title: 'Spawn Burger',
            subtitle: '',
            status: 'solved'
          },
          {
            id: 'troll-burger',
            index: '',
            difficulty: 'Severe',
            difficulty_color: '#ff0000',
            image: 'assets/images/blog-assets/findtheburgers/troll-burger.png',
            title: 'Troll Burger',
            subtitle: '',
            status: 'solved'
          },
          {
            id: 'ultra-party-burger',
            index: '',
            difficulty: 'Severe',
            difficulty_color: '#ff0000',
            image: 'assets/images/blog-assets/findtheburgers/ultra-party-burger.png',
            title: 'Ultra Party Burger',
            subtitle: '',
            status: 'solved'
          },
          {
            id: 'astral-plane-burger',
            index: '',
            difficulty: 'Intense',
            difficulty_color: '#000000',
            image: 'assets/images/blog-assets/findtheburgers/astral-plane-burger.png',
            title: 'Astral Plane Burger',
            subtitle: '',
            status: 'solved'
          },
          {
            id: 'bomb-burger',
            index: '',
            difficulty: 'Intense',
            difficulty_color: '#000000',
            image: 'assets/images/blog-assets/findtheburgers/bomb-burger.png',
            title: 'Bomb Burger',
            subtitle: '',
            status: 'solved'
          },
          {
            id: 'frozen-burger',
            index: '',
            difficulty: 'Intense',
            difficulty_color: '#000000',
            image: 'assets/images/blog-assets/findtheburgers/frozen-burger.png',
            title: 'Frozen Burger',
            subtitle: '',
            status: 'solved'
          },
          {
            id: 'glitch-burger',
            index: '',
            difficulty: 'Intense',
            difficulty_color: '#000000',
            image: 'assets/images/blog-assets/findtheburgers/glitch-burger.png',
            title: 'Glitch Burger',
            subtitle: '',
            status: 'solved'
          },
          {
            id: 'gubby-burger',
            index: '',
            difficulty: 'Intense',
            difficulty_color: '#000000',
            image: 'assets/images/blog-assets/findtheburgers/gubby-burger.png',
            title: 'Gubby Burger',
            subtitle: '',
            status: 'solved'
          },
          {
            id: 'hyperwave-burger',
            index: '',
            difficulty: 'Intense',
            difficulty_color: '#000000',
            image: 'assets/images/blog-assets/findtheburgers/hyperwave-burger.png',
            title: 'Hyperwave Burger',
            subtitle: '',
            status: 'solved'
          },
          {
            id: 'kitchen-burger',
            index: '',
            difficulty: 'Intense',
            difficulty_color: '#000000',
            image: 'assets/images/blog-assets/findtheburgers/kitchen-burger.png',
            title: 'Kitchen Burger',
            subtitle: '',
            status: 'solved'
          },
          {
            id: 'lunar-burger',
            index: '',
            difficulty: 'Intense',
            difficulty_color: '#000000',
            image: 'assets/images/blog-assets/findtheburgers/lunar-burger.png',
            title: 'Lunar Burger',
            subtitle: '',
            status: 'solved'
          },
          {
            id: 'lost-burger',
            index: '',
            difficulty: 'Intense',
            difficulty_color: '#000000',
            image: 'assets/images/blog-assets/findtheburgers/lost-burger.png',
            title: 'Lost Burger',
            subtitle: '',
            status: 'solved'
          },
          {
            id: 'noob-burger',
            index: '',
            difficulty: 'Intense',
            difficulty_color: '#000000',
            image: 'assets/images/blog-assets/findtheburgers/noob-burger.png',
            title: 'Noob Burger',
            subtitle: '',
            status: 'solved'
          },
          {
            id: 'pineapple-burger',
            index: '',
            difficulty: 'Intense',
            difficulty_color: '#000000',
            image: 'assets/images/blog-assets/findtheburgers/pineapple-burger.png',
            title: 'Pineapple Burger',
            subtitle: '',
            status: 'solved'
          },
          {
            id: 'raincoat-burger',
            index: '',
            difficulty: 'Intense',
            difficulty_color: '#000000',
            image: 'assets/images/blog-assets/findtheburgers/raincoat-burger.png',
            title: 'Raincoat Burger',
            subtitle: '',
            status: 'solved'
          },
          {
            id: 'water-burger',
            index: '',
            difficulty: 'Intense',
            difficulty_color: '#000000',
            image: 'assets/images/blog-assets/findtheburgers/water-burger.png',
            title: 'Water Burger',
            subtitle: '',
            status: 'solved'
          },
          {
            id: 'angel-burger',
            index: '',
            difficulty: 'Insane',
            difficulty_color: '#0000ff',
            image: 'assets/images/blog-assets/findtheburgers/angel-burger.png',
            title: 'Angel Burger',
            subtitle: '',
            status: 'solved'
          },
          {
            id: 'caution-burger',
            index: '',
            difficulty: 'Insane',
            difficulty_color: '#0000ff',
            image: 'assets/images/blog-assets/findtheburgers/caution-burger.png',
            title: 'Caution Burger',
            subtitle: '',
            status: 'solved'
          },
          {
            id: 'cardboard-burger',
            index: '',
            difficulty: 'Insane',
            difficulty_color: '#0000ff',
            image: 'assets/images/blog-assets/findtheburgers/cardboard-burger.png',
            title: 'Cardboard Burger',
            subtitle: '',
            status: 'solved'
          },
          {
            id: 'error-burger',
            index: '',
            difficulty: 'Insane',
            difficulty_color: '#0000ff',
            image: 'assets/images/blog-assets/findtheburgers/error-burger.png',
            title: 'Error Burger',
            subtitle: '',
            status: 'solved'
          },
          {
            id: 'forgotten-poolrooms-burger',
            index: '',
            difficulty: 'Insane',
            difficulty_color: '#0000ff',
            image: 'assets/images/blog-assets/findtheburgers/forgotten-poolrooms-burger.png',
            title: 'Forgotten Poolrooms Burger',
            subtitle: '',
            status: 'solved'
          },
          {
            id: 'gold-burger',
            index: '',
            difficulty: 'Insane',
            difficulty_color: '#0000ff',
            image: 'assets/images/blog-assets/findtheburgers/gold-burger.png',
            title: 'Gold Burger',
            subtitle: '',
            status: 'solved'
          },
          {
            id: 'poolrooms-burger',
            index: '',
            difficulty: 'Insane',
            difficulty_color: '#0000ff',
            image: 'assets/images/blog-assets/findtheburgers/poolrooms-burger.png',
            title: 'Poolrooms Burger',
            subtitle: '',
            status: 'solved'
          },
          {
            id: 'retrostatue-burger',
            index: '',
            difficulty: 'Insane',
            difficulty_color: '#0000ff',
            image: 'assets/images/blog-assets/findtheburgers/retrostatue-burger.png',
            title: 'RetroStatue Burger',
            subtitle: '',
            status: 'solved'
          },
          {
            id: 'skater-burger',
            index: '',
            difficulty: 'Insane',
            difficulty_color: '#0000ff',
            image: 'assets/images/blog-assets/findtheburgers/skater-burger.png',
            title: 'Skater Burger',
            subtitle: '',
            status: 'solved'
          },
          {
            id: 'i-wanna-be-the-burger',
            index: '',
            difficulty: 'Extreme',
            difficulty_color: '#00aaff',
            image: 'assets/images/blog-assets/findtheburgers/i-wanna-be-the-burger.png',
            title: 'I Wanna Be The Burger',
            subtitle: '',
            status: 'solved'
          },
          {
            id: 'retrowave-burger',
            index: '',
            difficulty: 'Extreme',
            difficulty_color: '#00aaff',
            image: 'assets/images/blog-assets/findtheburgers/retrowave-burger.png',
            title: 'Retrowave Burger',
            subtitle: '',
            status: 'solved'
          },
          {
            id: 'studio-burger',
            index: '',
            difficulty: 'Extreme',
            difficulty_color: '#00aaff',
            image: 'assets/images/blog-assets/findtheburgers/studio-burger.png',
            title: 'Studio Burger',
            subtitle: '',
            status: 'solved'
          },
          {
            id: 'secret-burger',
            index: '',
            difficulty: 'Extreme',
            difficulty_color: '#00aaff',
            image: 'assets/images/blog-assets/findtheburgers/secret-burger.png',
            title: 'Secret Burger',
            subtitle: '',
            status: 'solved'
          },
          {
            id: 'troll-burger-retrolled-burger',
            index: '',
            difficulty: 'Extreme',
            difficulty_color: '#00aaff',
            image: 'assets/images/blog-assets/findtheburgers/troll-burger-retrolled.png',
            title: 'Troll Burger: Retrolled',
            subtitle: '',
            status: 'solved'
          },
          {
            id: 'blissful-utopia-burger',
            index: '',
            difficulty: 'Horrifying',
            difficulty_color: '#00ffff',
            image: 'assets/images/blog-assets/findtheburgers/blissful-utopia-burger.png',
            title: 'Blissful Utopia Burger',
            subtitle: '',
            status: 'solved'
          },
          {
            id: 'cosmic-entity-burger',
            index: '',
            difficulty: 'Horrifying',
            difficulty_color: '#00ffff',
            image: 'assets/images/blog-assets/findtheburgers/cosmic-entity-burger.png',
            title: 'Cosmic Entity Burger',
            subtitle: '',
            status: 'solved'
          },
          {
            id: 'dark-matter-burger',
            index: '',
            difficulty: 'Horrifying',
            difficulty_color: '#00ffff',
            image: 'assets/images/blog-assets/findtheburgers/dark-matter-burger.png',
            title: 'Dark Matter Burger',
            subtitle: '',
            status: 'solved'
          },
          {
            id: 'prismatic-burger',
            index: '',
            difficulty: 'Horrifying',
            difficulty_color: '#00ffff',
            image: 'assets/images/blog-assets/findtheburgers/prismatic-burger.png',
            title: 'Prismatic Burger',
            subtitle: '',
            status: 'solved'
          },
          {
            id: 'runic-burger',
            index: '',
            difficulty: 'Horrifying',
            difficulty_color: '#00ffff',
            image: 'assets/images/blog-assets/findtheburgers/runic-burger.png',
            title: 'Runic Burger',
            subtitle: '',
            status: 'solved'
          },
          {
            id: 'backrooms-burger',
            index: '',
            difficulty: 'Horrifying',
            difficulty_color: '#ffffff',
            image: 'assets/images/blog-assets/findtheburgers/backrooms-burger.png',
            title: 'Backrooms Burger',
            subtitle: '',
            status: 'solved'
          },
          {
            id: 'virus-burger',
            index: '',
            difficulty: 'Horrifying',
            difficulty_color: '#ffffff',
            image: 'assets/images/blog-assets/findtheburgers/virus-burger.png',
            title: 'Virus Burger',
            subtitle: '',
            status: 'solved'
          },
        ]
      },
      {
        tabid: 'realms',
        body: `<p>Realms breakdown coming soon!</p>`,
        puzzles: []
      },
      {
        tabid: 'hidden-burgers',
        body: `<p>Hidden Burgers breakdown coming soon!</p>`,
        puzzles: []
      }
    ]
  },
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