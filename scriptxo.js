

let title = document.getElementById("title");
let turn = "x";
let items = [];


function gameEnd(num1, num2, num3) {

    title.innerHTML = `(${items[num1]}) Winner`;
    document.getElementById("item" + num1).style.backgroundColor = "#20b102";
    document.getElementById("item" + num2).style.backgroundColor = "#20b102";
    document.getElementById("item" + num3).style.backgroundColor = "#20b102";

    setInterval(function () {

        title.innerHTML += "."
    }, 1000)

    setTimeout(function () {
        location.reload()
    }, 4000)

}


function winner() {

    for (let i = 1; i < 10; i++) {
        items[i] = document.getElementById("item" + i).innerHTML;
    }

    if (items[1] == items[2] && items[2] == items[3] && items[1] != "") {
        gameEnd(1, 2, 3);
    } else if (items[4] == items[5] && items[5] == items[6] && items[5] != "") {
        gameEnd(4, 5, 6);
    } else if (items[7] == items[8] && items[8] == items[9] && items[7] != "") {
        gameEnd(7, 8, 9);
    } else if (items[1] == items[4] && items[4] == items[7] && items[1] != "") {
        gameEnd(1, 4, 7);
    } else if (items[2] == items[5] && items[5] == items[8] && items[2] != "") {
        gameEnd(2, 5, 8);
    } else if (items[3] == items[6] && items[6] == items[9] && items[3] != "") {
        gameEnd(3, 6, 9);
    } else if (items[3] == items[5] && items[5] == items[7] && items[3] != "") {
        gameEnd(3, 5, 7);
    } else if (items[1] == items[5] && items[5] == items[9] && items[1] != "") {
        gameEnd(1, 5, 9);
    }


}



function playTurn(id) {


    let element = document.getElementById(id);
    if (turn === "x" && element.innerHTML == "") {

        element.innerHTML = "x";
        turn = "o"
        title.innerHTML = `o <i style="font-size: 25px; color: #f9a913;" class="fa-solid fa-arrow-right-long fa-xs"></i> Turn`;

    } else if (turn === "o" && element.innerHTML == "") {

        element.innerHTML = "o"
        turn = "x"
        title.innerHTML = `x <i style="font-size: 25px; color: #f9a913;" class="fa-solid fa-arrow-right-long fa-xs"></i> Turn`;
    }
    winner()
};




function playAgain() {
    location.reload()
};