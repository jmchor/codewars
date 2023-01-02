function generateHashtag(str) {
        const stringArray = str.split(' ');
        for (let i = 0; i < stringArray.length; i++) {
                stringArray[i] = stringArray[i].charAt(0).toUpperCase() + stringArray[i].slice(1);
        }

        console.log(stringArray);
}

console.log(generateHashtag('Hello there thanks for trying my Kata'));
