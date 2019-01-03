# Iterator Drill: Map

## Learning Goals

* Define how the `map()` method works
* Use `map()` on complex data structures


## Introduction

Iterating over arrays is a very common task we will find ourselves
performing as developers. Using `for` loops, can get tedious after
a while. Rather than using `for` loops and nesting to process data
in lists and collections, you can take advantage a method like `map()`
to better organize your logic into building blocks of functions,
and then chain them to create more readable and understandable
implementations.

## Define How the `map()` Method Works

`Array.prototype.map()` is an array method that iterates over all elements,
allowing you to apply a function to each element in that array, effectively
transforming them into something else. The result is then returned as a *new*
array, leaving the original array intact and unmodified (but remember, **not**
the elements we modify, necessitating the need for defensive copying). That
last part is super important, because it either saves us from having to create
a new array ourselves and copy stuff in there, **or** modifying the original
elements in the array

Let's look at how a `map()` function may be written using a `for` loo:

```js
function map(collection, callback) {
  const result = [];

  for (let i = 0; i < collection.length; i++) {
    const element = collection[i];
    result.push(callback(element));
  }

  return result;
}
```
Let's test this function that will double a list of numbers:

```js
const numbers = [1, 2, 3];
const doubledNumbers = map(numbers, function (number) {
 return number * 2;
});
console.log(doubledNumbers); // prints [2, 4, 6]
```
Using the `map()` function that is already part of the JS standard
library, we will map the same elements to a new array.

```js
const doubles = numbers.map(function(num) {
  return num * 2;
});
console.log(doubles); // prints [2, 4, 6]
```

## Use `map()` on Complex Data Structures

Let's use the `map()` function on a trickier data structure — a list of robots.
To start things off, we have an array of robots. Now, let's activate all of
them. An activated robot needs to be marked as such using the `isActivated`
boolean, as well as have its number of modes doubled:

```js
const robots = [
  { name: 'Johnny 5', modes: 5, isActivated: false, },
  { name: 'C3PO', modes: 3, isActivated: false, },
  { name: 'Sonny', modes: 2.5, isActivated: false, },
  { name: 'Baymax', modes: 1.5, isActivated: false, },
];

const activatedRobots = robots.map(function (robot) {
  return Object.assign({}, robot, {
    modes: robot.strength * 2,
    isActivated: true,
  });
});

console.log(activatedRobots);

/*
 Result:
 [
   { name: 'Johnny 5', modes: 10, isActivated: true },
   { name: 'C3PO', modes: 6, isActivated: true },
   { name: 'Sonny', modes: 5, isActivated: true },
   { name: 'Baymax', modes: 3, isActivated: true }
 ]
*/
```

With  the native `map()` function that is a property
of `Array`'s prototype. It gives us the exact same result! Now that we know how
map is implemented, it holds no more secrets for us! We can discard our own `map()`
function and just use the `.map()` property on arrays. Sweet!

## Conclusion

`map()` takes 2 arguments--a callback and the optional context. The callback runs
for each value in an array and returns each new value in the resulting array. It
returns a new array that is the same length as the original array and saves time
while making the code simpler and easy to read.

## Resources

- [MDN: Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)