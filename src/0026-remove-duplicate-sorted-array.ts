function removeDuplicates(nums: number[]): number {
    const n = nums.length;
    let j = 1;

    for (let i = 1; i < n; i++) {
        if (nums[i] != nums[i-1]) {
            nums[j++] = nums[i];
        }
    }

    return j;

    // Time: O(n)
    // Space: O(1)
};

export function testRemoveDuplicates() {
    const testCases: { input: number[], expectedOutput: number, expectedArray: number[] }[] = [
        { input: [1, 1, 2], expectedOutput: 2, expectedArray: [1, 2] },
        { input: [0, 0, 1, 1, 1, 2, 2, 3, 3, 4], expectedOutput: 5, expectedArray: [0, 1, 2, 3, 4] },
        { input: [], expectedOutput: 0, expectedArray: [] },
        { input: [1, 2, 3], expectedOutput: 3, expectedArray: [1, 2, 3] },
        { input: [1, 1, 1, 1], expectedOutput: 1, expectedArray: [1] }
    ];

    testCases.forEach(({ input, expectedOutput, expectedArray }, index) => {
        const result = removeDuplicates(input);
        console.assert(result === expectedOutput, `Test case ${index + 1} failed: expected ${expectedOutput}, got ${result}`);
        console.assert(input.slice(0, result).toString() === expectedArray.toString(), `Test case ${index + 1} failed: expected array ${expectedArray}, got ${input.slice(0, result)}`);
    });

    console.log("All test cases passed!");
}


