function twoSum(nums: number[], target: number): number[] {
    // Approach 1: (Brute Force) 0(n^2)
    // for (let i = 0; i < nums.length - 1; i++) {
    //     for (let j = i + 1; j < nums.length; j++) {
    //         if (nums[i] + nums[j] === target) {
    //             return [i, j];
    //         }
    //     };
    // };
    // return [];

    // Approach 2: 2-pass Hash Table 0(n)
    // const numMap: { [key: number]: number } = {};
    // const length = nums.length;

    // for (let i = 0; i < length; i++) {
    //     numMap[nums[i]] = i;
    // }

    // for (let i = 0; i < length; i++) {
    //     const complement = target - nums[i];
    //     if (numMap[complement] && numMap[complement] != i) {
    //         return [i, numMap[complement]]
    //     }
    // }

    // return [];

    // Approach 3: 1-pass Hash Table 0(n)
    const m = new Map();

    for (let i = 0; i < nums.length; i++) {
        const comp = target - nums[i];

        if (m.has(comp)) {
            return [m.get(comp), i];
        }
        m.set(nums[i], i);
    }

    return [];
};

export function testTwoSum() {
    console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
    console.log(twoSum([3, 2, 4], 6)); // [1, 2]
    console.log(twoSum([3, 3], 6)); // [0, 1]

    console.log('\n');

    console.log('Expected:\n[0, 1],\n[1, 2],\n[0, 1]');
}
