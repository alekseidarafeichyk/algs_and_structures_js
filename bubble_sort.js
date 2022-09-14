const arr = [2, 3, 4, 1, 3, 6, 9, 4, 12, 11, 10];


function bubbleSort (array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j< array.length; j++) {
            const current = array[j];
            const next = array[j + 1];

            if (next < current) {
                const temp = current;
                array[j] = next;
                array[j + 1] = temp;
            }
        }
    }

    return array;
}

console.log(bubbleSort(arr));
