
export const getBubbleSortAnimations = (array: any[], arraySize: number) => {
    const animations: any[] = [];
    bubbleSort(array, arraySize, animations);
    return animations;
};

export default function swap(arr: any[], xp: number, yp: number) {
    let temp = arr[xp];
    arr[xp] = arr[yp];
    arr[yp] = temp;
}


function bubbleSort(array: any[], arraySize: number, animations: any[]) {
    let i, j;
    for (i = 0; i < arraySize - 1; i++) {
        for (j = 0; j < arraySize - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                animations.push([j, j + 1]);
                swap(array, j, j + 1);
                animations.push([j, array[j], j + 1, array[j + 1]]);
                animations.push([j, j + 1]);
            }
        }
    }
}
