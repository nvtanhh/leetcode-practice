function threeSum(nums: number[]): number[][] {
    const n = nums.length;
    const result = [];

    // Sort the array to use the two-pointer technique
    nums.sort((a, b) => a - b);

    for (let i = 0; i < n; i++) {
        // Skip duplicate elements to avoid duplicate triplets
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        const a = nums[i];
        let left = i + 1, right = n - 1;

        while (left < right) {
            const sum = a + nums[left] + nums[right];

            if (sum > 0) {
                right--; // Move the right pointer leftward
            } else if (sum < 0) {
                left++; // Move the left pointer rightward
            } else {
                result.push([a, nums[left], nums[right]]);
                left++;
                // Skip duplicate elements to avoid duplicate triplets
                while (left < right && nums[left] === nums[left - 1]) {
                    left++;
                }
            }
        }
    }

    return result;
};

export function testThreeSum() {
    // Test cases
    const testCases = [
        { input: [-1, 0, 1, 2, -1, -4], expected: [[-1, -1, 2], [-1, 0, 1]] },
        { input: [], expected: [] },
        { input: [0], expected: [] },
        { input: [0, 0, 0], expected: [[0, 0, 0]] },
        { input: [-2, 0, 1, 1, 2], expected: [[-2, 0, 2], [-2, 1, 1]] }
    ];

    testCases.forEach(({ input, expected }, index) => {
        const result = threeSum(input);
        const sortedResult = result.map(triplet => triplet.sort((a, b) => a - b)).sort();
        const sortedExpected = expected.map(triplet => triplet.sort((a, b) => a - b)).sort();
        console.assert(JSON.stringify(sortedResult) === JSON.stringify(sortedExpected), `Test case ${index + 1} failed: expected ${JSON.stringify(sortedExpected)}, got ${JSON.stringify(sortedResult)}`);
    });

    console.log("All test cases passed!");
}
