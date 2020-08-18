var player1; /////declaring variables////
var player2;

function input() { ///////input fuction for names/////
    player1 = prompt("Enter player 1 name:");
    player2 = prompt("Enter player 2 name:");
    document.querySelectorAll("h1")[1].innerHTML = player1;
    document.querySelectorAll("h1")[2].innerHTML = player2;
}




function roll() {

    var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

    var randomDiceImage = randomNumber1 + "die" + ".svg"; //dice1.png - dice6.png

    var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png


    var randomNumber2 = Math.floor(Math.random() * 6) + 1;

    var randomImageSource2 = "images/" + randomNumber2 + "die" + ".svg";

    var smileimagered = "images/" + "redcharsmile" + ".svg";
    var smileimagegreen = "images/" + "greencharsmile" + ".svg";


    document.querySelectorAll("img")[1].setAttribute("src", randomImageSource);
    document.querySelectorAll("img")[2].setAttribute("src", randomImageSource2);


    if (randomNumber1 > randomNumber2) { //////conditional staement for winnig /////
        document.querySelectorAll("h1")[0].innerHTML = "🚩" + player1 + " . Wins!";
        document.querySelectorAll("img")[0].setAttribute("src", smileimagered);
        document.querySelectorAll("img")[3].setAttribute("src", "images/greenchar.svg");
    } else if (randomNumber2 > randomNumber1) {
        document.querySelectorAll("h1")[0].innerHTML = player2 + ". Wins! 🚩";
        document.querySelectorAll("img")[3].setAttribute("src", smileimagegreen);
        document.querySelectorAll("img")[0].setAttribute("src", "images/redchar.svg");
    } else {
        document.querySelectorAll("h1")[0].innerHTML = "Draw!";
        document.querySelectorAll("img")[0].setAttribute("src", "images/redchar.svg");
        document.querySelectorAll("img")[3].setAttribute("src", "images/greenchar.svg")

    }
}

input();