var tableau = document.createElement("table");
var div = document.getElementById("board");
var reset = document.createElement("button")
reset.innerHTML = "Reset"

div.appendChild(tableau);

div.appendChild(reset)


turn = true
for (let i = 0; i < 3; i++) {
    var tr = document.createElement("tr");
    tableau.appendChild(tr);
    for (let j = 0; j < 3; j++) {
        var td = document.createElement("td");
        tr.appendChild(td);
        td.className = "cell";
        td.id = j + "-" + i;
        td.addEventListener("click", function () {
            if (this.innerHTML == "") {
                if (turn == true) {
                    this.innerHTML = "X";
                    turn = false;
                }
                else {
                    this.innerHTML = "O";
                    turn = true
                }
            }
            var cell1 = document.getElementById("0-0")
            var cell2 = document.getElementById("1-0")
            var cell3 = document.getElementById("2-0")
            var cell4 = document.getElementById("0-1")
            var cell5 = document.getElementById("1-1")
            var cell6 = document.getElementById("2-1")
            var cell7 = document.getElementById("0-2")
            var cell8 = document.getElementById("1-2")
            var cell9 = document.getElementById("2-2")

            if (cell1.innerHTML == cell2.innerHTML && cell2.innerHTML == cell3.innerHTML && cell1.innerHTML != "") {
                cell1.style.backgroundColor = "green";
                cell2.style.backgroundColor = "green";
                cell3.style.backgroundColor = "green";
            }
            if (cell4.innerHTML == cell5.innerHTML && cell5.innerHTML == cell6.innerHTML && cell4.innerHTML != "") {
                cell4.style.backgroundColor = "green";
                cell5.style.backgroundColor = "green";
                cell6.style.backgroundColor = "green";
            }
            if (cell7.innerHTML == cell8.innerHTML && cell8.innerHTML == cell9.innerHTML && cell7.innerHTML != "") {
                cell7.style.backgroundColor = "green";
                cell8.style.backgroundColor = "green";
                cell9.style.backgroundColor = "green";
            }
            if (cell1.innerHTML == cell4.innerHTML && cell4.innerHTML == cell7.innerHTML && cell1.innerHTML != "") {
                cell1.style.backgroundColor = "green";
                cell4.style.backgroundColor = "green";
                cell7.style.backgroundColor = "green";
            }
            if (cell2.innerHTML == cell5.innerHTML && cell2.innerHTML == cell8.innerHTML && cell2.innerHTML != "") {
                cell2.style.backgroundColor = "green";
                cell5.style.backgroundColor = "green";
                cell8.style.backgroundColor = "green";
            }
            if (cell3.innerHTML == cell6.innerHTML && cell6.innerHTML == cell9.innerHTML && cell3.innerHTML != "") {
                cell3.style.backgroundColor = "green";
                cell6.style.backgroundColor = "green";
                cell9.style.backgroundColor = "green";
            }
            if (cell1.innerHTML == cell5.innerHTML && cell5.innerHTML == cell9.innerHTML && cell1.innerHTML != "") {
                cell1.style.backgroundColor = "green";
                cell5.style.backgroundColor = "green";
                cell9.style.backgroundColor = "green";
            }
            if (cell3.innerHTML == cell5.innerHTML && cell5.innerHTML == cell7.innerHTML && cell3.innerHTML != "") {
                cell3.style.backgroundColor = "green";
                cell5.style.backgroundColor = "green";
                cell7.style.backgroundColor = "green";
            }
        })
    }
}


reset.addEventListener("click", function () {
    for (let j = 0; j < 9; j++) {
        document.getElementsByTagName("td")[j].innerHTML = "";
        document.getElementsByTagName("td")[j].style.backgroundColor = "white";
    }
})


