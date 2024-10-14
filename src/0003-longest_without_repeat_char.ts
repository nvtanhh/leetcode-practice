function lengthOfLongestSubstring(s: string): number {
    const n = s.length;

    const charSet = new Set<String>();
    let maxLength = 0;
    let l = 0;

    for (let r = 0; r < n; r++) {
        while (charSet.has(s[r])) {
            charSet.delete(s[l]);
            l++;
        }
        
        charSet.add(s[r]);
        maxLength = Math.max(maxLength, r - l + 1)
    }

    return maxLength;
};


export function testLengthOfLongestSubstring() {
    // Test cases
    const testCases = [
        { s: "abcabcbb", expected: 3 }, // "abc" is the longest substring without repeating characters
        { s: "bbbbb", expected: 1 }, // "b" is the longest substring without repeating characters
        { s: "pwwkew", expected: 3 }, // "wke" is the longest substring without repeating characters
        { s: "", expected: 0 }, // Empty string has length 0
        { s: "abcdef", expected: 6 }, // "abcdef" is the longest substring without repeating characters
        { s: "aab", expected: 2 }, // "ab" is the longest substring without repeating characters
        { s: "dvdf", expected: 3 } // "vdf" is the longest substring without repeating characters
    ];

    testCases.forEach(({ s, expected }, index) => {
        const result = lengthOfLongestSubstring(s);
        console.assert(result === expected, `Test case ${index + 1} failed: expected ${expected}, got ${result}`);
    });

    console.log("All test cases passed!");
}