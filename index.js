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

// const titleCased = () => {
//   return tutorials
// }
// // 1 word
// const word= "what"

// const fixed =
//   word[0].toUpperCase() +
//   word.slice(1).toLowerCase();
// // "What"

// 1 sentence

// const sentence = "what does the this keyword mean?"

// const result = sentence
//   .split(" ")
//   .map(word =>
//     word[0].toUpperCase() +
//     word.slice(1).toLowerCase()
//   )
//   .join(" ")

// console.log(result)

// each line of the array
// const titleCased = () => {
//   return tutorials.map(sentence =>
//     sentence
//       .split(" ")
//       .map(word =>
//         word[0].toUpperCase() +
//         word.slice(1).toLowerCase()
//          //this is the part that is failing the test, there are some wrods that need to all remain capital so .toLowerCase cant work
//       )
//       .join(" ")
//   )
// }
const titleCased = () => {
  return tutorials.map(sentence =>
    sentence
      .split(" ")
      .map(word =>
        word[0].toUpperCase() + word.slice(1)
      )
      .join(" ")
  )
}