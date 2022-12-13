/* eslint-disable eqeqeq */
/* eslint-disable no-plusplus */
function encrypt(text, n) {
        if (text === '' || n <= 0) return text;
        if (text === null) return null;

        let encryptArray = text.split('');
        let odd = [];
        let even = [];
        let encryption = [];

        for (let i = 1; i <= n; i++) {
                for (let j = 0; j < encryptArray.length; j++) {
                        if (j % 2 != 0) {
                                odd.push(encryptArray[j]);
                        } else if (j % 2 === 0) {
                                even.push(encryptArray[j]);
                        }
                }

                encryption = odd.concat(even).join('');
                encryptArray = encryption.split('');
                odd = [];
                even = [];
        }
        return encryption;
}

function decrypt(encryptedText, n) {
        if (encryptedText === '' || n <= 0) return encryptedText;
        if (encryptedText === null) return null;

        let decryptArray = encryptedText.split('')
        let middle = decryptArray.length / 2
        let firstHalf = decryptArray.slice(middle)
        let secondHalf = decryptArray.slice(0,middle)
        let decryption = []
        let decryptedText;

        for (let i = 1; i <= n; i++) {
                for (let j = 0; j < decryptArray.length; j++) {

                        decryption.push(firstHalf[j])
                        decryption.push(secondHalf[j])

                }

              decryptedText = decryption.join('')
        }

}
