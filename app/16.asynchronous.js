


function MyPromise(executorFn) {

  this.then = function (resolveFn, rejectFn) {
      executorFn(resolveFn, rejectFn); 
  }

  this.catch = function catchPromiseError(errorFn) {
    errorFn(errorref);
  }

}


let myPromise = new MyPromise(function myPromiseExecutor(resolve, reject) {

  setTimeout(() => {
    reject('Hello Pratik!!');
  }, 5000);

});


myPromise.then(function resolve(res) {
  console.log(res);
}, function reject(message) {
  console.log(message);
});