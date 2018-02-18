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
            $('<div id="question-column" class="col-lg-12">').appendTo('#question');
            $('<div id="question-text">').appendTo('#question-column');
            
            
            for(var i = 0; i < questions.length; i++){
                console.log(questions[i].question);
                $('#question-text').append('<p id="question-paragraph" class="row">Question: ' + questions[i].question);
                console.log(questions[i].choices);

                
                // for(var i = 0; i < questions.choices[0].length; i++){
                    
                // }
            
            // $('<div id="question-choices">').appendTo('#question-text');
            // $('<div id="question-choices-row" class="row">').appendTo('#question-choices');
            // $('<div id="question-choices-column" class="col-lg-12">').appendTo('#question-choices-row');
            // $('#question-choices-column').append('<input type="radio" id="radio-choices"><label id="choice-label">' + questions[0].choices[0] + '</label>');
            // $('#question-choices-column').append('<input type="radio" id="radio-choices"><label id="choice-label">' + questions[0].choices[1] + '</label>');
            // $('#question-choices-column').append('<input type="radio" id="radio-choices"><label id="choice-label">' + questions[0].choices[2] + '</label>');
            // $('#question-choices-column').append('<input type="radio" id="radio-choices"><label id="choice-label">' + questions[0].choices[3] + '</label>');
            }

            
                
                
                // function getRadioChoices (){
                //     for(i = 0; i < questions.choices[0].length; i++){
                //         console.log(this)
                //         $('#question-choices-column').append('<input type="radio" id="radio-choices"><label id="choice-label">' + questions[0].choices[0] + '</label>');
                //     }
                // }
            } 
        }
        
    

});