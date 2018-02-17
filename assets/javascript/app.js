$(document).ready(function(){
    var timeRemaining
    var correct
    var incorrect
    var gameover
    var results

    var questions = [
        {
            "question" : "Question 1?",
            "choices" : ["Choice 1","Choice 2","Choice 3","Choice 4"],
            "answerIndex" : 1
        },
        {
            "question" : "Question 2?",
            "choices" : ["Choice 1","Choice 2","Choice 3","Choice 4"],
            "answerIndex" : 2
        },
        {
            "question" : "Question 3?",
            "choices" : ["Choice 1","Choice 2","Choice 3","Choice 4"],
            "answerIndex" : 3
        },
        {
            "question" : "Question 4?",
            "choices" : ["Choice 1","Choice 2","Choice 3","Choice 4"],
            "answerIndex" : 4
        }
    ];
    // example of how to get into this object
    // questions[2].choices[2]

    function gameBegin (){
        for(var i = 0; i < questions.length; i++){
        }
    }

    showQuestion()

    function showQuestion () {
        $('<div/>', {'id':'question-container'}).appendTo("#question-group");
        

    //    run through and recreate HTML from page into

        //         <div id="question1" class="row">
        //             <div class="col-lg-12">
        //                 <p id="question-text">Question 1</p>
        //             </div>
        //         </div>

        //         <div id="questionanswer1" class="row">
        //             <div class="col-md-12">
                        // for loop to loop through choices property array for this question object
        //                 <input type="radio" name="radiogroup1" value="choice1" id="choice1">
        //                 <label id="choicelabel1" for"choice1">Choice 1</label>
                        
        //             </div>
        //         </div>
        
        function getRadioChoices (){
            // <div class="col-md-12">
            // <input type="radio" name="radiogroup1" value="choice1" id="choice1">
            // <label id="choicelabel1" for"choice1">Choice 1</label>
        }
    }

});