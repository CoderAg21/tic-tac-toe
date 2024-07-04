//global scope
let grids;
let input = 'X';
let winnerName = document.querySelector(".winnerName");
let restart = document.getElementById("restart");
let winningCase = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 5, 9], [3, 5, 7], [1, 4, 7], [2, 5, 8], [3, 6, 9]
]
let gridArr = [];
let count = 0;
let win = false;
let container = document.querySelector(".container")



//This is the engine of  the game..
for (let i = 1; i < 10; i++) {       //logic to append the grid  in  DOM..
    grids = document.createElement("div");
    grids.classList.add("grids", `grid${i}`);
    container.appendChild(grids);
    gridArr.push(grids)

    // listening the event of each grid
    grids.addEventListener('click', () => {
        if (!(document.querySelector(`.grid${i}`).innerText)) {
            document.querySelector(`.grid${i}`).innerText = input;
        }
        else {
            return;
        }


        //logic for winnning the game
        winningCase.forEach((e, index) => {
            let gridText1 = document.querySelector(`.grid${e[0]}`);
            let gridText2 = document.querySelector(`.grid${e[1]}`);
            let gridText3 = document.querySelector(`.grid${e[2]}`);

            if ((gridText1.innerText == gridText2.innerText && gridText2.innerText == gridText3.innerText && gridText1.innerText == gridText3.innerText) && (gridText1.innerText != "" && gridText2.innerText != "" && gridText3.innerText != "")) {

                gridText1.style.background = 'linear-gradient(#6adf6a, yellow)'
                gridText2.style.background = 'linear-gradient(#6adf6a, yellow)'
                gridText3.style.background = 'linear-gradient(#6adf6a, yellow)'
                winnerName.innerText = `'${input}' is Winner..`
                win = true;
                setTimeout(() => {
                    container.style.display = "none";
                    restart.style.display = 'block';
                    gridText1.style.background = ''
                    gridText2.style.background = ''
                    gridText3.style.background = ''
                }, 1000);

            }
            else {
                return;
            }

        });

        // logic for  match draw
        gridArr.forEach((e) => {
            if (!e.innerText) {
                count += 1
            }
        });
        if (count == 1 && !win) {
            winnerName.innerText = `Match Draw..`;
            container.style.display = "none";
            restart.style.display = 'block';
        };
        count = 1;


        //logic to change the symbol
        if (input == "X") {
            input = 'O';
        }
        else {
            input = "X";
        }


    });

    restart.addEventListener("click", () => {
        container.style.display = "grid";
        winnerName.innerText = ``
        restart.style.display = 'none';

        document.querySelector(`.grid${i}`).innerText = '';
        input = "X";

    })
};
window.addEventListener("load", (event) => {
    let backaudio = new Audio("music.mp3");
    backaudio.play();
    backaudio.loop= true;
});

