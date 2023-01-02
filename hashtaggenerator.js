function generateHashtag(str) {
        let stringArray = str.trim().split(' ');
        if (stringArray[0][0] === '#') {
                const replacement = stringArray[0].replace('#', '');
                stringArray.splice(0, 1, replacement);
        }

        for (let i = 0; i < stringArray.length; i++) {
                stringArray[i] = stringArray[i].charAt(0).toUpperCase() + stringArray[i].slice(1);
        }

        stringArray.unshift('#');
        stringArray = stringArray.join('');

        if (stringArray.length > 140) return false;
        if (!str.length || str === ' ' || !stringArray.length) return false;

        console.log(stringArray);
}

console.log(generateHashtag(''));
