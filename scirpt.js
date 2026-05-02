// Déclaration des tableaux contenant les listes des mots proposés à l'utilisateur
const listeMots = ["Cachalot", "Pétunia", "Serviette"]
const listePhrases = ["Pas de panique !", "La vie, l'univers et le reste", "Merci pour le poisson"]

let score = 0

// Déclaration de la variable contenant le choix de l'utilisateur
let choix = prompt("Avec quelle liste désirez-vous jouer : 'mots' ou 'phrases' ?")
// Tant que l'utilisateur n'a pas saisi "mots" ou "phrases", on lui redemande de saisir un choix
while (choix !== "mots" && choix !== "phrases") {
    choix = prompt("Avec quelle liste désirez-vous jouer : 'mots' ou 'phrases' ?")
}

if (choix === "mots") {
    // On parcourt le tableau des mots
    for (let i = 0; i < listeMots.length; i++) {
        // On demande à l'utilisateur de saisir le mot correspondant à l'indice i
        let motUtilisateur = prompt("Entrez le mot : " + listeMots[i])
        if (motUtilisateur === listeMots[i]) {
            // Si le mot saisi par l'utilisateur est correct, on incrémente le score
            score++
        }
    }
    console.log("Votre score est de " + score + " sur " + listeProposition)
} else {
    // On parcourt le tableau des phrases
    for (let i = 0; i < listePhrases.length; i++) {
        // On demande à l'utilisateur de saisir la phrase correspondant à l'indice i
        let phraseUtilisateur = prompt("Entrez la phrase : " + listePhrases[i])
        if (phraseUtilisateur === listePhrases[i]) {
            // Si la phrase saisi par l'utilisateur est correct, on incrémente le score
            score++
        }
    }

    console.log("Votre score est de " + score + " sur " + listePhrases.length)
}


// Déclaration des tableaux contenant les listes des mots proposés à l'utilisateur
const listeMots = ["Cachalot", "Pétunia", "Serviette"]
const listePhrases = ["Pas de panique !", "La vie, l'univers et le reste", "Merci pour le poisson"]


function afficherResultat(score, nbreTotalMots){
    console.log("Votre score est de " + score + " sur " + nbreTotalMots) ;
}

function choisirPhrasesOuMots (){
    let choix = prompt("Avec quelle liste désirez-vous jouer : 'mots' ou 'phrases' ?")
    // Tant que l'utilisateur n'a pas saisi "mots" ou "phrases", on lui redemande de saisir un choix
    while (choix !== "mots" && choix !== "phrases") {
        choix = prompt("Avec quelle liste désirez-vous jouer : 'mots' ou 'phrases' ?")
    }
    return choix
}
function lancerBoucleDeJeu(listeProposition){
    let score = 0;
    for (let i = 0; i < listeProposition; i++) {
        // On demande à l'utilisateur de saisir le mot correspondant à l'indice i
        let motUtilisateur = prompt("Entrez le mot : " + listeProposition[i])
        if (motUtilisateur === listeProposition[i]) {
            // Si le mot saisi par l'utilisateur est correct, on incrémente le score
            score++
        }
    }
}

function lancerJeu(){
    let choix = choisirPhrasesOuMots();
    let nbreMots = 0 ;
    let score = 0 ;

    if (choix === "mots"){
        score = lancerBoucleDeJeu(listeMots)
        nbreMots = (listeMots.length);
    }
    else{
        score = lancerBoucleDeJeu(listePhrases)
        nbresMots = (listePhrases.length);
    }
}