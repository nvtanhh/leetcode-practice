function removeElement(nums: number[], val: number): number {
    const n = nums.length;

    let changes = 0;
    for (let i = 0; i < n; i++) {
        if (nums[i] != val) {
            nums[changes] = nums[i]
            changes += 1;
        }
    }

    return changes;
};


export function testRemoveElement() {
    const testCases: { input: number[], val: number, expectedOutput: number, expectedArray: number[] }[] = [
        { input: [3, 2, 2, 3], val: 3, expectedOutput: 2, expectedArray: [2, 2] },
        { input: [3, 3, 3, 3], val: 3, expectedOutput: 0, expectedArray: [] },
        { input: [0, 1, 2, 2, 3, 0, 4, 2], val: 2, expectedOutput: 5, expectedArray: [0, 1, 3, 0, 4] },
        { input: [], val: 1, expectedOutput: 0, expectedArray: [] },
        { input: [1], val: 1, expectedOutput: 0, expectedArray: [] }
    ];

    testCases.forEach(({ input, val, expectedOutput, expectedArray }, index) => {
        const nums = [...input]; // Make a copy of the input array
        const result = removeElement(nums, val);
        console.assert(result === expectedOutput, `Test case ${index + 1} failed: expected ${expectedOutput}, got ${result}`);
        console.assert(nums.slice(0, result).every((v, i) => v === expectedArray[i]), `Test case ${index + 1} failed: expected array ${expectedArray}, got ${nums.slice(0, result)}`);
    });

    console.log("All test cases passed!");
}