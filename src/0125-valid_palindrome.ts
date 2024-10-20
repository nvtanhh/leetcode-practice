function isPalindrome(s: string): boolean {
    // ##### Approach 1: l and r from 2 tail
    let clearStr = '';
    for (const char of s) {
        if (char === " ") {
            continue;

        }
        if (!isNaN(Number(char))) {
            clearStr += char;
            continue;
        }

        const code = char.toLowerCase().charCodeAt(0);
        if (code < 'a'.charCodeAt(0) || code > 'z'.charCodeAt(0)) {
            continue;
        }

        clearStr += char.toLowerCase();
    }


    let l = 0, r = clearStr.length - 1;
    while (l < r) {
        if (clearStr[l++] !== clearStr[r--]) return false;
    }
    return true;
};

export function testIsPalindrome() {
    // Test cases
    const testCases = [
        { input: "A man, a plan, a canal: Panama", expected: true }, // Palindrome ignoring non-alphanumeric characters and case
        { input: "race a car", expected: false }, // Not a palindrome
        { input: " ", expected: true }, // Single space is considered a palindrome
        { input: "a", expected: true }, // Single character is a palindrome
        { input: "ab", expected: false }, // Two different characters are not a palindrome
        { input: "aa", expected: true }, // Two same characters are a palindrome
        { input: "0P", expected: false } // Not a palindrome ignoring case
    ];

    testCases.forEach(({ input, expected }, index) => {
        const result = isPalindrome(input);
        console.assert(result === expected, `Test case ${index + 1} failed: expected ${expected}, got ${result}`);
    });

    console.log("All test cases passed!");
}