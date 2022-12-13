// Whats new in ES6

/*  #. Variables and Parameters

    #. let
    #. const
    #. Destructuring
    #. Default Parameters
    #. Rest Parameters
    #. Spread Operators
    #. Template String

  */

/**
 * No hoisting
 *
 */

/*  simple premitive values are hold as copy in variables while others are hold as reference in variable/
  simple premitives = null, undefined, boolean, string, number

  let a = true; // holds copy 
  let b = a; 
  a = false; // a = false, b = true;
  
  let a = [1,2,3] // holds array reference 
  let b = a;  // copy the reference 
  a[0] = 20;  // a[0] and b[0] both are 20 */


function testLet() {
  let a = 20;
  if (true) {
    let a = 10;
    console.log(a);
  }
  console.log(a);
}

testLet();


/**
 * Block scope
 * Similar to let
 * can not changes values once assigned
 * should be initialized at time of declaration
 */
function testConst() {
  const name = 'Pratik';
  console.log(name);
}

testConst();

/**
 *Explained in more details in separate file
 *
 */
function testDestructuring() {
  let [a, b, c] = [11, 22, 33];
  console.log(a, b, c);
}

testDestructuring();

/**
 *
 *
 * only works if parameter value is undefined i.e. either parameter is not passed or parameter is passed as undefined
 */
function testDefaultParameter(name = "Pratik") {
  console.log(name);
}

testDefaultParameter();


function testSpreadOperator(x, y, z) {
  console.log(x, y, z);

  let arr = [4, 5, 6];

  let extendedArr = [x, y, z, 10, 20, ...arr];
  console.log(extendedArr);
}

testSpreadOperator(...[1, 2, 3]);

(() => {

  function Person(age) {
    this.age = age;
  }
  let obj = {
    'null': null,
    'undefined': undefined,
    'number': 10,
    'string': 'Some String',
    'boolean': true,
    'Symbol': Symbol('name'),
    'BigInt': 1n,

    'Objects': new Person(30),
    'Function': function (params) { },
    'Array': [1, 2],
    'Set': new Set([2]),
    'WeakSet': new WeakSet([{ 'h': 'e' }]),
    'Map': new Map(),
    'WaekMap': new WeakMap(),
    'Date': new Date(),
    'NaN': NaN,

  }

  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      const element = obj[key];
      console.log(`Type of ${key} is :: `, typeof element);
      console.log(`Object.prototype.toString.call of ${key} is :: `, Object.prototype.toString.call(element));
    }
  }

})()


