// function cb() {
//     console.log("Call Back");
// }

// setTimeout(cb, 0);

// for (let i = 0; i < 10000; i++) {
//     console.log(i);
// }


// const radius = [3,1,2,4];

// const calculateArea = function (radius) {
//     const area = [];
//     for(let i =0; i<radius.length; i++){
//         area.push(radius[i]*radius[i]*(22/7));
//     }

//     console.log(area);
// }

// calculateArea(radius);

const radius = [3,1,2,4];

const area = function (radius)
{
    return Math.PI*radius*radius;
}

const diameter = function (radius)
{
    return 2*radius;
}

const circumferance = function (radius)
{
    return 2*Math.PI*radius;
}



const calculateArea = function(radius, logic)
{
    const output = [];
    for(let i = 0; i<radius.length; i++)
    {
        output.push(logic(radius[i]));
    }
    return output;
}

console.log(calculateArea(radius, area));

console.log(calculateArea(radius, diameter));

console.log(calculateArea(radius, circumferance));