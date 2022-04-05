var element = document.getElementById("animated_text");
var text = "Responsive and very minimalistic website <br> that I have created from scratch with usage of JS, CSS and little bit of HTML";
var pause = 100;
var i = 0;

function step() {
    element.innerHTML = text.substr(0, i);
    i++;
    if (i >= text.length + pause) {
        i = 0;

    }
}

setInterval(step, 90);
