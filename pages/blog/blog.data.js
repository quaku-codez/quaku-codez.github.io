// pages/blog/blog.data.js

export const blogData = {
  title: 'blog',
  tagline: 'puzzles, writeups & random thoughts',
  posts: [
    {
      id: 'find-the-burgers',
      title: 'Find the Burgers // All Burgers Explained',
      date: 'July 24, 2026',
      summary: 'Work in Progress!',
      tags: ['puzzle', 'wip'],
      body: `
        <p>Welcome to my guide to Find The Burgers!</p>
        <p>In this post, I will explain all the burgers and how to find them in the game. This is a work in progress, so stay tuned for more updates!</p>
        <p>I have never seen YouTube videos explaining the burgers, and the wiki does not explain it very well, so as a solver of this game, I will try to explain them completely for you!</p>
        <p></p>
        <p><b>NOTE!!!:</b> yeah this is VERY wip, so im focusing on the harder solutions first. if you need to find an easier one, chances are that its a "walking around" one, so maybe watch a video!</p>    
    
        `,
      postTabs: [
        {
          tabid: 'burgers',
          label: 'Burgers',
          body: `
            <p>Here are all the standard burgers!</p>

            <puzzle-card id="10k-visits-burger" class="solved">
              <h3>10K Visits Burger</h3>
              <p>Difficulty: Easy</p>
              <p>Hint: Hidden in Spawn, on top of the hill.</p>
              <solution-box>
                <strong>Solution:</strong> Located next to the donation leaderboard in the top left of Spawn.<br/>
                <strong>Explanation:</strong>
                There isnt much to say, as the hint rather explains it.
                <p>However, the location being on top of the hill isnt that clear, but the donation leaderboard's area is elevated, which, although small, is a hill.</p>
              </solution-box>
              <p>Description: TYSM! :D (By Jay)</p>
            </puzzle-card>

            <puzzle-card id="1m-visits-burger" class="solved">
              <h3>1M Visits Burger</h3>
              <p>Difficulty: Easy</p>
              <p>Hint: Hidden in Spawn, on top of the hill.</p>
              <solution-box>
                <strong>Solution:</strong> Located next to the donation leaderboard in the top left of Spawn.<br/>
                <strong>Explanation:</strong>
                There isnt much to say, as the hint rather explains it.
                <p>However, the location being on top of the hill isnt that clear, but the donation leaderboard's area is elevated, which, although small, is a hill.</p>
                <p>Touch the burger for the badge!</p>
              </solution-box>
              <p>Description: TYSM! EVEN MORE! :D (By AccountDoesNothing)</p>
            </puzzle-card>

            <puzzle-card id="apple-burger" class="solved">
              <h3>Apple Burger</h3>
              <p>Difficulty: Easy</p>
              <p>Hint: Hidden in Spawn, growing on a tree.</p>
              <solution-box>
                <strong>Solution:</strong> Located on a tree in the corner where Kitchen, Forest and Spawn meet.<br/>
                <strong>Explanation:</strong> There isnt much to say, as this burger is just a "look around" burger.
                <p>You should be looking on the trees in Spawn to see if apple burger is hanging off it, like an actual apple.</p>
                <p>Eventually, you will find the apple under the leaves in the corner where Kitchen, Forest and Spawn meet.</p>
                <p>Touch the burger for the badge!</p> 
              </solution-box>
              <p>Description: An apple a day takes the doctor away! Just not this one... (By AveragePerson)</p>
            </puzzle-card>

            <puzzle-card id="basic-burger" class="solved">
              <h3>Burger</h3>
              <p>Difficulty: Easy</p>
              <p>Hint: Hidden In the middle of Spawn.</p>
              <solution-box>
                <strong>Solution:</strong> Located exactly where you spawn into the game!<br/>
                <strong>Explanation:</strong> There is no reason to actually "solve" this one, as you spawn right on top of it, so as soon as you join you touch the burger and recieve the badge! 
                <p>Touch the burger for the badge!</p> 
              </solution-box>
              <p>Description: Delicious fella, also really cool! Enjoy Find The Burgers! (By AccountDoesNothing)</p>
            </puzzle-card>

            <puzzle-card id="bitten-burger" class="solved">
              <h3>Bitten Burger</h3>
              <p>Difficulty: Easy</p>
              <p>Hint: Hidden In Spawn, on a tree.</p>
              <solution-box>
                <strong>Solution:</strong> Located on the big tree near the Bradyoup character.<br/>
                <strong>Explanation:</strong> Again, this is just a "looking around" burger, but you will eventually find it on the big tree, being pointed to by the Bradyoup character, the creator of the game.
                <p>Touch the burger for the badge!</p> 
              </solution-box>
              <p>Description: Yum! I mean what WAIT NO WHA- (By Frog)</p>
            </puzzle-card>

            <puzzle-card id="bee-burger" class="solved">
              <h3>Bee Burger</h3>
              <p>Difficulty: Easy</p>
              <p>Hint: Hidden In Spawn, near a bee hive.</p>
              <solution-box>
                <strong>Solution:</strong> Located on a beehive on a tree at the border between Spawn and Beach, near the donation leaderboard/10K Visits Burger/10M Visits Burger.<br/>
                <strong>Explanation:</strong> Again, this is just a "looking around" burger, but you will eventually find it in Beach.
                <p>Touch the burger for the badge!</p>
              </solution-box>
              <p>Description: Ya like jazz? (By Flames)</p>
            </puzzle-card>

            <puzzle-card id="beach-ball-burger" class="solved">
              <h3>Beach Ball Burger</h3>
              <p>Difficulty: Easy</p>
              <p>Hint: Hidden In Beach, near a volleyball court.</p>
              <solution-box>
                <strong>Solution:</strong> Located on a beachball next to 3 characters playing volleyball at Beach. <br/>
                <strong>Explanation:</strong> Again, this is just a "looking around" burger, but you will eventually find it in Beach.
                <p>Even if you don't know what volleyball looks like, you will see 3 people playing next to a net, and the burger is being hit by Feodoric (purple-green guy).</p>
                <p>Touch the burger for the badge!</p>
              </solution-box>
              <p>Description: Painfully slow volleyball... (By Shardscapes)</p>
            </puzzle-card>

            <puzzle-card id="burger-phone" class="solved">
              <h3>Burger Phone</h3>
              <p>Difficulty: Easy</p>
              <p>Hint: Hidden In Forest, find them.</p>
              <solution-box>
                <strong>Solution:</strong> Located in Forest near the campsite. <br/>
                <strong>Explanation:</strong> Again, this is just a "looking around" burger, but you will eventually find it in Forest.
                <p>It is behind the campsite in the bottom right corner of Forest.</p>
                <p>Touch the burger for the badge!</p>
              </solution-box>
              <p>Description: Hello? Is anyone there? (By CasaRetro1994)</p>
            </puzzle-card>

            <puzzle-card id="burger-bush" class="solved">
              <h3>Burger Bush</h3>
              <p>Difficulty: Easy</p>
              <p>Hint: Hidden In Forest, find an odd looking bush.</p>
              <solution-box>
                <strong>Solution:</strong> Located in Forest behind the waterfall structure, in the back left corner. <br/>
                <strong>Explanation:</strong> Again, this is just a "looking around" burger, but perhaps a bit harder.
                <p>It will be found behind the waterfall structure in the back left corner of Forest.</p>
                <p>Be careful not to confuse it for a regular bush!</p>
                <p>It is easy to miss, as it's in a spot where not many would look.</p>
                <p>Touch the burger for the badge!</p>
              </solution-box>
              <p>Description: I am NOT eating those berries. (By segios)</p>
            </puzzle-card>

            <puzzle-card id="cat-burger" class="solved">
              <h3>Cat Burger</h3>
              <p>Difficulty: Easy</p>
              <p>Hint: Hidden In Spawn, cats can't swim well.</p>
              <solution-box>
                <strong>Solution:</strong> Located in the pond in Spawn, near the bottom right corner.<br/>
                <strong>Explanation:</strong> Again, this is just a "looking around" burger, but with a good hint.
                <p>The mention of cats not being able to swim well quite evidently points towards the lake/pond located in Spawn.</p>
                <p>Looking at it, you will find Cat Burger floating on the surface.</p>
                <p>Touch the burger for the badge!</p>
              </solution-box>
              <p>Description: Cats can't swim! (By book02_7)</p>
            </puzzle-card>

            <puzzle-card id="cake-burger" class="solved">
              <h3>Cake Burger</h3>
              <p>Difficulty: Easy</p>
              <p>Hint: Hidden in Kitchen, it's getting grilled.</p>
              <solution-box>
                <strong>Solution:</strong> Located on the first layer of grills in the oven in Kitchen.<br/>
                <strong>Explanation:</strong> Again, this is just a "looking around" burger, but with a good hint.
                <p>The mention of it being grilled should point to heat, namely in the oven.</p>
                <p>It could be anywhere in the oven, but if you see the giant cake on the first layer inside the oven, you could think that it would be next to it.</p>
                <p>And, you would be right to think so. It is next to the cake!</p>
                <p>Touch the burger for the badge!</p>
              </solution-box>
              <p>Description: Cake flavored burgers?? what. (By Megateapot228)</p>
            </puzzle-card>
            
            <puzzle-card id="cool-burger" class="solved">
              <h3>Cool Burger</h3>
              <p>Difficulty: Easy</p>
              <p>Hint: Hidden in Beach, sitting alone.</p>
              <solution-box>
                <strong>Solution:</strong> Located in the top left corner of Beach, lying on a beach chair.<br/>
                <strong>Explanation:</strong> Again, this is just a "looking around" burger, but with a hint.
                <p>The mention of it sitting should point to a chair, namely the beach chair in the top left of Beach.</p>
                <p>And, you will find Cool Burger sitting on it!</p>
                <p>Touch the burger for the badge!</p>
              </solution-box>
              <p>Description: Too much swag to even takl. (By book02_7)</p>
            </puzzle-card>

            <puzzle-card id="cave-exploring-burger" class="solved">
              <h3>Cave Exploring Burger</h3>
              <p>Difficulty: Easy</p>
              <p>Hint: Hidden in Cave Area, find a hole in Spawn's lake. Once there, eating nothing at an empty cafe.</p>
              <solution-box>
                <strong>Solution:</strong> Located in the cafe in Cave, found by going through the hole in the side of the lake.<br/>
                <strong>Explanation:</strong> This burger introduces the player to the Cave Area.
                <p>The hint tells you how to get into the Cave Area, namely by going through a hole in the side of the lake near Kitchen.</p>
                <p>Finding this hole, you can go through it and find a cave entrance. Touching the black entrance will take you to the Cave Area.</p>
                <p>Now, you will have to look for such cafe by yourself.</p>
                <p>And, you will find the cafe by going through the first passage, and on the left side of the new cave.</p>
                <p>Inside the cafe, you will find Cave Exploring Burger sitting on a chair.</p>
                <p>Touch the burger for the badge!</p>
              </solution-box>
              <p>Description: Poor Dude needed a rest! (By Remy)</p>
            </puzzle-card>

            <puzzle-card id="astral-plane-burger" class="solved">
              <h3>Astral Plane Burger</h3>
              <p>Difficulty: Intense</p>
              <p>Hint: Hidden in Forest, what lies behind the waterfall?</p>
              <solution-box>
                <strong>Solution:</strong> Solve Astral Plane Burger's puzzle.<br/>
                <p></p>
                <strong>Quick solution:</strong> Go through the dark entrance in the waterfall in Forest and type 'astraleclipse' into the TextBox.
                <p></p>
                <strong>Explanation:</strong>
                The hint indicates that you should go behind the waterfall in Forest (top-right corner). Now, there is nothing behind the waterfall structure, but actually behind the water is a black entrance, which you can walk into.
                <p>Once you enter the black entrance, you will be in a cave with purple water and a shrine in the center. This is where the puzzle starts.</p>
                <div class="post-image-container">
                  <img src="assets/images/blog-assets/findtheburgers/solutions/astral-plane-1.png" alt="Map Overview" />
                </div>
                <p>Many of you will probably recognise the cipher used instantly, but if not, a helpful hint below has been left.</p>
                <p>Wing 🔔 is a clue to the cipher's name. The bell here doesnt mean bell, but rather means the sound of a bell: ding. </p>
                <p>Putting these two words together, we get Wingding, which is close enough to Wingdings, the name of the cipher.</p>
                <p>Using a tool such as <a href="https://www.dcode.fr/wingdings-font" target="_blank">dcode.fr</a>, we can decode the message.</p>
                <p>I personally found it hard to get the right symbols, but the encoded message on the shrine is <span class="wingdings">astraleclipse</span>.</p>
                <p>Now, decode it to get your code: astraleclipse.</p>
                <p>Entering this into the TextBox on the ground before the shrine will spawn the Astral Plane Burger!</p>
                <p>Touch the burger for the badge!</p>
              </solution-box>
              <p>Description: I hope he doesn't summon anything.. (By Gravysaus)</p>
            </puzzle-card>
          `,
          puzzles: [
            { id: '10k-visits-burger', index: '', difficulty: 'Easy', difficulty_color: '#55ff7f', image: 'assets/images/blog-assets/findtheburgers/10k-visits-burger.png', title: '10K Visits Burger', subtitle: '', status: 'solved' },
            { id: '1m-visits-burger', index: '', difficulty: 'Easy', difficulty_color: '#55ff7f', image: 'assets/images/blog-assets/findtheburgers/1m-visits-burger.png', title: '1M Visits Burger', subtitle: '', status: 'solved' },
            { id: 'apple-burger', index: '', difficulty: 'Easy', difficulty_color: '#55ff7f', image: 'assets/images/blog-assets/findtheburgers/apple-burger.png', title: 'Apple Burger', subtitle: '', status: 'solved' },
            { id: 'basic-burger', index: '', difficulty: 'Easy', difficulty_color: '#55ff7f', image: 'assets/images/blog-assets/findtheburgers/basic-burger.png', title: 'Basic Burger', subtitle: '', status: 'solved' },
            { id: 'bitten-burger', index: '', difficulty: 'Easy', difficulty_color: '#55ff7f', image: 'assets/images/blog-assets/findtheburgers/bitten-burger.png', title: 'Bitten Burger', subtitle: '', status: 'solved' },
            { id: 'bee-burger', index: '', difficulty: 'Easy', difficulty_color: '#55ff7f', image: 'assets/images/blog-assets/findtheburgers/bee-burger.png', title: 'Bee Burger', subtitle: '', status: 'solved' },
            { id: 'beach-ball-burger', index: '', difficulty: 'Easy', difficulty_color: '#55ff7f', image: 'assets/images/blog-assets/findtheburgers/beach-ball-burger.png', title: 'Beach Ball Burger', subtitle: '', status: 'solved' },
            { id: 'burger-phone', index: '', difficulty: 'Easy', difficulty_color: '#55ff7f', image: 'assets/images/blog-assets/findtheburgers/burger-phone.png', title: 'Burger Phone', subtitle: '', status: 'solved' },
            { id: 'burger-bush', index: '', difficulty: 'Easy', difficulty_color: '#55ff7f', image: 'assets/images/blog-assets/findtheburgers/burger-bush.png', title: 'Burger Bush', subtitle: '', status: 'solved' },
            { id: 'cat-burger', index: '', difficulty: 'Easy', difficulty_color: '#55ff7f', image: 'assets/images/blog-assets/findtheburgers/cat-burger.png', title: 'Cat Burger', subtitle: '', status: 'solved' },
            { id: 'cake-burger', index: '', difficulty: 'Easy', difficulty_color: '#55ff7f', image: 'assets/images/blog-assets/findtheburgers/cake-burger.png', title: 'Cake Burger', subtitle: '', status: 'solved' },
            { id: 'cool-burger', index: '', difficulty: 'Easy', difficulty_color: '#55ff7f', image: 'assets/images/blog-assets/findtheburgers/cool-burger.png', title: 'Cool Burger', subtitle: '', status: 'solved' },
            { id: 'cave-exploring-burger', index: '', difficulty: 'Easy', difficulty_color: '#55ff7f', image: 'assets/images/blog-assets/findtheburgers/cave-exploring-burger.png', title: 'Cave Exploring Burger', subtitle: '', status: 'solved' },
            { id: 'clam-burger', index: '', difficulty: 'Easy', difficulty_color: '#55ff7f', image: 'assets/images/blog-assets/findtheburgers/clam-burger.png', title: 'Clam Burger', subtitle: '', status: 'unsolved' },
            { id: 'cozy-burger', index: '', difficulty: 'Easy', difficulty_color: '#55ff7f', image: 'assets/images/blog-assets/findtheburgers/cozy-burger.png', title: 'Cozy Burger', subtitle: '', status: 'unsolved' },
            { id: 'dj-burger', index: '', difficulty: 'Easy', difficulty_color: '#55ff7f', image: 'assets/images/blog-assets/findtheburgers/dj-burger.png', title: 'DJ Burger', subtitle: '', status: 'unsolved' },
            { id: 'farmer-burger', index: '', difficulty: 'Easy', difficulty_color: '#55ff7f', image: 'assets/images/blog-assets/findtheburgers/farmer-burger.png', title: 'Farmer Burger', subtitle: '', status: 'unsolved' },
            { id: 'group-burger', index: '', difficulty: 'Easy', difficulty_color: '#55ff7f', image: 'assets/images/blog-assets/findtheburgers/group-burger.png', title: 'Group Burger', subtitle: '', status: 'unsolved' },
            { id: 'lilypad-burger', index: '', difficulty: 'Easy', difficulty_color: '#55ff7f', image: 'assets/images/blog-assets/findtheburgers/lilypad-burger.png', title: 'Lilypad Burger', subtitle: '', status: 'unsolved' },
            { id: 'spicy-burger', index: '', difficulty: 'Easy', difficulty_color: '#55ff7f', image: 'assets/images/blog-assets/findtheburgers/spicy-burger.png', title: 'Spicy Burger', subtitle: '', status: 'unsolved' },
            { id: 'scared-burger', index: '', difficulty: 'Easy', difficulty_color: '#55ff7f', image: 'assets/images/blog-assets/findtheburgers/scared-burger.png', title: 'Scared Burger', subtitle: '', status: 'unsolved' },
            { id: 'tropical-burger', index: '', difficulty: 'Easy', difficulty_color: '#55ff7f', image: 'assets/images/blog-assets/findtheburgers/tropical-burger.png', title: 'Tropical Burger', subtitle: '', status: 'unsolved' },
            { id: 'traffic-cone-burger', index: '', difficulty: 'Easy', difficulty_color: '#55ff7f', image: 'assets/images/blog-assets/findtheburgers/traffic-cone-burger.png', title: 'Traffic Cone Burger', subtitle: '', status: 'unsolved' },
            { id: 'wheat-burger', index: '', difficulty: 'Easy', difficulty_color: '#55ff7f', image: 'assets/images/blog-assets/findtheburgers/wheat-burger.png', title: 'Wheat Burger', subtitle: '', status: 'unsolved' },
            { id: 'brainstormed-burger', index: '', difficulty: 'Medium', difficulty_color: '#ffff00', image: 'assets/images/blog-assets/findtheburgers/brainstormed-burger.png', title: 'Brainstormed Burger', subtitle: '', status: 'unsolved' },
            { id: 'chezburger', index: '', difficulty: 'Medium', difficulty_color: '#ffff00', image: 'assets/images/blog-assets/findtheburgers/chezburger.png', title: 'Chezburger', subtitle: '', status: 'unsolved' },
            { id: 'chef-burger', index: '', difficulty: 'Medium', difficulty_color: '#ffff00', image: 'assets/images/blog-assets/findtheburgers/chef-burger.png', title: 'Chef Burger', subtitle: '', status: 'unsolved' },
            { id: 'coconut-burger', index: '', difficulty: 'Medium', difficulty_color: '#ffff00', image: 'assets/images/blog-assets/findtheburgers/coconut-burger.png', title: 'Coconut Burger', subtitle: '', status: 'unsolved' },
            { id: 'campfire-burger', index: '', difficulty: 'Medium', difficulty_color: '#ffff00', image: 'assets/images/blog-assets/findtheburgers/campfire-burger.png', title: 'Campfire Burger', subtitle: '', status: 'unsolved' },
            { id: 'inverted-burger', index: '', difficulty: 'Medium', difficulty_color: '#ffff00', image: 'assets/images/blog-assets/findtheburgers/inverted-burger.png', title: 'Inverted Burger', subtitle: '', status: 'unsolved' },
            { id: 'kiddie-burger', index: '', difficulty: 'Medium', difficulty_color: '#ffff00', image: 'assets/images/blog-assets/findtheburgers/kiddie-burger.png', title: 'Kiddie Burger', subtitle: '', status: 'unsolved' },
            { id: 'low-quality-burger', index: '', difficulty: 'Medium', difficulty_color: '#ffff00', image: 'assets/images/blog-assets/findtheburgers/low-quality-burger.png', title: 'Low Quality Burger', subtitle: '', status: 'unsolved' },
            { id: 'light-sand-burger', index: '', difficulty: 'Medium', difficulty_color: '#ffff00', image: 'assets/images/blog-assets/findtheburgers/light-sand-burger.png', title: 'Light Sand Burger', subtitle: '', status: 'unsolved' },
            { id: 'lava-burger', index: '', difficulty: 'Medium', difficulty_color: '#ffff00', image: 'assets/images/blog-assets/findtheburgers/lava-burger.png', title: 'Lava Burger', subtitle: '', status: 'unsolved' },
            { id: 'lotus-burger', index: '', difficulty: 'Medium', difficulty_color: '#ffff00', image: 'assets/images/blog-assets/findtheburgers/lotus-burger.png', title: 'Lotus Burger', subtitle: '', status: 'unsolved' },
            { id: 'lantern-burger', index: '', difficulty: 'Medium', difficulty_color: '#ffff00', image: 'assets/images/blog-assets/findtheburgers/lantern-burger.png', title: 'Lantern Burger', subtitle: '', status: 'unsolved' },
            { id: 'miner-burger', index: '', difficulty: 'Medium', difficulty_color: '#ffff00', image: 'assets/images/blog-assets/findtheburgers/miner-burger.png', title: 'Miner Burger', subtitle: '', status: 'unsolved' },
            { id: 'orange-burger', index: '', difficulty: 'Medium', difficulty_color: '#ffff00', image: 'assets/images/blog-assets/findtheburgers/orange-burger.png', title: 'Orange Burger', subtitle: '', status: 'unsolved' },
            { id: 'popsicle-burger', index: '', difficulty: 'Medium', difficulty_color: '#ffff00', image: 'assets/images/blog-assets/findtheburgers/popsicle-burger.png', title: 'Popsicle Burger', subtitle: '', status: 'unsolved' },
            { id: 'painting-burger', index: '', difficulty: 'Medium', difficulty_color: '#ffff00', image: 'assets/images/blog-assets/findtheburgers/painting-burger.png', title: 'Painting Burger', subtitle: '', status: 'unsolved' },
            { id: 'reversed-burger', index: '', difficulty: 'Medium', difficulty_color: '#ffff00', image: 'assets/images/blog-assets/findtheburgers/reversed-burger.png', title: 'Reversed Burger', subtitle: '', status: 'unsolved' },
            { id: 'statue-burger', index: '', difficulty: 'Medium', difficulty_color: '#ffff00', image: 'assets/images/blog-assets/findtheburgers/statue-burger.png', title: 'Statue Burger', subtitle: '', status: 'unsolved' },
            { id: '3d-burger', index: '', difficulty: 'Hard', difficulty_color: '#ff5500', image: 'assets/images/blog-assets/findtheburgers/3d-burger.png', title: '3D Burger', subtitle: '', status: 'unsolved' },
            { id: 'beach-burger', index: '', difficulty: 'Hard', difficulty_color: '#ff5500', image: 'assets/images/blog-assets/findtheburgers/beach-burger.png', title: 'Beach Burger', subtitle: '', status: 'unsolved' },
            { id: 'caramel-apple-burger', index: '', difficulty: 'Hard', difficulty_color: '#ff5500', image: 'assets/images/blog-assets/findtheburgers/caramel-apple-burger.png', title: 'Caramel Apple Burger', subtitle: '', status: 'unsolved' },
            { id: 'crab-burger', index: '', difficulty: 'Hard', difficulty_color: '#ff5500', image: 'assets/images/blog-assets/findtheburgers/crab-burger.png', title: 'Crab Burger', subtitle: '', status: 'unsolved' },
            { id: 'crystal-burger', index: '', difficulty: 'Hard', difficulty_color: '#ff5500', image: 'assets/images/blog-assets/findtheburgers/crystal-burger.png', title: 'Crystal Burger', subtitle: '', status: 'unsolved' },
            { id: 'frostbite-burger', index: '', difficulty: 'Hard', difficulty_color: '#ff5500', image: 'assets/images/blog-assets/findtheburgers/frostbite-burger.png', title: 'Frostbite Burger', subtitle: '', status: 'unsolved' },
            { id: 'obsidian-burger', index: '', difficulty: 'Hard', difficulty_color: '#ff5500', image: 'assets/images/blog-assets/findtheburgers/obsidian-burger.png', title: 'Obsidian Burger', subtitle: '', status: 'unsolved' },
            { id: 'rat-burger', index: '', difficulty: 'Hard', difficulty_color: '#ff5500', image: 'assets/images/blog-assets/findtheburgers/rat-burger.png', title: 'Rat Burger', subtitle: '', status: 'unsolved' },
            { id: 'rose-burger', index: '', difficulty: 'Hard', difficulty_color: '#ff5500', image: 'assets/images/blog-assets/findtheburgers/rose-burger.png', title: 'Rose Burger', subtitle: '', status: 'unsolved' },
            { id: 'small-burger', index: '', difficulty: 'Hard', difficulty_color: '#ff5500', image: 'assets/images/blog-assets/findtheburgers/small-burger.png', title: 'Small Burger', subtitle: '', status: 'unsolved' },
            { id: 'template-burger', index: '', difficulty: 'Hard', difficulty_color: '#ff5500', image: 'assets/images/blog-assets/findtheburgers/template-burger.png', title: 'Template Burger', subtitle: '', status: 'unsolved' },
            { id: 'teamwork-burger', index: '', difficulty: 'Hard', difficulty_color: '#ff5500', image: 'assets/images/blog-assets/findtheburgers/teamwork-burger.png', title: 'Teamwork Burger', subtitle: '', status: 'unsolved' },
            { id: 'aesthetic-burger', index: '', difficulty: 'Severe', difficulty_color: '#ff0000', image: 'assets/images/blog-assets/findtheburgers/aesthetic-burger.png', title: 'Aesthetic Burger', subtitle: '', status: 'unsolved' },
            { id: 'bat-burger', index: '', difficulty: 'Severe', difficulty_color: '#ff0000', image: 'assets/images/blog-assets/findtheburgers/bat-burger.png', title: 'Bat Burger', subtitle: '', status: 'unsolved' },
            { id: 'corny-burger', index: '', difficulty: 'Severe', difficulty_color: '#ff0000', image: 'assets/images/blog-assets/findtheburgers/corny-burger.png', title: 'Corny Burger', subtitle: '', status: 'unsolved' },
            { id: 'crafter-burger', index: '', difficulty: 'Severe', difficulty_color: '#ff0000', image: 'assets/images/blog-assets/findtheburgers/crafter-burger.png', title: 'Crafter Burger', subtitle: '', status: 'unsolved' },
            { id: 'chillin-burger', index: '', difficulty: 'Severe', difficulty_color: '#ff0000', image: 'assets/images/blog-assets/findtheburgers/chillin-burger.png', title: 'Chillin Burger', subtitle: '', status: 'unsolved' },
            { id: 'drip-burger', index: '', difficulty: 'Severe', difficulty_color: '#ff0000', image: 'assets/images/blog-assets/findtheburgers/drip-burger.png', title: 'Drip Burger', subtitle: '', status: 'unsolved' },
            { id: 'ruby-burger', index: '', difficulty: 'Severe', difficulty_color: '#ff0000', image: 'assets/images/blog-assets/findtheburgers/ruby-burger.png', title: 'Ruby Burger', subtitle: '', status: 'unsolved' },
            { id: 'spawn-burger', index: '', difficulty: 'Severe', difficulty_color: '#ff0000', image: 'assets/images/blog-assets/findtheburgers/spawn-burger.png', title: 'Spawn Burger', subtitle: '', status: 'unsolved' },
            { id: 'troll-burger', index: '', difficulty: 'Severe', difficulty_color: '#ff0000', image: 'assets/images/blog-assets/findtheburgers/troll-burger.png', title: 'Troll Burger', subtitle: '', status: 'unsolved' },
            { id: 'ultra-party-burger', index: '', difficulty: 'Severe', difficulty_color: '#ff0000', image: 'assets/images/blog-assets/findtheburgers/ultra-party-burger.png', title: 'Ultra Party Burger', subtitle: '', status: 'unsolved' },
            { id: 'astral-plane-burger', index: '', difficulty: 'Intense', difficulty_color: '#000000', image: 'assets/images/blog-assets/findtheburgers/astral-plane-burger.png', title: 'Astral Plane Burger', subtitle: '', status: 'solved' },
            { id: 'bomb-burger', index: '', difficulty: 'Intense', difficulty_color: '#000000', image: 'assets/images/blog-assets/findtheburgers/bomb-burger.png', title: 'Bomb Burger', subtitle: '', status: 'unsolved' },
            { id: 'frozen-burger', index: '', difficulty: 'Intense', difficulty_color: '#000000', image: 'assets/images/blog-assets/findtheburgers/frozen-burger.png', title: 'Frozen Burger', subtitle: '', status: 'unsolved' },
            { id: 'glitch-burger', index: '', difficulty: 'Intense', difficulty_color: '#000000', image: 'assets/images/blog-assets/findtheburgers/glitch-burger.png', title: 'Glitch Burger', subtitle: '', status: 'unsolved' },
            { id: 'gubby-burger', index: '', difficulty: 'Intense', difficulty_color: '#000000', image: 'assets/images/blog-assets/findtheburgers/gubby-burger.png', title: 'Gubby Burger', subtitle: '', status: 'unsolved' },
            { id: 'hyperwave-burger', index: '', difficulty: 'Intense', difficulty_color: '#000000', image: 'assets/images/blog-assets/findtheburgers/hyperwave-burger.png', title: 'Hyperwave Burger', subtitle: '', status: 'unsolved' },
            { id: 'kitchen-burger', index: '', difficulty: 'Intense', difficulty_color: '#000000', image: 'assets/images/blog-assets/findtheburgers/kitchen-burger.png', title: 'Kitchen Burger', subtitle: '', status: 'unsolved' },
            { id: 'lunar-burger', index: '', difficulty: 'Intense', difficulty_color: '#000000', image: 'assets/images/blog-assets/findtheburgers/lunar-burger.png', title: 'Lunar Burger', subtitle: '', status: 'unsolved' },
            { id: 'lost-burger', index: '', difficulty: 'Intense', difficulty_color: '#000000', image: 'assets/images/blog-assets/findtheburgers/lost-burger.png', title: 'Lost Burger', subtitle: '', status: 'unsolved' },
            { id: 'noob-burger', index: '', difficulty: 'Intense', difficulty_color: '#000000', image: 'assets/images/blog-assets/findtheburgers/noob-burger.png', title: 'Noob Burger', subtitle: '', status: 'unsolved' },
            { id: 'pineapple-burger', index: '', difficulty: 'Intense', difficulty_color: '#000000', image: 'assets/images/blog-assets/findtheburgers/pineapple-burger.png', title: 'Pineapple Burger', subtitle: '', status: 'unsolved' },
            { id: 'raincoat-burger', index: '', difficulty: 'Intense', difficulty_color: '#000000', image: 'assets/images/blog-assets/findtheburgers/raincoat-burger.png', title: 'Raincoat Burger', subtitle: '', status: 'unsolved' },
            { id: 'water-burger', index: '', difficulty: 'Intense', difficulty_color: '#000000', image: 'assets/images/blog-assets/findtheburgers/water-burger.png', title: 'Water Burger', subtitle: '', status: 'unsolved' },
            { id: 'angel-burger', index: '', difficulty: 'Insane', difficulty_color: '#0000ff', image: 'assets/images/blog-assets/findtheburgers/angel-burger.png', title: 'Angel Burger', subtitle: '', status: 'unsolved' },
            { id: 'caution-burger', index: '', difficulty: 'Insane', difficulty_color: '#0000ff', image: 'assets/images/blog-assets/findtheburgers/caution-burger.png', title: 'Caution Burger', subtitle: '', status: 'unsolved' },
            { id: 'cardboard-burger', index: '', difficulty: 'Insane', difficulty_color: '#0000ff', image: 'assets/images/blog-assets/findtheburgers/cardboard-burger.png', title: 'Cardboard Burger', subtitle: '', status: 'unsolved' },
            { id: 'error-burger', index: '', difficulty: 'Insane', difficulty_color: '#0000ff', image: 'assets/images/blog-assets/findtheburgers/error-burger.png', title: 'Error Burger', subtitle: '', status: 'unsolved' },
            { id: 'forgotten-poolrooms-burger', index: '', difficulty: 'Insane', difficulty_color: '#0000ff', image: 'assets/images/blog-assets/findtheburgers/forgotten-poolrooms-burger.png', title: 'Forgotten Poolrooms Burger', subtitle: '', status: 'unsolved' },
            { id: 'gold-burger', index: '', difficulty: 'Insane', difficulty_color: '#0000ff', image: 'assets/images/blog-assets/findtheburgers/gold-burger.png', title: 'Gold Burger', subtitle: '', status: 'unsolved' },
            { id: 'poolrooms-burger', index: '', difficulty: 'Insane', difficulty_color: '#0000ff', image: 'assets/images/blog-assets/findtheburgers/poolrooms-burger.png', title: 'Poolrooms Burger', subtitle: '', status: 'unsolved' },
            { id: 'retrostatue-burger', index: '', difficulty: 'Insane', difficulty_color: '#0000ff', image: 'assets/images/blog-assets/findtheburgers/retrostatue-burger.png', title: 'RetroStatue Burger', subtitle: '', status: 'unsolved' },
            { id: 'skater-burger', index: '', difficulty: 'Insane', difficulty_color: '#0000ff', image: 'assets/images/blog-assets/findtheburgers/skater-burger.png', title: 'Skater Burger', subtitle: '', status: 'unsolved' },
            { id: 'i-wanna-be-the-burger', index: '', difficulty: 'Extreme', difficulty_color: '#00aaff', image: 'assets/images/blog-assets/findtheburgers/i-wanna-be-the-burger.png', title: 'I Wanna Be The Burger', subtitle: '', status: 'unsolved' },
            { id: 'retrowave-burger', index: '', difficulty: 'Extreme', difficulty_color: '#00aaff', image: 'assets/images/blog-assets/findtheburgers/retrowave-burger.png', title: 'Retrowave Burger', subtitle: '', status: 'unsolved' },
            { id: 'studio-burger', index: '', difficulty: 'Extreme', difficulty_color: '#00aaff', image: 'assets/images/blog-assets/findtheburgers/studio-burger.png', title: 'Studio Burger', subtitle: '', status: 'unsolved' },
            { id: 'secret-burger', index: '', difficulty: 'Extreme', difficulty_color: '#00aaff', image: 'assets/images/blog-assets/findtheburgers/secret-burger.png', title: 'Secret Burger', subtitle: '', status: 'unsolved' },
            { id: 'troll-burger-retrolled-burger', index: '', difficulty: 'Extreme', difficulty_color: '#00aaff', image: 'assets/images/blog-assets/findtheburgers/troll-burger-retrolled.png', title: 'Troll Burger: Retrolled', subtitle: '', status: 'unsolved' },
            { id: 'blissful-utopia-burger', index: '', difficulty: 'Horrifying', difficulty_color: '#00ffff', image: 'assets/images/blog-assets/findtheburgers/blissful-utopia-burger.png', title: 'Blissful Utopia Burger', subtitle: '', status: 'unsolved' },
            { id: 'cosmic-entity-burger', index: '', difficulty: 'Horrifying', difficulty_color: '#00ffff', image: 'assets/images/blog-assets/findtheburgers/cosmic-entity-burger.png', title: 'Cosmic Entity Burger', subtitle: '', status: 'unsolved' },
            { id: 'dark-matter-burger', index: '', difficulty: 'Horrifying', difficulty_color: '#00ffff', image: 'assets/images/blog-assets/findtheburgers/dark-matter-burger.png', title: 'Dark Matter Burger', subtitle: '', status: 'unsolved' },
            { id: 'prismatic-burger', index: '', difficulty: 'Horrifying', difficulty_color: '#00ffff', image: 'assets/images/blog-assets/findtheburgers/prismatic-burger.png', title: 'Prismatic Burger', subtitle: '', status: 'unsolved' },
            { id: 'runic-burger', index: '', difficulty: 'Horrifying', difficulty_color: '#00ffff', image: 'assets/images/blog-assets/findtheburgers/runic-burger.png', title: 'Runic Burger', subtitle: '', status: 'unsolved' },
            { id: 'backrooms-burger', index: '', difficulty: 'Horrifying', difficulty_color: '#ffffff', image: 'assets/images/blog-assets/findtheburgers/backrooms-burger.png', title: 'Backrooms Burger', subtitle: '', status: 'unsolved' },
            { id: 'virus-burger', index: '', difficulty: 'Horrifying', difficulty_color: '#ffffff', image: 'assets/images/blog-assets/findtheburgers/virus-burger.png', title: 'Virus Burger', subtitle: '', status: 'unsolved' }
          ]
        },
        {
          tabid: 'realms',
          label: 'Realms',
          body: `<p>Realms breakdown coming soon!</p>`,
          puzzles: []
        },
        {
          tabid: 'hidden-burgers',
          label: 'Hidden Burgers',
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
  ]
};