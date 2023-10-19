function findOddInt(arr) {
    const count = new Map();

    for (const num of arr) {
        count.set(num, (count.get(num) || 0) + 1);
    }

    for (const [num, frequency] of count.entries()) {
        if (frequency % 2 === 1) {
        return num;
        }
    }
}

module.exports = findOddInt;