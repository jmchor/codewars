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
        const replaceFirstLetter = textArray.splice(0, 1, region[region.length - 1 - region.indexOf(textArray[0])]);

        const returnArray = [textArray[0]];
        for (let i = 1; i < textArray.length; i++) {
                returnArray.push(
                        // eslint-disable-next-line prettier/prettier
                        region[(region.indexOf(returnArray[returnArray.length - 1]) + region.length - region.indexOf(textArray[i])) % region.length]);}
        const decryption = [];

        for (let j = 0; j < returnArray.length; j++) {
                if (j % 2 !== 0) {
                        if (returnArray[j] === returnArray[j].toUpperCase()) {
                                decryption.push(returnArray[j].toLowerCase());
                        } else if (returnArray[j] === returnArray[j].toLowerCase()) {
                                decryption.push(returnArray[j].toUpperCase());
                        }
                } else {
                        decryption.push(textArray[j]);
                }
        }
        return decryption.join('');
}
// "&61kujla"

// region[region.indexOf(firstConversion[i - 1]) - region.indexOf(firstConversion[i])]
//                                 B1                                    U20

// i =1

// region[(region.indexOf(returnArray[returnArray.length - 1]) + region.length - region.indexOf(textArray[i]))]
//                                         s 44                      77                       36
