let dog1 = { name: 'Snickers', age: 3 };
let dog2 = { name: 'sunny', age: 1 };

const weakSauce = new WeakSet([dog1, dog2]);

const normalSet = new Set([dog1, dog2]);

console.log(weakSauce);
dog1 = null;
console.log(weakSauce);
console.log(normalSet);

let dog3 = { name: 'Snickers' };
let dog4 = { name: 'Sunny' };

const strong = new Map();
const weak = new WeakMap();

strong.set(dog3, 'Snickers is the best!');
weak.set(dog4, 'Sunny is the 2nd best!');

dog3 = null;
dog4 = null;
console.log(weak);
console.log(strong);