let noOfQuestions = document.querySelector("#noOfQuestions");
let submitBtn = document.querySelector("#submitBtn");
let display = document.querySelector(".display");

const create = () => {
        for (let i = 1; i <= noOfQuestions.value; i++) {
            let QuestionNumber = document.createElement("h4");
            QuestionNumber.innerText = "Q"+i+". ";
            for (let j = 1; j <= 5; j++) {
                let question = document.createElement("input");
                question.appendChild(QuestionNumber);
                question.type = "radio";
                question.class = "Question "+i;
                question.value = "q"+j;
                question.name = "Q"+i;
                question.id = "Option "+j;
                let label = document.createElement("label");
                label.for = "Option "+j;
                let options = ["A","B","C","D","NONE"];
                label.innerText =options[j-1];
                label.appendChild(question);
                display.appendChild(label);
            }
            display.appendChild(document.createElement("br"));
        }
};