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
  return tutorials.map(function(title) {
    console.log(title)
    let words = title.split(" ");
    console.log(words)
    words =words.map(function(word) {
      console.log(`${word[0]} - ${word}`)
      word = word.replace(word[0], word[0].toUpperCase())
      console.log(word)
      return word
    })

    title = words.join(" ")
    console.log(title)
    return title
  })
}
