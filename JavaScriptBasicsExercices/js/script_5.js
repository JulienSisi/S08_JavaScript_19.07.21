// 2.3.2. Bibliothécaire

const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
  ];

// Est-ce que tous les livres ont été au moins empruntés une fois ?
console.log("================================================================")
console.log("Est-ce que tous les livres ont été au moins empruntés une fois :")
console.log("================================================================")

let check = true
for (let i = 0; i < books.length; i++) {
  if (books[i].rented <= 0) check = false;
}
console.log(check)

// Quel est livre le plus emprunté ?
console.log("=================================")
console.log("Quel est livre le plus emprunté :")
console.log("=================================")

let mostPopularBook = [0, ""]
for (let i = 0; i < books.length; i++) {
  if (books[i].rented > mostPopularBook[0]) mostPopularBook = [books[i].rented , books[i].title]
}
console.log(mostPopularBook[1] + " est le lirve le plus populaire avec " + mostPopularBook[0] + " Exemplaire emprunté")

// Quel est le livre le moins emprunté ?
console.log("=====================================")
console.log("Quel est le livre le moins emprunté :")
console.log("=====================================")

let lessPopularBook = [1000, ""]
for (let i = 0; i < books.length; i++) {
  if (books[i].rented < lessPopularBook[0]) lessPopularBook = [books[i].rented , books[i].title]
}
console.log(lessPopularBook[1] + " est le livre le moins populaire avec " + lessPopularBook[0] + " exemplaires empruntés")

// Trouve le livre avec l'ID: 873495 ;
console.log("===================================")
console.log("Trouve le livre avec l'ID: 873495 :")
console.log("===================================")

for (let i = 0; i < books.length; i++) {
  if (books[i].id == 873495) console.log(books[i].title)
}

// Supprime le livre avec l'ID: 133712 ;
console.log("=====================================")
console.log("Supprime le livre avec l'ID: 133712 :")
console.log("=====================================")
for (let i = 0; i < books.length; i++) {
  if (books[i].id == 133712) books.splice(i, 1)
  
}
console.log(books)

// Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé).
console.log("==========================================================================================")
console.log("Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé) :")
console.log("==========================================================================================")

titles = []
for (let i = 0; i < books.length; i++) {
  titles.push(books[i].title)
}

titles.sort()

for (let i = 0; i < titles.length; i++) {
  console.log(titles[i])
}