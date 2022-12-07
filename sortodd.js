function sortArray(array) {
        const arrayOdd = array.filter((item) => item % 2).sort((a, b) => (a > b ? 1 : -1)); // create sorted array of odd numbers

        const newArray = array.map((item) => (item % 2 ? arrayOdd.shift() : item));

        array.forEach((item) => {
                if (item % 2 === 0) {
                        arrayOdd.splice(array.indexOf(item), 0, item);
                }
        });
}

sortArray([1, 2, 8, -3]);

// can also be written shorter as

// const arrayOdd = array.filter((item) => item % 2 != 0).sort((a, b) => (a > b ? 1 : -1));

//         array.forEach((item) => (item % 2 === 0 ? arrayOdd.splice(array.indexOf(item), 0, item) : null))

//         return arrayOdd;
