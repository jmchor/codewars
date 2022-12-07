/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
function palindrome(str) {
        const regex = /[^A-Za-z0-9]/g;

        str = str.toLowerCase().replace(regex, '');

        for (let i = 0; i < str.length / 2; i++) {
                if (str[i] !== str[str.length - 1 - i]) {
                        return false;
                }
        }

        return true;
}
palindrome('A man, a plan, a canal, Panama!');
