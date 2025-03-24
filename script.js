// Mini-jeu 1 : Clique-moi
document.getElementById("jeu1").addEventListener("click", function() {
    alert("Bravo ! Tu as cliqué.");
});

// Mini-jeu 2 : Survole-moi
document.getElementById("jeu2").addEventListener("mouseover", function() {
    this.style.backgroundColor = "red";
});

// Mini-jeu 3 : Devine un nombre
document.getElementById("jeu3").addEventListener("click", function() {
    let nombre = Math.floor(Math.random() * 10) + 1;
    let userNumber = prompt("Devine un nombre entre 1 et 10");
    if (userNumber == nombre) {
        alert("Gagné !");
    } else {
        alert("Perdu, le nombre était " + nombre);
    }
});