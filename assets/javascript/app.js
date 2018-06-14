$( document ).ready(function () {

var questions = {
    question1 : {
        title: "What was John Matrix's ex profession in 'Commando'?",
        false1: "Lumberjack",
        false2: "Garbage man",
        answer: "Commando",
        false3: "Politician",
    },
    question2 : {
        title: "What was Adam Gibson's profession in 'Sixth Day'?",
        false1: "Commando",
        false2: "Teacher",
        false3: "Sailor",
        answer: "Pilot",
    },
    question3 : {
        title: "What was Howard Langston's profession in 'Jingle all the Way'?",
        answer: "Mattress Salesman",
        false1: "Dog Groomer",
        false2: "Telemarketer",
        false3: "Commando",
    },
    question4 : {
        title: "What was Alex Hesse's profession in 'Junior'?",
        answer: "Research Geneticist",
        false1: "Commando",
        false2: "Teacher",
        false3: "Arms Salesman",
    },
};

$(".ready").on("click", startScreen)
$("#timer").hide();

var correctAnswer = 0;
var totalAnswer = 0;

function startScreen () {
    var tenTimeout1 = setTimeout(tenSeconds1, 1000 * 10);
    $("#question").append("<div class='title'><h2>");
    $(".click-ready, .ready, .buffer1").hide();
    $(".title").html(questions.question1.title);
    $("#question").append("<div class='choice1 but'>");
    $(".choice1").text(questions.question1.false1);
    $("#question").append("<div class='choice2 but'>");
    $(".choice2").text(questions.question1.false2);
    $("#question").append("<div class='choice3 but'>");
    $(".choice3").text(questions.question1.answer);
    $("#question").append("<div class='choice4 but'>");
    $(".choice4").text(questions.question1.false3);
    $(".but").addClass("btn btn-success");
    $("#timer").text("10")
    $("#timer").show();
    totalAnswer++;

    ($(".choice3").on("click", correctScreen1));
    ($(".choice1").on("click", wrongScreen1));
    ($(".choice2").on("click", wrongScreen1));
    ($(".choice4").on("click", wrongScreen1));
   
    function tenSeconds1() {
        timeOutScreen1()
    }
    
    function timeOutScreen1() {
        setTimeout(threeSeconds1, 1000 * 3);
        $("#question").hide();
        $(".buffer1").show();
        $(".buffer1").append("<img src='assets/images/Defeat.jpg'id='defeat'alt='defeat'>");
        console.log("WRONG")
        $("#timer").hide();
        $(".buffer1").append("<div class='correct-answer'>");
        $(".buffer1").append("<div class='score-total wb'>");
        $(".score-total").text("You have gotten " + correctAnswer + " out of " + totalAnswer + " right!")
        $(".correct-answer").text("The answer was " + questions.question1.answer);
        $(".buffer1").prepend("<div class='timeout'>");
        $(".timeout").text("Time is UP!!");
        
        function threeSeconds1() {
            questionScreen2()
        }
    };

    function wrongScreen1() {
        clearTimeout(tenTimeout1);
        setTimeout(threeSeconds1, 1000 * 3);
        $("#question").hide();
        $(".buffer1").show();
        $(".buffer1").append("<img src='assets/images/Defeat.jpg'id='defeat'alt='defeat'>");
        console.log("WRONG")
        $("#timer").hide();
        $(".buffer1").append("<div class='correct-answer'>");
        $(".buffer1").append("<div class='score-total wb'>");
        $(".score-total").text("You have gotten " + correctAnswer + " out of " + totalAnswer + " right!")
        $(".correct-answer").text("The answer was " + questions.question1.answer);
        $(".buffer1").prepend("<div class='timeout'>");
        $(".timeout").text("WRONG!!");
        function threeSeconds1() {
            questionScreen2()
        }
    };

    function correctScreen1() {
        correctAnswer++;
        clearTimeout(tenTimeout1);
        setTimeout(threeSeconds1, 1000 * 3);
        $("#question").hide();
        $("#timer").hide();
        $(".buffer1").show();
        $(".buffer1").html("<img src='assets/images/Victory.jpg'id='victory'>");
        $("#defeat").append("<div class='correct'></div>");
        $(".buffer1").append("<div class='correct-answer'>");
        $(".buffer1").append("<div class='score-total wb'>");
        $(".score-total").text("You have gotten " + correctAnswer + " out of " + totalAnswer + " right!")
        $(".buffer1").prepend("<div class='timeout'>");
        $(".timeout").text("Correct!!");
        console.log("correct");
        function threeSeconds1() {
            questionScreen2()
        }
    };
    
    function questionScreen2 () {
        var tenTimeout2 = setTimeout(tenSeconds2, 1000 * 10);
        $("#question").show();
        $(".click-ready, .ready, .buffer1").hide();
        $(".title").html(questions.question2.title);
        $(".choice1").text(questions.question2.false1);
        $(".choice2").text(questions.question2.false2);
        $(".choice3").text(questions.question2.false3);
        $(".choice4").text(questions.question2.answer);
        $("#timer").text("10")
        $("#timer").show();
        totalAnswer++;
    
        ($(".choice4").on("click", correctScreen2));
        ($(".choice1").on("click", wrongScreen2));
        ($(".choice2").on("click", wrongScreen2));
        ($(".choice3").on("click", wrongScreen2));
       
        function tenSeconds2() {
            timeOutScreen2()
        }

        function timeOutScreen2() {
            setTimeout(threeSeconds2, 1000 * 3);
            $("#question").hide();
            $(".buffer1").show();
            console.log("WRONG")
            $("#timer").hide();
            $(".score-total").text("You have gotten " + correctAnswer + " out of " + totalAnswer + " right!")
            $(".correct-answer").text("The answer was " + questions.question1.answer);
            $(".timeout").text("Time is UP!!");
            
            function threeSeconds2() {
                questionScreen3()
            }
        };
    
        function wrongScreen2() {
            clearTimeout(tenTimeout2);
            setTimeout(threeSeconds2, 1000 * 3);
            $("#question").hide();
            $(".buffer1").show();
            console.log("WRONG")
            $("#timer").hide();
            $(".score-total").text("You have gotten " + correctAnswer + " out of " + totalAnswer + " right!")
            $(".correct-answer").text("The answer was " + questions.question1.answer);
            $(".timeout").text("WRONG!!");
            function threeSeconds2() {
                questionScreen3()
            }
        };
    
        function correctScreen2() {
            clearTimeout(tenTimeout2);
            setTimeout(threeSeconds2, 1000 * 3);
            correctAnswer++;
            $("#question").hide();
            $("#timer").hide();
            $(".buffer1").show();
            $(".buffer1").html("<img src='assets/images/Victory.jpg'id='victory'>");
            $(".score-total").text("You have gotten " + correctAnswer + " out of " + totalAnswer + " right!")
            $(".timeout").text("Correct!!");
            console.log("correct");
            function threeSeconds2() {
                questionScreen3()
            }
        };
        function questionScreen3 () {
            var tenTimeout3 = setTimeout(tenSeconds3, 1000 * 10);
            $("#question").show();
            $(".click-ready, .ready, .buffer1").hide();
            $(".title").html(questions.question3.title);
            $(".choice1").text(questions.question3.answer);
            $(".choice2").text(questions.question3.false1);
            $(".choice3").text(questions.question3.false2);
            $(".choice4").text(questions.question3.false3);
            $("#timer").text("10")
            $("#timer").show();
            totalAnswer++;
        
            ($(".choice1").on("click", correctScreen3));
            ($(".choice2").on("click", wrongScreen3));
            ($(".choice3").on("click", wrongScreen3));
            ($(".choice4").on("click", wrongScreen3));
           
            function tenSeconds3() {
                timeOutScreen3()
            }
        }

            function timeOutScreen3() {
                setTimeout(threeSeconds3, 1000 * 3);
                $("#question").hide();
                $(".buffer1").show();
                console.log("WRONG")
                $("#timer").hide();
                $(".score-total").text("You have gotten " + correctAnswer + " out of " + totalAnswer + " right!")
                $(".correct-answer").text("The answer was " + questions.question1.answer);
                $(".timeout").text("Time is UP!!");
                
                function threeSeconds3() {
                    questionScreen4()
                }
            };
        
            function wrongScreen3() {
                clearTimeout(tenTimeout3);
                setTimeout(threeSeconds3, 1000 * 3);
                $("#question").hide();
                $(".buffer1").show();
                console.log("WRONG")
                $("#timer").hide();
                $(".score-total").text("You have gotten " + correctAnswer + " out of " + totalAnswer + " right!")
                $(".correct-answer").text("The answer was " + questions.question1.answer);
                $(".timeout").text("WRONG!!");
                function threeSeconds3() {
                    questionScreen4()
                }
            };
        
            function correctScreen3() {
                clearTimeout(tenTimeout3);
                setTimeout(threeSeconds3, 1000 * 3);
                correctAnswer++;
                $("#question").hide();
                $("#timer").hide();
                $(".buffer1").show();
                $(".buffer1").html("<img src='assets/images/Victory.jpg'id='victory'>");
                $(".score-total").text("You have gotten " + correctAnswer + " out of " + totalAnswer + " right!")
                $(".timeout").text("Correct!!");
                console.log("correct");
                function threeSeconds3() {
                    questionScreen4()
                }
            };

}};


});