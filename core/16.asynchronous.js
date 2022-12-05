/*

function MyPromise(executorFn) {
  let err;

  this.then = function (resolveFn, rejectFn) {
    try {
      let newExecutor = executorFn(resolveFn, rejectFn);
      if(Object.prototype.toString.call(newExecutor) === '[object Function]'){
        new MyPromise(newExecutor);
      }
    } catch (error) {
      if (rejectFn) {
        rejectFn(error);
        err = undefined;
      }else{
        err = error;
      }
    }
    return this;
  };

  this.catch = function catchPromiseError(errorFn) {
    if(err){
      errorFn(err);
    }
    return this;
  };
}

let myPromise = new MyPromise(function myPromiseExecutor(resolve, reject) {
  throw 'There is an Issue';
});

myPromise
  .then(
    function resolve(res) {
      console.log('My Resolve::', res);
    },
    function reject(message) {
      console.log('My Reject::', message);
    }
  )
  .catch((err) => {
    console.error('My Catch::', err);
  });


let promise2 = new Promise(function myPromiseExecutor(resolve, reject) {
  throw 'There is an Issue';
});

promise2.then(
  function resolve(res) {
    console.log('Resolve 2::', res);
  },
  function reject(message) {
    console.log('My Reject::', message);
  }
)
  .catch((err) => {
    console.error('My Catch::', err);
  });

*/




// Promises 

// once error happens anywhere in promise chain, the error will be catched by first reject handler function, if its not defined it will be handled by catch method, if catch is not defined it will find next reject handler or error handler in chain, if non of them is available, it will be uncaught error, if error is not handled in promise chain, it will break the chain and will go to next reject handler or error handler. 

// in simple words, where ever in chain the first nearest catch or reject handler is defined, it will be handled there, if couldn't find it will be uncought. 


/* # Promise is a class 
   has 3 states 
        pending 
        fulfilled 
        rejected 

Static methods: 
Promise.all :      Fulfills when all of the promises fulfill; rejects when any of the promises rejects
Promise.allSettled:    Fulfills when all promises settle.
Promise.any: Fulfills when any of the promises fulfills; rejects when all of the promises reject.
Promise.race: Settles when any of the promises settles.In other words, fulfills when any of the promises fulfills; rejects when any of the promises rejects.
Promise.reject : Returns a new Promise object that is rejected with the given reason.
Promise.resolve: Returns a new Promise object that is resolved with the given value.If the value is a thenable(i.e.has a then method), the returned promise will "follow" that thenable, adopting its eventual state; otherwise, the returned promise will be fulfilled with the value.

    Generally, if you don't know if a value is a promise or not, Promise.resolve(value) it instead and work with the return value as a promise.

Instance methods: 
catch 
then 
finally  */




/* 

let timePromise = new Promise(function executor(resolve, reject) {

  throw 'Error from Promise';
  setTimeout(() => {
    resolve('Hello');
  }, 1000);

});

timePromise
  .then(function onFullFilled(response) {
    console.log("onFullfilled 1::", response);
    return 'World';
  }, function onReject(cause) {
    console.log('Reject handler 1::', cause);
  }).catch(function errorHandler(err) {
    console.log('Error Handler 1::', err);
  })
  .then(function onFulFilled2(response) {
    console.log("onFullfilled 2::", response);
  }).catch(function errorHandler2(err) {
    console.log('Error Handler 2::', err);
  }).finally(function finalFn() {
    console.log('I will be called always');
  });
 */



// #. XMLHttpRequest somehow doesn't work on node (xmlHttpRequest is not defined) and on chrome (CORS issue)

/*
function executeGetWithXmlHttp(url){

  let xhr = new XMLHttpRequest();

  xhr.open("GET", url);
  xhr.

  xhr.onload = () => {
    console.log(JSON.parse(xhr.responseText));
  }

  xhr.send();

}


executeGetWithXmlHttp(apis[0]);

function fetchUrlData(url) {

  fetch(url).then(function (res) { res.json().then(console.log) });

}

fetchUrlData(apis[0]);

*/


let apis = ['https://www.boredapi.com/api/activity', 'https://api.coingecko.com/api/v3/exchange_rates', 'https://open.er-api.com/v6/latest/USD', 'https://api.publicapis.org/entries', 'https://dog.ceo/api/breeds/image/random'];

function fetchUrlData(url, prevRes) {
  console.log('calling ::', url);
  console.log('PrevResponse', prevRes);
  return fetch(url).then(function (res) {
    console.log('response from api::', url);
    return res.json().then(function (resJson) {
      console.log('response from response json::', url);
      return resJson;
    })
  }).catch(console.log);

}

