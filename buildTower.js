function towerBuilder(nFloors) {
        let n = `*\n`;
        const outputArray = [];
        for (let i = 0; i < nFloors; i++) {
                outputArray[i] = n;
                n += `*\n` + `*\n`;
        }

        console.log(`*\n`, `***\n`);
}

towerBuilder(3);
