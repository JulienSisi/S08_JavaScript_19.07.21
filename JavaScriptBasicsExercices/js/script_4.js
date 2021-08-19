// 2.3.1. Startup Nation

const entrepreneurs = [
    { first: 'Steve', last: 'Jobs', year: 1955 },
    { first: 'Oprah', last: 'Winfrey', year: 1954 },
    { first: 'Bill', last: 'Gates', year: 1955 },
    { first: 'Sheryl', last: 'Sandberg', year: 1969 },
    { first: 'Mark', last: 'Zuckerberg', year: 1984 },
    { first: 'Beyonce', last: 'Knowles', year: 1981 },
    { first: 'Jeff', last: 'Bezos', year: 1964 },
    { first: 'Diane', last: 'Hendricks', year: 1947 },
    { first: 'Elon', last: 'Musk', year: 1971 },
    { first: 'Marissa', last: 'Mayer', year: 1975 },
    { first: 'Walt', last: 'Disney', year: 1901 },
    { first: 'Larry', last: 'Page', year: 1973 },
    { first: 'Jack', last: 'Dorsey', year: 1976 },
    { first: 'Evan', last: 'Spiegel', year: 1990 },
    { first: 'Brian', last: 'Chesky', year: 1981 },
    { first: 'Travis', last: 'Kalanick', year: 1976 },
    { first: 'Marc', last: 'Andreessen', year: 1971 },
    { first: 'Peter', last: 'Thiel', year: 1967 }
  ];

// Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70 ;
console.log("===============================================")
console.log("Entrepreneurs qui sont nés dans les années 70 :")
console.log("===============================================")
for (let i = 0; i < entrepreneurs.length; i++) {
  if ((entrepreneurs[i].year >= 1970) && (entrepreneurs[i].year <= 1979 )) console.log(entrepreneurs[i])
}

// Sors une array qui contient le prénom et le nom des entrepreneurs ;
console.log("=================================")
console.log("Prénom et nom des entrepreneurs :")
console.log("=================================")
for (let i = 0; i < entrepreneurs.length; i++) {
  console.log("Prénom => " + entrepreneurs[i].first + ", Nom => " + entrepreneurs[i].last)
}

// Quel âge aurait chaque inventeur aujourd'hui ?
console.log("============================================")
console.log("Age qu'aurait chaque inventeur aujourd'hui :")
console.log("============================================")
for (let i = 0; i < entrepreneurs.length; i++) {
  console.log(2021 - entrepreneurs[i].year + " ans")
}

// Trie les entrepreneurs par ordre alphabétique du nom de famille.
console.log("====================================================================")
console.log("Trie des entrepreneurs par ordre alphabétique des noms de familles :")
console.log("====================================================================")

lastNames = []

for (let i = 0; i < entrepreneurs.length; i++) {
  lastNames.push(entrepreneurs[i].last)
}

lastNames.sort()

for (let i = 0; i < lastNames.length; i++) {
  console.log(lastNames[i])
}