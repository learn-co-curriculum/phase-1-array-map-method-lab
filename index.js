const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];

const titleCased = () => {
  return tutorials;
};

// iterate through the tutorials array modifying the name of each tutorial
// you will also need to access and modify each individual word.

// How can we "iterate" through individual words in a string?
const tutorialStrings = tutorials.map(function (title) {
  return title.split(" ");
});

// Can we execute an iteration inside an iteration? How?

// How can we capitalize just the first letter in a word?
// for each title select the first letter of each word and add .toUpperCase() method
