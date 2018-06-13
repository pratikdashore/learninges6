//// es5

function getId(x) {
  return 3;
}

//// es6

// function declarations

//without parameters
var fun;

fun = () => 3;

// arrow functions are annonymous functions, syntecticly you can not assign name to arrow functions, although you assign it to variable.

// with parameters

// you do not need to wrap arguments in paranthesis if it is single argument, for multiple or 0 arguments you need parathesis

fun = x => 3;

fun = (...x) => 3;

// function body : you can write function body without curly braces but it would allow only expressions and that will be return implecitly

// to have statements you need curly braces, when used curly braces you need actually a return keyword to return value from function

fun = (x, y) => {
  return 3;
};

// always use the named functions over arrow functions as they are better while looking into stack trace

http(url).then(function getResult(response) {
  return response.data;
});

// can be written as

http(url).then(response => response.data);

//the problem occours if you want to debug it or if fails in running time if response come null or undefined.

// then what is the best use of arrow functions
// arrow functions shines where ever you need to refer your context (usually people use var self = this;) or use bind functions.

var obj = {
  name: "Pratik",
  fun: function() {
    setTimeout(function() {
      console.log(this.name);
    }, 100);
  }
};

// as settimeout callback uses window object as this, you will probably get undefined. to overcome this issue normaly people use

var obj = {
  name: "Pratik",
  fun: function() {
    var self = this;
    setTimeout(function() {
      console.log(self.name);
    }, 100);
  }
};

//which is kind of saving the execution context and refer it in setTimeout callback.

// here the arrow functions best suits as arrow functions do not assign this. thus this will be taken by its parent in laxical scoping.

var obj = {
  name: "Pratik",
  fun: function() {
    setTimeout(() => {
      console.log(this.name);
    }, 100);
  }
};

// arrow functions does not assign this, it can not bound to be this keyword. this keyword works based on laxical scoping

var v = {
  name: "Pratik",
  fun: () => {
    console.log(this);
  }
};

v.fun(); // window (as window is its parent context)
