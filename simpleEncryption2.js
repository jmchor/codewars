/* eslint-disable no-plusplus */
/* eslint-disable no-useless-return */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-nested-ternary */
function encrypt(text) {
        const region = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.,:;-?! '()$%&"`.split('');
        const textArray = text.split('');
        if (textArray.some((letter) => !region.includes(letter))) throw new Error('Char not in Region!');
        if (text === '' || text === null) return text;

        const firstConversion = [];

        for (let i = 0; i < textArray.length; i++) {
                if (i % 2 !== 0) {
                        if (textArray[i] === textArray[i].toUpperCase()) {
                                firstConversion.push(textArray[i].toLowerCase());
                        } else if (textArray[i] === textArray[i].toLowerCase()) {
                                firstConversion.push(textArray[i].toUpperCase());
                        }
                } else {
                        firstConversion.push(textArray[i]);
                }
        }

        const secondConversion = [];

        for (let i = 0; i < firstConversion.length; i++) {
                const difference = region.indexOf(firstConversion[i - 1]) - region.indexOf(firstConversion[i]);
                if (i === 0) {
                        secondConversion.push(firstConversion[i]);
                } else if (difference < 0) {
                        secondConversion.push(region[difference + 77]);
                } else {
                        secondConversion.push(region[difference]);
                }
        }

        // eslint-disable-next-line prettier/prettier
        const replaceFirstLetter = secondConversion.splice(0,1, region[region.length - 1 - region.indexOf(secondConversion[0])]);

        return secondConversion.join('');

        // const secondConversion = firstConversion.forEach((letter, index) => {
        //         if (index > 0) {
        //                 letter === region[textArray[index - 1] - textArray[index] + 77];
        //         }
        // });
}

function decrypt(encryptedText) {
        const region = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.,:;-?! '()$%&"`.split('');
        const textArray = encryptedText.split('');

        const replaceFirstLetter = textArray.splice(0, 1, region[region.length - 77 + region.indexOf(textArray[0])]);

        const dec = function (s) {
                const ret = [s[0]];
                for (let i = 1; i < s.length; i++)
                        ret.push(
                                region[
                                        (region.indexOf(ret[ret.length - 1]) + region.length - region.indexOf(s[i])) %
                                                region.length
                                ]
                        );
                return ret.join('');
        };
}
