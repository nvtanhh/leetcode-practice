function getRow(rowIndex: number): number[] {
    let row = [1];

    for (let i = 0; i < rowIndex; i++) {
        // const tempRow = [0, ...row, 0];
        // const nextRow = [];
        // for (let i = 1; i < tempRow.length; i++) {
        //     nextRow.push(tempRow[i - 1] + tempRow[i]);
        // }
        // row = nextRow;

        const nextRow = new Array(row.length + 1).fill(0);
        for (let j = 0; j < row.length; j++) {
            nextRow[j] += row[j]
            nextRow[j + 1] += row[j]
        }
        row = nextRow;

    }

    return row;
};