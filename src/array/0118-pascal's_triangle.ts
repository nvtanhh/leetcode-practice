function generate(numRows: number): number[][] {
    if (numRows == 0) return [];

    const result = [[1]];

    for (let i = 1; i < numRows; i++) {
        const tempArray = [0, ...result[i - 1], 0];
        const row = [];
        for (let j = 1; j < tempArray.length; j++) {
            row.push(tempArray[j] + tempArray[j - 1]);
        }

        result[i] = row;
    }

    return result;
};