async function quizData(){
    let url = "https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple"

    let response = await fetch(url)
    let data = await response.json()

    let i = 0
    
    console.log(data.results[i].question);
    
    i += 1
}

quizData()