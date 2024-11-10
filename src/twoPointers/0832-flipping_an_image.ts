function flipAndInvertImage(image: number[][]): number[][] {
    // return image.map(row => row.reverse().map(pixel => pixel ^ 1));


    for (let row of image) {
        let l = 0;
        let r = row.length - 1;

        while (l < r) {
            [row[l], row[r]] = [row[r] ^ 1, row[l] ^ 1];
            l++;
            r--;
        }
    }
    return image;
};