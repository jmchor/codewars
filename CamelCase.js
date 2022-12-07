function toCamelCase(str) {
        const newArray = str.split(/-|_/);

        return (
                newArray.shift() + // take first item out of newArray
                newArray
                        .map(
                                (item) =>
                                        item
                                                .charAt(0) // loop over array and access the first letter
                                                .toUpperCase() + // turn the letter into upper case
                                        item.slice(1)
                        ) // add the rest of the word to the upper case letter but WITHOUT the first original letter
                        .join('')
        ); // turns all items to Capitalized
}
