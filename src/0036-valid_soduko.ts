function isValidSudoku(board: string[][]): boolean {
    const n = board.length;
    const subBoxes = new Map<string, Set<number>>();

    for (let i = 0; i < n; i++) {
        const rowSet = new Set<number>();
        const colSet = new Set<number>();

        for (let j = 0; j < n; j++) {
            const rowNum = parseInt(board[i][j]);
            const colNum = parseInt(board[j][i]);

            const subBoxKey = `${Math.floor(i / 3)}-${Math.floor(j / 3)}`;
            if (!subBoxes.has(subBoxKey)) {
                subBoxes.set(subBoxKey, new Set<number>());
            }

            if (rowSet.has(rowNum) ||
                colSet.has(colNum) ||
                subBoxes.get(subBoxKey)!.has(rowNum)) {
                return false;
            }

            if (!isNaN(rowNum)) {
                rowSet.add(rowNum);
                subBoxes.get(subBoxKey)!.add(rowNum);
            }

            if (!isNaN(colNum)) {
                colSet.add(colNum);
            }
        }
    }

    return true;
};

export function testIsValidSudoku() {
    // Test cases
    const testCases = [
        {
            board: [
                ["5", "3", ".", ".", "7", ".", ".", ".", "."],
                ["6", ".", ".", "1", "9", "5", ".", ".", "."],
                [".", "9", "8", ".", ".", ".", ".", "6", "."],
                ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
                ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
                ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
                [".", "6", ".", ".", ".", ".", "2", "8", "."],
                [".", ".", ".", "4", "1", "9", ".", ".", "5"],
                [".", ".", ".", ".", "8", ".", ".", "7", "9"]
            ],
            expected: true
        },
        {
            board: [
                ["8", "3", ".", ".", "7", ".", ".", ".", "."],
                ["6", ".", ".", "1", "9", "5", ".", ".", "."],
                [".", "9", "8", ".", ".", ".", ".", "6", "."],
                ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
                ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
                ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
                [".", "6", ".", ".", ".", ".", "2", "8", "."],
                [".", ".", ".", "4", "1", "9", ".", ".", "5"],
                [".", ".", ".", ".", "8", ".", ".", "7", "9"]
            ],
            expected: false
        },
        {
            board: [
                [".", ".", ".", ".", "5", ".", ".", "1", "."],
                [".", "4", ".", "3", ".", ".", ".", ".", "."],
                [".", ".", ".", ".", ".", "3", ".", ".", "1"],
                ["8", ".", ".", ".", ".", ".", ".", "2", "."],
                [".", ".", "2", ".", "7", ".", ".", ".", "."],
                [".", "1", "5", ".", ".", ".", ".", ".", "."],
                [".", ".", ".", ".", ".", "2", ".", ".", "."],
                [".", "2", ".", "9", ".", ".", ".", ".", "."],
                [".", ".", "4", ".", ".", ".", ".", ".", "."]
            ],
            expected: false
        }
    ];

    testCases.forEach(({ board, expected }, index) => {
        const result = isValidSudoku(board);
        console.assert(result === expected, `Test case ${index + 1} failed: expected ${expected}, got ${result}`);
    });

    console.log("All test cases passed!");
}
