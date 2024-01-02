currentTimeStamp = 0;
function showQuestion() {
    document.getElementById('question-container').style.visibility="visible";
}

function nextPage() {
    let audio = document.getElementById('audio');
    var cur_time = audio.currentTime;
    currentTime = cur_time;
    window.location.href = "yes.html";
}

function moveButton() {
    var x = Math.random() * (window.innerWidth - document.getElementById('noButton').offsetWidth);
    var y = Math.random() * (window.innerHeight - document.getElementById('noButton').offsetHeight);
    document.getElementById('noButton').style.left = `${x}px`;
    document.getElementById('noButton').style.top = `${y}px`;
}

function answerQuestion() {
    document.getElementById('question-container').style.visibility="hidden";
    document.getElementById('answer-container').style.visibility="visible";
}