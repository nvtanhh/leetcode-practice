function sortColors(nums: number[]): void {
    const map = {
        0: 0,
        1: 0,
        2: 0
    };

    for (let i = 0; i < nums.length; i++) {
        map[nums[i]] += 1;
    }


    for (let i = 0; i < nums.length; i++) {
        if (map[0] > 0) {
            nums[i] = 0;
            map[0] = map[0] - 1;
        } else if (map[1] > 0) {
            nums[i] = 1;
            map[1] = map[1] - 1;

        } else {
            map[2] = map[2] - 1;

            nums[i] = 2
        }
    }

};




export function testSortColors() {
    // Test cases
    const testCases = [
        { nums: [2, 0, 2, 1, 1, 0], expected: [0, 0, 1, 1, 2, 2] }, // Mixed colors
        { nums: [2, 0, 1], expected: [0, 1, 2] }, // Mixed colors
        { nums: [0], expected: [0] }, // Single color
        { nums: [1], expected: [1] }, // Single color
        { nums: [2], expected: [2] }, // Single color
        { nums: [1, 2, 0], expected: [0, 1, 2] }, // Mixed colors
        { nums: [2, 2, 2, 2], expected: [2, 2, 2, 2] }, // All same color
        { nums: [0, 0, 0, 0], expected: [0, 0, 0, 0] }, // All same color
        { nums: [1, 1, 1, 1], expected: [1, 1, 1, 1] } // All same color
    ];

    testCases.forEach(({ nums, expected }, index) => {
        sortColors(nums);
        console.assert(JSON.stringify(nums) === JSON.stringify(expected), `Test case ${index + 1} failed: expected ${JSON.stringify(expected)}, got ${JSON.stringify(nums)}`);
    });

    console.log("All test cases passed!");
}