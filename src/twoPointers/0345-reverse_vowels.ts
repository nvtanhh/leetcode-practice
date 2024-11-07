function reverseVowels(s: string): string {
    const vowelsSet = new Set(['a', 'e', 'o', 'u', 'i', 'A', 'E', 'O', 'U', 'I']);

    let l = 0, r = s.length - 1;

    const arr = s.split('');

    while (l < r) {
        if (vowelsSet.has(arr[l]) && vowelsSet.has(arr[r])) {
            const temp = arr[l];
            arr[l] = arr[r];
            arr[r] = temp;
            l++;
            r--;
        } else {
            if (!vowelsSet.has(arr[l])) l++;
            if (!vowelsSet.has(arr[r])) r--;
        }
    }

    return arr.join('');
};

export function testReverseVowels() {
    // Test cases
    const testCases = [
        { input: "hello", expected: "holle" },
        { input: "leetcode", expected: "leotcede" },
        { input: "aA", expected: "Aa" },
        { input: "racecar", expected: "racecar" },
        { input: " ", expected: " " }
    ];

    testCases.forEach(({ input, expected }, index) => {
        const result = reverseVowels(input);
        console.assert(result === expected, `Test case ${index + 1} failed: expected ${expected}, got ${result}`);
    });

    console.log("All test cases passed!");
}