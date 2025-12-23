let nums = [43, 23, 98, 93, 88, 82, 100, 2, 43, 57];
let output = nums.filter( n  => n%2 === 0)
.map(n => n*2)
.reduce((a,b) => a + b);

console.log(output)

// .forEach(n =>{
//     console.log(n);
// });


// filter will filter the elements based on the condition
// map will change the element based on the condition
// Reduce will reduce to one element based on the condition