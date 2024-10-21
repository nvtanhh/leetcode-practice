function twoSumII(numbers: number[], target: number): number[] {
    const n = numbers.length;

    let l = 0, r = n - 1;
    while (l < r) {
        const sum = numbers[l] + numbers[r];

        if (sum === target) {
            return [l + 1, r + 1];
        }
        if (sum > target) {
            r--;
        } else {
            l++;
        }
    }


    return [];
};


export function testTwoSumII() {
    // Test cases
    const testCases = [
        { numbers: [2, 7, 11, 15], target: 9, expected: [1, 2] },
        { numbers: [2, 3, 4], target: 6, expected: [1, 3] },
        { numbers: [-1, 0], target: -1, expected: [1, 2] },
        { numbers: [1, 2, 3, 4, 4, 9, 56, 90], target: 8, expected: [4, 5] },
        { numbers: [5, 25, 75], target: 100, expected: [2, 3] }
    ];

    testCases.forEach(({ numbers, target, expected }, index) => {
        const result = twoSumII(numbers, target);
        console.assert(JSON.stringify(result) === JSON.stringify(expected), `Test case ${index + 1} failed: expected ${JSON.stringify(expected)}, got ${JSON.stringify(result)}`);
    });

    console.log("All test cases passed!");
}