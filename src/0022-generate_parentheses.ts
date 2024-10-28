function generateParenthesis(n: number): string[] {
    // only add open paranthesis if open ‹ n
    // only add a closing paranthesis if closed < open
    // valid IIF open == closed == n

    const stack = [];
    const res = [];

    function backTrack(openN, closeN) {
        if (stack.length === 2 * n) {
            res.push(stack.join(''));
            return;
        }

        if (openN < n) {
            stack.push('(');
            backTrack(openN + 1, closeN);
            stack.pop();
        }

        if (closeN < openN) {
            stack.push(')');
            backTrack(openN, closeN + 1);
            stack.pop();
        }
    }

    backTrack(0, 0);


    return res;
};


export function testGenerateParenthesis() {
    // Test cases
    const testCases = [
        { input: 1, expected: ["()"] },
        { input: 2, expected: ["(())", "()()"] },
        { input: 3, expected: ["((()))", "(()())", "(())()", "()(())", "()()()"] },
        { input: 0, expected: [""] },
        { input: 4, expected: ["(((())))", "((()()))", "((())())", "((()))()", "(()(()))", "(()()())", "(()())()", "(())(())", "(())()()", "()((()))", "()(()())", "()(())()", "()()(())", "()()()()"] }
    ];

    testCases.forEach(({ input, expected }, index) => {
        const result = generateParenthesis(input);
        const sortedResult = result.sort();
        const sortedExpected = expected.sort();
        console.assert(JSON.stringify(sortedResult) === JSON.stringify(sortedExpected), `Test case ${index + 1} failed: expected ${JSON.stringify(sortedExpected)}, got ${JSON.stringify(sortedResult)}`);
    });

    console.log("All test cases passed!");
}
