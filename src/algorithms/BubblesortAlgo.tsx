// Define the types more explicitly
export const getBubbleSortAnimations = (array: number[], arraySize: number): (number | number[])[] => {
    const animations: (number | number[])[] = [];
    bubbleSort(array, arraySize, animations);
    return animations;
};

// Updated swap function with proper typing
export default function swap(arr: number[], xp: number, yp: number): void {
    const temp = arr[xp]; // Use 'const' instead of 'let'
    arr[xp] = arr[yp];
    arr[yp] = temp;
}

// Updated bubbleSort function with proper typing
function bubbleSort(array: number[], arraySize: number, animations: (number | number[])[]): void {
    for (let i = 0; i < arraySize - 1; i++) {
        for (let j = 0; j < arraySize - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                animations.push([j, j + 1]); // Indicate comparison
                swap(array, j, j + 1);       // Perform the swap
                animations.push([j, array[j], j + 1, array[j + 1]]); // Store the result after swap
                animations.push([j, j + 1]); // End of comparison
            }
        }
    }
}
