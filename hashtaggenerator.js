function generateHashtag(str) {
        let stringArray = str.split(' ');
        for (let i = 0; i < stringArray.length; i++) {
                stringArray[i] = stringArray[i].charAt(0).toUpperCase() + stringArray[i].slice(1);
        }
        stringArray.unshift('#');
        stringArray = stringArray.join('');
        if (stringArray.length > 140) return false;
        if (!str.length || !stringArray.length) return false;

        console.log(stringArray);
}

console.log(generateHashtag('Hello there thanks for trying my Kata'));
