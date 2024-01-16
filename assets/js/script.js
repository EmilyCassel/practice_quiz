var h1 = document.querySelector("h1");
var time = 10;
var timer;

var modal = document.querySelector(".modal")

var submitBtn = document.querySelector(".modal button")

var eventObj = {};

var questionIndex =0; 

questionIndex++;

if (questionIndex === questions.length) 
    {console.log("end quiz");}

function checkAnswer(eventObj){
    eventObj.stopPropagation();

    var el = eventObj.target; 

    if (el.tagName ==="BUTTON"){
        var userAnser = el.innerText; 

        if (userAnswer === questions[0].correctAnswer){
        } else {
        }
    }
}



function endGame(){
    clearInterval(timer);

    var messageParagraph = document.querySelector("#message");

    messageParagraph.innerText = "Time Is Up"; 

    messageParagraph.style.display ="initial";
}


function startGame() {
    timer = setInterval(function () {
 
        time--;

   
        h1.innerText = "Time Left: " + time; 

        if (time <= 0) {
            endGame();
            }
        }, 1000);

        var questionWrap = document.querySelector("#question-wrap")
}

function displayQuestion (){
    
    var currentQuestionObj = questions[questionIndex]

    var textEl = document.querySelector(".question-text")

    textEl.innerText = currentQuestionobj.questionText

    for (var i = 0; i < currentQuestionObj.choices.length; i++){
        var choice = document.createElement("button")
    }
}

displayQuestion




startGame();






