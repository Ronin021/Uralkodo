// Adatok tömbje, amely tartalmazza a táblázat celláinak értékeit
const array = [   
    {
        Uralkodo: `I. István`, // Első sor első cellájának szövege
        Esemeny: `Koronázás`, // Első sor második cellájának szövege
        Evszam: `1000` // Első sor harmadik cellájának szövege
    ,
        Esemeny2: `Pannonhalmi apátság megalapítása`, // Második sor második cellájának szövege
        Evszam2: `1001` // Második sor harmadik cellájának szövege
    },
    {
        Uralkodo: `IV. Béla`, // Harmadik sor első cellájának szövege
        Esemeny: `tatárjárás`, // Harmadik sor második cellájának szövege
        Evszam: `1241-1242` // Harmadik sor harmadik cellájának szövege
    },
    {
        Uralkodo: `Mátyás király`, // Negyedik sor első cellájának szövege
        Esemeny: `Bécs elfoglalása`, // Negyedik sor második cellájának szövege
        Evszam: `1485` // Negyedik sor harmadik cellájának szövege
    ,
        Esemeny2: `Kenyérmezei csata`, // Ötödik sor második cellájának szövege
        Evszam2: `1479` // Ötödik sor harmadik cellájának szövege
    },
    {
        Uralkodo: `II. Rákoczi Ferenc`, // Hatodik sor első cellájának szövege
        Esemeny: `A szabadságharc kezdete`, // Hatodik sor második cellájának szövege
        Evszam: `1703` // Hatodik sor harmadik cellájának szövege
    ,
        Esemeny2: `A szabadságharc vége`, // Hetedik sor második cellájának szövege
        Evszam2: `1711` // Hetedik sor harmadik cellájának szövege
    }
];

// Táblázat alapvető elemeinek létrehozása
const tabla = document.createElement('table'); // Új táblázat elem létrehozása
const fejlec = document.createElement('thead'); // Táblázat fejrésze (thead) létrehozása
const torzs = document.createElement('tbody'); // Táblázat törzse (tbody) létrehozása
document.body.appendChild(tabla); // Táblázat hozzáfűzése a HTML dokumentumhoz
tabla.appendChild(fejlec); // Fejrész hozzáadása a táblázathoz
tabla.appendChild(torzs); // Törzs hozzáadása a táblázathoz

// Colgroup az oszlopok stílusához
const oszlopCsoport = document.createElement('colgroup'); // Oszlopstílusokat tartalmazó elem létrehozása
tabla.appendChild(oszlopCsoport); // Colgroup hozzáadása a táblázathoz

const oszlop1 = document.createElement('col'); // Első oszlop definiálása
oszlopCsoport.appendChild(oszlop1); // Első oszlop hozzáfűzése a colgrouphoz
oszlop1.classList.add('kiemelt_oszlop'); // Stílusosztály hozzáadása az első oszlophoz

const oszlop2 = document.createElement('col'); // Második oszlop definiálása
oszlopCsoport.appendChild(oszlop2); // Második oszlop hozzáfűzése a colgrouphoz

const oszlop3 = document.createElement('col'); // Harmadik oszlop definiálása
oszlopCsoport.appendChild(oszlop3); // Harmadik oszlop hozzáfűzése a colgrouphoz
oszlop3.classList.add('kiemelt_oszlop'); // Stílusosztály hozzáadása a harmadik oszlophoz

// Fejléc szövegeket tartalmazó objektum
const fejlecek = {
    Uralkodo_fej: `Uralkodó`, // Fejléc első oszlopának szövege
    Esemeny_fej: `Esemény`, // Fejléc második oszlopának szövege
    Evszam_fej: `Évszám` // Fejléc harmadik oszlopának szövege
};

const fejlecSor = document.createElement('tr'); // Új sor létrehozása a fejléchez
fejlec.appendChild(fejlecSor); // Fejléchez tartozó sor hozzáadása

