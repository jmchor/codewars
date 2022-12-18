/* eslint-disable array-callback-return */
const input = require('fs').readFileSync('./d2_input.txt', 'utf-8').split('\n');

const inputArray = input.map((data) => data.split(' ').map((element) => element));
const numArray = inputArray.map(
        (elem) =>
                elem.map((item) => {
                        if (item === 'A' || item === 'X') return 1;
                        if (item === 'B' || item === 'Y') return 2;
                        if (item === 'C' || item === 'Z') return 3;
                })

        // loop over array, if array[i+1] > array[i] add  array[i+1] to sum plus 6
        // if array[i+1] < array[i] add 1 to sum
        // if array[i+1] === array[i] add array[i+1] to sum plus 3
);

console.log(numArray);
