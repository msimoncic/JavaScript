/* Úkol
1. do proměnné firstName uložte své křestní jméno
2. do proměnné job uložte své zaměstnání (pokud nemáte, tak si jakékoliv vymyslete)
3. vypište do console větu "Ahoj, jmenuji se ... a pracuji jako ... "
Místo ... dosaďte proměnné firstName a job
*/


let firstName = "Michal";
let job = "koder";

console.log('Ahoj, jmenuji se ' + firstName + " a pracuji jako " +  job);

/* 
Úkol
1. vytvořte proměnnou firstName a uložte do ní své křestní jméno
2. vytvořte proměnnou age a uložte do ní svůj věk
3. vypište větu "Jmenuji se ... a je mi ...". Místo ... doplňte firstName a age
4. vypište větu "Za pět let mi bude ..." Doplňte správný údaj (tedy age zvýšení o 5)
*/

let age = 25;

console.log("Jmenuji se " + firstName + " a je mi " + age);
age += 5; 
console.log("Za pět let mi bude " + age);

/* 
Úkol
1. vytvořte dvě proměnné student1 a student2. Do proměnných uložte dosažený počet bodů z testu (libovolná čísla, ale menší než 100)
2. do proměnných student1Name a student2Name uložte libovolná jména studentů
3. vypočítejte úspěšnost v %, pokud maximální počet bodů je 100 (např. dosažení 20 bodů znamená 20 % úspěšnost)
4. Vypište pro oba dva studenty výsledky ve tvaru "... dosáhl(a) ... % úspěšnosti". Místo ... doplňte jméno studenta a úspěšnost
5. Možné vylepšení - pokud při výpočtu úspěšnosti dělíte maximálním počtem bodů (100), tak 100 uložte do proměnné s názvem maxPoints a nahraďte jí ve výpočtech touto proměnnou
*/

// Počet dosažených bodů studentů
let student1 = 64;
let student2 = 96;

// Jména studentů
let student1Name = "Michal";
let student2Name = "Jirka";

// Výpočet úspěšnosti v %, maximální počet bodů je 100
let maxPoints = 100;

let result1 = (student1 / maxPoints) * 100;
let result2 = (student2 / maxPoints) * 100;

console.log(student1Name + " dosáhl " + result1 + "% úspěšnosti.");
console.log(student2Name + " dosáhl " + result2 + "% úspěšnosti.");

/*
Úkol
Do proměnné age uložte libovolný věk (libovolné číslo). Do dalších třech proměnných child, adult, pensioner uložte true nebo false podle toho, že pokud je 
člověku méně než 18, tak je dítě (child). Pokud je člověku více nebo rovno 18, tak je dospělý (adult). Ještě zajistěte, že pokud je člověku 
více nebo rovno 65, tak bude označen jako důchodce (pensioner). Výsledky vypište pod sebe např. takto:

Dítě: false
Dospělý: true
Důchodce: true
*/

let age2 = 15;
let child = age2 < 18;
let adult = age2 >= 18 && age2 < 65;
let pensioner = age2 >= 65;

console.log("Dítě: " + child);
console.log("Dospělý: " + adult);
console.log("Důchodce: " + pensioner);

/*
Úkol
V zaměstnání máte aplikaci, která generuje otázky při pohovoru. 
V aplikaci se na začátku zadává, o jakou pozici uchazeč žádá. 
Pokud je pozice programátor, tak aplikace vypíše "Jaký je rozdíl mezi HTML, CSS a JavaScriptem?". 
Pokud je to administrátor, tak bude otázka "Jaké znáte druhy sítí?". 
Pokud se jedná o sekretářku, tak je otázka "Jaké znáte funkce v excelu?". 
Vytvořte pomocí if, else if, else tuto aplikaci a vypište texty do konzole.
*/

let position = "ředitel";

if (position === "programator") {
    console.log("Jaký je rozdíl mezi HTML, CSS a JavaScriptem?");
} else if (position === "sekretářka") {
    console.log("Jaké znáte funkce v excelu?");
} else if (position === "administrátor") {
    console.log("Jaké znáte druhy sítí?");
} else {
    console.log("Chyba, zavolejte programátora!");
}

/*
Úkol
V domě máte aplikaci na regulaci teploty. Na dispeji se vypisuje text je "chladno" v případě, že teplota je 10 stupňů a méně. 
Pokud je teplota mezi 11 a 25, tak se na displeji objeví text "teplo". 
Pokud je 26 a více, tak displej bude ukazovat text "horko".
*/

let temperature = 25;

if (temperature < 11) {
    console.log("chladno");
} else if (temperature >= 11 && temperature <= 25) {
    console.log("teplo");
} else if (temperature > 25) {
    console.log("horko");
}

/*
Úkol
Svědek zločinu vám popsal pachatele, který měl přes 100 kg a výšku přes 190 centimetrů.
Máte databázi zločinců a potřebujete z nich vyfiltrovat ty, kteří odpovídají těmto parametrům. 
Protože svědkovi ale nemůžete zcela věřit, tak aplikace bude vypisovat i lidi, kteří mají jen přes 100 kg nebo přes 190 centimetrů (nemusí splňovat obě dvě kritéria zároveň)
*/

let height = 160;
let weight = 100;

if (height >= 190 || weight >= 100) {
    console.log("Tento člověk je podezřelý!");
} else {
    console.log("Tento člověk není podezřelý.");
}