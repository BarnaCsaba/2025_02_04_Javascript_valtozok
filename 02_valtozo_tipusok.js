let e = 2;
console.log('a=' + e + 'típusa: ' + typeof e);

const pi = 3.14;
console.log('pi=' + pi + 'típusa: ' + typeof pi);

console.log(0.1 + 0.2);
console.log((0.1 + 0.2).toFixed(2));

console.log(1 / 0);

let firstname = 'Ferenc';
let lastname = 'Fodor';
let fullname = firstname + ' ' + lastname;
console.log(fullname);

console.log("Hello" + " " + fullname);


// Template literals (Template strings)
// backtick (`)

let person = {
    name: 'Eminem',
    age: 52,
    isStudent: false,
    address: "Fhjvdhj",
}

console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person.isStudent);
console.log(person.address);

// Boolean
console.log('\nBOOLEAN');
console.log(typeof true);
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean("a"));
console.log(Boolean(1));
