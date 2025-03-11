//1. Feladat

let szam = prompt('Adjon meg egy számot: ', 0);
if (szam > -30 && szam < 40)
    {
        console.log('A szám megfelel a feladatnak');
    }
else console.log('A szám nem megfelel a feladatnak');

//2.Feladat

let a = prompt('Adjon meg egy számot: ', 0);
let b = prompt('Adjon meg egy másik számot: ', 0);

if (a > b)
    {
        console.log('Az első szám a nagyobb');
    }
else if (a < b)
    {
        console.log('A második szám a nagyobb');
    }
else console.log('Az számok egyenlőek');

//3.Feladat

let rand = prompt('Adjon meg egy egész számot: ', 0);

if (rand < 0)
    {
        console.log('A szám negativ');
    }
else if (rand > 0)
    {
        console.log('A szám pozitiv');
    }
else console.log('A szám nulla');

//4.Feladat

vala = prompt('Adjon meg egy számot: ', 0);

if (Number.isInteger(vala)) 
    {
        console.log(`A szám egész szám ${vala} `);
    }
else 
    {
        console.log("a szám nem egész szám" )
    }

//5.Feladat

let am = prompt('Adjon meg egy számot: ', 0);
let bm = prompt('Adjon meg egy másik számot: ', 0);

if (am > bm)
    {
        console.log(`${am} > ${bm}`)
    }
else if (am < bm)
    {
        console.log(`${am} < ${bm}`)

    }
else
{
    console.log(`${am} = ${bm}`)

}

//6.feladat

let kor = prompt('Kérem az életkorát: ', 0);

if (kor > 0 && kor < 6)
    {
        console.log("Ön gyerek")
    }
else if (kor > 6 && kor < 18)
    {
        console.log("Ön iskolás.")
    }
else if (kor > 18 && kor < 60)
    {
        console.log("Ön dolgozó")
    }
else
    {
        console.log("Ön nyugdíjas")
    }