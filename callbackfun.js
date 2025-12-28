// what is the callback function in javascript

setTimeout(() => {
    console.log("This is settimeout after 5 sec")
}, 5001);

setTimeout(() => {
    console.log("This is settimeout after 2 sec")
}, 5000);

function x(y){
    console.log("I am function x");
    y();
}

x(function y(){
    console.log("I am function Y");
})
