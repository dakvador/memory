var motifs = ["😈", "😻", "😃", "🐴", "🐦", "🐶", "😎", "❌", "😈", "😻", "😃", "🐴", "🐦", "🐶", "😎", "❌"];
var questions = ["❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓"];

// var motifs = ["😈", "😻", "😈", "😻"]
// var questions = ["❓", "❓", "❓", "❓"]
var tablo = [];
var mydiv = document.getElementById('mydiv')
var counter = document.getElementById('count')
var buttons = document.querySelectorAll("button")
var returnes = document.getElementsByClassName("returned");
var compteur = 0
var compteur0 = 0


function newTab() {
    for (var i = 0; i < questions.length; i++) {
        var random = Math.floor(Math.random() * (questions.length - 1 - i));
        tablo.push(motifs[random]);
        motifs.splice(random, 1);

    }
    return tablo

}

function affichage() {

    if (tablo.join('') == questions.join('')) {
        document.getElementById('texte').innerHTML = "Gagné en " + compteur0 + " coups."
    }
    for (var i = 0; i < questions.length; i++) {
        buttons[i].innerHTML = questions[i];
    }

    if (compteur0 % 2 == 0) {
        for (var i = 0; i < questions.length; i++) {
            buttons[i].disabled = false;
            buttons[i].classList.remove("returned");
        }
    }
}

newTab()
affichage()
console.log(tablo)

function cardclick(x) {
    console.log(tablo.join(''))

    console.log(questions.join(''))
    compteur0 += 1;

    counter.innerHTML = compteur0;
    //questions[x] = tablo[x];
    buttons[x].innerHTML = tablo[x];
    document.getElementById(x).classList.add("returned");
    if (document.getElementsByClassName("returned").length == 2) {
        compteur += 1;
        for (button of buttons) {
            button.disabled = true;
        }
        if (tablo[returnes[0].id] == tablo[returnes[1].id]) {
            questions[returnes[0].id] = tablo[returnes[0].id]
            questions[returnes[1].id] = tablo[returnes[1].id]
        }
    }
    if (compteur0 % 2 == 0) {
        setTimeout(affichage, 2000);
    }
}