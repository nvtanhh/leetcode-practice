function maxArea(height: number[]): number {
    let l = 0, r = height.length - 1;
    let maxArea = 0;

    while (l < r) {
        const area = Math.min(height[l], height[r]) * (r - l);
        maxArea = Math.max(area, maxArea);

        if (height[l] < height[r]) {
            l++;
        } else {
            r--;
        }
    }

    return maxArea;
};


export function testMaxArea() {
    // Test cases
    const testCases = [
        { input: [1, 8, 6, 2, 5, 4, 8, 3, 7], expected: 49 }, // The maximum area is between heights 8 and 7
        { input: [1, 1], expected: 1 }, // The maximum area is between the two heights 1
        { input: [4, 3, 2, 1, 4], expected: 16 }, // The maximum area is between heights 4 and 4
        { input: [1, 2, 1], expected: 2 }, // The maximum area is between heights 1 and 1
        { input: [2, 3, 4, 5, 18, 17, 6], expected: 17 } // The maximum area is between heights 17 and 18
    ];

    testCases.forEach(({ input, expected }, index) => {
        const result = maxArea(input);
        console.assert(result === expected, `Test case ${index + 1} failed: expected ${expected}, got ${result}`);
    });

    console.log("All test cases passed!");
}