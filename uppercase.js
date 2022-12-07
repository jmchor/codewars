/* eslint-disable no-plusplus */
const driver = 'Hannes';
const navigator = 'Blargl';

// for (let i = 0; i < driver.length; i++) {
//         console.log(driver[driver.length - 1 - i]);
// }

if (driver[0] < navigator[0]) {
        console.log(`The driver's name goes first`);
} else if (navigator[0] < driver[0]) {
        console.log(`Yo, the navigator goes first definitely.`);
} else if (navigator[0] === driver[0]) {
        console.log(`What?! You both have the same name?`);
}
