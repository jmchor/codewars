/* eslint-disable no-plusplus */
/* eslint-disable no-useless-return */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-nested-ternary */
function encrypt(text) {
        const region = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.,:;-?! '()$%&"`.split('');
        const textArray = text.split('');
        if (textArray.some((letter) => !region.includes(letter))) throw new Error('Char not in Region!');
        // eslint-disable-next-line no-cond-assign
        else if (text === '' || text === null) return text;

        const firstConversion = textArray.map((letter) =>
                textArray.indexOf(letter) % 2 !== 0
                        ? letter === letter.toUpperCase()
                                ? letter.toLowerCase()
                                : letter.toUpperCase()
                        : letter
        );

        const secondConversion = [];
        for (let i = 0; i < firstConversion.length; i++) {
                if (i === 0) {
                        secondConversion.push(firstConversion[i]);
                } else {
                        secondConversion.push(
                                region[
                                        textArray.indexOf(firstConversion[i - 1]) -
                                                textArray.indexOf(firstConversion[i]) +
                                                77
                                ]
                        );
                }
        }

        // const secondConversion = firstConversion.forEach((letter, index) => {
        //         if (index > 0) {
        //                 letter === region[textArray[index - 1] - textArray[index] + 77];
        //         }
        // });
}

function decrypt(encryptedText) {}
