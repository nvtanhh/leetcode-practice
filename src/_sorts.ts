// Dịch chuyển các phần tử lớn currentElement về bên phải
function insertionSortArray(nums: number[]): void {
    const n = nums.length;

    for (let i = 1; i < n; i++) {
        const currentElement = nums[i];

        let j = i - 1;
        while (j >= 0 && nums[j] > currentElement) {
            nums[j + 1] = nums[j];
            j--;
        }
        nums[j + 1] = currentElement;
    }
}

// Lần lượt đẩy các phần tử lớn hơn về bên phải
function bubbleSort(nums: number[]): void {
    const n = nums.length;

    let swapped = false

    do {
        swapped = false;
        for (let j = 0; j < n - 1; j++) {
            if (nums[j] > nums[j + 1]) {
                const temp = nums[j];
                nums[j] = nums[j + 1];
                nums[j + 1] = temp;
                swapped = true;
            }
        }

    } while (
        swapped
    )
}

// Duyệt lần lượt chọn phần tử nhỏ nhất swap vào vị trí tương ứng
function selectionSort(nums: number[]): void {
    const n = nums.length;

    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (nums[j] < nums[minIndex]) {
                minIndex = j;
            }
        }

        // Swap the found minimum element with the first element
        const temp = nums[minIndex];
        nums[minIndex] = nums[i];
        nums[i] = temp;
    }
}



export function testSorts() {
    // Test cases
    const testCases = [
        { input: [4, 2, 1, 3], expected: [1, 2, 3, 4] },
        { input: [-1, 5, 3, 4, 0], expected: [-1, 0, 3, 4, 5] },
        { input: [], expected: [] },
        { input: [1], expected: [1] },
        { input: [3, 3, 3], expected: [3, 3, 3] },
        { input: [5, 4, 3, 2, 1], expected: [1, 2, 3, 4, 5] }
    ];

    testCases.forEach(({ input, expected }, index) => {
        // insertionSortArray(input); // Sorts the array in place
        bubbleSort(input)
        // selectionSort(input)
        console.assert(JSON.stringify(input) === JSON.stringify(expected), `Test case ${index + 1} failed: expected ${JSON.stringify(expected)}, got ${JSON.stringify(input)}`);
    });

    console.log("All test cases passed!");
}