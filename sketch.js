// Globale variabler - Holder styr på tal, operatorer og displayet.
let currentNumber = 0; // Starter på 0, og opdateres ved input
let result = null; // Holder styr på det samlede resultat
let currentOperator = null; // Gemmer den aktuelle operator (+ eller -)
let newCalculation = false; // Hvis true, starter en ny beregning

// setup() - Opretter lommeregnerens knapper
function setup() {
    createCanvas(400, 400); // Opretter en 400x400 flade.

    // Opretter tal-knapperne (0-9)
    let button = createButton(1);
    button.position(50, 50);
    button.mousePressed(() => addDigit(1));

    button = createButton(2);
    button.position(80, 50);
    button.mousePressed(() => addDigit(2));

    button = createButton(3);
    button.position(110, 50);
    button.mousePressed(() => addDigit(3));

    button = createButton(4);
    button.position(50, 80);
    button.mousePressed(() => addDigit(4));

    button = createButton(5);
    button.position(80, 80);
    button.mousePressed(() => addDigit(5));

    button = createButton(6);
    button.position(110, 80);
    button.mousePressed(() => addDigit(6));

    button = createButton(7);
    button.position(50, 110);
    button.mousePressed(() => addDigit(7));

    button = createButton(8);
    button.position(80, 110);
    button.mousePressed(() => addDigit(8));

    button = createButton(9);
    button.position(110, 110);
    button.mousePressed(() => addDigit(9));

    button = createButton(0);
    button.position(80, 140);
    button.mousePressed(() => addDigit(0));

    // Opretter operator-knapper (+, -)
    button = createButton("+");
    button.position(170, 50);
    button.mousePressed(() => setOperator("+"));

    button = createButton("-");
    button.position(170, 80);
    button.mousePressed(() => setOperator("-"));

    // "="-knap - Beregner resultatet
    button = createButton("=");
    button.position(110, 140);
    button.mousePressed(() => calculateResult());

    // "C"-knap - Nulstiller lommeregneren
    button = createButton("C");
    button.position(140, 140);
    button.mousePressed(() => resetCalculator());
}

// Tegner skærmen og viser inputtet
function draw() {
    background(220); // Baggrundsfarve

    // Tegner et display-rektangel som "skærm"
    fill(255);
    rect(50, 20, 200, 40, 5);

    // Viser enten resultatet eller den aktuelle beregning
    fill(0);
    textSize(24);
    textAlign(RIGHT, CENTER);

    if (result !== null && currentOperator === null && currentNumber === 0) {
        text(result, 240, 40); // Viser kun resultatet
    } else {
        text((result !== null ? result : "") + " " + (currentOperator || "") + " " + (currentNumber !== 0 ? currentNumber : ""), 240, 40);
    }
}

// Tilføjer et tal og opdaterer `currentNumber`
function addDigit(digit) {
    if (newCalculation) {
        // Hvis en ny beregning starter efter "=", behold resultatet som udgangspunkt
        currentNumber = digit;
        newCalculation = false;
    } else {
        if (currentNumber === 0) {
            currentNumber = digit; // Overskriv 0 med første ciffer
        } else {
            currentNumber = currentNumber * 10 + digit; // Bygger tallet op
        }
    }
}

// Gemmer operatoren og opdaterer `result`
function setOperator(operator) {
    if (currentOperator !== null) {
        calculateResult(); // Hvis der allerede er en operator, udfør beregning først
    } else if (result === null) {
        result = currentNumber; // Hvis ingen tidligere beregning, brug `currentNumber`
    }
    currentOperator = operator; // Gem operatoren
    currentNumber = 0; // Nulstil `currentNumber`
    newCalculation = false;
}

// Beregner resultatet og opdaterer skærmen
function calculateResult() {
    if (currentOperator !== null) {
        if (currentOperator === "+") {
            result += currentNumber;
        }
        if (currentOperator === "-") {
            result -= currentNumber;
        }
    }
    currentNumber = 0; // Nulstil `currentNumber`
    currentOperator = null; // Nulstil operator
    newCalculation = true; // Markér at en ny beregning kan starte
}

// Nulstiller hele lommeregneren
function resetCalculator() {
    currentNumber = 0;
    result = null;
    currentOperator = null;
    newCalculation = false;
}
