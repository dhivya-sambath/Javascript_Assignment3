let dummytext = "The journey of thousand miles begins with one step";
let len = dummytext.length;
let wordCount = 0;
let charCount = 0;
let countClick = 0;

document.getElementById("typehere").addEventListener('click', function clc() {
     wordCount = 0;
     charCount = 0;

    var text = document.getElementById("dummytext");
    text.value = dummytext;
    startGame(text.value);

});

function startGame(event) {
    var i = 0;
    var error = 0;
    if(countClick == 0){
        document.getElementById('typehere').value = "";
        timer();
    }
    else{
        this.removeEventListener('click',clc);
    }
    countClick++;
    document.getElementById("typehere").addEventListener('keypress', function (e) {

        if (i < event.length && e.key != event.charAt(i)) {
            error++;
            document.getElementById('error').value = error;
        }
        else if (e.key == event.charAt(i) && e.key!="\u0020"){
            charCount++;
        }
        if (e.key == "\u0020") {
            wordCount++;
        }
        let correctChar = len - error;
        accuracy(correctChar);
        i++;
    });
}
function timer() {
    var timeleft = 60;
    var downloadTimer = setInterval(function () {
        if (timeleft <= 0) {
            clearInterval(downloadTimer);
        }
        document.getElementById("timer").value = timeleft + 's';
        timeleft -= 1;
        if (timeleft == 0)
            gameOver();
    }, 1000);
}

function accuracy(correctChar) {
    let accuracy;
    accuracy = (correctChar / len) * 100;
    document.getElementById("accuracy").value = accuracy;

}

function gameOver() {
    document.getElementById("wordpermin").style.display = "block";
    document.getElementById("charpermin").style.display = "block";
    document.getElementById("restart").style.display = "block";
    document.getElementById("wpm").style.display = "block";
    document.getElementById("cpm").style.display = "block";
    document.getElementById("dummytext").value = "Click on restart to start a new game";
    document.getElementById("wordpermin").value = wordCount;
    document.getElementById("charpermin").value = charCount;

}

function startNewGame() {
    document.getElementById("wordpermin").style.display = "none";
    document.getElementById("charpermin").style.display = "none";
    document.getElementById("restart").style.display = "none";
    document.getElementById("wpm").style.display = "none";
    document.getElementById("cpm").style.display = "none";
    document.getElementById("dummytext").value = "Click on the area below to start the game";
    document.getElementById("error").value = 0;
    document.getElementById("accuracy").value = 100;

    countClick =0;

}


