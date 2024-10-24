function characterReplacement(s: string, k: number): number {
    const n = s.length;
    let l = 0;
    let longest = 0;
    let maxCount = 0;
    const count = new Map<string, number>(); // alphabet chars frequency count

    for (let r = 0; r < n; r++) {
        const charRight = s[r];
        count.set(charRight, (count.get(charRight) ?? 0) + 1);
        maxCount = Math.max(maxCount, count.get(charRight) ?? 0)

        while (r - l + 1 - maxCount > k) {
            const charLeft = s[l];
            count.set(charLeft, count.get(charLeft)! - 1);

            l++;
        }

        longest = Math.max(longest, r - l + 1);
    }

    return longest;
};

export function testCharacterReplacement() {
    // Test cases
    const testCases = [
        { s: "ABAB", k: 2, expected: 4 }, // Replace 2 'A's with 'B's or vice versa to get "BBBB" or "AAAA"
        { s: "AABABBA", k: 1, expected: 4 }, // Replace 1 'A' with 'B' to get "AABBBBA"
        { s: "AAAA", k: 2, expected: 4 }, // No need to replace, already the longest repeating character
        { s: "ABCDE", k: 1, expected: 2 }, // Replace any one character to get a pair of repeating characters
        { s: "AABABBA", k: 0, expected: 2 }, // No replacements allowed, longest repeating character is "AA" or "BB"
        { s: "ABBB", k: 2, expected: 4 }, // Replace 2 'A's with 'B's to get "BBBB"
        { s: "ABAB", k: 0, expected: 2 }, // No replacements allowed, longest repeating character is "AA" or "BB"
        { s: "A", k: 0, expected: 1 }, // Single character string
        { s: "", k: 0, expected: 0 } // Empty string
    ];

    testCases.forEach(({ s, k, expected }, index) => {
        const result = characterReplacement(s, k);
        console.assert(result === expected, `Test case ${index + 1} failed: expected ${expected}, got ${result}`);
    });

    console.log("All test cases passed!");
}
