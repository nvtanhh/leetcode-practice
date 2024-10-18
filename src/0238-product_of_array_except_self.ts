function productExceptSelf(nums: number[]): number[] {

    const n = nums.length;
    let totalProduct = 1;
    const zeroNumIndexes = [];

    for (let i = 0; i < n; i++) {
        const num = nums[i];

        if (num != 0) {
            totalProduct *= num;
        } else {
            zeroNumIndexes.push(i)
        }
    }

    const answer = new Array(n).fill(0)

    if (zeroNumIndexes.length) {
        if (zeroNumIndexes.length == 1) {
            answer[zeroNumIndexes[0]] = totalProduct
        }
        return answer
    }



    for (let i = 0; i < n; i++) {
        answer[i] = totalProduct / nums[i];
    }

    return answer;
};


export function testProductExceptSelf() {
    // Test cases
    const testCases = [
        { input: [1, 2, 3, 4], expected: [24, 12, 8, 6] },
        { input: [2, 3, 4, 5], expected: [60, 40, 30, 24] },
        { input: [1, 1, 1, 1], expected: [1, 1, 1, 1] },
        { input: [0, 1, 2, 3], expected: [6, 0, 0, 0] },
        { input: [-1, 1, 0, -3, 3], expected: [0, 0, 9, 0, 0] }
    ];

    testCases.forEach(({ input, expected }, index) => {
        const result = productExceptSelf(input);
        console.assert(JSON.stringify(result) === JSON.stringify(expected), `Test case ${index + 1} failed: expected ${JSON.stringify(expected)}, got ${JSON.stringify(result)}`);
    });

    console.log("All test cases passed!");
}
