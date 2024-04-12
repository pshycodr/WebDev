import { useState, useEffect } from "react";


function useCurrencyConverter(currency){
    const [data, setData] = useState({})

    useEffect(() => {
        fetch(`https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_smXTL2NZRCx2OPkxrSY2ncRNpZBCOsqWtnjrhozY&currencies=EUR%2CUSD%2CCAD%2CINR%2CGBP%2CAUD%2CJPY%2CCNY%2CCHF%2CMXN%2CNZD&base_currency=${currency}`)
        .then((res) => res.json() )
        .then((res) => setData(res[currency]))
        console.log(data);
    }, [currency])
    console.log(data);
    return data
}

export default useCurrencyConverter;