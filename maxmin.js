/* eslint-disable no-unused-vars */
/* eslint-disable no-empty */
/* eslint-disable valid-typeof */
/* eslint-disable no-plusplus */

// Write two functions max and min which returns the maximum and minimum value of the argument passed into them respectively.
// The argument passed into the function will be an array of numbers.
// If the argument is an empty array, the function should return 0.
// Further Instructions
// functions will take any number of arguments
// Arrays of numbers can be to any depth
// You can't use Math.max, Math.min, and require
// If one of the arguments can not be evaluated to a number, return NaN
function max(...args) {
        if (!args) return +0;

        const numArray = [...args];
        if ([...args] === []) return +0;

        const flatArray = numArray.flat(Infinity).map((item) => +item);

        if (flatArray.some((element) => isNaN(element))) return NaN;

        let biggest = flatArray[0];
        for (let i = 1; i < flatArray.length; i++) {
                if (flatArray[i] > biggest) {
                        biggest = flatArray[i];
                }
        }
        return biggest || 0;
}

function min(...args) {
        if (!args) return +0;
        const numArray = [...args];
        if ([...args] === []) return +0;

        const flatArray = numArray.flat(Infinity).map((item) => +item);

        if (flatArray.some((element) => isNaN(element))) return NaN;

        let smallest = flatArray[0];
        for (let i = 1; i < flatArray.length; i++) {
                if (flatArray[i] < smallest) {
                        smallest = flatArray[i];
                }
        }
        return smallest || 0;
}

// USeful solution

// function sortArray(arr) {
//     return arr.flat(Infinity).sort((a,b) => +a-+b).map(item => +item)
//  }

// function max(...arr){

//  const maxNum= sortArray(arr)

//    if(maxNum.some( item => isNaN(item)))
//    return NaN
//   return  maxNum.pop() || 0
// }

// function min(...arr){
// const minNum= sortArray(arr)
//  if(minNum.some( item => isNaN(item)))
//    return NaN
//   return  minNum.shift() || 0
// }
