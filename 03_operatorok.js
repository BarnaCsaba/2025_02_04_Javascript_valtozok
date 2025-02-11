console.log(5 == "5"); // true
console.log(typeof(5)); // number
console.log(5 === "5"); // false
console.log(typeof("5")); // string

console.log(5 === 5); // true
console.log(5 !== "5"); // true
console.log(5 !== 5); // false

let a = 6;
console.log(`a: ${a}`)
console.log(!(a < 5))

console.log("LOGIKAI OPERÁTOR")
console.log(a > 5 && a < 20)
console.log(a === 3 || a == 6)
console.log("check typeof")
console.log(a > 5 && a === "number")

// Aritmetikai Operátorok
let z; 
z=3+4; // összeadás
console.log(z)
z=3-4; // kivonás
console.log(z)
z=2*3; // szorzás
console.log(z)
z=2/3; // osztás
console.log(z)
z=3%2; // modulo
console.log(z)
z=3**2; // hatványképzés (hatványalap**hatványkitevő)
console.log(z)


// Pre és Proinkrement
let x,y; 
x=5; 
y=++x; // preinkrement 
console.log(`x=${x}, y=${y}`); 
x=5; 
y=x++; // posztinkrement 
console.log(`x=${x}, y=${y}`); 
x=5; 
y=--x; // predekrement 
console.log(`x=${x}, y=${y}`); 
x=5; 
y=x--; // posztdekrement 
console.log(`x=${x}, y=${y}`); 
