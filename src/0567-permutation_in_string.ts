function checkInclusion(s1: string, s2: string): boolean {
    const arr = new Array<number>(26).fill(0);

    for (const char of s1) {
        const index = char.charCodeAt(0) - 'a'.charCodeAt(0);
        arr[index] += 1;
    }

    for (let i = 0; i <= s2.length - s1.length; i++) {
        const subStringArr = s2.substring(i, i + s1.length).split('');
        const tempArr = [...arr]; // Create a copy of arr

        for (const char of subStringArr) {
            const index = char.charCodeAt(0) - 'a'.charCodeAt(0);
            if (tempArr[index] > 0) {
                tempArr[index] -= 1;
            }
        }

        if (tempArr.every(count => count === 0)) {
            return true;
        }
    }

    return false;
};


export function testCheckInclusion() {
    // Test cases
    const testCases = [
        { s1: "ab", s2: "eidbaooo", expected: true }, // "ba" is a permutation of "ab" and is a substring of "eidbaooo"
        { s1: "ab", s2: "eidboaoo", expected: false }, // No permutation of "ab" is a substring of "eidboaoo"
        { s1: "adc", s2: "dcda", expected: true }, // "cda" is a permutation of "adc" and is a substring of "dcda"
        { s1: "hello", s2: "ooolleoooleh", expected: false }, // No permutation of "hello" is a substring of "ooolleoooleh"
        { s1: "a", s2: "ab", expected: true }, // "a" is a permutation of "a" and is a substring of "ab"
        { s1: "a", s2: "b", expected: false }, // No permutation of "a" is a substring of "b"
        { s1: "abc", s2: "bbbca", expected: true } // "bca" is a permutation of "abc" and is a substring of "bbbca"
    ];

    testCases.forEach(({ s1, s2, expected }, index) => {
        const result = checkInclusion(s1, s2);
        console.assert(result === expected, `Test case ${index + 1} failed: expected ${expected}, got ${result}`);
    });

    console.log("All test cases passed!");
}