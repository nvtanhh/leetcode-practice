function encode(strs: string[]): string {
    let encodedStr = '';

    for (const str of strs) {
        const length = str.length;
        encodedStr += `${length}${str}`
    }

    return encodedStr;
}

function decode(s: string): string[] {
    const strs = new Array<string>();

    let i = 0;


    while (i < s.length) {
        const length = Number.parseInt(s[i]);

        strs.push(s.substring(i + 1, i + length + 1));
        i += length + 1;

    }

    return strs;
}

export function testEncodeDecode() {
    // Test cases
    const testCases = [
        { input: ["hello", "world"], expected: ["hello", "world"] },
        { input: ["", ""], expected: ["", ""] },
        { input: ["a", "b", "c"], expected: ["a", "b", "c"] },
        { input: ["abc", "def", "ghi"], expected: ["abc", "def", "ghi"] },
        { input: ["", "a", "bc"], expected: ["", "a", "bc"] }
    ];

    testCases.forEach(({ input, expected }, index) => {
        const encoded = encode(input);
        const decoded = decode(encoded);
        console.assert(JSON.stringify(decoded) === JSON.stringify(expected), `Test case ${index + 1} failed: expected ${JSON.stringify(expected)}, got ${JSON.stringify(decoded)}`);
    });

    console.log("All test cases passed!");
}
