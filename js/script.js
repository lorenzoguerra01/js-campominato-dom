// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.Attenzione:
//  ** nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno 
// esserci due numeri uguali.
// In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina.
// Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
// La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di 
// numeri consentiti(ovvero quando ha rivelato tutte le celle che non sono bombe).

let elBtnPlay = document.getElementById("btn-play")

elBtnPlay.addEventListener("click", function () {
    let acc = '';
    let sel = document.getElementById("sel").value
    let msContainer = document.querySelector(".ms_container");
    msContainer.classList.add("border", "border-black")
    console.log(sel);
    let bomb = [];
    if (sel === "easy") {
        for (let i = 0; i < 100; i++) {
            acc += ` <div class="ms_box ms_box-easy">${i + 1}</div>`;
        }
    } else if (sel === "normal") {
        for (let i = 0; i < 81; i++) {
            acc += ` <div class="ms_box ms_box-normal">${i + 1}</div>`;
        }
    } else if (sel === "hard") {
        for (let i = 0; i < 49; i++) {
            acc += ` <div class="ms_box ms_box-hard">${i + 1}</div>`;
        }
    } else {
        acc = `<div class="text-danger">Selezionare una difficoltà</div>`;
    }
    for (let i = 0; i < 16; i++) {
        tempRandom = getRndInteger(1, 100)
        let isFound
        for (let j = 0; j < i; j++) {
            if (tempRandom === bomb[j]) {
                isFound = true
            }
        }
        if (!isFound) {
            bomb.push(tempRandom)
        } else {
            i--
        }
        console.log(bomb);
    }
    msContainer.innerHTML = acc;

    // let boxes = document.querySelectorAll(".ms_box")
    // boxes.forEach(function (box) {
    //     let isFound
    //     for (let i = 0; i < bomb.length; i++) {
    //         if (box.innerHTML === bomb[i]) {
    //             isFound === true
    //         }
    //     }
    //     if (!isFound) {
    //         box.addEventListener("click", function () {
    //             this.classList.toggle("bg-primary")
    //             console.log(this.innerHTML);
    //         })    
    //     } else {
    //         box.addEventListener("click", function () {
    //             this.classList.toggle("bg-danger")
    //             console.log(this.innerHTML);
    //         })
    //     }

    // })
    let boxes = document.querySelectorAll(".ms_box")
    boxes.forEach(function (box) {
        box.addEventListener("click", function () {
            let isFound
            for (let i = 0; i < bomb.length; i++) {
                if (parseInt(this.innerHTML) === bomb[i]) {
                    isFound = true
                    console.log(isFound)
                }
                console.log(parseInt(this.innerHTML), bomb[i])
            }
            if (!isFound) {
                this.classList.toggle("bg-primary")
                console.log(this.innerHTML);
            } else {
                this.classList.toggle("bg-danger")
                console.log(this.innerHTML);
            }
        })
    })
})

