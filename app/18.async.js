console.log('Starting');

setTimeout(() => {
  console.log(
    "time out callback",
    new Date().toLocaleTimeString(),
    new Date().getMilliseconds()
  );
}, 0);


var p = new Promise(function(resolve, reject){
     console.log('inside promise', new Date().toLocaleTimeString(), new Date().getMilliseconds());
     resolve(new Date().toLocaleTimeString());
})

p.then(function(res){
  console.log('inside then ', res, new Date().getMilliseconds());
})