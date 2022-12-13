/* eslint-disable eqeqeq */
/* eslint-disable no-plusplus */
function encrypt(text, n) {
        if (text === '' || n <= 0) return text;
        if (text === null) return null;

        let textArray = text.split('');
        let odd = [];
        let even = [];
        let joinedArray = [];

        /*

        Could also be written:

        odd = textArray.filter((item, ctrl) => ctrl % 2 != 0)
        even = textArray.filter((item, ctrl) => ctrl % 2 === 0)

        */

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
        let decryptArray = encryptedText.split('');
        let middle = decryptArray.length / 2;
        let first = decryptArray.slice(middle);
        let second = decryptArray.slice(0, middle);
        let decryption = [];
        let decryptedText;

        for (let i = 1; i <= n; i++) {
                for (let j = 0; j < decryptArray.length; j++) {
                        decryption.push(first[j]);
                        decryption.push(second[j]);
                }

                decryptedText = decryption.join('');
                decryptArray = decryptedText.split('');
                decryption = [];
                middle = decryptArray.length / 2;
                first = decryptArray.slice(middle);
                second = decryptArray.slice(0, middle);
        }
        return decryptedText;
}
