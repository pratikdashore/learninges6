
/**
   #. Functional Programming

   #. Arrow/Fat notation functions
   #. Arrow and async
   #. Symbol
   #. iterators
   #. for of
   #. custom iterable
   #. generators

*/

// More details on arrow function is in different file


let sum = 0;
const numbers = [2, 3, 4, 1];

for (const i in numbers) {
  sum += numbers[i];
}

console.log(sum);

sum = 0;

let iterator = numbers.values();
let next = iterator.next();

while (!next.done) {
  sum += next.value;
  next = iterator.next();
}

console.log(sum);


sum = 0;

for (const i of numbers) {
  sum += i;
}

console.log(sum);


class ArrayIterator {

  constructor(arr) {
    this.arr = arr;
    this.idx = 0;
  }

  next() {
    let result = { value: undefined, done: true };
    if (this.idx < this.arr.length) {
      result.value = this.arr[this.idx];
      result.done = false;
      this.idx += 1;
    }
    return result;
  }

}

class Company {

  constructor() {
    this.employees = [];
  }

  addEmployees(...names) {
    this.employees = [...this.employees, ...names];
  }

  [Symbol.iterator]() {
    return new ArrayIterator(this.employees);
  }

}

let accolite = new Company();
accolite.addEmployees('Pratik', 'GS', 'Suhail');
for (const iterator of accolite) {
  console.log(iterator);
}


// more detailed version in separate file for symbols, iterators, and generators


class CompanyWithGen {

  constructor() {
    this.employees = [];
  }

  addEmployees(...names) {
    this.employees = [...this.employees, ...names];
  }

  *[Symbol.iterator]() {
    for (const i of this.employees) {
      yield i;
    }
  }

}

let accoliteWithGen = new CompanyWithGen();
accoliteWithGen.addEmployees('Pratik', 'GS', 'Suhail');
for (const iterator of accoliteWithGen) {
  console.log(iterator);
}

let filter = function* (items, predicate) {
  for (const item of items) {
    if (predicate(item)) {
      yield item;
    }
  }
}

let nums = [1, 2, 3, 4, 5, 6];
for (const i of filter(nums, t => t % 2 == 0)) {
  console.log(i);
}

let take = function* (items, number) {
  let count = 0;

  if (number < 1) {
    return;
  }

  for (const item of items) {
    yield item;
    count += 1;
    if (count >= number) {
      return;
    }
  }
}

let firstEven = take(filter(nums, i => i % 2 == 0), 1);
for (const i of firstEven) {
  console.log(i);
}


function* testGenertors() {
  let input = yield 'Hello';
  console.log(input);
  let input2 = yield 'World';
  console.log(input2);
  return input + input2;
}

let it = testGenertors();

let nextN = it.next();
while (!nextN.done) {
  console.log(nextN.value);
  nextN = it.next(1);
}

console.log(nextN);
console.log(it);

(() => {

  // sequential execution 

  const fn1 = (x) => new Promise((resolve) => {
    setTimeout(() => {
      console.log('Hello', x);
      resolve(x + 1000);
    }, x);
  })

  const applyAsync = (acc, curr) => acc.then(curr);

  const composeAsync = (...fns) => (x) => fns.reduce(applyAsync, Promise.resolve(x));

  const transformData = composeAsync(fn1, fn1, fn1);

  transformData(2000).then((res) => console.log('Done', res));


})()