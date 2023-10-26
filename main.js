/*
1. Dare la possibilità di inserire due parole.
Verificare tramite una funzione che le due parole abbiano la stessa lunghezza.
Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.

2. Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC). Quindi, chiedere all’utente quale parola vuole girare.
BONUS: se la parola scelta dall’utente è un palindromo, avvisalo

3. Scrivi una funzione che fonda due array (aventi lo stesso numero di elementi) prendendo alternativamente gli elementi da uno e dall’altro
es. [a,b,c], [1,2,3] → [a,1,b,2,c,3]

4. Crea un array di 10 oggetti che rappresentano una mela, indicando per ognuna varietà, peso e diametro.
Calcola quanto pesano tutte le mele.
BONUS Dividi in due array separati le mele con diametro maggiore di 10cm. Infine stampa separatamente quanto pesano i due gruppi di mele.
*/

/*
1. Dare la possibilità di inserire due parole.
Verificare tramite una funzione che le due parole abbiano la stessa lunghezza.
Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.
*/

/*
const parola1 = prompt("Scrivi parola 1");
const parola2 = prompt("Scrivi parola 2");

function controlloLunghezza(elemento1, elemento2) {
  let length1 = elemento1.length;
  let length2 = elemento2.length;
  if (length1 === length2) {
    console.log(elemento1, elemento2);
  } else if (length1 < length2) {
    console.log(elemento2);
  } else {
    console.log(elemento1);
  }
}
controlloLunghezza(parola1, parola2);
*/

/*
2. Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC). 
Quindi, chiedere all’utente quale parola vuole girare.
BONUS: se la parola scelta dall’utente è un palindromo, avvisalo
*/

/*
const parolaUtente = prompt("scrivi una parola");

function reverseString(parola) {
  let splitString = parola.split("");
  let reverseArray = splitString.reverse();
  let joinArray = reverseArray.join("");
  console.log(joinArray);
}

reverseString(parolaUtente);
*/

/*
3. Scrivi una funzione che fonda due array (aventi lo stesso numero di elementi) 
prendendo alternativamente gli elementi da uno e dall’altro
es. [a,b,c], [1,2,3] → [a,1,b,2,c,3]
*/

const frutta = ["mela", "pera", "banana"];
const numeri = [1, 2, 3];

function mergeAltV2(arr1, arr2) {
  const result = [];
  let switcher = true;
  for (let i = 0; i < arr1.length + arr2.length; i++) {
    if (switcher) {
      result.push(arr1[i / 2]);
    } else {
      result.push(arr2[(i - 1) / 2]);
    }
    switcher = !switcher;
  }
  return result;
}

console.log(mergeAltV2(frutta, numeri));
