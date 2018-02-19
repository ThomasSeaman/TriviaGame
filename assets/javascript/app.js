$(document).ready(function(){
    var timeRemaining
    var correct
    var incorrect
    var gameover
    var results

    var questions = [
        {
            "question" : "Where do the Ducks play?",
            "choices" : ["Chicago","Montreal","Oregon","Anaheim"],
            "answerIndex" : 3
        },
        {
            "question" : "The Blackhawks are from what city?",
            "choices" : ["New York","Chicago","Las Vegas","Atlanta"],
            "answerIndex" : 1
        },
        {
            "question" : "What team isn't from Canada?",
            "choices" : ["Red Wings","Canadians","Maple Leafs","Senators"],
            "answerIndex" : 0
        },
        {
            "question" : "Which team has never won a stanley cup?",
            "choices" : ["Bruins","Redwings","Blues","Maple Leafs"],
            "answerIndex" : 2
        }
    ];

    gameBegin();

    function gameBegin (){
        
        showQuestions()
            
        function showQuestions () {
            $('<div id="question" class="row"></div>').appendTo('#question-group');
            // $('<div id="question-column" class="col-lg-12">').appendTo('#question');
            // $('<div id="question-text">').appendTo('#question-column');
            
            
            
            for(var i = 0; i < questions.length; i++){
                console.log(questions[i].question);
                $('#question-group').append('<div id="question-paragraph" class="col-lg-12">Question: ' + questions[i].question + '<div id="choices-display" class="col-lg-12">' + '<input type="radio" id="radio-choices"><label id="choice-label">' + questions[i].choices[0] + '</label>' + '<input type="radio" id="radio-choices"><label id="choice-label">' + questions[i].choices[1] + '</label>' + '<input type="radio" id="radio-choices"><label id="choice-label">' + questions[i].choices[2] + '</label>' + '<input type="radio" id="radio-choices"><label id="choice-label">' + questions[i].choices[3] + '</label>');
                console.log(questions[i].choices);
                
            }   
        }
    }
});