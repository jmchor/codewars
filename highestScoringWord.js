function high(x) {
        let highestScoringWord = '';
        let lastWordScore = 0;
        let currentWordScore = 0;

        const words = x.split(' ');

        // region [ SpecialAttentionHere ]
        words.map((word) => {
                // repeating this computation for every single word
                currentWordScore = 0;

                const singleCharacters = word.split(''); // split one word into single letters

                singleCharacters.map((letter) => {
                        currentWordScore = currentWordScore + letter.charCodeAt() - 96;
                        // looping over single letters, adding their values together
                        // resulting in a number
                        //
                });

                if (currentWordScore > lastWordScore) {
                        highestScoringWord = word; // word with the currently highest value
                        lastWordScore = currentWordScore; // setting the base value to the current words value
                }
        });
        // #endregion

        return highestScoringWord;
}
eeest;
