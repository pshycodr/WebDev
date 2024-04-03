function intersection(arr1, arr2) {
    const set1 = new Set(arr1);
    console.log(set1);
    const common = [];

    for (const element of arr2) {
        if (set1.has(element)) {
            common.push(element);
            set1.delete(element); 
        }
    }

    return common;
}

const arr1 = [1, 2, 3, 4, 5, 5, 6, 5,7];
const arr2 = [3, 4, 5, 6, 7, 3];

console.log(intersection(arr1, arr2)); // Output: [3, 4, 5, 6]
