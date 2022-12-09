function* testGenerator(inpI) {
  console.log(inpI);
  let inp = yield "hello";
  console.log(inp);
  let input2 = yield "world";
  console.log(input2);
  yield "Completed";
  console.log("Still i got printed");
  return inp + input2;
}
let i = 0;
let iter = testGenerator(i);
let val = iter.next(i);
while (!val.done) {
  i++;
  console.log(val.value);
  val = iter.next(i);
}
console.log(val);

let a = [];
a.push(1);
a.push(2);
a.push(3);
a.push(4);
a.push(5);

console.log(a);
a.pop();
a.pop();
console.log(a);


(() => {

  function* febbonacci(limit) {
    let curr = 0;
    let next = 1;
    let iteratorCount = 0;

    while (iteratorCount < limit) {
      const reset = yield curr;
      [curr, next] = [next, curr + next];
      if (reset) {
        throw 'Reset is passed';
        // curr = 0;
        // next = 1;
      }
      iteratorCount++;
    }
  }

  for (const iterator of febbonacci(5)) {
    console.log(iterator);
  }

  const iterator = febbonacci(10);
  let next = iterator.next();
  while (!next.done) {
    const random = Math.random();
    console.log(next.value, random);
    next = iterator.next(random > .75);
  }


})()