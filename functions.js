//function statement also known as function declaration


// a();
function a()
{
    console.log("a called");
}
// function expression
var b = function () {
    console.log("b called");
}
// b();


// function anonymous funciton

// function () {
//     console.log("c called");
// }

// Named Function Expression
var c = function xyz() {
    console.log("c called");
}

// Difference between parameters & arguments?

var d = function (param1, param2){
    console.log(param1, param2);
}

// d("arg1", "arg2");

// First class functions

var e = function (param1){
    console.log(param1);
}

function abc(){
    let a = 1999;
}

// e(abc);

// Arrow functions



























