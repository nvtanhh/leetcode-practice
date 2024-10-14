function minSubArrayLen(target: number, nums: number[]): number {
    const n = nums.length;
    let minLength = n+1;
    let l = 0;

    let sum = 0;
    for (let r = 0; r < n; r++) {
       sum+=nums[r];

       while(sum>=target){
        minLength = Math.min(minLength, r-l+1);
        sum-=nums[l];
        l++;
       }
    }

    return minLength === n + 1 ? 0 : minLength;
};


export function testMinSubArrayLen() {
    // Test cases
    const testCases = [
        { target: 7, nums: [2, 3, 1, 2, 4, 3], expected: 2 }, // Subarray [4, 3] has the minimal length of 2
        { target: 4, nums: [1, 4, 4], expected: 1 }, // Subarray [4] has the minimal length of 1
        { target: 11, nums: [1, 1, 1, 1, 1, 1, 1, 1], expected: 0 }, // No subarray sums to 11
        { target: 15, nums: [1, 2, 3, 4, 5], expected: 5 }, // Entire array sums to 15
        { target: 5, nums: [2, 3, 1, 1, 1, 1, 1], expected: 2 } // Subarray [2, 3] has the minimal length of 2
    ];

    testCases.forEach(({ target, nums, expected }, index) => {
        const result = minSubArrayLen(target, nums);
        console.assert(result === expected, `Test case ${index + 1} failed: expected ${expected}, got ${result}`);
    });

    console.log("All test cases passed!");
}
