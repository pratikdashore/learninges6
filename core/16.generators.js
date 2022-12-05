function* testGenerator() {
  let inp = yield "hello";
  console.log(inp);
  let input2 = yield "world";
  console.log(input2);
  yield "Completed";
  console.log("Still i got printed");
  return inp + input2;
}
let i = 0;
let iter = testGenerator();
let val = iter.next(i);
while (!val.done) {
  i++;
  console.log(val.value);
  val = iter.next(i);
}

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
