/* eslint-disable eqeqeq */
/* eslint-disable no-plusplus */
function encrypt(text, n) {
        if (text === '' || n <= 0) return text;
        if (text === null) return null;

        let textArray = text.split('');
        let odd = [];
        let even = [];
        let joinedArray = [];

        for (let i = 1; i <= n; i++) {
                for (let j = 0; j < textArray.length; j++) {
                        if (j % 2 != 0) {
                                odd.push(textArray[j]);
                        } else if (j % 2 === 0) {
                                even.push(textArray[j]);
                        }
                }

                joinedArray = odd.concat(even).join('');
                textArray = joinedArray.split('');
                odd = [];
                even = [];
        }
        return joinedArray;
}

function decrypt(encryptedText, n) {
        if (encryptedText === '' || n <= 0) return encryptedText;
        if (encryptedText === null) return null;
}
