const button = document.querySelectorAll("button");

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", () => {
    const player = button[i].innerHTML;
    const computer =
      button[Math.floor(Math.random() * button.length)].innerHTML;
    let resultat = "";
    if (player === computer) {
      resultat = "Egalité";
    } else if (
      (player === "pierre" && computer === "ciseau") ||
      (player === "papier" && computer === "pierre") ||
      (player === "ciseau" && computer === "papier")
    ) {
      resultat = "Gagné!!!!";
    } else {
      resultat = "Perdu";
    }
    document.querySelector(".resultat").innerHTML = `
        Joueur : ${player} </br>
        Robot : ${computer} </br>
        resultat: ${resultat}
         `;
  });
}
