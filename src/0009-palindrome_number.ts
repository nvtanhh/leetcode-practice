function isPalindrome(x: number): boolean {
    // Negative numbers are not palindromes
    if (x < 0) {
        return false;
    }

    /// Approach 1: using remainder 
    /// time: O(n)
    /// space: O(1)

    // // Store the original number
    // let original = x;
    // let reversed = 0;

    // // Reverse the number
    // while (x > 0) {
    //     const remainder = x % 10;
    //     reversed = reversed * 10 + remainder;
    //     x = Math.floor(x / 10);
    // }

    // // Check if the original number is equal to the reversed number
    // return original === reversed;

    /// ### Approach 2: using digit comparison method
    /// time: O(n)
    /// space: O(1)
    /// 1. Compare Digits from Front and Back
    /// 2. Adjust the Number:

    // Find the divisor to extract the leading digit
    let div = 1;
    while (x > div * 10) {
        div *= 10
    }

    while (x > 0) {
        const l = Math.floor(x / div)
        const r = x % 10;

        if (l != r) return false;

        x = Math.floor((x % div) / 10)

        div /= 100;
    }

    return true;
};



export function testIsPalindrome() {
    const testCases: { input: number, expectedOutput: boolean }[] = [
        { input: 121, expectedOutput: true },
        { input: -121, expectedOutput: false },
        { input: 10, expectedOutput: false },
        { input: 0, expectedOutput: true },
        { input: 12321, expectedOutput: true },
        { input: 12345, expectedOutput: false }
    ];

    testCases.forEach(({ input, expectedOutput }, index) => {
        const result = isPalindrome(input);
        console.assert(result === expectedOutput, `Test case ${index + 1} failed: expected ${expectedOutput}, got ${result}`);
    });

    console.log("All test cases passed!");
}