let response = '';

for (const prop of Object.getOwnPropertyNames(Array.prototype)) {
  response += `${prop} ,`;
}

// console.log(response);

// New Array vs Mutating

//New array
// concat, filter, flat, flatmap, map, slice

// Mutating
// copywithin, fill, pop, push, reverse, shift, sort, splice, unshift

//iterative::
//every, filter, find, findIndex, findLastIndex, flatMap, forEach, group, groupToMap, map, sort

//Array methods are always generic — they don't access any internal data of the array object. They only access the array elements through the length property and the indexed elements. This means that they can be called on array-like objects as well.


// concat
// copyWithin
// fill
// find
// findIndex
// reverse
// shift
// unshift
// slice
// splice
// includes
// join
// keys
// entries
// values
// flat
// flatMap
// every
// some
// reduceRight
// at
// findLast
// findLastIndex

//Array.from, Array.isArray, Array.of 

// let aSet = new Set();
// aSet.add('Pratik');
// aSet.add('Dashore');
// let a = Array.from(aSet);
// console.log(a);
// console.log(aSet);

// console.log(Array.isArray(a))


// let b = Array.of('Rahul', 'Ramendra', 'Mayur');

// console.log(b);


let arr = ['Pratik', 'Rahul', 'Ramendra', 'Mayur', 'Siddharth'];

let eleAt2 = Array.prototype.at.call(arr, 2);

console.log(eleAt2);

let arr2 = ['Pratik', 'Manoj', 'Aashish', 'Suhail'];

let arrConcatenated = arr.concat(arr2);
console.log(arrConcatenated);

//Copywithin, 0 = target, 1 = start, 2 = end , copy the start to end (excluding) from target index

arrConcatenated.copyWithin(3, 5, 7);

console.log(arrConcatenated);

// const iteratore = arrConcatenated.entries();

// for (const [idx, val] of iteratore) {
//   console.log(idx, val);
// }

// const allStrings = arrConcatenated.every((ele) => typeof ele === 'string');

// console.log(allStrings);

// arrConcatenated.push(new Date());
// const allStringsN = arrConcatenated.every((ele) => typeof ele === 'string');

// console.log(allStringsN);

// fill 0 = value, 1 = start, 2 = end (upto but end excluded)

// let filledArr = arrConcatenated.fill('New Value', 3, 6);


// console.log(filledArr);
// console.log(arrConcatenated);


//flat :: The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
// default param value = 1 
// returns new array and doesn;t mutate 

/* const arr1 = [0, 1, 2, [3, 4]];

console.log(arr1.flat());
// expected output: [0, 1, 2, 3, 4]

const newArr = [0, 1, 2, [[[3, 4]]]];

console.log(newArr.flat(2));
// expected output: [0, 1, 2, [3, 4]]

const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
const flatArr = arr4.flat(Infinity);

console.log(flatArr);
console.log(arr4);

 */

// FlatMap = arr.map(...args).flat(); (map + flat) , flattening by depth 1; 

/* const strArr = ['It is rainy day', "", 'We can not go out and play today'];

const splitArr = strArr.map(ele => ele.split(" "));

console.log(splitArr);

const splitFlatten = strArr.flatMap(ele => ele.split(" "));

console.log(splitFlatten);

const a = [5, 4, -3, 20, 17, -33, -4, 18];

const result = [];

for (let index = 0; index < a.length; index++) {
  const element = a[index];
  if (element > 0) {
    if (element % 2 === 0) {
      result.push(element);
    } else {
      result.push(element - 1);
      result.push(1);
    }
  }

}

console.log(result); */

// reduceRight = Right Reduce 

//example flatten array reverse

/* let ar = [
  [0, 1],
  [2, 3],
  [4, 5]
];

let fArr = ar.reduceRight((accumulator, curr) => {
  return accumulator.concat(curr);
}, [])

console.log(fArr); */

// function composition 
// left to right 

/* function double(val) {
  return val * 2;
}

function increment(val) {
  return val + 1;
}

function compose(...fns) {
  return function (value) {
    return fns.reduce(function reducerCb(acc, currFn) {
      return currFn(acc);
    }, value)
  }
}

let composedFns = compose(increment, double);

let res = composedFns(2);

console.log(res);

// compose right to left 
// similar with reduceRight but with es6 

let composeRtL = (...fns) => (value) => fns.reduceRight((acc, currFn) => currFn(acc), value);

let composedRtL = composeRtL(increment, double);

console.log(composedRtL(2)); */

/* 
const array2 = [1, 2, 3];

const firstElement = array2.shift(array2);

console.log(firstElement);
console.log(array2); */


// Some 
/* The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false.It doesn't modify the array. */


// unshift 

/* The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array. */



const array1 = [1, 2, 3];

console.log(array1.unshift(4, 5));
// expected output: 5

console.log(array1);
// expected output: Array [4, 5, 1, 2, 3]









