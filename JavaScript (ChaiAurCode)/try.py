import requests

url = "https://opentdb.com/api.php?amount=10&category=28&difficulty=easy&type=multiple"

response = requests.get(url)
data = response.json()

# print(data)

allQuestions = data["results"]

score = 0

for question in range(0, len(allQuestions)):
    print(f"--->> {allQuestions[question]["question"]}")
    correctAns =  allQuestions[question]["correct_answer"]
    incorect_ans = allQuestions[question]["incorrect_answers"]
    allOption = [] 

    for i in incorect_ans:
        allOption.append(i)
    allOption.append(correctAns)
    
    for option in range(0, len(allOption)):
        print(f"\t {option+1}. {allOption[option]}")

    userInput = int(input("Ans :- "))
    
    UserAns = allOption[userInput-1]
    
    if UserAns == correctAns:
        print("Correct Ans! +1")
        score = score + 1
    else:
        print(f"Wrong Ans. The Correct ans is '{correctAns}'  -1")
        score = score - 1

print(f"Your score is :- {score}")
        

    
    
    