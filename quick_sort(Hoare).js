const arr = [2, 3, 4, 1, 3, 6, 9, 4, 12, 11, 10];


function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const pivotIndex = Math.floor(arr.length / 2);
    const pivot = arr[pivotIndex];
    const less = [];
    const greater = [];

    for (let i = 0; i < arr.length; i++) {
        if (i === pivotIndex) {
            continue;
        } 

        if (arr[i] < pivot) {
            less.push(arr[i]);
        } else {
            greater.push(arr[i]);
        }
    }

    return [...quickSort(less), pivot, ...quickSort(greater)];
    
}


console.log(quickSort(arr));
