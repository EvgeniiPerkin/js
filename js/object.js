var point = {
    color: "red",
    x: 12.2,
    y: 14.5
}

function print(point){
    output = "color: " + point.color + ", x: " + point.x + ", y: " + point.y;
    console.log(output);
}

var p1 = point;
p1.color = "blue";
p1.x = .15;
p1.y = 14.34;
print(p1);