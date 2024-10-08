function majorityElement(nums: number[]): number {
    const n = nums.length;
    const map = new Map();

    for (let i = 0; i < n; i++) {
        map.set(nums[i], (map.get(nums[i]) ?? 0) + 1);
    }

    for (const [key, value] of map.entries()) {
        if (value > Math.floor(n / 2)) {
            return key;
        }
    }

    return -1;
};


export function testMajorityElement() {
    const testCases: { input: number[], expectedOutput: number }[] = [
        { input: [3, 2, 3], expectedOutput: 3 },
        { input: [2, 2, 1, 1, 1, 2, 2], expectedOutput: 2 },
        { input: [1, 1, 1, 1], expectedOutput: 1 },
        { input: [1], expectedOutput: 1 },
        { input: [1, 2, 3, 1, 1], expectedOutput: 1 }
    ];

    testCases.forEach(({ input, expectedOutput }, index) => {
        const result = majorityElement(input);
        console.assert(result === expectedOutput, `Test case ${index + 1} failed: expected ${expectedOutput}, got ${result}`);
    });

    console.log("All test cases passed!");
}