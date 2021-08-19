// 2.4.2. Acné-Bot

// Si on lui pose une question (= la phrase finie par "?")
function isAquestion(str) {
    return (str.slice(-1) == '?')
}

// Si on lui hurle trop dessus (= la phrase est 100% en majuscules)
function isYelling(str) {
    return (str == str.toUpperCase()) 
}

// Si la phrase que tu prononces contient le mot "Fortnite"
function didYouSayFortnite(str) {
    return str.includes('fortnite')
}

// Si pas de déclaration
function isEmpty(str) {
    return str == ""
}

function adoBot() {

    // Si on lui pose une question (= la phrase finie par "?"), le bot répond "Ouais Ouais..." ;
    str = prompt("Dire quelquechose au bot: ")
    if (isAquestion(str) == true) {
        alert("ouais ouais")
    }

    // Si on lui hurle trop dessus (= la phrase est 100% en majuscules), le bot répond "Pwa, calme-toi..." ;
    else if (isYealling(str) == true) {
        alert("Pwa, calme toi..")
    }

    // Si la phrase que tu prononces contient le mot "Fortnite", le bot répond "on s' fait une partie soum-soum ?" ;
    else if (didYouSayFortnite(str) == true) {
        alert("On s'fait une petite partie en soum-soum")
    }

    // Si on lui envoie un message vide, le bot répond "t'es en PLS ?" ;
    else if (isAquestion(str) == true) {
        alert("T'es en PLS ?")
    }

    // Pour tout autre phrase que tu lui envoies, le bot répond "balek." ;
    else {
        alert("Balek.")
    }
    adoBot()
}

alert("Acné-Bot est dans la place !")
adoBot()