const arr = [1, 4, 5, 6, 7, 8, 10, 11, 13];

function linearSearch (arr, item) {
    for (let i = 0; i < arr.length; i++) {
        const current = arr[i];

        if (current === item) {
            return i;
        }
    }

    return null
}

console.log(linearSearch(arr, 13));
