function countSmileys(arr) {
    const validSmileyRegex = /^[:;][-~]?[)D]$/;
    let count = 0;

    for (const face of arr) {
        if (validSmileyRegex.test(face)) {
        count++;
        }
    }

    return count;
}

module.exports = countSmileys;