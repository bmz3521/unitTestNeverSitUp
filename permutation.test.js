const generatePermutations = require('./permutation');
const findOddInt = require('./findOdd');
const countSmileys = require('./countSmiley');

// ---------------------------Permutations------------------------------------------------
test('Permutations of "a"', () => {
  const result = generatePermutations('a');
  expect(result).toEqual(['a']);
});

test('Permutations of "ab"', () => {
  const result = generatePermutations('ab');
  expect(result).toEqual(['ab', 'ba']);
});

test('Permutations of "abc"', () => {
  const result = generatePermutations('abc');
  expect(result).toEqual(['abc', 'acb', 'bac', 'bca', 'cab', 'cba']);
});

test('Permutations of "aabb"', () => {
  const result = generatePermutations('aabb');
  expect(result).toEqual(['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']);
});



// -----------------------------odd integer---------------------------------------------------
test('Finds the odd integer in [7]', () => {
    const result = findOddInt([7]);
    expect(result).toBe(7);
});

test('Finds the odd integer in [0]', () => {
    const result = findOddInt([0]);
    expect(result).toBe(0);
});

test('Finds the odd integer in [1, 1, 2]', () => {
    const result = findOddInt([1, 1, 2]);
    expect(result).toBe(2);
});

test('Finds the odd integer in [0, 1, 0, 1, 0]', () => {
    const result = findOddInt([0, 1, 0, 1, 0]);
    expect(result).toBe(0);
});

test('Finds the odd integer in [1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]', () => {
    const result = findOddInt([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]);
    expect(result).toBe(4);
});

// -------------------------------smiley faces----------------------------------------------
test('Counts smiley faces in [":)", ";(", ";}", ":-D"]', () => {
    const result = countSmileys([':)', ';(', ';}', ':-D']);
    expect(result).toBe(2);
});

test('Counts smiley faces in [";D", ":-(", ":-)", ";~)"]', () => {
    const result = countSmileys([';D', ':-(', ':-)', ';~)']);
    expect(result).toBe(3);
});

test('Counts smiley faces in [";]", ":[", ";*", ":$", ";-D"]', () => {
    const result = countSmileys([';]', ':[', ';*', ':$', ';-D']);
    expect(result).toBe(1);
});

test('Counts smiley faces in []', () => {
    const result = countSmileys([]);
    expect(result).toBe(0);
});