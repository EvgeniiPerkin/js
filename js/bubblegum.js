var products = ["Choo Choo Chocolate", "Icy Mint", "Cake Batter", "Bubbelgum"];

var i = 0;

var hasBubbleGum = [false, false, false, true];

while(i < hasBubbleGum.length){
    if (hasBubbleGum[i]){
        console.log(products[i] + " contains bubble gum");
    }
    i++;
}

//////////////////////////////////////////////////////////////////////////////////

for(var i = 0; i < hasBubbleGum.length; i++){
    if (hasBubbleGum[i]){
        console.log(products[i] + " contains bubble gum");
    }
}