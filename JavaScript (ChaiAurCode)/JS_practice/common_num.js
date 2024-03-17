

function findMostFrequentNumber(arr) {
    // Create an object to store the frequency of each number
    const frequencyMap = {};

    // Iterate through the array and count the occurrences of each number
    arr.forEach(num => {
        frequencyMap[num] = (frequencyMap[num] || 0) + 1;
    });

    console.log(frequencyMap);

    let mostFrequentNumber;
    let maxFrequency = 0;

    // Iterate through the frequency map to find the most frequent number
    for (const num in frequencyMap) {
        if (frequencyMap[num] > maxFrequency) {
            mostFrequentNumber = num;
            maxFrequency = frequencyMap[num];
        }
    }

    return mostFrequentNumber;
}

// Example usage:
const arr = [1,2,3,4,2,3,4,2,3,4,5,6,7,8,9,5,3,2,3,2,3,2,2,2,1,1,2,3,4,4,5,7,8,9,6,66,77,88,99,55,44,33,22,3,445,98];
const mostFrequentNumber = findMostFrequentNumber(arr);
console.log("Most frequent number:", mostFrequentNumber);
