//prevents letters from being pressed twice
var doubleWord = ['a','b','c',
                'd','e','f',
                'g','h','i',
                'j','k','l',
                'm','n','o',
                'p','q','r',
                's','t','u',
                'v','w','x',
                'y','z'];

//Duck word inventory
var wordBank = ['magpie', 'beak', 'honk', 'pekin', 'plumage', 'duck', 'quack', 'mighty', 'fly', 'float', 'beauty'];

var chosenWord = "";

var lettersInWord = [];

var numBlanks = 0;

var blanksAndSuccesses = [];

var wrongLetters = [];

//Counters
var winCount = 0;
var loseCount = 0;
var guessesLeft = 9;
var rightGuessCounter = 0;

//Functions

function reset () {

  chosenWord = wordBank[Math.floor(Math.random() * wordBank.length)];
  lettersInWord = chosenWord.split('');
  numBlanks = lettersInWord.length;

  letterGuessed = 0;
  rightGuessCounter = 0;
  guessesLeft = 8;
  wrongLetters = [];
  blanksAndSuccesses = [];
  doubleWord = ['a','b','c',
                'd','e','f',
                'g','h','i',
                'j','k','l',
                'm','n','o',
                'p','q','r',
                's','t','u',
                'v','w','x',
                'y','z'];
  test=false;
  startGame();
}

function startGame() {
  //chooses duck word
  chosenWord = wordBank[Math.floor(Math.random() * wordBank.length)];
  //splits duck word into letters
  lettersInWord = chosenWord.split('');
  //get number of blanks
  numBlanks = lettersInWord.length;

  //Start Game Reset
  rightGuessCounter = 0;
  guessesLeft = 8;
  wrongLetters =[];
  blanksAndSuccesses =[];
  doubleWord = ['a','b','c',
                'd','e','f',
                'g','h','i',
                'j','k','l',
                'm','n','o',
                'p','q','r',
                's','t','u',
                'v','w','x',
                'y','z'];

  //puts letters in blanks
  for(var i = 0; i < numBlanks; i++) {

    blanksAndSuccesses.push('_');
    document.getElementById('wordToGuess').innerHTML = blanksAndSuccesses;
  }
    //modifies HTML
    document.getElementById('wordToGuess').innerHTML = blanksAndSuccesses.join('');
    document.getElementById('numGuesses').innerHTML = guessesLeft;
    document.getElementById('winCounter').innerHTML = winCount;
    document.getElementById('lossCounter').innerHTML = loseCount;
    document.getElementById('wrongGuesses').innerHTML = wrongLetters;
    //console log tests
    console.log(chosenWord);
    console.log(lettersInWord);
    console.log(numBlanks);
    console.log(blanksAndSuccesses);

}

function compareLetters(userKey) {

  console.log('test test test');

  //if player key letter exists in chosen word
  if(chosenWord.indexOf(userKey) > -1) {
    //loops dependant on number of blanks
    for(var i = 0; i < numBlanks; i++) {
      //fills in correct index with user key
      if(lettersInWord[i] === userKey) {
        rightGuessCounter++;
        blanksAndSuccesses[i] = userKey;
        document.getElementById('wordToGuess').innerHTML = blanksAndSuccesses.join('');
      }

    }
    //test
    console.log(blanksAndSuccesses);
  }
  else {
    wrongLetters.push(userKey);
    guessesLeft--;
    //change html
    document.getElementById('numGuesses').innerHTML = guessesLeft;
    document.getElementById('wrongGuesses').innerHTML = wrongLetters;
    //console logs
    console.log('Wrong Letters =' + wrongLetters);
    console.log('Guesses left are' + guessesLeft);
  }

}

function winLose() {
  //win the game if blanks are filled correctly
  if(rightGuessCounter === numBlanks) {

    //win count
    winCount++;
    //change html
    document.getElementById('winCounter').innerHTML = winCount;
    alert('HONK HONK! You win!');

  }
  else if(guessesLeft === 0) {
    //loss count
    loseCount++;
    //change html
    document.getElementById('lossCounter').innerHTML = loseCount;
    alert('HONK! HONK! You lose!');
    
  }
}

//game startup

startGame();

document.onkeyup = function(event) {

  test = true;
  var letterGuessed = event.key;
  for(var i = 0; i < doubleWord.length; i++) {
    if(letterGuessed === doubleWord[i] && test === true) {
      var splicedWord = doubleWord.splice(i,1);
      //console logs
      console.log('Double word is =' + doubleWord[i])
      console.log('Spliced word is =' + splicedWord);

      compareLetters(letterGuessed);
      winLose();

    }
  }
}