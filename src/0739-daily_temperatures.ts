function dailyTemperatures(temperatures: number[]): number[] {
    // const n = temperatures.length;
    // const anws = new Array(n).fill(0)

    // for (let i = 0; i < n - 1; i++) {
    //     for (let j = i + 1; j < n; j++) {
    //         if (temperatures[j] > temperatures[i]) {
    //             anws[i] = j - i;
    //             break;
    //         }
    //     }
    // }

    // return anws;

    const n = temperatures.length;
    const anws = new Array(n).fill(0);
    const stack: number[] = []; // stack to store the index

    for (let i = 0; i < n; i++) {
        while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            const j = stack.pop();
            anws[j] = i - j;
        }

        stack.push(i);
    }

    return anws;
};

/*
[73, 74, 75, 71, 69, 72, 76, 73]

res = [0,0,0,0,0,0,0,0]
stack []

loop
    0
    stack = [0] -> index = 73

    1.
    74>73 
    res = [1,0,0,0,0,0,0,0]
    stack = [1] ~~ 74

    2. 
    75>74
    res = [1,1,0,0,0,0,0,0]
    stack = [2] ~~ 75

    3. 
    75 !> 71
    stack = [2, 3] 



*/


export function testDailyTemperatures() {
    // Test cases
    const testCases = [
        { input: [73, 74, 75, 71, 69, 72, 76, 73], expected: [1, 1, 4, 2, 1, 1, 0, 0] },
        { input: [30, 40, 50, 60], expected: [1, 1, 1, 0] },
        { input: [30, 30, 30, 30], expected: [0, 0, 0, 0] },
        { input: [60, 50, 40, 30], expected: [0, 0, 0, 0] },
        { input: [], expected: [] },
        { input: [30], expected: [0] }
    ];

    testCases.forEach(({ input, expected }, index) => {
        const result = dailyTemperatures(input);
        console.assert(JSON.stringify(result) === JSON.stringify(expected), `Test case ${index + 1} failed: expected ${JSON.stringify(expected)}, got ${JSON.stringify(result)}`);
    });

    console.log("All test cases passed!");
}
