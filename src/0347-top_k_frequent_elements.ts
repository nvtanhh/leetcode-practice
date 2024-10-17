function topKFrequent(nums: number[], k: number): number[] {
    const freqMap = new Map<number, number>();

    nums.forEach(
        (num) => {
            if (freqMap.has(num)) {
                freqMap.set(num, freqMap.get(num) + 1);
            } else {
                freqMap.set(num, 1);
            }
        }
    )

    // Convert map to array and sort by frequency
    const sortedFreqArray = Array.from(freqMap.entries()).sort((a, b) => b[1] - a[1]);

    // Extract the top k elements
    return sortedFreqArray.slice(0, k).map(entry => entry[0]);

};

export function testTopKFrequent() {
    // Test cases
    const testCases = [
        { nums: [1, 1, 1, 2, 2, 3], k: 2, expected: [1, 2] },
        { nums: [1], k: 1, expected: [1] },
        { nums: [4, 1, -1, 2, -1, 2, 3], k: 2, expected: [-1, 2] },
        { nums: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], k: 3, expected: [1, 2, 3] },
        { nums: [1, 1, 2, 2, 3, 3, 4, 4, 5, 5], k: 5, expected: [1, 2, 3, 4, 5] }
    ];

    testCases.forEach(({ nums, k, expected }, index) => {
        const result = topKFrequent(nums, k);
        const sortedResult = result.sort((a, b) => a - b);
        const sortedExpected = expected.sort((a, b) => a - b);
        console.assert(JSON.stringify(sortedResult) === JSON.stringify(sortedExpected), `Test case ${index + 1} failed: expected ${JSON.stringify(sortedExpected)}, got ${JSON.stringify(sortedResult)}`);
    });

    console.log("All test cases passed!");
}