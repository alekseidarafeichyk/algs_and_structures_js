const arr = [2, 3, 4, 1, 3, 6, 9, 4, 12, 11, 10];

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let indexMin = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[i]) {
                indexMin = j;
            }
        }

        let temp = arr[i];
        arr[i] = arr[indexMin];
        arr[indexMin] = temp; 
    }

    

    return arr;
}

console.log(selectionSort(arr));
