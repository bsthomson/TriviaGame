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

function startScreen () {
    setTimeout(tenSeconds, 1000 * 10);
    $(".buffer1").append("<div class='title'><h2>");
    $(".click-ready, .ready, .buffer1").hide();
    $(".title").html(questions.question1.title);
    $(".title").append("<div class='choice1'>");
    $(".choice1").html(questions.question1.false1);
    $(".choice1").addClass("btn");
    $("#timer").text("10")
    $("#timer").show();
    function tenSeconds() {
        wrongAnswer()
    }
    function wrongAnswer() {
        $(".buffer1").append("<img src='../images/Defeat.jpg'id='defeat'alt='defeat'>");
    }    

};

function correctScreen () {
    $(".buffer1").html("<img src=../images/Victory.jpg");
    $(".buffer1").append("<div class='correct'></div>");
    $(".correct").html("Correct!");
};

function wrongScreen () {

};
    
});