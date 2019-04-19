  window.onload = function () {
    const audioMenuTheme = new Audio('css/MenuTheme.mp3');
    audioMenuTheme.play();


    const alphabet = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i',
          'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l',
          'z', 'x', 'c', 'v', 'b', 'n', 'm'];
    
    let categories;         // Array of topics
    let chosenCategory;     // Selected category
    //var getHint ;           // Word getHint
    let word ;              // Selected word
    let guess ;             // guess
    let guesses = [ ];      // Stored guesses
    let lives ;             // Lives
    let counter ;           // Count correct guesses
    let space = 0;          // Number of spaces in word '-'
  
    // Get elements
    let showLives = document.getElementById("mylives");
    let showBox = document.getElementById("canvasContainer");
    const showCatagory = document.getElementById("category");
    const getHint = document.getElementById("hint");
    const showClue = document.getElementById("clue");
    const audioBonfire = new Audio('css/Bonfire.mp3');
    const audioDeath = new Audio('css/Death.mp3');
    
  
    // create alphabet ul
    const buttons = function () {
      myButtons = document.getElementById('buttons');
      characters = document.createElement('ul');

  
      for (let i = 0; i < alphabet.length; i++) {
        characters.id = 'alphabet';
        list = document.createElement('li');
        list.id = 'varter';
        list.innerHTML = alphabet[i];
        check();
        myButtons.appendChild(characters);
        characters.appendChild(list);
      }
    }
    
    
    // Select Catagory
    let selectCat = function () {
      if (chosenCategory === categories[0]) {
        catagoryName.innerHTML = "The Category Is Pokemon";
      } else if (chosenCategory === categories[1]) {
        catagoryName.innerHTML = "The Category Is Films";
      } else if (chosenCategory === categories[2]) {
        catagoryName.innerHTML = "The Category Is Video Games";
      } else if (chosenCategory === categories[3]) {
        catagoryName.innerHTML = "The Category Is Books";
      } else if (chosenCategory === categories[4]) {
        catagoryName.innerHTML = "The Category Is Music";
      }
    }
  
    // Create guesses ul
     result = function () {
      wordHolder = document.getElementById('hold');
      correct = document.createElement('ul');
  
      for (let i = 0; i < word.length; i++) {
        correct.setAttribute('id', 'my-word');
        guess = document.createElement('li');
        guess.setAttribute('class', 'guess');
        if (word[i] === "-") {
          guess.innerHTML = "-";
          space++;
        } else {
          guess.innerHTML = "_";
        }
  
        guesses.push(guess);
        wordHolder.appendChild(correct);
        correct.appendChild(guess);
      }
    }

    
    
    // Show lives
     comments = function () {
      showLives.innerHTML = "You have " + lives + " humanity";
      if (lives < 1) {
        showLives.innerHTML = "YOU DIED";
        audioDeath.play();

      }
      for (let i = 0; i < guesses.length; i++) {
        if (counter + space === guesses.length) {
          showLives.innerHTML = "BONFIRE LIT";
          audioBonfire.play()
          showBox.innerHTML = '<img src="css/bonfire.gif"/>';
        }
      }
    }
  
        // Animate man
    const animate = function () {
      const drawMe = lives ;
      drawArray[drawMe]();
    }

    const makeFire = function () {
      drawFire(); 
    }
    
  
    
     // Hangman
    canvas =  function(){
  
      myStickman = document.getElementById("stickman");
      context = myStickman.getContext('2d');
      context.beginPath();
      context.strokeStyle = "#b63e0f";
      context.lineWidth = 2;
    };
    
      head = function(){
        myStickman = document.getElementById("stickman");
        context = myStickman.getContext('2d');
        context.beginPath();
        context.arc(60, 25, 10, 0, Math.PI*2, true);
        context.stroke();
      }
      
    draw = function($pathFromx, $pathFromy, $pathTox, $pathToy) {
      
      context.moveTo($pathFromx, $pathFromy);
      context.lineTo($pathTox, $pathToy);
      context.stroke(); 
  }
    frame1 = function() {
      myStickman = document.getElementById("stickman");
      context = myStickman.getContext('2d');
      context.beginPath();
      context.arc(60, 25, 10, 0, Math.PI*2, true);
      context.stroke();
      draw (0, 150, 150, 150);
      draw (10, 0, 10, 600);
      draw (0, 5, 70, 5);
      draw (60, 5, 60, 15);
      draw (60, 36, 60, 70);
      draw (60, 46, 100, 50);
      draw (60, 46, 20, 50);
      draw (60, 70, 100, 100);
      draw (60, 70, 20, 100);
     };

     drawArray = [frame1]; 

     drawFire = function() {
      let c = document.getElementById("stickman");
      let ctx = c.getContext("2d");
      const img = new Image();
      img.src = 'css/bonfire.gif';
      ctx.drawImage(img,10,10,280, 150);
     };

  
    //  frame1 = function() {
    //    draw (0, 150, 150, 150);
    //    draw (10, 0, 10, 600);
    //    draw (0, 5, 70, 5);
    //    draw (60, 5, 60, 15);
    //  };

    //  torso = function() {
    //    draw (60, 36, 60, 70);
    //  };
    
    //  rightArm = function() {
    //    draw (60, 46, 100, 50);
    //  };
    
    //  leftArm = function() {
    //    draw (60, 46, 20, 50);
    //  };
    
    //  rightLeg = function() {
    //    draw (60, 70, 100, 100);
    //  };
    
    //  leftLeg = function() {
    //    draw (60, 70, 20, 100);
    //  };
    
    // drawArray = [rightLeg, leftLeg, rightArm, leftArm,  torso,  head, frame1]; 
  
  
    // OnClick Function
     check = function () {
      list.onclick = function () {
        let guess = (this.innerHTML);
        this.setAttribute("class", "active");
        this.onclick = null;
        for (let i = 0; i < word.length; i++) {
          if (word[i] === guess) {
            guesses[i].innerHTML = guess;
            counter += 1;
          } 
        }
        let j = (word.indexOf(guess));
        if (j === -1) {
          lives -= 1;
          comments();
          animate();
        } else {
          comments();
        }
      }
    }
    
      
    // Play
    play = function () {
      categories = [
          ["pikachu", "squirtle", "eevee", "snorlax", "charmander", "mewtwo", "jigglypuff", "weedle"],
          ["guardians-of-the-galaxy", "eternal-sunshine-of-the-spotless-mind", "the-bridge-over-the-river-kwai", "pinocchio", "fast-times-at-ridgemont-high", "freddy-got-fingered", "harry-potter-and-the-sorcerers-stone", "blade-runner"],
          ["super-mario-bros", "the-legend-of-zelda", "grand-theft-auto", "the-elder-scrolls-skyrim", "katamari-damacy", "sonic-the-hedgehog", "turok-dinosaur-hunter", "e-t-the-extra-terrestrial"],
          ["the-great-gatsby", "pride-and-prejudice", "of-mice-and-men", "to-kill-a-mockingbird", "adventures-of-huckleberry-finn", "squirrel-cigar-parties-for-dummies", "the-catcher-in-the-rye", "frankenstein"],
          ["the-beatles", "red-hot-chili-peppers", "radiohead", "wolfgang-amadeus-mozart", "johann-sebastian-bach", "ludwig-van-beethoven", "grandmaster-flash", "the-notorious-b-i-g"]


      ];
  
      chosenCategory = categories[Math.floor(Math.random() * categories.length)];
      word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];
      word = word.replace(/\s/g, "-");
      console.log(word);
      buttons();
  
      guesses = [ ];
      // lives = 7;
      lives = 1;
      counter = 0;
      space = 0;
      result();
      comments();
      selectCat();
      canvas();
    }
  
    play();
    
    // Hint
  
      hint.onclick = function() {
  
        hints = [

          ["Electric-Type", 
          "Water-Type", 
          "Co-Star of 'Let's Go' video game", 
          "Big and Sleepy", 
          "Fire-Type", 
          "Make sure to use your master-ball to catch this Legendary Psychic-Type", "Fairy-Type", 
          "Bug-Type"],


          ["Marvel Universe origin story about space adventurer Peter Quill and his ragtag group of heros", 
          "Jim Carrey tries to erase the memory of his ex in this 2004 Science Fiction Drama written by Charlie Kaufman", 
          "1957 epic-war-film about British POWs ordered to construct a bridge by their Japanese captors", 
          "Animated Disney classic where an old man is lonely so he makes a little wooden boy puppet and wishes for it to come to life... music numbers and surreal imagery ensue", 
          "80's coming-of-age film starring a young Sean Penn, Judge Reinhold and Jennifer Jason Leigh. Especially famous for a particular pool scene most excellent indeed", 
          "There was a time when The Tom Green Show was so popular people thought Tom Green should star in movies. This is one of those movies", 
          "First of many films based off the beloved children's novels of the same name", 
          "Cyberpunk Film noir based off Philip K. Dick's novel Do Androids Dream of Electric Sheep? "],


          ["Plumber siblings who jump over and on anything they encounter, eat magic mushrooms that make them grow twice their size, and throw fireballs and turtle shells as they make their way through a series of obstacles in order to save the kingdom... yet again... oh and also save the princess", 
          "Guide an elf man-boy through a series of dungeons and puzzles in order to save the kingdom... yet again... oh and also save the princess", 
          "Series where the player typically controls a generic wise guy trying to move their way up through the ranks of the criminal underworld by completing endless random missions featuring terrible controls, annoying objectives, and repetitive gameplay that leave the player bored and left just driving around listening to the radio whilst occasionally loosing control and ramping insanely off a ledge into an old woman walking alone right in front of a cop who doesn't seem to care so long as you drive away a few blocks and wait it out a bit", 
          "Adjust your character's avatar for over 2 hours while you have an existential meltdown over whether you identify more with being a Cat Person or a Lizard Person, only to finally settle on a Game of Thrones cosplay of Tormund Giantsbane because being a Nord will likely make your first playthrough more authentic", 
          "Roll everything in your path into a giant ball that continues to grow and grow, destroying entire city blocks and years of infrastructure, the life's work of so many hardworking citizens, all smashed into a weirdly beautiful sphere of chaos, only to discover you're still a disappointment in your father's eyes", 
          "Steer a blue hedgehog along a series of roller-coaster like levels, having a blast spinning and flying around the first half of each stage until you hit a spring which launches you into a underwater platforming hellscape that destroys your will to finish the game", 
          "First-person shooter based on an obscure comic book series featuring some of the most awkward controls ever conceived along with the Nintendo 64 controller, late 90's polygons, and fog effects that make everything suddenly vanish into a grey nothingness from which we cannot return...", "Developed for the Atari 2600 and based on the hugely successful film of the same name, this game was so terrible that over 700,000 copies were buried as a ritual offering to the old gods with hopes of saving the American youth from having to witness a once proud and wealthy empire crumble before their very eyes"],


          ["F. Scott Fitzgerald's magnum opus, a cautionary commentary on the American Dream and the opulence and excess of the roaring twenties", 
          "Jane Austen's classic novel about protagonist Elizabeth Bennet's emotional development admidst the constraints of her environment", 
          "John Steinbeck story about two men, George and Lennie, as they search for work during the Great Depression", 
          "Harper Lee's celebrated novel about racial injustice and the destruction of innocence in America", 
          "Mark Twain's contender for the Great American Novel, exploring race and identity in America through the lense of a young vagabond and his journey down the Mississippi", 
          "Craig Castleaz's award winning self help book... Recommended by xXxDragonSlayerxXx as the definitive resource when it comes to putting together a successful squirrel party", 
          "J.D. Salinger's creepy coming of age story that resonates with weirdos and has somehow found it's place alongside literary masterpieces despite it being a pretty average read", 
          "Mary Shelley's commentary on the horrors of modernism and man's willingness to play god"],


          ["John, Paul, George, Ringo", 
          "Most of their songs seem to be about something to do with California", "English band who hipsters love and albums include OK Computer and Pablo Honey", 
          "An eccentric maestro and child prodigy who composed over 600 works before his mysterious death at the early age of 35", 
          "German composer and musician of the Baroque period", 
          "German composer and pianist. A crucial figure in the transition between the Classical and Romantic era", 
          "One of the pioneers of hip-hop DJing, cutting, scratching and mixing. Their hit song 'The Message' was the first prominent hip hop song to provide a social commentary", 
          "A native of Brooklyn and considered by many to be one of the greatest rappers of all time"]
      ];
  
      let catagoryIndex = categories.indexOf(chosenCategory);
      let hintIndex = chosenCategory.indexOf(word);
      showClue.innerHTML = "Hint: " +  hints [catagoryIndex][hintIndex];
    };
  
     // Reset
  
    document.getElementById('reset').onclick = function() {
      correct.parentNode.removeChild(correct);
      characters.parentNode.removeChild(characters);
      showClue.innerHTML = "";
      showBox.innerHTML = '<canvas id="stickman"> This Text will show if the Browser does NOT support HTML5 Canvas tag</canvas>';


      context.clearRect(0, 0, 400, 400);
      play();
    }
  }

