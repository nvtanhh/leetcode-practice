function findMaxAverage(nums: number[], k: number): number {
    /*
        Approach 1: Brute force
        Time: O(n^2)
        Spacing: O(1)
    */

    // const n = nums.length;
    // let maxSum = -Infinity;

    // for (let i = 0; i <= n - k; i++) {
    //     let sum = 0;
    //     for (let j = i; j < i + k; j++) {
    //         sum += nums[j];
    //     }
    //     maxSum = Math.max(sum, maxSum);
    // }

    // return maxSum / k;


    /*
        Approach 1: Sliding windows
        Time: O(n)
        Spacing: O(1)
    */

    const n = nums.length;
    let maxSum = 0;
    let currentSum = 0;

    for (let i = 0; i < k; i++) {
        currentSum += nums[i];
    }
    maxSum = currentSum;

    for (let i = k; i < n; i++) {
        currentSum += nums[i] - nums[i - k];
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum / k;
};

export function testFindMaxAverage() {
    const testCases: { input: number[], k: number, expectedOutput: number }[] = [
        { input: [1], k: 1, expectedOutput: 1 },
        { input: [1, 12, -5, -6, 50, 3], k: 4, expectedOutput: 12.75 },
        { input: [5, 5, 5, 5, 5], k: 1, expectedOutput: 5 },
        { input: [-1, -12, -5, -6, -50, -3], k: 2, expectedOutput: -5.5 },
        { input: [0, 4, 0, 3, 2], k: 1, expectedOutput: 4 }
    ];

    testCases.forEach(({ input, k, expectedOutput }, index) => {
        const result = findMaxAverage(input, k);
        console.assert(result === expectedOutput, `Test case ${index + 1} failed: expected ${expectedOutput}, got ${result}`);
    });

    console.log("All test cases passed!");
}