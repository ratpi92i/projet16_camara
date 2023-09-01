// une variable est une boite dans laquelle on stocke des choses
let chaine = " je suis la premiere chaine";

let chaine2 = "voici le contenu de la premiere chaine : " + chaine;
console.log(chaine2);

let chiffre = 24;
let nouvelChaine = "le chiffre attendu est " + chiffre;
console.log(nouvelChaine);

let chiffre1 = 40;
let chaine01 = ` le chiffre attendu est ${chiffre1} degré`;
console.log(chaine01);

// les types de donnes
let string = " je suis une chaine de caractere";
let number = 1234;
let boolean = true;
let array = ["je suis ", 24];
let object = {
  prenom: "audrey",
  ville: "bobo",
  age: 20,
};

console.log(typeof chiffre1);

console.log(4 * 5);
//la puissance c'est  double **
console.log(4 ** 5);

let x = 500;
let y = 14;
if (x > y) {
  console.log("x est plus grand que y");
} else {
  console.log("y est plus grand");
}

if (x) {
  console.log("x existe");
}

if (!x) {
  console.log("z n'existe pas");
}

let a = 50;
let b = 5;

if (a === b) {
  console.log("a est egal à b");
} else {
  console.log(" a n'est pas egal à b");
}

if (a != b && x > 1000) {
  console.log("true ");
} else {
  console.log("false");
}

// les fonctions

function faireQuelequeChose() {
  console.log("ce texte est dans ma fonction");
  console.log("cette fonction s'appele faireQuelqueChose");
}
faireQuelequeChose();

const faireunetache = (tache) => {
  console.log("je fais " + tache);
};
faireunetache("les courses");
faireunetache("de la programation");

function calc(x, y) {
  return x * y;
}
calc(4, 9);

let total = 0;

function addition(x) {
  total += x;
  return total;
}

function soustraction(x) {
  total -= x;
  return total;
}

function division(x) {
  if (total === 0) {
    return (total = x);
  } else {
    total /= x;
    return total;
  }
}

function multiplication(x) {
  if (total === 0) {
    return (total = x);
  } else {
    total *= x;
    return total;
  }
}
