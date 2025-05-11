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
  return tutorials.map(tutorial =>
    tutorial
    .split (' ')
    .map(word=> word[0].toUpperCase() + word.slice(1)).join (' ')
  )
}

// Logic: Breakdown the sentences into individual words (use .split)
//       Map to the first letter of each word (index 0) (use.toUpperCase)
//       Add the word back together (letter at index 0 (upoercased) and the remaining letters (use .join())
//       )

//titleCased(): returns an array with title case tutorial names. Note that this function takes no arguments and 
// should use the global tutorials variable as data.
