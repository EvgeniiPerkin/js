window.onload = init;

function init() {
    var img = document.getElementById("map");
    img.onmousemove = showCoordinates;
    timerHandler();
}

function showCoordinates(eventObj) {
    var map = document.getElementById("coords");
    var x = eventObj.clientX;
    var y = eventObj.clientY;
    if ((y >= 112 && y <= 263) && (x >= 120 && x <= 275)){
        map.innerHTML = "Map coordinates: x-" + x + ", y-" + y;
    } else {
        map.innerHTML = "Move mouse to find coordinates...";
    }
}

function timerHandler() { 
    var result = confirm( "You ok?" );

    if ( result ) {
        setTimeout(timerHandler, 3000);
    } 
}