function romanToInt(s: string): number {
    // largest -> smallest: add
    // if smaller before larger: subtract smaller

    const roman = new Map<string, number>([
        ['M', 1000],
        ['D', 500],
        ['C', 100],
        ['L', 50],
        ['X', 10],
        ['V', 5],
        ['I', 1]
    ]);
    
    const n = s.length;
    let rs = 0;

    for (let i = 0; i < n; i++) {
        const current = roman.get(s.charAt(i))!;
        const next = roman.get(s.charAt(i + 1)) || 0;

        if (current < next) {
            rs -= current;
        } else {
            rs += current;
        }

    }

    return rs;

    // time: O(n)
    // space: O(1)
};


export function testRomanToInt() {
    const testCases: { input: string, expectedOutput: number }[] = [
        { input: "III", expectedOutput: 3 },
        { input: "IV", expectedOutput: 4 },
        { input: "IX", expectedOutput: 9 },
        { input: "LVIII", expectedOutput: 58 },
        { input: "MCMXCIV", expectedOutput: 1994 }
    ];

    testCases.forEach(({ input, expectedOutput }, index) => {
        const result = romanToInt(input);
        console.assert(result === expectedOutput, `Test case ${index + 1} failed: expected ${expectedOutput}, got ${result}`);
    });

    console.log("All test cases passed!");
}