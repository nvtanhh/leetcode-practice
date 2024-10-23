function isValidParentheses(s: string): boolean {
    if (!s.length) return true;

    const stack = [];
    const map = {
        ')': '(',
        ']': '[',
        '}': '{',
    }

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (!(char in map)) {
            stack.push(char)
        } else {
            const pop = stack.pop();

            if (map[char] !== pop) {
                return false;
            }
        }
    }

    return stack.length == 0;
};


export function testIsValidParentheses() {
    // Test cases
    const testCases = [
        { input: "()", expected: true },
        { input: "()[]{}", expected: true },
        { input: "(]", expected: false },
        { input: "([)]", expected: false },
        { input: "{[]}", expected: true },
        { input: "", expected: true }, // Empty string
        { input: "(", expected: false }, // Single open parenthesis
        { input: ")", expected: false }, // Single close parenthesis
        { input: "((()))", expected: true }, // Nested parentheses
        { input: "((())", expected: false } // Unmatched parentheses
    ];

    testCases.forEach(({ input, expected }, index) => {
        const result = isValidParentheses(input);
        console.assert(result === expected, `Test case ${index + 1} failed: expected ${expected}, got ${result}`);
    });

    console.log("All test cases passed!");
}