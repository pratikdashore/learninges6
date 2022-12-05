
let num = 071;
console.log(num);
let octal = parseInt(num);
console.log(octal);

// New number API methods
// Math API has added a lot of new features
// several new methods on Array api
// find
// findIndex
// fill
// copyWithin
// Array.of
// Array.from
// Array.enteries
// Array.keys

// Array comprehensions

// SET
let aset = new Set();
let a = {};
aset.add(a);
aset.add(a);
console.log(aset.size);
aset.forEach(t => console.log(t));

let bset = new Set([1,2,3,4,4,4,5]);
console.log(bset.size);

bset.delete(4);
console.log(bset.size);

for (const iterator of bset) {
  console.log(iterator);
}

// MAPS

// WeakMap and WeakSet
// similar to map and set expect items are eligible for garbage collectiona and does not keep
// a strong pointer as set or map

// some of methods or props are missing compared to map and set
// like size, forEach, enteries, values

// Map vs Object 
// Object can only have string, number and Symbols as key while array key can be of any data type 
//  Objects doesn't contain key values in insertion order while map gives values in insertion order 








