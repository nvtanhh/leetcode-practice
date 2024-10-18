function productExceptSelf(nums: number[]): number[] {

    // ##### Approach 1: using division operation, but its not allow to use
    // division operation for this problem

    // const n = nums.length;
    // let totalProduct = 1;
    // const zeroNumIndexes = [];

    // for (let i = 0; i < n; i++) {
    //     const num = nums[i];
    //     if (num != 0) {
    //         totalProduct *= num;
    //     } else {
    //         zeroNumIndexes.push(i)
    //     }
    // }

    // const answer = new Array(n).fill(0)

    // if (zeroNumIndexes.length) {
    //     if (zeroNumIndexes.length == 1) {
    //         answer[zeroNumIndexes[0]] = totalProduct
    //     }
    //     return answer
    // }

    // for (let i = 0; i < n; i++) {
    //     answer[i] = totalProduct / nums[i];
    // }

    // return answer;


    // ##### Approach 2: using prefix-postfix array to store values
    // const n = nums.length;

    // const prefixArray = [];
    // let prefix = 1;
    // for (let i = 0; i < n; i++) {
    //     prefix *= nums[i];
    //     prefixArray[i] = prefix;
    // }

    // const postfixArray = [];
    // let postfix = 1;
    // for (let i = n - 1; i >= 0; i--) {
    //     postfix *= nums[i]
    //     postfixArray[i] = postfix;
    // }

    // const answer = [];
    // for (let i = 0; i < n; i++) {
    //     prefix = i != 0 ? prefixArray[i - 1] : 1;
    //     postfix = i != n - 1 ? postfixArray[i + 1] : 1;

    //     answer[i] = prefix * postfix;
    // }

    // return answer;

    //  ##### Approach 3: using answer array to store value 
    const n = nums.length;
    const answer = [].fill(1);

    let product = 1;
    for (let i = 0; i < n; i++) {
        answer[i] = product;
        product *= nums[i];
    }

    product = 1;
    for (let i = n - 1; i >= 0; i--) {
        answer[i] *= product;
        product *= nums[i];
    }

    return answer;
}


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
