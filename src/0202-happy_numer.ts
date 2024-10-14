function isHappy(n: number): boolean {
    const visited = new Set();

    while (!visited.has(n)) {
        visited.add(n)

        n = sumOfSquares(n);
        if (n === 1) {
            return true;
        }
    }

    return false;
};

function sumOfSquares(n: number): number {
    let sum = 0;

    while (n > 0) {
        const tail = n % 10;
        sum += tail * tail;

        n = Math.floor(n / 10);
    }

    return sum;
}


export function testIsHappy() {
    // Test cases
    const testCases = [
        { n: 19, expected: true }, // 19 is a happy number
        { n: 2, expected: false }, // 2 is not a happy number
        { n: 7, expected: true }, // 7 is a happy number
        { n: 1, expected: true }, // 1 is a happy number
        { n: 20, expected: false } // 20 is not a happy number
    ];

    testCases.forEach(({ n, expected }, index) => {
        const result = isHappy(n);
        console.assert(result === expected, `Test case ${index + 1} failed: expected ${expected}, got ${result}`);
    });

    console.log("All test cases passed!");
}
