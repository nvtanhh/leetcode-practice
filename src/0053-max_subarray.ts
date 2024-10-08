function maxSubArray(nums: number[]): number {
    // const n = nums.length;

    // let max = -Infinity;
    // let currentSum = 0;

    // for (let i = 0; i < n; i++) {
    //     currentSum += nums[i];
    //     max = Math.max(currentSum, max);

    //     if (currentSum < 0) {
    //         currentSum = 0;
    //     }
    // }

    // return max;


    let maxSoFar = nums[0];
    let maxEndingHere = nums[0];

    console.log(nums);
    


    for (let i = 1; i < nums.length; i++) {
        maxEndingHere = Math.max(nums[i], maxEndingHere + nums[i]);
        maxSoFar = Math.max(maxSoFar, maxEndingHere);

        console.log('===== index ====', i);
        console.log('maxEndingHere: ', maxEndingHere);
        console.log('maxSoFar: ', maxSoFar);
    }

    console.log('\n\n');


    return maxSoFar;
};


export function testMaxSubArray() {
    const testCases: { input: number[], expectedOutput: number }[] = [
        { input: [1], expectedOutput: 1 },
        { input: [-2, 1], expectedOutput: 1 },
        { input: [1, 2, 3, 4, 5], expectedOutput: 15 },
        { input: [-1, -2, -3, -4, -5], expectedOutput: -1 },
        { input: [-2, 1, -3, 4, -1, 2, 1, -5, 4], expectedOutput: 6 },
        { input: [0, -3, 1, 1, -1, 0], expectedOutput: 2 }
    ];

    testCases.forEach(({ input, expectedOutput }, index) => {
        const result = maxSubArray(input);
        console.assert(result === expectedOutput, `Test case ${index + 1} failed: expected ${expectedOutput}, got ${result}`);
    });

    console.log("All test cases passed!");
}