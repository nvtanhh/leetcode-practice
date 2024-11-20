function containsNearbyDuplicate(nums: number[], k: number): boolean {
    // if (k === 0) return false;

    // for (let i = 0; i < nums.length - 1; i++) {
    //     let j = i + 1;
    //     while (j - i <= k && j < nums.length) {
    //         if (nums[i] === nums[j]) {
    //             return true;
    //         }
    //         j++;
    //     }
    // }
    // return false;

    const seen = {};
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];

        if (seen.hasOwnProperty(num) && (i - seen[num] <= k)) {
            return true;
        }

        seen[num] = i;
    }

    return false;
};


export function testContainsNearbyDuplicate() {
    const testCases: { input: [number[], number], expectedOutput: boolean }[] = [
        { input: [[1, 2, 3, 1], 3], expectedOutput: true },
        { input: [[1, 0, 1, 1], 1], expectedOutput: true },
        { input: [[1, 2, 3, 1, 2, 3], 2], expectedOutput: false },
        { input: [[1, 2, 3, 4, 5], 3], expectedOutput: false },
        { input: [[1, 2, 3, 4, 1], 4], expectedOutput: true }
    ];

    testCases.forEach(({ input, expectedOutput }, index) => {
        const result = containsNearbyDuplicate(...input);
        console.assert(result === expectedOutput, `Test case ${index + 1} failed: expected ${expectedOutput}, got ${result}`);
    });

    console.log("All test cases passed!");
}