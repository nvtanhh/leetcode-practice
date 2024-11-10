function flipAndInvertImage(image: number[][]): number[][] {
    return image.map(row => row.reverse().map(pixel => pixel ^ 1));
};