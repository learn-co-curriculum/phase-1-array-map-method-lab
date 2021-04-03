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
  //arr = tutorials.map(str =>  str.charAt(0).toUpperCase() + str + str.slice(1));
  let tutor
  let caps = tutorials.map(string => {
    tutor = string.split(' ').map(str => str.charAt(0).toUpperCase() + str.slice(1))
   return tutor.join(' ')})
   //debugger
    return caps
   
}

console.log(titleCased())