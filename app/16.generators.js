function* testGenerator(){
  let inp = yield 'hello';
  console.log(inp);
  let input2 = yield 'world'
  console.log(input2);
  yield 'Completed';
  console.log('Still i got printed')
  return inp + input2;
}
let i = 0;
let iter = testGenerator();
let val = iter.next(i);
while(!val.done){
  i++;
  console.log(val.value);
  val = iter.next();
}