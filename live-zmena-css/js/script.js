function swapStyleSheet(sheet) {
    document.getElementById("pagestyle").setAttribute("href", sheet);  
}

function initate() {
    var style1 = document.getElementById("stylesheet1");
    var style2 = document.getElementById("stylesheet2");
    var style3 = document.getElementById("stylesheet3");
    var style4 = document.getElementById("stylesheet4");

    style1.onclick = swapStyleSheet("styles/dark.css");
    style2.onclick = swapStyleSheet("styles/light.css");
    style3.onclick = swapStyleSheet("styles/teal.css");
    style4.onclick = swapStyleSheet("styles/violet.css");
}