
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

// weakmap requires object as key (key must be an object)

// some of methods or props are missing compared to map and set
// like size, forEach, enteries, values

// Map vs Object
// Object can only have string, number and Symbols as key while array key can be of any data type
//  Objects doesn't contain key values in insertion order while map gives values in insertion order
// You can get the size of a Map easily, while you have to manually keep track of size for an Object.

let wmap = new WeakMap();

wmap.set({name:'pratik'}, 'Dashore'); 

console.log(wmap);

/* Array and Set compared
Traditionally, a set of elements has been stored in arrays in JavaScript in a lot of situations.The Set object, however, has some advantages:

Deleting Array elements by value(arr.splice(arr.indexOf(val), 1)) is very slow.
Set objects let you delete elements by their value.With an array, you would have to splice based on an element's index.
The value NaN cannot be found with indexOf in an array.
Set objects store unique values.You don't have to manually keep track of duplicates.
 */



let map = new Map();

map.set('name', 'pratik');
map.set('name', 'Dashore');



/* WeakSet object
WeakSet objects are collections of objects.An object in the WeakSet may only occur once.It is unique in the WeakSet's collection, and objects are not enumerable.

The main differences to the Set object are:

In contrast to Sets, WeakSets are collections of objects only, and not of arbitrary values of any type.
The WeakSet is weak: References to objects in the collection are held weakly.If there is no other reference to an object stored in the WeakSet, they can be garbage collected.That also means that there is no list of current objects stored in the collection.
WeakSets are not enumerable.
The use cases of WeakSet objects are limited.They will not leak memory, so it can be safe to use DOM elements as a key and mark them for tracking purposes, for example. */

function showProps(obj, objName) {
  let result = "";
  for (const i in obj) {
    // Object.hasOwn() is used to exclude properties from the object's
    // prototype chain and only show "own properties"
    if (Object.hasOwn(obj, i)) {
      result += `${objName}.${i} = ${obj[i]}\n`;
    }
  }
  console.log(result);
}