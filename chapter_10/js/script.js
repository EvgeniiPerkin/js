var passengers = [ { name: "Jane Doloop", paid: true, ticket: "coach"},
                   { name: "Dr. Evel", paid: true, ticket: "firstclass" },
                   { name: "Sui Property", paid: false, ticket: "firstclass"},
                   { name: "Bob Singer", paid: true, ticket: "improved economic"},
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
    var orderFunction;

    if (passenger.ticket === "firstclass") {
        orderFunction = function() {
            alert ("Would you like a cocktail or wine?");
        }
    } else if (passenger.ticket === "coach") {
        orderFunction = function() {
            alert ("Your choice is cola or water.")
        }
    } else if (passenger.ticket === "improved economic") {
        orderFunction = function() {
            alert ("Your choice is cola or water or wine.")
        }
    }
    return orderFunction;
}

function createDinnerOrder(passenger) {
    var dinnerFunction;

    if (passenger.ticket === "firstclass") {
        dinnerFunction = function() {
            alert ("Курица или паста?");
        }
    } else if (passenger.ticket === "coach") {
        dinnerFunction = function() {
            alert ("Закуски или сырная тарелка?")
        }
    } else if (passenger.ticket === "improved economic") {
        dinnerFunction = function() {
            alert ("Орешки или сухарики?")
        }
    }
    return dinnerFunction;
}

function serveCustomer(passenger) {
    var getDrinkOrderFunction = createDrinkOrder(passenger);
    var getDinnerOrderFunction = createDinnerOrder(passenger);
    getDrinkOrderFunction();

    getDinnerOrderFunction();
    getDrinkOrderFunction();
    getDrinkOrderFunction();

    getDrinkOrderFunction();
}

function servePassengers(passengers) {
    for (var i = 0; i < passengers.length; i++) {
        serveCustomer(passengers[i]);
    }
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
servePassengers(passengers);