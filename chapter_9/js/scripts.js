
window.onload = init;

var im;

function init() {
    var images = document.getElementsByTagName("img");
    for(var i = 0; i < images.length; i++){
        images[i].onmousemove = showAnswer;
        images[i].onmouseout = hideAnswer;
    }
} 

function showAnswer(eventObj) { 
    var image = eventObj.target; 
    var name = image.id;
    name = "../chapter_9/images/" + name + ".jpg";
    image.src = name;
    im = image;
}

function hideAnswer(eventObj){
    var image = eventObj.target; 
    var name = image.id;
    name = "../chapter_9/images/" + name + "blur.jpg";
    image.src = name;
    im = image;
}