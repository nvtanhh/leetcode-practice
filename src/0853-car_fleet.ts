function carFleet(target: number, position: number[], speed: number[]): number {
    const pair = new Map<number, number>();
    for (let i = 0; i < position.length; i++) {
        pair.set(position[i], speed[i]);
    }

    const sortedPairs = Array.from(pair.entries()).sort((a, b) => b[0] - a[0]);

    const stack = [];
    for (const [pos, sped] of sortedPairs) {
        const time = (target - pos) / sped;
        stack.push(time);

        if (stack.length >= 2 && stack[stack.length - 1] <= stack[stack.length - 2]) {
            stack.pop();
        }
    }

    return stack.length;
};


export function testCarFleet() {
    // Test cases
    const testCases = [
        { target: 12, position: [10, 8, 0, 5, 3], speed: [2, 4, 1, 1, 3], expected: 3 },
        { target: 10, position: [3], speed: [3], expected: 1 },
        { target: 100, position: [0, 2, 4], speed: [4, 2, 1], expected: 1 },
        { target: 10, position: [6, 8], speed: [3, 2], expected: 2 },
        { target: 15, position: [10, 8, 0, 5, 3], speed: [2, 4, 1, 1, 3], expected: 3 },
        { target: 12, position: [0, 4, 2], speed: [2, 1, 3], expected: 1 }
    ];

    testCases.forEach(({ target, position, speed, expected }, index) => {
        const result = carFleet(target, position, speed);
        console.assert(result === expected, `Test case ${index + 1} failed: expected ${expected}, got ${result}`);
    });

    console.log("All test cases passed!");
}
