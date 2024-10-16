function groupAnagrams(strs: string[]): string[][] {
    // const map = new Map<string, string[]>();

    // strs.forEach((str) => {
    //     const sortedStr = str.split('').sort().join();
    //     if (map.has(sortedStr)) {
    //         map.get(sortedStr).push(str);
    //     } else {
    //         map.set(sortedStr, [str])
    //     }
    // });

    // return Array.from(map.values());


    // Approach 2: using a character count array as the key for the map 
    // to prevent sort() chars array
    const map = new Map<string, string[]>();

    strs.forEach((str) => {
        const counts = new Array(26).fill(0);
        for (let i = 0; i < str.length; i++) {
            const char = str[i];

            counts[char.charCodeAt(0) - 'a'.charCodeAt(0)]++
        }

        const code = counts.join('#')

        if (map.has(code)) {
            map.get(code).push(str);
        } else {
            map.set(code, [str])
        }
    });

    return Array.from(map.values());

};


export function testGroupAnagrams() {
    const testCases = [
        { input: ["eat", "tea", "tan", "ate", "nat", "bat"], expected: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]] },
        { input: [""], expected: [[""]] },
        { input: ["a"], expected: [["a"]] },
        { input: ["ab", "ba", "abc", "cba", "bca"], expected: [["ab", "ba"], ["abc", "cba", "bca"]] },
        { input: ["abc", "def", "ghi"], expected: [["abc"], ["def"], ["ghi"]] }
    ];

    testCases.forEach(({ input, expected }, index) => {
        const result = groupAnagrams(input);
        const sortedResult = result.map(group => group.sort()).sort();
        const sortedExpected = expected.map(group => group.sort()).sort();
        console.assert(JSON.stringify(sortedResult) === JSON.stringify(sortedExpected), `Test case ${index + 1} failed: expected ${JSON.stringify(sortedExpected)}, got ${JSON.stringify(sortedResult)}`);
    });

    console.log("All test cases passed!");
}