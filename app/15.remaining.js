// let dog1 = { name: 'Snickers', age: 3 };
// let dog2 = { name: 'sunny', age: 1 };

// const weakSauce = new WeakSet([dog1, dog2]);

// const normalSet = new Set([dog1, dog2]);

// console.log(weakSauce);
// dog1 = null;
// console.log(weakSauce);
// console.log(normalSet);

// let dog1 = { name: 'Snickers' };
// let dog2 = { name: 'Sunny' };

// const strong = new Map();
// const weak = new WeakMap();

// strong.set(dog1, 'Snickers is the best!');
// weak.set(dog2, 'Sunny is the 2nd best!');

// dog1 = null;
// dog2 = null;
// console.log(weak);
// console.log(strong);


/*
 aync await 
async generators 
for await of 
event loop 
concurrency model 
memory management 
mdn javascript advanced topics
 */

function promiseMe(){
  return new Promise((resolve, reject)=>{
    setTimeout(() => {
      resolve('Hello I am done')
    }, 2000);
  })
}

async function getd(){
 const data = await promiseMe();
 console.log(data);
 return data;
}

const a = getd().then(console.log);