function shortestToChar(s: string, c: string): number[] {
    const n = s.length;
    const rs = new Array<number>(n).fill(Infinity);

    let temp = Infinity;
    for (let i = 0; i < n; i++) {
        if (s[i] === c) temp = 0;

        rs[i] = temp;
        temp += 1;
    }

    temp = Infinity;
    for (let i = n - 1; i >= 0; i--) {
        if (s[i] === c) temp = 0;

        rs[i] = Math.min(temp, rs[i]);
        temp++;
    }

    return rs;
};

export function testShortestToChar() {
    // Test cases
    const testCases = [
        { s: "loveleetcode", c: "e", expected: [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0] },
        { s: "aaab", c: "b", expected: [3, 2, 1, 0] },
        { s: "a", c: "a", expected: [0] },
        { s: "ab", c: "a", expected: [0, 1] },
        { s: "ab", c: "b", expected: [1, 0] }
    ];

    testCases.forEach(({ s, c, expected }, index) => {
        const result = shortestToChar(s, c);
        console.assert(JSON.stringify(result) === JSON.stringify(expected), `Test case ${index + 1} failed: expected ${JSON.stringify(expected)}, got ${JSON.stringify(result)}`);
    });

    console.log("All test cases passed!");
}
