$(document).ready(function(){
    var timeRemaining
    var countDown
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
        },
        {
            "question" : "How many games are in a NHL regular season?",
            "choices" : ["46","144","82","78"],
            "answerIndex" : 2
        },
        {
            "question" : "Which team has won the most Stanley Cups?",
            "choices" : ["Canadiens","Maple Leafs","Red Wings","Bruins"],
            "answerIndex" : 0
        },
        {
            "question" : "Which team did Wayne Gretsky not play for?",
            "choices" : ["Edmonton","Los Angeles","New York","Calgary"],
            "answerIndex" : 3
        },
        {
            "question" : "Which team doesn't have an animal for a mascot?",
            "choices" : ["Boston","Anaheim","San Jose","Calgary"],
            "answerIndex" : 3
        },
        {
            "question" : "What format is a hockey game in?",
            "choices" : ["halves","thirds","quarters","fifths"],
            "answerIndex" : 1
        },
        {
            "question" : "What is the machine that grooms the ice called?",
            "choices" : ["Zamboni","Mower","Ice Pusher","Groomer"],
            "answerIndex" : 3
        }
    ];

    $("#start").on("click",function(){
        
        gameBegin();
      
    });

    function gameBegin (){
        
        showQuestions()
            
        function showQuestions () {
            
            $('<div id="question" class="row"></div>').appendTo('#question-group');
            
            for(var i = 0; i < questions.length; i++){
                
                $('#question-group').append(
                    '<div id="question-paragraph" class="col-lg-12">Question: ' + questions[i].question + '<div id="choices-display" class="col-lg-12" value="'+questions[i].answerIndex+'">' + 
                    '<input type="radio" class="radio-choices" name="'+[i]+'" value="0"><label class="choice-label">' + questions[i].choices[0] + '</label>' + 
                    '<input type="radio" class="radio-choices" name="'+[i]+'" value="1"><label class="choice-label">' + questions[i].choices[1] + '</label>' + 
                    '<input type="radio" class="radio-choices" name="'+[i]+'" value="2"><label class="choice-label">' + questions[i].choices[2] + '</label>' + 
                    '<input type="radio" class="radio-choices" name="'+[i]+'" value="3"><label class="choice-label">' + questions[i].choices[3] + '</label>');
            
            }  

            $('#question-group input').on('click', function() {
                
                console.log(this)
                // Value of question number
                // console.log($(this).attr('name'));
                // Value of user selection
                // console.log($(this).attr('value'));
                var userSelection = $(this).attr('value')
                // Value of answer
                // console.log($('#choices-display').attr('value'));
                var answer = $('#choices-display').attr('value')
                var correct = 0
                var incorrect = 0 
                if(answer === userSelection){
                    correct++
                }
                if(answer != userSelection){
                    incorrect++
                }
                console.log(correct)
                console.log(incorrect)
            });  
        }
    }
});