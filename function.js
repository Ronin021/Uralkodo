// A formGenerate függvény létrehozza a formot
function formGenerate() {
    // Létrehozzuk a form elemet és beállítjuk az id-jét
    const form = document.createElement('form')
    form.id = 'form' // A form ID-ja
    document.body.appendChild(form) // A formot hozzáadjuk a body elemhez

    // Létrehozzuk az első mezőt, amely tartalmazza az első input mezőt
    const div1 = document.createElement('div')
    div1.classList.add('field') // Hozzáadjuk a 'field' osztályt

    // Létrehozzuk az első label elemet
    const label1 = document.createElement('label')
    label1.htmlFor = 'uralkodo_nev' // A label 'for' attribútuma az input ID-ja
    label1.innerHTML = 'Uralkodó neve:' // A label szövege

    // Létrehozzuk az első input mezőt
    const bemenet1 = document.createElement('input')
    bemenet1.type = 'text' // Az input típusa: szöveges mező
    bemenet1.id = 'uralkodo_nev' // Az input ID-ja
    bemenet1.name = 'uralkodo_nev' // Az input neve
    div1.appendChild(bemenet1) // Hozzáadjuk az input mezőt az első div-hez

    // Létrehozzuk az első hibajelző div-et
    const div1error = document.createElement('div')
    div1error.classList.add('error') // Hozzáadjuk az 'error' osztályt
    div1.appendChild(div1error) // Hozzáadjuk a hibajelző div-et az első mezőhöz

    // Létrehozzuk a második mezőt
    const div2 = document.createElement('div')
    div2.classList.add('field') // Hozzáadjuk a 'field' osztályt

    // Létrehozzuk a második label elemet
    const label2 = document.createElement('label')
    label2.htmlFor = 'esemeny1' // A label 'for' attribútuma az input ID-ja
    label2.innerText = 'Első esemény:' // A label szövege

    // Létrehozzuk a második input mezőt
    const bemenet2 = document.createElement('input')
    bemenet2.type = 'text' // Az input típusa: szöveges mező
    bemenet2.id = 'esemeny1' // Az input ID-ja
    bemenet2.name = 'esemeny1' // Az input neve
    div2.appendChild(bemenet2) // Hozzáadjuk az input mezőt a második div-hez

    // Létrehozzuk a második hibajelző div-et
    const div2error = document.createElement('div')
    div2error.classList.add('error') // Hozzáadjuk az 'error' osztályt
    div2.appendChild(div2error) // Hozzáadjuk a hibajelző div-et a második mezőhöz

    // Létrehozzuk a harmadik mezőt
    const div3 = document.createElement('div')
    div3.classList.add('field') // Hozzáadjuk a 'field' osztályt

    // Létrehozzuk a harmadik label elemet
    const label3 = document.createElement('label')
    label3.htmlFor = 'evszam1' // A label 'for' attribútuma az input ID-ja
    label3.innerText = 'Első Évszám:' // A label szövege

    // Létrehozzuk a harmadik input mezőt
    const bemenet3 = document.createElement('input')
    bemenet3.type = 'text' // Az input típusa: szöveges mező
    bemenet3.id = 'evszam1' // Az input ID-ja
    bemenet3.name = 'evszam1' // Az input neve
    div3.appendChild(bemenet3) // Hozzáadjuk az input mezőt a harmadik div-hez

    // Létrehozzuk a harmadik hibajelző div-et
    const div3error = document.createElement('div')
    div3error.classList.add('error') // Hozzáadjuk az 'error' osztályt
    div3.appendChild(div3error) // Hozzáadjuk a hibajelző div-et a harmadik mezőhöz

    // Létrehozzuk a negyedik mezőt
    const div4 = document.createElement('div')
    div4.classList.add('field') // Hozzáadjuk a 'field' osztályt

    // Létrehozzuk a negyedik label elemet
    const label4 = document.createElement('label')
    label4.htmlFor = 'esemeny2' // A label 'for' attribútuma az input ID-ja
    label4.innerText = 'Második esemény' // A label szövege

    // Létrehozzuk a negyedik input mezőt
    const bemenet4 = document.createElement('input')
    bemenet4.type = 'text' // Az input típusa: szöveges mező
    bemenet4.id = 'esemeny2' // Az input ID-ja
    bemenet4.name = 'esemeny2' // Az input neve
    div4.appendChild(bemenet4) // Hozzáadjuk az input mezőt a negyedik div-hez

    // Létrehozzuk a negyedik hibajelző div-et
    const div4error = document.createElement('div')
    div4error.classList.add('error') // Hozzáadjuk az 'error' osztályt
    div4.appendChild(div4error) // Hozzáadjuk a hibajelző div-et a negyedik mezőhöz

    // Létrehozzuk az ötödik mezőt
    const div5 = document.createElement('div')
    div5.classList.add('field') // Hozzáadjuk a 'field' osztályt

    // Létrehozzuk az ötödik label elemet
    const label5 = document.createElement('label')
    label5.htmlFor = 'evszam2' // A label 'for' attribútuma az input ID-ja
    label5.innerText = 'Második Évszám:' // A label szövege

    // Létrehozzuk az ötödik input mezőt
    const bemenet5 = document.createElement('input')
    bemenet5.type = 'text' // Az input típusa: szöveges mező
    bemenet5.id = 'evszam2' // Az input ID-ja
    bemenet5.name = 'evszam2' // Az input neve
    div5.appendChild(bemenet5) // Hozzáadjuk az input mezőt az ötödik div-hez

    // Létrehozzuk az ötödik hibajelző div-et
    const div5error = document.createElement('div')
    div5error.classList.add('error') // Hozzáadjuk az 'error' osztályt
    div5.appendChild(div5error) // Hozzáadjuk a hibajelző div-et az ötödik mezőhöz

    // Létrehozzuk a gombot, amivel a felhasználó beküldheti az adatokat
    const gombe = document.createElement('button')
    gombe.type = 'submit' // A gomb típusa: submit
    gombe.innerText = 'Hozzáadás' // A gomb szövege

    // Hozzáadjuk az összes mezőt és a gombot a formhoz
    form.appendChild(div1) // Hozzáadjuk az első mezőt a formhoz
    form.appendChild(div2) // Hozzáadjuk a második mezőt a formhoz
    form.appendChild(div3) // Hozzáadjuk a harmadik mezőt a formhoz
    form.appendChild(div4) // Hozzáadjuk a negyedik mezőt a formhoz
    form.appendChild(div5) // Hozzáadjuk az ötödik mezőt a formhoz
    form.appendChild(gombe) // Hozzáadjuk a submit gombot a formhoz
}

formGenerate() //A függvény meghívása
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
