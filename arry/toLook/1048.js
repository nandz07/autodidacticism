var longestStrChain = function(words) {
    // Sort the words by length
    words.sort((a, b) => a.length - b.length);

    // Create a map to store the longest chain ending at each word
    const chainLengths = new Map();

    let maxChainLength = 0;

    for (const word of words) {
        let longestChain = 0;

        for (let i = 0; i < word.length; i++) {
            const prevWord = word.slice(0, i) + word.slice(i + 1);
            console.log(prevWord);

            if (chainLengths.has(prevWord)) {
                longestChain = Math.max(longestChain, chainLengths.get(prevWord) + 1);
            }
        }

        chainLengths.set(word, longestChain);
        maxChainLength = Math.max(maxChainLength, longestChain);
    }

    return maxChainLength + 1; // Add 1 to account for the current word
};

// Example usage:
const words = ["a", "b", "ba", "bca", "bda", "bdca"];
const result = longestStrChain(words);
console.log(result); // Output: 4
