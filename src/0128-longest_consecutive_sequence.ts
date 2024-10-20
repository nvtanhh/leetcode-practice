
function longestConsecutive(nums: number[]): number {
    // edge case
    if (!nums.length) return 0;

    const set = new Set<number>(nums);
    let maxLength = 0;

    for (const num of set) {
        if (!set.has(num - 1)) {
            let currentNum = num;
            let currentLength = 1;

            while (set.has(currentNum + 1)) {
                currentNum++;
                currentLength++;
            }
            maxLength = Math.max(maxLength, currentLength);

        }
    }

    return maxLength;
};

export function testLongestConsecutive() {
    // Test cases
    const testCases = [
        { input: [100, 4, 200, 1, 3, 2], expected: 4 }, // The longest consecutive sequence is [1, 2, 3, 4]
        { input: [0, 3, 7, 2, 5, 8, 4, 6, 0, 1], expected: 9 }, // The longest consecutive sequence is [0, 1, 2, 3, 4, 5, 6, 7, 8]
        { input: [], expected: 0 }, // No elements in the array
        { input: [1, 2, 0, 1], expected: 3 }, // The longest consecutive sequence is [0, 1, 2]
        { input: [9, 1, -3, 2, 4, 8, 3, -1, 6, -2, -4, 7], expected: 4 } // The longest consecutive sequence is [-3, -2, -1, 0]
    ];

    testCases.forEach(({ input, expected }, index) => {
        const result = longestConsecutive(input);
        console.assert(result === expected, `Test case ${index + 1} failed: expected ${expected}, got ${result}`);
    });

    console.log("All test cases passed!");
}
