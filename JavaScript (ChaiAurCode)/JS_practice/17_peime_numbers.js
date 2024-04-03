// Implement a program to find all prime numbers within a given range.


function primeNum(rangeFrom, rangeTo){
    for (let i = rangeFrom; i <= rangeTo; i++) {
        let flag = 0;
        for (let j = 2; j <= i/2; j++) {
            if(i%j == 0) {
                flag = 1;
                break;
            }
        }

        if(flag == 0 && i > 1) console.log(i);
    }
}

primeNum(5, 50)