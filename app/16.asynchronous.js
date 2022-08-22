function MyPromise(executorFn) {
  let errFn;

  this.then = function (resolveFn, rejectFn) {
    try {
      executorFn(resolveFn, rejectFn);
    } catch (error) {
      if(errFn){
        errFn(error);
      }else{
        throw error;
      }
    }

    return this;
  };

  this.catch = function catchPromiseError(errorFn) {
       errFn = errorFn;
  };
}

let myPromise = new MyPromise(function myPromiseExecutor(resolve, reject) {
      throw 'There is an Issue';
});

myPromise
  .then(
    function resolve(res) {
      console.log('Resolve',res);
    },
    function reject(message) {
      console.log('Reject::',message);
    }
  )
  .catch((err) => {
    console.log('Catch::',err);
  });
