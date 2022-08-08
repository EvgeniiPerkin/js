var passengers = [ { name: "Jane Doloop", paid: true, ticket: "coach"},
                   { name: "Dr. Evel", paid: true, ticket: "firstclass" },
                   { name: "Sui Property", paid: false, ticket: "firstclass"},
                   { name: "John Funcall", paid: true, ticket: "coach" } ];

function processPassengers(passengers, testFunction) {
    for (var i = 0; i < passengers.length; i++) {
        if (testFunction(passengers[i])) {
            return false;
        }
    }
    return true;
}

function checkNoFlyList(passenger) {
    return (passenger.name === 'Dr. Evel');
}

function checkNotPaid(passenger) {
    return (!passenger.paid);
}

function printPassenger(passenger) {
    console.log(passenger.name + ", " + (passenger.paid ? " Оплатил": " Не оплатил"));
    return false;
}

function createDrinkOrder(passenger) {
    if (passenger.ticket === "firstclass") {
        alert ("Would you like a cocktail or wine?");
    } else {
        alert ("Your choice is cola or water.")
    } 
}

function serveCustomer(passenger) {
    createDrinkOrder(passenger);
}

var allCanFly = processPassengers(passengers, checkNoFlyList);
if (!allCanFly) {
    console.log("This plane can't take off: we a passenger on the no-fly-list.");
}

var allPaid = processPassengers(passengers, checkNotPaid);
if (!allPaid) {
    console.log("The plane can't take off: not everyone has paid.");
}

processPassengers(passengers, printPassenger);