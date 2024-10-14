function isAnagram(s: string, t: string): boolean {
    if (s.length != t.length) return false;

    const charCount = {};

    for (var char of s) {
        charCount[char] = (charCount[char] ?? 0) + 1;
    }

    for (var char of t) {
        if (!charCount[char]) return false;
        charCount[char]--;
    }

    for (const count of Object.values(charCount)) {
        if (count !== 0) return false;
    }

    return true;
};


export function testIsAnagram() {
    // Test cases
    const testCases = [
        { s: "anagram", t: "nagaram", expected: true },
        { s: "rat", t: "car", expected: false },
        { s: "listen", t: "silent", expected: true },
        { s: "a", t: "a", expected: true },
        { s: "a", t: "b", expected: false },
        { s: "", t: "", expected: true },
        { s: "abc", t: "cba", expected: true },
        { s: "abc", t: "abcd", expected: false }
    ];

    testCases.forEach(({ s, t, expected }, index) => {
        const result = isAnagram(s, t);
        console.assert(result === expected, `Test case ${index + 1} failed: expected ${expected}, got ${result}`);
    });

    console.log("All test cases passed!");
}