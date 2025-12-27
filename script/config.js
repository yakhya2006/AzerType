const listeMots = ["Cachalot", "Pétunia", "Serviette"]
const listePhrases = ["Pas de panique !", "La vie, l'univers et le reste", "Merci pour le poisson"]
let txtUtilisateur = document.getElementById("réponse")
let validation = document.getElementById("valider")
let proposition = document.querySelector(".proposition input")
let score = 0
let scoreUtilisateur = document.querySelector("#score")
let choixUtilisateur = document.querySelectorAll(".choixUtilisateur input")