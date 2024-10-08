function maxProfit(prices: number[]): number {
    const n = prices.length;
    let maxProfit = 0;
    let minPrice = Infinity;

    for (let i = 0; i < n; i++) {
        minPrice = Math.min(minPrice, prices[i])
        maxProfit = Math.max(maxProfit, prices[i] - minPrice);
    }

    return maxProfit;
};



export function testMaxProfit() {
    const testCases: { input: number[], expectedOutput: number }[] = [
        { input: [7, 1, 5, 3, 6, 4], expectedOutput: 5 },
        { input: [7, 6, 4, 3, 1], expectedOutput: 0 },
        { input: [1, 2, 3, 4, 5], expectedOutput: 4 },
        { input: [5, 4, 3, 2, 1], expectedOutput: 0 },
        { input: [1], expectedOutput: 0 },
        { input: [], expectedOutput: 0 }
    ];

    testCases.forEach(({ input, expectedOutput }, index) => {
        const result = maxProfit(input);
        console.assert(result === expectedOutput, `Test case ${index + 1} failed: expected ${expectedOutput}, got ${result}`);
    });

    console.log("All test cases passed!");
}