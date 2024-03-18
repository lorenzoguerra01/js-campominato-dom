// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.Attenzione:
//  ** nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno 
// esserci due numeri uguali.
// In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina.
// Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
// La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di 
// numeri consentiti(ovvero quando ha rivelato tutte le celle che non sono bombe).
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha 
// cliccato su una cella che non era una bomba.

let elBtnPlay = document.getElementById("btn-play")

elBtnPlay.addEventListener("click", function () {
    let acc = '';
    let sel = document.getElementById("sel").value
    let msContainer = document.querySelector(".ms_container");
    msContainer.classList.add("border", "border-black")
    console.log(sel);
    let bomb = [];
    let check = [];
    let grid;
    msContainer.classList.remove("w-100")

    if (sel === "easy") {
        for (let i = 0; i < 100; i++) {
            acc += ` <div class="ms_box ms_box-easy">${i + 1}</div>`;
        }
        check = isNumberRange(1, 100);
        grid = 100;
    } else if (sel === "normal") {
        for (let i = 0; i < 81; i++) {
            acc += ` <div class="ms_box ms_box-normal">${i + 1}</div>`;
        }
        check = isNumberRange(1, 81);
        grid = 81;
    } else if (sel === "hard") {
        for (let i = 0; i < 49; i++) {
            acc += ` <div class="ms_box ms_box-hard">${i + 1}</div>`;
        }
        check = isNumberRange(1, 49);
        grid = 49;
    } else {
        acc = `<div class="text-danger">Selezionare una difficoltà</div>`;
    }
    msContainer.innerHTML = acc;

    // for (let i = 0; i < 16; i++) { //without function includes
    //     tempRandom = getRndInteger(1, 100)
    //     let isFound
    //     for (let j = 0; j < i; j++) {
    //         if (tempRandom === bomb[j]) {
    //             isFound = true
    //         }
    //     }
    //     if (!isFound) {
    //         bomb.push(tempRandom)
    //     } else {
    //         i--
    //     }
    //     console.log(bomb);
    // }
    bomb = isUniqueArray (16, 1, 100); //with function includes
    console.log(bomb);
    let boxes = document.querySelectorAll(".ms_box")
    boxes.forEach(function (box) {
        box.addEventListener("click", function () {
            console.log(check);
            let tempIndex = check.indexOf(parseInt(this.innerHTML))
            check.splice(tempIndex, 1)
            console.log(check);
            if (!bomb.includes(parseInt(this.innerHTML))) {
                this.classList.add("bg-primary")
                console.log(this.innerHTML);
            } else {
                this.classList.add("bg-danger")
                console.log(this.innerHTML);
                let elBtnContinue = document.createElement("button")
                elBtnContinue.className = "btn btn-warning"
                elBtnContinue.innerText = 'Vai al risultato';
                msContainer.innerHTML += `<div class="text-danger w-100 text-center ">Peccato, hai perso!</div>`
                msContainer.append(elBtnContinue)
                elBtnContinue.addEventListener("click", function () {
                    msContainer.classList.add("w-100")
                    msContainer.innerHTML = `<h2 class="text-success">Sei riuscito a selezionare ${(grid - check.length - 1) + " celle su " + (grid - 16)}!</h2>`
                })
            }

        })
    })
})

