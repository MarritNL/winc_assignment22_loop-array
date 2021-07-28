// wile loop
/*
let colors1 = ['yellow', 'blue', 'red', 'orange'];
let i=0;
while ( i <colors1.length) {
    console.log(colors1[i]);
    i++;
};
*/

// for loop
/*
let colors 2= ['yellow', 'blue', 'red', 'orange'];
for (a = 0; a < colors2.length; a++) {
    console.log(colors2[a]);
};
*/

//array.prototype.forEach()
let colors2= ['yellow', 'blue', 'red', 'orange'];
colors2.forEach(color => console.log(color));

//1 while loop 6, for loop 4, 
//2 forEach array 2
//3 forEach, is bijna een zin: voor elke kleur log de kleur
//4 wel in een array binnen een object?
// for...in statement 
let object = { a: 1, b: 2, c: 3, d:4, e: 5};

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}
// haalt de inhoud uit het object, en iterates dan