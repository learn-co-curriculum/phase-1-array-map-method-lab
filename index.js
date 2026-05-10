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



function titleCased() {
  return tutorials.map((title) => {
    let result = "";

    for (let item = 0; item < title.length; item++) {
      if (item === 0 || title[item - 1] === " ") {
        result += title[item].toUpperCase();
      } else {
        result += title[item]
      }
    }

    return result
  });
}