// Fejléc szövegek iterációval történő beállítása
for (const fejlecSzoveg of [fejlecek.Uralkodo_fej, fejlecek.Esemeny_fej, fejlecek.Evszam_fej]) {
    const fejlecCella = document.createElement('th'); // Új cella létrehozása a fejléchez
    fejlecCella.innerHTML = fejlecSzoveg; // Fejléc szövegének beállítása
    fejlecSor.appendChild(fejlecCella); // Fejléc cella hozzáadása a sorhoz
}

/**
 * Rendereli a táblázat törzsének (tbody) tartalmát az adott adatokat tartalmazó tömb alapján.
 * Minden adat elem egy új sorban jelenik meg a táblázatban, és ha van második esemény és évszám,
 * azok külön sorban jelennek meg, az első sor pedig összekapcsolódik. Függvénybeszervezhető is lehetne akár
 * 
 * @param {Array} array - A táblázat adatait tartalmazó tömb, ahol minden elem egy objektum, amely
 *                        tartalmazza az uralkodót, eseményt, és évszámokat.
 */
function RenderTorzs(array) {
    // Iterálunk az array tömb minden elemén
    for (const currentElement of array) { 
        const aktivsor = document.createElement('tr'); // Új sor létrehozása a táblázathoz
        torzs.appendChild(aktivsor); // Sor hozzáadása a táblázat törzséhez

        const Uralkodosor = document.createElement('td'); // Első oszlop cellájának létrehozása
        Uralkodosor.innerHTML = currentElement.Uralkodo; // Uralkodó adatának beállítása
        aktivsor.appendChild(Uralkodosor); // Cellához hozzáadása

        const Esemenysor = document.createElement('td'); // Második oszlop cellájának létrehozása
        Esemenysor.innerHTML = currentElement.Esemeny; // Esemény adatának beállítása
        aktivsor.appendChild(Esemenysor); // Cellához hozzáadása

        const Evszamsor = document.createElement('td'); // Harmadik oszlop cellájának létrehozása
        Evszamsor.innerHTML = currentElement.Evszam; // Évszám adatának beállítása
        aktivsor.appendChild(Evszamsor); // Cellához hozzáadása

    if (currentElement.Esemeny2 !== undefined && currentElement.Evszam2 !== undefined) { //Itt ellenőrizzük, hogy az események és évszámok két sorra való elhelyezéséhez szükséges adatok (Esemeny2, Evszam2) léteznek-e. Ha igen, akkor két sorra bontjuk az adatokat, és az első oszlopban a rowSpan értéke 2-re változik.
        // Ellenőrizzük, hogy a currentElement tartalmaz-e Esemeny2 és Evszam2 értékeket
        
        Uralkodosor.rowSpan = 2; // Az Uralkodosor cella két sorra terjed ki (összekapcsolás)
    
        const aktivsor2 = document.createElement('tr'); // Új sor (tr) létrehozása a második sor számára
        torzs.appendChild(aktivsor2); // Új sor hozzáadása a táblázat törzséhez (tbody)
    
        const Esemenysor2 = document.createElement('td'); // Új cella létrehozása a második sor eseményéhez
        Esemenysor2.innerHTML = currentElement.Esemeny2; // Cellatartalom beállítása az Esemeny2 értékével
        aktivsor2.appendChild(Esemenysor2); // Cellának hozzáfűzése az új sorhoz (aktivsor2)
    
        const Evszamsor2 = document.createElement('td'); // Új cella létrehozása a második sor évszámához
        Evszamsor2.innerHTML = currentElement.Evszam2; // Cellatartalom beállítása az Evszam2 értékével
        aktivsor2.appendChild(Evszamsor2); // Cellának hozzáfűzése az új sorhoz (aktivsor2)
    }
}    
}
RenderTorzs(array)  // A függvény meghívása, amely létrehozza és kirajzolja a táblázat törzsét

const form = document.getElementById('form'); // Form elem kiválasztása az ID alapján

