function evalRPN(tokens: string[]): number {
    const stack = [];

    for (const token of tokens) {
        let a, b;
        switch (token) {
            case '+':
                a = stack.pop();
                b = stack.pop();
                stack.push(b + a);
                break;
            case '-':
                a = stack.pop();
                b = stack.pop();
                stack.push(b - a);
                break;
            case '*':
                a = stack.pop();
                b = stack.pop();
                stack.push(b * a);
                break;
            case '/':
                a = stack.pop();
                b = stack.pop();
                stack.push(Math.trunc(b / a));
                break;

            default:
                stack.push(Number.parseInt(token));
        }

    }
    return stack.pop();
};


export function testEvalRPN() {
    // Test cases
    const testCases = [
        { input: ["2", "1", "+", "3", "*"], expected: 9 }, // (2 + 1) * 3 = 9
        { input: ["4", "13", "5", "/", "+"], expected: 6 }, // 4 + (13 / 5) = 6
        { input: ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"], expected: 22 }, // Complex expression
        { input: ["3", "4", "+", "2", "*", "7", "/"], expected: 2 }, // ((3 + 4) * 2) / 7 = 2
        { input: ["4", "2", "+", "3", "-"], expected: 3 }, // (4 + 2) - 3 = 3
        { input: ["2", "1", "+", "3", "*"], expected: 9 }, // (2 + 1) * 3 = 9
        { input: ["4", "13", "5", "/", "+"], expected: 6 }, // 4 + (13 / 5) = 6
        { input: ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"], expected: 22 }, // Complex expression
        { input: ["3", "4", "+", "2", "*", "7", "/"], expected: 2 }, // ((3 + 4) * 2) / 7 = 2
        { input: ["4", "2", "+", "3", "-"], expected: 3 } // (4 + 2) - 3 = 3
    ];

    testCases.forEach(({ input, expected }, index) => {
        const result = evalRPN(input);
        console.assert(result === expected, `Test case ${index + 1} failed: expected ${expected}, got ${result}`);
    });

    console.log("All test cases passed!");
}
