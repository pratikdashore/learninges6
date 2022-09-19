
function logMe(n){
  console.log(n,this.fName);
}

var fName = 'Global';
logMe('Global');

(() => {
   logMe('IIFY');
})();


setTimeout(() => {
  var fName = 'TimeOut';
  logMe('Timeout');
}, 1000);

var obj = {
  fName: 'Pratik',
  logMe
}

obj.logMe('Implicit');


Function.prototype.bindMe = function(context){
  let fn = this;
  return function () {
    return fn.apply(context, arguments);
  }
}

Function.prototype.bindMeEs6 = function (context) {
  return (...args) => this.apply(context, args);
}

var obj2 =  {
  fName:'Dashore'
}

var obj3 = {
  fName: 'Pratik'
}

let bindedMeEs6 = logMe.bindMeEs6(obj2);

bindedMeEs6('Binded ES6');

let bindedMe = logMe.bindMe(obj2);

bindedMe('Binded, explicit');

obj3.getName = logMe.bindMe(obj2);
obj3.getNameEs = logMe.bindMeEs6(obj2);

obj3.getName('Obj3');
obj3.getNameEs('Obj 3 ES');

function person(fName, age){
  this.fName = fName;
  this.age = age;
  return fName;
}


let p = new person('Pratik', 30);
console.log(p);

/* 

How to find this context 

1. Was the function called with `new` ?
2. Was the function called with `call` or `apply` specifying an explicit this?
3. Was the function called via a containing/owning object (context) i.e. obj.logMe();
4. Default: Global object (in non strict mode), undefined in strict mode. 
 

*/


