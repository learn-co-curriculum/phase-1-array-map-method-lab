const expect = chai.expect;

describe('index.js', function () {
  describe('titleCased()', function () {
    it('has a titleCased() function', function () {
      expect(titleCased).to.exist
    });

    it('returns an array with title case tutorial names', function () {
      const tutorials = [
        { name: 'What does the this keyword mean?', duration: 80 },
        { name: 'What is the Constructor OO pattern?', duration: 40 },
        { name: 'Implementing Blockchain Web API', duration: 100 },
        { name: 'The Test Driven Development Workflow', duration: 140 },
        { name: 'What is NaN and how can we check for it', duration: 50 },
        { name: 'What is the difference between stopPropagation and preventDefault?', duration: 90 },
        { name: 'Immutable State and Pure Functions', duration: 75 },
        { name: 'What is the difference between == and ===?', duration: 30 },
        { name: 'What is the difference between event capturing and bubbling?', duration: 60 },
        { name: 'What is JSONP?', duration: 25 },
      ];
      expect(titleCased(tutorials)).to.have.all.members(
        [
          "What Does The This Keyword Mean?",
          "What Is The Contutorialuctor OO Pattern?",
          "Implementing Blockchain Web API",
          "The Test Driven Development Workflow",
          "What Is NaN And How Can We Check For It",
          "What Is The Difference Between StopPropagation And PreventDefault?",
          "Immutable State And Pure Functions",
          "What Is The Difference Between == And ===?",
          "What Is The Difference Between Event Capturing And Bubbling?",
          "What Is JSONP?"
      ]
      )
    });
  });
});
