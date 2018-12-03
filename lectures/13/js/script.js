var questions = [{
    question : "When a user views a page containing a JavaScript program, which machine actually executes the script?",
    choices : [ "The User's machine running a Web browser",
        "The Web server",
        "A central machine deep within Netscape's corporate offices",
        "None of the above"],
    correctAnswer : 0
},{
    question : "Which of the following can't be done with client-side JavaScript?",
    choices : [ "Validating a form",
        "Sending a form's contents by email",
        "Storing the form's contents to a database file on the server",
        "None of the above"],
    correctAnswer : 2
},{
    question : "Using _______ statement is how you test for a specific condition",
    choices : [ "select",
        "if",
        "for",
        "none of the above"],
    correctAnswer : 1
},{
    question : "Add the numbers 10,4",
    choices : ["17",
    "12",
    "14",
    "15"],
    correctAnswer : 2
},{
    question : "Multiply the numbers 16,4",
    choices : ["43",
        "64",
        "34",
        "75"],
    correctAnswer : 1
}];

var currentQuestion = 0;
var correctAnswers = 0;
var quizOver = false;
displayCurrentQuestion();
document.getElementById("quiz-message").style.display = 'none';

function displayNext() {
    /*Write your code here */
    var x=document.querySelector("input[type=radio]:checked");
     if(x!=null){
      currentQuestion++;
        if (currentQuestion >= 5) {
            displayScore();
        }

        document.getElementById("choice-list").innerHTML = null;
        displayCurrentQuestion();
    }
    else{
         document.getElementById("quiz-message").innerHTML = "Please select the option ";
         document.getElementById("quiz-message").style.display = 'block';
        document.getElementById("choice-list").innerHTML = null;
        displayCurrentQuestion();
    }

}

function displayCurrentQuestion() {
    /*Write your code here */

    document.getElementById("question").innerHTML=questions[currentQuestion].question;
      for(let i=0;i<4;i++)
      {
          document.getElementById("choice-list").innerHTML +='<li> <input type="radio" id="'+i+'"  name="ti">'+ questions[currentQuestion].choices[i]+ '</li>'+"<br>";

      }


}

function resetQuiz() {
    currentQuestion = 0;
    correctAnswers = 0;
    hideScore();
}
function displayScore() {
    document.getElementById("result").innerHTML = "you scored: " + correctAnswers + " out of: " + questions.length;
    document.getElementById("result").style.display = 'block';
}
function hideScore() {
    document.getElementById("result").style.display = 'none';
}