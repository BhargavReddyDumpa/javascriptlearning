const arr = [1, 3, 2, -6, 10, 4, 1, 2, -3, 12]


// function double(x)
// {
//     return x*2;
// }

// function triple(x)
// {
//     return x*3;
// }

// const output = arr.map(triple);

// console.log(output);

// function isOdd(x)
// {
//     return x%2;
// }

// const output = arr.filter(isOdd);

// console.log(output)

// const sum = arr.reduce(function(acc, curr){
//     acc = acc + curr;
//     return acc;
// }, 0);

// console.log(sum);

// const max = arr.reduce(function(acc, curr){
//     if(acc < curr){
//         acc = curr;
//     }

//     return acc;
// },0);

// console.log(max);

const users = [
    { firstName: "bhargav", lastName:"reddy", age:23 },
    { firstName: "Nani", lastName:"reddy", age: 30},
    { firstName: "Elon", lastName:"musk", age:50},
    { firstName: "Mark", lastName:"berg", age:45 },
];

const output = users.filter((x) => x.age < 45).map(x => x.firstName);
console.log(output);

//callback hell
//promises
//creating a promise, chaining & error handling
//async awai
// promise Apis