const arr = [1, 4, 5, 6, 7, 8, 10, 11, 13];


function binarySearch(arr, item) {
    let start = 0;
    let end = arr.length;
    let middle;
    let isFound = false;
    let position = -1;

    while (isFound === false && start <= end) {
        middle = Math.floor((start + end) / 2);

        if (arr[middle] === item) {
            isFound = true;
            position = middle;
            return position;
        }

        if (arr[middle] > item) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
    }
}

console.log(binarySearch(arr, 7));
