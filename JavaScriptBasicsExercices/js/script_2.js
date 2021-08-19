// 2.2.1 Calculs rapides

// Un prompt s'affiche avec la question suivante
// "De quel nombre veux-tu calculer la factorielle ?"

// Utilisateur rentre un nombre (par ex 4)
// Dans la console le résultat suivant est affiché
// "Le résultat est : 24"

function facto(nb) {
    answer = 1
    while (nb > 0) {
      answer *= nb
      nb -= 1
    }
    return answer
  }
  
nb = prompt("De quel nombre veux-tu calculer la factorielle ?")
  
console.log("Le résultat est -> " + facto(nb) + " <-")