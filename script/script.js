let txtUtilisateur = document.getElementById("réponse")
let validation = document.getElementById("validation")
let proposition = document.querySelector(".proposition input")
let scoreUtilisateur = document.querySelector(".zoneScore")
let choixUtilisateur = document.querySelectorAll(".zoneOptions input")
let commencer = document.getElementById('commencer')

// fonction qui affiche le résultat de l'utilisateur
function afficherResultat(score){
    let fin = `<p>Votre Score est de: <span id="score">${score}`
    scoreUtilisateur.innerHTML = fin
}

function afficherProposition(texte) {
    proposition.value = texte
}
function choisirMotAuHasard(listePropositions) {
    let i = Math.floor(Math.random() * listePropositions.length);
    return listePropositions[i];
}

/**
 * Cette fonction lance le décompte du temps
 */
function lancerCompteARebours() {
    let temps = 60 // Le temps de départ
    let timerElement = document.getElementById("timer")

    // On utilise setInterval pour répéter l'action toutes les 1000ms (1 seconde)
    let intervalId = setInterval(() => {
        temps-- // On enlève 1 seconde
        timerElement.innerText = temps // On met à jour l'affichage

        // Si le temps est écoulé
        if (temps === 0) {
            clearInterval(intervalId) // On arrête le chrono

            // On désactive le jeu
            txtUtilisateur.disabled = true
            validation.disabled = true

            // Petit message de fin (optionnel)
            timerElement.innerText = "Temps écoulé !"
        }
    }, 1000)
}

function lancerJeu(){
    let i = 0
    let score = 0
    let motActuel = ''
    let listePropositions = listeMots
    commencer.addEventListener('click', function(){
        lancerCompteARebours()
        motActuel = choisirMotAuHasard(listePropositions)
        afficherProposition(motActuel)
        txtUtilisateur.disabled = false
        validation.disabled = false
        commencer.disabled = true
        txtUtilisateur.focus()
    })

    // Gestion de reponse utilisitauer
    validation.addEventListener("click", function(event){
        if (txtUtilisateur.value === motActuel) {
            // Si le mot saisi par l'utilisateur est correct, on incrémente le score
            if (listePropositions === listeMots) {
                score = score+ 100
            }
            else{
                score = score+300
            }
            txtUtilisateur.value = '' // On vide le champ texte
            motActuel = choisirMotAuHasard(listePropositions) // On pioche un nouveau mot
            afficherProposition(motActuel) // On l'affiche
        }
    })

    // GESTION DES BOUTONS RADIO (Choix Mots / Phrases)
    for (let index = 0; index < choixUtilisateur.length; index++){
        let boutonActuel = choixUtilisateur[index]

        boutonActuel.addEventListener("click", function(event){
            let monBouton = event.target;

            // Étape A : On change la liste utilisée
            if (monBouton.value === "mots") {
                listePropositions = listeMots;
            } else {
                listePropositions = listePhrases;
            }

            // Étape B : C'est ici la correction !
            // On pioche un nouveau mot dans la NOUVELLE liste
            motActuel = choisirMotAuHasard(listePropositions);

            // On l'affiche à l'écran
            afficherProposition(motActuel);

            // Petit bonus : On remet le curseur dans la case pour écrire direct
            txtUtilisateur.value = ""; // On vide si l'utilisateur avait commencé à écrire
            txtUtilisateur.focus();
        })
    }
}