async function fetchUrlDataWithAsyncAwait(url, prevRes) {
  console.log('calling ::', url);
  console.log('PrevResponse', prevRes);
  let response;
  try {
    let apiResponse = await fetch(url);
    console.log('response from api::', url);
    response = await apiResponse.json();
    console.log('response from response json::', url);
  } catch (error) {
    console.log(error);
  }
  return response;
}

// fetchUrlData(apis[0]);


// Parallel executions 

// All (but will stop as soon as any of promise is in rejected statsus)

/* let p1 = Promise.resolve('Hello');
let p2 = Promise.reject('go to hell');
let p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'I should be printed');
}); */

/* Promise.all([p1, p2, p3]).then(function (values) {
  console.log('All values', values);
});


let allApiCallsParallel = apis.map(i => fetchUrlData(i));

Promise.all(allApiCallsParallel).then(function (res) {
  console.log('Parallel Response Execution::', res);
});
 */

// promise.allsettled  

/* Promise.allSettled([p1, p2, p3]).then(function settledHandler(values) {
  console.table(values)
}).catch((err) => {
  console.log(err);
}); */

// Promise.any 

// returns a single promise, if any of promises is fullfiled it will return fulfilled if all of them is rejected then rejected 

/* const promise1 = Promise.reject('Go to hell');
const promise2 = new Promise((resolve) => setTimeout(resolve, 100, 'quick'));
const promise3 = new Promise((resolve) => setTimeout(resolve, 500, 'slow'));

const promises = [promise1, promise2, promise3];

Promise.any(promises).then((value) => console.log(value)); */


// Promise.race 
// returns a single promise and resolves or rejects with first promise which got settled, it doesn't care about success or failure 

/* Promise.race(promises).then(function raceHandler(res) {
  console.log(res);
}).catch(function errHandler(err) {
  console.log(err);
})
 */

// async await 
//async wraps in a promise

async function foo() {
  return 1;
}

// is equal to 

function foo() {
  return Promise.resolve(1);
}

// await can not work without async 

// sequencial execution 

async function executeHardAsync() {
  const r1 = await fetchUrlData(apis[0]);
  const r2 = await fetchUrlData(apis[1]);
}

// executeHardAsync();


function executeSequentially(urls) {

  let data = apis.reduce(function reducer(prev, curr) {
    return prev.then(function (res) {
      return fetchUrlData(curr, res).then(function (result) {
        console.log(result);
        return result;
      });
    })
  }, Promise.resolve([]));

  data.then(function finalHandler(res) {
    console.log('final data::', res)
  })
}

function executeSequentiallyAndCollectResponses(apis) {
  let responses = [];

  let data = apis.reduce(function reducer(prev, curr) {
    return prev.then(function (res) {
      return fetchUrlData(curr, res).then(function (result) {
        console.log(result);
        return [...res, result];
      });
    })
  }, Promise.resolve(responses));

  data.then(function finalHandler(res) {
    console.log('final data::', res)
  })
}


// executeSequentiallyAndCollectResponses(apis);

/* 
async function executeSequentiallyWithAsyncAwaitByParalleCalls(urls) {
  let promises = urls.map((item) => {
    return fetchUrlData(item);
  });

  for (const promise of promises) {
    let res = await promise;
    console.log(res);
  }
}

executeSequentiallyWithAsyncAwaitByParalleCalls(apis); */

// execute sequentially with async await but not parallel calls 

async function executeSequentiallyWithAsyncAwaitWithoutParallelCalls(urls) {
  const responses = [];
  for (const url of urls) {
    let res = await fetchUrlDataWithAsyncAwait(url);
    console.log(res);
    responses.push(res);
  }
  console.log(responses);
}

// executeSequentiallyWithAsyncAwaitWithoutParallelCalls(apis);

// execute sequentially with for await parallel calls 

async function executeSeqWithForAwait(urls) {
  const responses = [];
  const promises = urls.map((url) => {
    return fetchUrlDataWithAsyncAwait(url);
  });

  for await (const res of promises) {
    console.log(res);
    responses.push(res);
  }
  console.log(responses);
}

// executeSeqWithForAwait(apis);


// Async generators 

async function* foo() {
  yield await Promise.resolve('a');
  yield await Promise.resolve('b');
  yield await Promise.resolve('c');
}

let str = '';

async function generate() {
  for await (const val of foo()) {
    str = str + val;
  }
  console.log(str);
}

generate();