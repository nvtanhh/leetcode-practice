function validPalindrome(s: string): boolean {
    let l = 0;
    let r = s.length - 1;

    while (l < r) {
        if (s[l] === s[r]) {
            l++;
            r--;

            continue;
        }

        const isRemoveLeftValid = isPalindrome(s.substring(l + 1, r + 1))
        if (isRemoveLeftValid) return true;

        const isRemoveRightValid = isPalindrome(s.substring(l, r));
        if (isRemoveRightValid) return true;

        return false;
    }

    return true;
};


function isPalindrome(s: string): boolean {
    let l = 0;
    let r = s.length - 1;

    while (l < r) {
        if (s[l] !== s[r]) return false;

        l++;
        r--;
    }

    return true;
}


export function testValidIsPalindrome() {
    // Test cases
    const testCases = [
        { s: "racecar", expected: true }, // "racecar" is a palindrome
        { s: "hello", expected: false }, // "hello" is not a palindrome
        { s: "abca", expected: true }, // "abca" can be a palindrome by removing 'b' or 'c'
        { s: "deeee", expected: true }, // "deeee" can be a palindrome by removing 'd'
        { s: "abc", expected: false }, // "abc" cannot be a palindrome by removing one character
        { s: "a", expected: true }, // Single character is a palindrome
        { s: "", expected: true }, // Empty string is a palindrome
        { s: "abccba", expected: true }, // "abccba" is a palindrome
        { s: "abcd", expected: false } // "abcd" is not a palindrome
    ];

    testCases.forEach(({ s, expected }, index) => {
        const result = validPalindrome(s);
        console.assert(result === expected, `Test case ${index + 1} failed: expected ${expected}, got ${result}`);
    });

    console.log("All test cases passed!");
}