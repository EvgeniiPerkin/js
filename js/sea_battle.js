setTimeout(main, 0);
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
function main(){
    var location1 = getRandomInt(5);
    var location2 = location1 + 1;
    var location3 = location1 + 2;
    var guess = 0;
    var hits = 0;
    var isSunk = false;
    while(isSunk == false){
        attack = prompt('Input value location fot the attack(enter a number 0-6):', 0);
        if (attack < 0 || attack > 6){
            alert("Error location!!!");
        }
        else{
            guess = guess + 1;
            if (attack == location1 || attack == location2 || attack == location3){
                hits = hits + 1;
                if (hits == 3){
                    isSunk = true;
                    alert("You win!!!");
                }
            }
        }
    }
    alert("Count guess: " + guess);
}