// Eseményfigyelő hozzáadása a form submit eseményére
form.addEventListener('submit', function(e) {
    e.preventDefault(); // Alapértelmezett form viselkedésének megakadályozása (pl. oldal újratöltése)

    // Uralkodó mező értékének lekérése
    const uralkodoHTMLelement = document.getElementById('uralkodo_nev'); // Input mező kiválasztása ID alapján

    // Esemény mező értékének lekérése
    const esemenyHTMLelement = document.getElementById('esemeny1'); // Input mező kiválasztása ID alapján

    // Második esemény mező értékének lekérése
    const esemeny2HTMLelement = document.getElementById('esemeny2'); // Input mező kiválasztása ID alapján

    // Évszám mező értékének lekérése
    const evszamHTMLelement = document.getElementById('evszam1'); // Input mező kiválasztása ID alapján

    // Második évszám mező értékének lekérése
    const evszam2HTMLelement = document.getElementById('evszam2'); // Input mező kiválasztása ID alapján

    
    


    const ThisForm = e.currentTarget; // Az éppen aktuális form elem, amelyre az esemény vonatkozik


   
    const errorElement = ThisForm.querySelectorAll('.error'); // Kiválasztjuk az összes hibaüzenet megjelenítésére szolgáló elemet


// Az összes meglévő hibaüzenet kiürítése
for (const errorok of errorElement) {
    errorok.innerHTML = ''; // Az adott hibaüzenet elem tartalmát kiürítjük
}

let validation = true; // Az űrlap érvényességét jelző változó

// Validáljuk az uralkodó mezőt a validateFormHtmlField függvénnyel
if (!validateFormHtmlField(uralkodoHTMLelement, "Az uralkodó nevének megadása kötelező")) { //Itt ellenőrizzük, hogy a "Uralkodó" mező kitöltött-e. Ha nem, akkor beállítjuk az érvénytelenséget és megjelenítjük a megfelelő hibaüzenetet.
    validation = false; // Ha a függvény hamissal tér vissza, az űrlap érvénytelen
}

// Validáljuk az esemény mezőt a validateFormHtmlField függvénnyel
if (!validateFormHtmlField(esemenyHTMLelement, "Az esemény megadása kötelező")) { 
    validation = false; // Ha a függvény hamissal tér vissza, az űrlap érvénytelen
}

// Validáljuk az évszám mezőt a validateFormHtmlField függvénnyel
if (!validateFormHtmlField(evszamHTMLelement, "Az évszám megadása kötelező")) { 
    validation = false; // Ha a függvény hamissal tér vissza, az űrlap érvénytelen
}



if (!osszetettvalidateFormHTMLField(esemeny2HTMLelement, evszam2HTMLelement, 'Minden eseményhez kell évszám és fordítva is')) {
    validation = false; // Érvénytelen az űrlap, ha az osszetettvalidateFormHTMLField hamissal tér vissza
}

// Ha az űrlap validált, folytatjuk az adatfeldolgozást
if (validation) {
    const uralkodoValue = uralkodoHTMLelement.value; // Input mező értékének lekérése
    const esemenyValue = esemenyHTMLelement.value; // Input mező értékének lekérése
    const esemeny2Value = esemeny2HTMLelement.value; // Input mező értékének lekérése
    const evszamValue = evszamHTMLelement.value; // Input mező értékének lekérése
    const evszam2Value = evszam2HTMLelement.value; // Input mező értékének lekérése

    // Új objektum létrehozása az űrlap mezőinek értékeiből
    const newUralkodo = {
        Uralkodo: uralkodoValue, // Uralkodó értékének hozzárendelése
        Esemeny: esemenyValue, // Esemény értékének hozzárendelése
        Evszam: evszamValue, // Évszám értékének hozzárendelése
        Esemeny2: esemeny2Value, // Második esemény értékének hozzárendelése
        Evszam2: evszam2Value // Második évszám értékének hozzárendelése
    };

    if (newUralkodo.esemeny2 === '' && newUralkodo.evszam2 === '') { 
        // Ellenőrizzük, hogy az Esemeny2 és az Evszam2 mezők üresek-e
        newUralkodo.Esemeny2 = undefined; // Ha üres, az Esemeny2 értékét undefined-re állítjuk
        newUralkodo.Evszam2 = undefined; // Ha üres, az Evszam2 értékét undefined-re állítjuk
    }

    array.push(newUralkodo); // Új objektum hozzáadása az array tömbhöz
    torzs.innerHTML = ''; // A táblázat törzs (tbody) tartalmának törlése
    RenderTorzs(array); // A táblázat újrarenderelése a frissített adatokkal
    ThisForm.reset(); // Az űrlap mezőinek alapállapotba állítása
}
})

