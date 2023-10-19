function generatePermutations(inputStr) {
    const result = new Set();
    const permute = (str, remaining) => {
        if (remaining.length === 0) {
            result.add(str);
            return;
        }

        for (let i = 0; i < remaining.length; i++) {
            const nextChar = remaining[i];
            const rest = remaining.slice(0, i) + remaining.slice(i + 1);
            permute(str + nextChar, rest);
        }
    }

    permute('', inputStr);

    return Array.from(result);
}

module.exports = generatePermutations;