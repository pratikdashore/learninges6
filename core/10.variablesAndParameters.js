// Whats new in ES6

/*  #. Variables and Parameters

    #. let
    #. const
    #. Destructuring
    #. Default Parameters
    #. Rest Parameters
    #. Spread Operators
    #. Template String

  */

/**
 * No hoisting
 *
 */
function testLet(){
  let a = 20;
  if(true){
    let a = 10;
    console.log(a);
  }
  console.log(a);
}

testLet();


/**
 * Block scope
 * Similar to let
 * can not changes values once assigned
 * should be initialized at time of declaration
 */
function testConst(){
  const name = 'Pratik';
  console.log(name);
}

testConst();

/**
 *Explained in more details in separate file
 *
 */
function testDestructuring(){
  let [a,b,c] = [11,22,33];
  console.log(a,b,c);
}

testDestructuring();

/**
 *
 *
 * only works if parameter value is undefined i.e. either parameter is not passed or parameter is passed as undefined
 */
function testDefaultParameter(name="Pratik"){
  console.log(name);
}

testDefaultParameter();


function testSpreadOperator(x,y,z){
  console.log(x,y,z);

  let arr = [4,5,6];

  let extendedArr = [x,y,z,10,20,...arr];
  console.log(extendedArr);
}

testSpreadOperator(...[1,2,3]);


