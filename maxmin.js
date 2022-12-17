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
        if (!args) return 0;

        let numArray = [...args];
        if ([...args] === []) return 0;

        while (numArray.some((element) => typeof element === 'object')) {
                const newArray = [];
                numArray.forEach((element) => {
                        if (typeof element === 'object') {
                                element.forEach((subElement) => {
                                        newArray.push(subElement);
                                });
                        } else if (element !== []) {
                                newArray.push(element);
                        } else {
                        }
                });

                numArray = newArray;
        }

        for (let i = 0; i < numArray.length; i++) {
                if (/^\d+$/.test(numArray[i]) === true) {
                        numArray[i] = parseInt(numArray[i]);
                }
        }

        if (numArray.some((element) => typeof element !== 'number')) return NaN;
        let biggest = numArray[0];
        for (let i = 1; i < numArray.length; i++) {
                if (numArray[i] > biggest) {
                        biggest = numArray[i];
                }
        }
        return biggest;
}

function min(...args) {
        if (!args) return 0;
        let numArray = [...args];
        if ([...args] === []) return 0;

        while (numArray.some((element) => typeof element === 'object')) {
                const newArray = [];
                numArray.forEach((element) => {
                        if (typeof element === 'object') {
                                element.forEach((subElement) => {
                                        newArray.push(subElement);
                                });
                        } else if (element !== []) {
                                newArray.push(element);
                        } else if (/^\d+$/.test(element)) {
                                newArray.push(parseInt(element));
                        } else {
                        }
                });
                numArray = newArray;
        }

        for (let i = 0; i < numArray.length; i++) {
                if (/^\d+$/.test(numArray[i]) === true) {
                        numArray[i] = parseInt(numArray[i]);
                }
        }

        if (numArray.some((element) => typeof element !== 'number')) return NaN;
        let smallest = numArray[0];
        for (let i = 1; i < numArray.length; i++) {
                if (numArray[i] < smallest) {
                        smallest = numArray[i];
                }
        }
        return smallest;
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
