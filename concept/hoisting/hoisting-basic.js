'use strict'
/** Hoisting 案例 */

/**
 * functions, variables 都會提升，只有宣告會提升，賦值不會提升
 */
// function
sayHello();
function sayHello() {
  console.log('function sayHello');  // function sayHello
}


// variable
console.log('variable: ', a);  // variables: undefined
var a = 5;


/**
 * 優先權 function > variable
 */
console.log(testPriority1);  // [Function: testPriority1]

function testPriority1() {
  console.log('function testPriority');
}

var testPriority1 = 1;



console.log(testPriority2);  // [Function: testPriority1]

var testPriority2 = 2;

function testPriority2() {
  console.log('function testPriority');
}



/**
 * function 的 parameter
 */

function myFunc1(param) {
  console.log(param);  // parameter1
  var param = 'inner variable1';
}

myFunc1('parameter1');


myFunc2('parameter2');

function myFunc2(param) {
  console.log(param);  // parameter2
  var param = 'inner variable2';
}
