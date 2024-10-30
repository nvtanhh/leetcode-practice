function reverseStr(s: string, k: number): string {
    // const n = s.length;

    // if (n < 2) return s;

    // let res = '';

    // let i = 0;
    // while (i < n) {
    //     const length = n - i;

    //     if (length < k) {
    //         res += s.substring(i, n).split('').reverse().join('');
    //         break;
    //     } else if (length < 2 * k) {
    //         res += s.substring(i, i + k).split('').reverse().join('') + s.substring(i + k, n);
    //         break;
    //     } else {
    //         res += s.substring(i, i + k).split('').reverse().join('') + s.substring(i + k, i + 2 * k);
    //         i += 2 * k;
    //     }
    // }

    // return res;

    // Approach 2: using 2 pointers solution
    const n = s.length;
    const arr = s.split('');

    for (let start = 0; start < n; start += 2 * k) {
        let l = start;
        let r = Math.min(start + k - 1, n - 1);

        while (l < r) {
            // swap
            // const temp = arr[l];
            // arr[l] = arr[r];
            // arr[r] = temp;
            [arr[l], arr[r]] = [arr[r], arr[l]]
            l++;
            r--;
        }
    }

    return arr.join('');
};


export function testReverseStr() {
    // Test cases
    const testCases = [
        { s: "abcdefg", k: 2, expected: "bacdfeg" },
        { s: "abcd", k: 2, expected: "bacd" },
        { s: "abcdefg", k: 3, expected: "cbadefg" },
        { s: "a", k: 2, expected: "a" },
        { s: "abcdefg", k: 1, expected: "abcdefg" },
        { s: "abcdefg", k: 4, expected: "dcbaefg" },
        { s: "abcdefgh", k: 3, expected: "cbadefhg" }
    ];

    testCases.forEach(({ s, k, expected }, index) => {
        const result = reverseStr(s, k);
        console.assert(result === expected, `Test case ${index + 1} failed: expected ${expected}, got ${result}`);
    });

    console.log("All test cases passed!");
}
