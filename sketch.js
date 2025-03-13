//  Globale variabler - Holder styr på tal, operatorer og displayet.
let currentNumber = "";  // Det aktuelle tal, brugeren indtaster.
let previousNumber = ""; // Gemmer det forrige tal, hvis en operator vælges.
let currentOperator = ""; // Gemmer den aktuelle operator (+ eller -).
let displayText = ""; // Holder styr på det, der vises på "skærmen".
//

function setup() {
    createCanvas(400, 400); // Opretter en 400x400 flade.

    //  Opretter tal-knapperne (0-9)
    let button = createButton(1); 
    button.position(50, 50); // Placerer knappen på x=50, y=50
    button.mousePressed(() => addDigit(1)); // Når knappen trykkes, kaldes addDigit(1)

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

    // + - Opretter operator-knapper (+, -)
    button = createButton("+");
    button.position(170, 50);
    button.mousePressed(() => setOperator("+")); // Når trykket, gemmes operatoren.

    button = createButton("-");
    button.position(170, 80);
    button.mousePressed(() => setOperator("-")); 

    // "="-knap - Beregner resultatet
    button = createButton("=");
    button.position(110, 140);
    button.mousePressed(() => calculateResult()); // Tryk for at regne.

    // "C"-knap - Nulstiller lommeregneren
    button = createButton("C");
    button.position(140, 140);
    button.mousePressed(() => resetCalculator()); // Rydder alt input.
}

// Tegner skærmen og viser inputtet
function draw() {
    background(220); 

    // Viser det aktuelle regnestykke eller tal
    fill(0); 
    textSize(24);
    textAlign(RIGHT, CENTER);
    text(previousNumber + " " + currentOperator + " " + currentNumber, 240, 20);
}

//  Tilføjer et tal til `currentNumber`
function addDigit(digit) {
    currentNumber += digit; // Tallet bygges op ved at tilføje flere cifre
}

// + - Gemmer operatoren/fortegn og flytter det første tal til `previousNumber`
function setOperator(operator) {
    if (currentNumber !== "") { // Sikrer, at der er et tal indtastet
        previousNumber = currentNumber; // Gemmer det første tal
        currentNumber = ""; // Nulstiller input til næste tal
        currentOperator = operator; // Gemmer operatoren/forteget (+ eller -)
    }
}

// = Beregner resultatet baseret på operatoren/fortegnet
function calculateResult() {
    if (previousNumber !== "" && currentNumber !== "" && currentOperator !== "") {
        let num1 = float(previousNumber); // Konverterer til tal
        let num2 = float(currentNumber); 
        let result = 0;

        // Vælger den rigtige beregning
        if (currentOperator === "+") result = num1 + num2;
        if (currentOperator === "-") result = num1 - num2;

        // Viser resultatet på skærmen, tal og fortegn
        currentNumber = result.toString();
        previousNumber = "";
        currentOperator = "";
    }
}

// Nulstiller hele lommeregneren
function resetCalculator() {
    currentNumber = ""; // Nulstiller input
    previousNumber = ""; // Sletter tidligere tal
    currentOperator = ""; // Sletter operatoren
}
