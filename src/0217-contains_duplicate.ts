function containsDuplicate(nums: number[]): boolean {
    const distinctNumber = new Set<number>();

    for (let i = 0; i < nums.length; i++) {
        if (distinctNumber.has(nums[i])) {
            return true;
        }

        distinctNumber.add(nums[i]);
    }

    return false;
};

export function testContainsDuplicate() {
    const testCases: { input: number[], expectedOutput: boolean }[] = [
        { input: [1, 2, 3, 4], expectedOutput: false },
        { input: [1, 2, 3, 1], expectedOutput: true },
        { input: [], expectedOutput: false },
        { input: [1], expectedOutput: false },
        { input: [1, 1, 1, 1], expectedOutput: true }
    ];

    testCases.forEach(({ input, expectedOutput }, index) => {
        const result = containsDuplicate(input);
        console.assert(result === expectedOutput, `Test case ${index + 1} failed: expected ${expectedOutput}, got ${result}`);
    });

    console.log("All test cases passed!");
}