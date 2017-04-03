//Episode 1

var name = 'Keith';

var printName = function() {
  console.log('My name is ' + name );
}

printName();
 
// outputs "My name is Keith" since name is a global variable, available to the printName function

//Episode 2

score = 5;

var result = function() {
var score = 3;
return score;
}

console.log(result());

//outputs 3, the score var within the function's scope will be found before the global score

//Episode 3

var suspectOne = 'Jay';
var suspectTwo = 'Val';
var suspectThree = 'Keith';
var suspectFour = 'Rick';

var allSuspects = function() {
  var suspectThree = 'Harvey'
  console.log('Suspects include: ' + suspectOne + ', ' + suspectTwo + ', ' + suspectThree + ', ' + suspectFour)
}

allSuspects();
console.log( 'Suspect three is:' + suspectThree )

// outputs "Suspects include: Jay, Val, Harvey, Rick" and then "Suspect three is: Keith"  the allSuspects function has a locally scoped suspectThree that will be used, but the log afterwards uses the global suspectThree

//Episode 4

var detective = {
    name : 'Ace Ventura',
    pet : 'monkey'
  }

var printName = function(detective) {
  return detective.name
}

var detectiveInfo = function() {
  detective['name'] = 'Poirot'
  return printName(detective);
}

console.log(detectiveInfo());

// outputs "Poirot"  as the global variable detective's name is changed by detectiveInfo, then the altered detective is passed to printName

//Episode 5

var murderer = 'rick';

var outerFunction = function(){
  var murderer = 'marc';

  var innerFunction = function(){
    murderer = 'valerie';
  }
  innerFunction();
}

outerFunction();
console.log('the murderer is ', murderer);

//output "rick" as murderer = valerie goes to the first murderer in it's scope, marc in this canse adn replaces the value.  It doesn't keep going to the global variable once it's done