const INTENTOS = 6;
let guessesRemaining = INTENTOS;
let adivinar = [];
let palabras = ['banana,pelota,casa'] 

console.log(palabras)

function iniciar() {
    let juego = document.getElementById("juego");

    for (let i = 0; i < INTENTOS; i++) {
        let row = document.createElement("div")
        row.className = "letra-row"
        
        for (let j = 0; j < 5; j++) {
            let box = document.createElement("div")
            box.className = "letra-box"
            row.appendChild(box)
        }

        juego.appendChild(row)
    }
}


iniciar()