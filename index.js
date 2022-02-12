const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  const newTutorials = tutorials.map(function (title) {
    let res = "";
    for (let x = 0; x < title.length; x++) {
      if (x === 0) {
        res = title[x].toUpperCase() + title.slice(x+1);
      } else if (title[x] === ' ') {
        res = res.slice(0,x+1) + title[x+1].toUpperCase() + title.slice(x+2);
      }
    }
    return res;
  });
  return newTutorials
}
