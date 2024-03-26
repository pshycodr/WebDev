let h = 0, m = 1, s = 60;

const timer = setInterval(() => {
    console.log(`${m} : ${s}`);
    s--; 

    if(s === 0 && m >= 0){
        m--;
        s = 60
    }

    if(m < 0){
        clearInterval(timer)
    }
}, 1000)