/**
 * Egy mező értékének validálása és hibaüzenet kezelése
 * @param {*} inputhtmlmessage HTMLelement - az input mező
 * @param {*} errormessage string - a megjelenítendő hibaüzenet
 * @returns {boolean} true, ha az ellenőrzés sikeres; különben false

 */
function validateFormHtmlField(inputhtmlmessage, errormessage) {
    let validation = true; // Alapértelmezett érvényességi állapot

    if (inputhtmlmessage === '') { //Itt ellenőrizzük, hogy a mező üres-e. Ha igen, akkor érvénytelenítjük az űrlapot, és hibaüzenetet jelenítünk meg.

        const parent = inputhtmlmessage.parentElement; // A mező szülő elemének lekérése
        const place_of_error = parent.querySelector('.error'); // Hibaüzenet helyének keresése

        if (place_of_error != undefined) {// Ha létezik hibaüzenet hely, akkor megjelenítjük a hibaüzenetet
            place_of_error.innerHTML = errormessage; // Hibaüzenet megjelenítése
        }
        validation = false; // A mező érvénytelen
    }

    return validation; // Az érvényességi állapot visszaadása
}
/**
 * Ellenőrzi, hogy az esemény2 mező kitöltött-e, ha az évszám2 mező is kitöltött, és fordítva.
 * @param {*} Esemeny2input A második eseményt tartalmazó HTML input elem
 * @param {*} Evszam2input A második évszámot tartalmazó HTML input elem
 * @param {*} errormessage A hibaüzenet szövege, amely megjelenik, ha az ellenőrzés sikertelen
 * @returns {boolean} true, ha az ellenőrzés sikeres; különben false
 */
function osszetettvalidateFormHTMLField(Esemeny2input, Evszam2input, errormessage) {
    let validation = true;

    // Ha az esemény2 mező üres, de az évszám2 kitöltött
    if (Esemeny2input.value === '' && Evszam2input.value !== '') {//Itt azt ellenőrizzük, hogy ha az esemény2 mező üres, de az évszám2 kitöltött, akkor érvénytelen az űrlap, és hibaüzenetet jelenítünk meg.
        const parent = Esemeny2input.parentElement; // Az esemény2 mező szülő elemének lekérése
        const place_of_error = parent.querySelector('.error'); // Hibaüzenet helyének keresése

        if (place_of_error != undefined) { 
            // Ha létezik hibaüzenet hely, akkor megjelenítjük a hibaüzenetet
            place_of_error.innerHTML = errormessage; // A hibaüzenet megjelenítése
        }
        
        validation = false; // Érvénytelen, ha nincs esemény az évszámhoz
    }

    // Ha az évszám2 mező üres, de az esemény2 kitöltött
    if (Esemeny2input.value !== '' && Evszam2input.value === '') {//Ugyanaz csak fordítva
        const parent = Evszam2input.parentElement; // Az évszám2 mező szülő elemének lekérése
        const place_of_error = parent.querySelector('.error'); // Hibaüzenet helyének keresése

        if (place_of_error != undefined) {
            // Ha létezik hibaüzenet hely, akkor megjelenítjük a hibaüzenetet
            place_of_error.innerHTML = errormessage; // Hibaüzenet megjelenítése
        }
        validation = false; // Érvénytelen, ha nincs évszám az eseményhez
    }

    return validation; // Visszatérés az érvényesség eredményével
}
