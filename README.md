# Iterator Drill: Map

## Learning Goals

* Define how the `map()` method works
* Demonstrate `map()` with `Array`s
* Demonstrate `map()` with complex data structures


## Introduction

As developers, we find ourselves responsible for all sorts of common, but
tedious tasks, such as iterating over arrays. Although a `for` loop or nesting
in lists and collections will complete the task, we can take advantage of a
method like `map()` to organize and optimize our code into building blocks
of functions, which we can then chain together to create more readable and
understandable functions.

## Define How the `map()` Method Works

`Array.prototype.map()` is an array method that iterates over all elements,
allowing you to apply a function to each element in that array, and changing
them into something else. The result is then returned as a *new* array, leaving
the original array unmodified (but remember, **not** the elements we modify, that
requires defensive copying). This is super important, because it saves us from
having to create a new array ourselves and copy stuff in there, **or** modifying
the original elements in the array, which we may need later.

## Demonstrate `map()` with `Array`s

We use `map()` when we want to perform an action on each element in the collection,
and "gather" the results into a new `Array`.

We'll also use this as a chance to demonstrate some of the power of functions in
JavaScript. We'll write `map()` **four times** so you can see how the iterator
functions allow us to write more _expressive_ code.

### `for` and `for...of`

In this example, we are using a standard bit of iteration code. Because
`for ` and `for...of` are _general_ functions that can be used to do lots
of things another programmer won't be sure if the inner workings return
values are important or not.

```js
let students = [harryPotter, ronWeasley, hermioneGranger, ginevraWeasley];
let patroni = []; // Patroni, sg. patronus

for (const student of students) {
  patroni.push( student.namePatronus() );
}

//=> patroni = ["Stag", "Jack Russell Terrier", "Otter", "Horse"];
```

When we write `.map()` we are saying to other programmers: "Expect a new array
to come out of this after each element is touched!"

### `map()` and a function declaration

```js
function studentPatronusName(student) {
  return student.namePatronus();
}

let students = [harryPotter, ronWeasley, hermioneGranger, ginevraWeasley];
let patroni = students.map(studentPatronusName);
//=> patroni = ["Stag", "Jack Russell Terrier", "Otter", "Horse"];
```

With `map()` we're passing a function _as an argument_. Arguments can be
things like `Number` or `String`, but, in JavaScript, **can also** be
**work**. Very few other programming languages allow that!

The iterator function `map()` expects to be _passed a function as an
argument_ which they will hand each of their elements off to. In the case of
`map()` it hands each element to the function and stores the return value of
the function into a new `Array`.

This code is more _expressive_ because it lives up to the promise of map. It
creates a new `Array` after each element is "touched" by a function.

One drawback to this code is that the `studentPatronusName` function doesn't do
much work. It just returns something that the `student` _already_ knew how to
do.  What if we use a function expression ("anonymous function") instead?

### `map` and a function expression

```js
let students = [harryPotter, ronWeasley, hermioneGranger, ginevraWeasley];
let patroni = students.map(function(student) {
  return student.namePatronus();
});
//=> patroni = ["Stag", "Jack Russell Terrier", "Otter", "Horse"];
```

That's much shorter. It has all the same advantages of the previous version.

### `map` and an arrow function

Thanks to arrow functions, we can shorten up the function expression to:

```js
// When the parameter list is only one element, we can drop () !
let students = [harryPotter, ronWeasley, hermioneGranger, ginevraWeasley];
let patroni = students.map( student => student.namePatronus() )
//=> patroni = ["Stag", "Jack Russell Terrier", "Otter", "Horse"];
```

The code now fits on one line! There is much less noisy JavaScript code so
the _expressiveness_ has increased: "`patroni` is the result of `map`-ing
`students` and asking each for the result of its `namePatronus` method".

For the rest of of these examples, we'll use the arrow function.

## Demonstrate `map()` with Complex Data Structures

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

With  the native `map()` function that is a property of `Array`'s prototype.
It gives us the exact same result! Now that we know how map is implemented,
it holds no more secrets for us! We can discard our own `map()` function and
just use the `.map()` property on arrays.

## Conclusion

`map()` takes 2 arguments--a callback and the optional context. The callback runs
for each value in an array and returns each new value in the resulting array. It
returns a new array that is the same length as the original array and saves time
while making the code simpler and easy to read.

## Resources

- [MDN: Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)