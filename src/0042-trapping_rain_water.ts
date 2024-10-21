function trap(height: number[]): number {
    let l = 0, r = height.length - 1;
    let maxL = height[l];
    let maxR = height[r]
    let res = 0;

    while (l < r) {
        if (maxL < maxR) {
            l++;
            res += Math.max(0, maxL - height[l])
            maxL = Math.max(maxL, height[l])
        } else {
            r--;
            res += Math.max(0, maxR - height[r])
            maxR = Math.max(maxR, height[r])
        }
    }

    return res;
};



export function testTrap() {
    // Test cases
    const testCases = [
        { input: [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1], expected: 6 }, // Multiple valleys
        { input: [4, 2, 0, 3, 2, 5], expected: 9 }, // Multiple valleys with different heights
        { input: [], expected: 0 }, // No bars
        { input: [1], expected: 0 }, // One bar
        { input: [1, 2], expected: 0 }, // Two bars
        { input: [3, 0, 2, 0, 4], expected: 7 }, // Multiple valleys with zero heights
        { input: [0, 0, 0, 0], expected: 0 }, // All zero heights
        { input: [2, 0, 2], expected: 2 } // Simple valley
    ];

    testCases.forEach(({ input, expected }, index) => {
        const result = trap(input);
        console.assert(result === expected, `Test case ${index + 1} failed: expected ${expected}, got ${result}`);
    });

    console.log("All test cases passed!");
}