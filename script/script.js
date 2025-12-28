let txtUtilisateur = document.getElementById("réponse")
let validation = document.getElementById("validation")
let proposition = document.querySelector(".proposition input")
let score = 0
let scoreUtilisateur = document.querySelector(".zoneScore")
let choixUtilisateur = document.querySelectorAll(".zoneOptions input")

// fonction qui affiche le résultat de l'utilisateur
function afficherResultat(score, nbMotsProposes){
    let fin = `<p>Votre Score est de: <span id="score">${score}</span> sur 
                    <span id="totalité">${nbMotsProposes}</span> </p>`
    scoreUtilisateur.innerHTML = fin
}

function choisirPhrasesOuMots(){
    // Déclaration de la variable contenant le choix de l'utilisateur
    let choix = prompt("Avec quelle liste désirez-vous jouer : 'mots' ou 'phrases' ?")
// Tant que l'utilisateur n'a pas saisi "mots" ou "phrases", on lui redemande de saisir un choix
    while (choix !== "mots" && choix !== "phrases") {
        choix = prompt("Avec quelle liste désirez-vous jouer : 'mots' ou 'phrases' ?")
    }
    return choix
}

function lancerBoucleDeJeu(listePropositions){
    let score = 0
    // On parcourt le tableau des mots
    for (let i = 0; i < listePropositions.length; i++) {
        // On demande à l'utilisateur de saisir le mot correspondant à l'indice i
        let motUtilisateur = prompt("Entrez le mot : " + listePropositions[i])
        if (motUtilisateur === listePropositions[i]) {
            // Si le mot saisi par l'utilisateur est correct, on incrémente le score
            score++
        }
    }
    return score
}

function lancerJeu(){
    let choix = choisirPhrasesOuMots()
    let score = 0
    let nbMotsProposes = 0

    if (choix === "mots") {
        score = lancerBoucleDeJeu(listeMots)
        nbMotsProposes = listeMots.length
    } else {
        score = lancerBoucleDeJeu(listePhrases)
        nbMotsProposes = listePhrases.length
    }

    afficherResultat(score, nbMotsProposes)
}



