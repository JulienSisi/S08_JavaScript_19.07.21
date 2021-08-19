// 2.2.2 Pyramide de Mario

// "Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?"
//  Utilisateur rentre un nombre (par ex 5)
//     #
//    ##
//   ###
//  ####
// #####

function pyramid(floors) {
    let i = 0;
    row = " ";
    while (i != floors) {
      row += " ";
      i++;
    }
    while (floors != 0) {
      row = row.substring(1);
      row += "A";
      console.log(row);
      floors -= 1;
    }
  }
  nb = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
  pyramid(nb);