var x = Symbol();

var y = Symbol();

// symbol is new data type in js. it uses to store global unique values.

var obj = {
  name: "Pratik",
  [x]: "this is config and should not be changed by any one"
};

// two symbols can never be unique. so no one can access obj[x] untill and unless they have x symbol with them.

x === y; // will result false although there declaration is similar.

obj[x]; // if you are not exposing symbol x then your property can not be rewritten by any one.

////////////////////////////

// predefined symbols are used to play with meta data behavior for coding like iterators of for of loop.

Symbol.isConcatSpreadable;
Symbol.iterator;
Symbol.toPrimitive;
Symbol.toStringTag;

// these are some predefined sysmbols are aavailable which are used to play with meta behaviour.

// we can write our own iterator by using Symbol.iterator;

var obj = {
  values: [12, 3, 12, 3, 23, 4, 454, 545, 656, 5656, 5656, 767676878, 8888, 2323, 23, 233, 45, 7, 5, 67, 8787],
  start: 3,
  end: 7
};

// lets start writting iterator for above object.

var obj = {
  [Symbol.iterator]: function () {
    var idx = this.start, en = this.end;

    var it = {
      //writting using array notation, to avoid binding of this keyword for next, else next will take context of 'it'.
      next: () => {
        if (idx <= en) {
          let val = this.values[idx];
          idx++;
          return {
            value: val,
            done: false
          };
        } else {
          return { value: undefined, done: true }
        }
      }
    };
    return it;
  },
  values: [12, 3, 12, 3, 23, 4, 454, 545, 656, 5656, 5656, 767676878, 8888, 2323, 23, 233, 45, 7, 5, 67, 8787],
  start: 3,
  end: 7
};


var a = [...obj];
for(let a of obj){
  console.log(a)
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// With Class or contructor 

function CustomIterator(arr = [], start = 0, end){
  end = end === undefined ? arr.length : end;
  this.values = arr;
  this[Symbol.iterator] = function (){
    let idx = start; 
    let it = {
       next : () => {
          if(idx <= end){
            let value = this.values[idx];
            idx++;
            return { value, done: false};
          }else {
            return { value: undefined, done: true};
          }
       }
    }
    return it;
  }
}

let arr = [12, 3, 12, 3, 23, 4, 454, 545, 656, 5656, 5656, 767676878, 8888, 2323, 23, 233, 45, 7, 5, 67, 8787];
let iterator = new CustomIterator(arr, 5, 9);

for (let a of iterator) {
  console.log(a)
}


//////////////////////////////////////////////////////////////////////////////////
// as custom array 

function CustomArray(arr = [], start = 0, end) {
  end = end === undefined ? arr.length : end;
  this.start = start;
  this.end = end;
  Array.call(this, arr);
}

CustomArray.prototype = Object.create(Array.prototype);

CustomArray.prototype[Symbol.iterator] = function () {
  let idx = this.start;
  let it = {
    next: () => {
      if (idx <= this.end) {
        let value = this[idx];
        idx++;
        return { value, done: false };
      } else {
        return { value: undefined, done: true };
      }
    }
  }
  return it;
}

let abc = [12, 3, 12, 3, 23, 4, 454, 545, 656, 5656, 5656, 767676878, 8888, 2323, 23, 233, 45, 7, 5, 67, 8787];
let newArr = new CustomArray(arr, 5, 9);

let filtered = [...newArr].filter((ele) => {
  console.log(ele);
  return ele % 2;
});
console.log(filtered);





/// generators 

// basically to pause and resume functionality , it knows its state where it was, it yields the output by yeilds keyword and can be used with iterators.

function* customGen(val) {
  console.log('hello');
  yield 1;
  console.log('world');
  yield 2;
  console.log('complete');
  return;
}

var it = customGen(10);

it.next();


// converting custom iterator example with generator


var obj = {
  [Symbol.iterator]: function* () {
    for (let i = this.start; i <= this.end; i++) {
      yield this.values[i];
    }
  },
  values: [12, 3, 12, 3, 23, 4, 454, 545, 656, 5656, 5656, 767676878, 8888, 2323, 23, 233, 45, 7, 5, 67, 8787],
  start: 3,
  end: 7
};

var a = [...obj];


var a = { name() { console.log('this is named function') } };

// this is valid js, we can write above code as 

var obj = {
  *[Symbol.iterator]() {
    for (let i = this.start; i <= this.end; i++) {
      yield this.values[i];
    }
  },
  values: [12, 3, 12, 3, 23, 4, 454, 545, 656, 5656, 5656, 767676878, 8888, 2323, 23, 233, 45, 7, 5, 67, 8787],
  start: 3,
  end: 7
};

var a = [...obj];