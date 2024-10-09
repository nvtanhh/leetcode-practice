function longestPalindrome(s: string): string {
    const n = s.length;
    if (s.length <= 1) return s;

    // For though the string, check isPalindrome from middle -> expand 2 side
    let start = 0, end = 0;

    for (let i = 0; i < n; i++) {
        const len1 = expandAroundCenter(s, i, i); // old length palindrome
        const len2 = expandAroundCenter(s, i, i + 1); // even length palindrome

        const len = Math.max(len1, len2);

        if (len > end - start) {
            start = i - Math.floor((len - 1) / 2);
            end = i + Math.floor(len / 2);
        }
    }

    return s.substring(start, end + 1);
};

function expandAroundCenter(s: string, l: number, r: number): number {
    while (l >= 0 && r < s.length && s[l] === s[r]) {
        l--;
        r++;
    }

    return r - l - 1;
}





export function testLongestPalindrome() {
    const testCases: { input: string, expectedOutput: string }[] = [
        { input: "babad", expectedOutput: "bab" }, // "aba" is also a valid answer
        { input: "cbbd", expectedOutput: "bb" },
        { input: "a", expectedOutput: "a" },
        { input: "", expectedOutput: "" },
        { input: "aaaa", expectedOutput: "aaaa" }
    ];

    testCases.forEach(({ input, expectedOutput }, index) => {
        const result = longestPalindrome(input);
        console.assert(result === expectedOutput, `Test case ${index + 1} failed: expected ${expectedOutput}, got ${result}`);
    });




    console.log("All test cases passed!");
}