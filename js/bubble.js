var scores = [60, 50, 60, 58, 54, 54,
58, 50, 52, 54, 48, 69,
34, 55, 51, 52, 44, 51,
69, 64, 66, 55, 52, 61,
46, 31, 57, 52, 44, 18,
41, 53, 55, 61, 51, 44];

function getScoresInfo(scores){
    var l = scores.length;
    var index = 0;
    var favorit = 0;
    while(l > index){
        if (favorit < scores[index]){
            favorit = scores[index];
        }
        console.log("Bubble solution #" + index + ": " + scores[index]);
        index = index + 1;
    }
    console.log("Bubbles tests: " + l);
    console.log("Highest bubble score: " + favorit);

    index = 0;
    var str = "Solutions with highest score: ";
    while(l > index){
        if (scores[index] == favorit){
            str = str + "#" + index + ", ";
        }
        index = index + 1;
    }
    console.log(str);
}

getScoresInfo(scores);