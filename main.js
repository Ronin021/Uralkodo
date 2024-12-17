// Adatok tömbje, amely tartalmazza a táblázat celláinak értékeit
const array = [
    {
        Uralkodo: `Uralkodó`, // Fejléc első oszlopának szövege
        Esemeny: `Esemény`, // Fejléc második oszlopának szövege
        Evszam: `Évszám`, // Fejléc harmadik oszlopának szövege
    },
    {
        Uralkodo1: `I. István`, // Első sor első cellájának szövege
        Esemeny1: `Koronázás`, // Első sor második cellájának szövege
        Evszam1: `1000` // Első sor harmadik cellájának szövege
    },
    {
        Esemeny2: `Pannonhalmi apátság megalapítása`, // Második sor második cellájának szövege
        Evszam2: `1001` // Második sor harmadik cellájának szövege
    },
    {
        Uralkodo2: `IV. Béla`, // Harmadik sor első cellájának szövege
        Esemeny3: `tatárjárás`, // Harmadik sor második cellájának szövege
        Evszam3: `1241-1242` // Harmadik sor harmadik cellájának szövege
    },
    {
        Uralkodo3: `Mátyás király`, // Negyedik sor első cellájának szövege
        Esemeny4: `Bécs elfoglalása`, // Negyedik sor második cellájának szövege
        Evszam4: `1485` // Negyedik sor harmadik cellájának szövege
    },
    {
        Esemeny5: `Kenyérmezei csata`, // Ötödik sor második cellájának szövege
        Evszam5: `1479` // Ötödik sor harmadik cellájának szövege
    },
    {
        Uralkodo4: `II. Rákoczi Ferenc`, // Hatodik sor első cellájának szövege
        Esemeny6: `A szabadságharc kezdete`, // Hatodik sor második cellájának szövege
        Evszam6: `1703`, // Hatodik sor harmadik cellájának szövege
    },
    {
        Esemeny7: `A szabadságharc vége`, // Hetedik sor második cellájának szövege
        Evszam7: `1711` // Hetedik sor harmadik cellájának szövege
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

// Fejrész kitöltése
const fejlecSor = document.createElement('tr'); // Új sor létrehozása a fejléchez
fejlec.appendChild(fejlecSor); // Fejléchez tartozó sor hozzáadása

const fejlecCella1 = document.createElement('th'); // Első cella létrehozása a fejléchez
fejlecSor.appendChild(fejlecCella1); // Első cella hozzáadása a fejléchez
fejlecCella1.innerHTML = array[0].Uralkodo; // Fejléc első cellájának szövegének beállítása

const fejlecCella2 = document.createElement('th'); // Második cella létrehozása a fejléchez
fejlecSor.appendChild(fejlecCella2); // Második cella hozzáadása a fejléchez
fejlecCella2.innerHTML = array[0].Esemeny; // Fejléc második cellájának szövegének beállítása

const fejlecCella3 = document.createElement('th'); // Harmadik cella létrehozása a fejléchez
fejlecSor.appendChild(fejlecCella3); // Harmadik cella hozzáadása a fejléchez
fejlecCella3.innerHTML = array[0].Evszam; // Fejléc harmadik cellájának szövegének beállítása

// Első sor létrehozása és kitöltése
const sor1 = document.createElement('tr'); // Első sor létrehozása
torzs.appendChild(sor1); // Első sor hozzáadása a táblázat törzséhez

const cella1Sor1 = document.createElement('td'); // Első cella létrehozása az első sorban
sor1.appendChild(cella1Sor1); // Első cella hozzáadása az első sorhoz
cella1Sor1.rowSpan = 2; // Első cella összekapcsolása két sorral
cella1Sor1.innerHTML = array[1].Uralkodo1; // Első sor első cellájának szövegének beállítása

const cella2Sor1 = document.createElement('td'); // Második cella létrehozása az első sorban
sor1.appendChild(cella2Sor1); // Második cella hozzáadása az első sorhoz
cella2Sor1.innerHTML = array[1].Esemeny1; // Első sor második cellájának szövegének beállítása

const cella3Sor1 = document.createElement('td'); // Harmadik cella létrehozása az első sorban
sor1.appendChild(cella3Sor1); // Harmadik cella hozzáadása az első sorhoz
cella3Sor1.innerHTML = array[1].Evszam1; // Első sor harmadik cellájának szövegének beállítása

// Második sor létrehozása és kitöltése
const sor2 = document.createElement('tr'); // Második sor létrehozása
torzs.appendChild(sor2); // Második sor hozzáadása a táblázat törzséhez

const cella2Sor2 = document.createElement('td'); // Második cella létrehozása a második sorban
sor2.appendChild(cella2Sor2); // Második cella hozzáadása a második sorhoz
cella2Sor2.innerHTML = array[2].Esemeny2; // Második sor második cellájának szövegének beállítása

const cella3Sor2 = document.createElement('td'); // Harmadik cella létrehozása a második sorban
sor2.appendChild(cella3Sor2); // Harmadik cella hozzáadása a második sorhoz
cella3Sor2.innerHTML = array[2].Evszam2; // Második sor harmadik cellájának szövegének beállítása

// Harmadik sor létrehozása és kitöltése
const sor3 = document.createElement('tr'); // Harmadik sor létrehozása
torzs.appendChild(sor3); // Harmadik sor hozzáadása a táblázat törzséhez

const cella1Sor3 = document.createElement('td'); // Első cella létrehozása a harmadik sorban
sor3.appendChild(cella1Sor3); // Első cella hozzáadása a harmadik sorhoz
cella1Sor3.innerHTML = array[3].Uralkodo2; // Harmadik sor első cellájának szövegének beállítása

const cella2Sor3 = document.createElement('td'); // Második cella létrehozása a harmadik sorban
sor3.appendChild(cella2Sor3); // Második cella hozzáadása a harmadik sorhoz
cella2Sor3.innerHTML = array[3].Esemeny3; // Harmadik sor második cellájának szövegének beállítása

const cella3Sor3 = document.createElement('td'); // Harmadik cella létrehozása a harmadik sorban
sor3.appendChild(cella3Sor3); // Harmadik cella hozzáadása a harmadik sorhoz
cella3Sor3.innerHTML = array[3].Evszam3; // Harmadik sor harmadik cellájának szövegének beállítása

// Negyedik sor létrehozása és kitöltése
const sor4 = document.createElement('tr'); // Negyedik sor létrehozása
torzs.appendChild(sor4); // Negyedik sor hozzáadása a táblázat törzséhez

const cella1Sor4 = document.createElement('td'); // Első cella létrehozása a negyedik sorban
sor4.appendChild(cella1Sor4); // Első cella hozzáadása a negyedik sorhoz
cella1Sor4.rowSpan = 2; // Cella összekapcsolása két sorral
cella1Sor4.innerHTML = array[4].Uralkodo3; // Negyedik sor első cellájának szövegének beállítása

const cella2Sor4 = document.createElement('td'); // Második cella létrehozása a negyedik sorban
sor4.appendChild(cella2Sor4); // Második cella hozzáadása a negyedik sorhoz
cella2Sor4.innerHTML = array[4].Esemeny4; // Negyedik sor második cellájának szövegének beállítása

const cella3Sor4 = document.createElement('td'); // Harmadik cella létrehozása a negyedik sorban
sor4.appendChild(cella3Sor4); // Harmadik cella hozzáadása a negyedik sorhoz
cella3Sor4.innerHTML = array[4].Evszam4; // Negyedik sor harmadik cellájának szövegének beállítása

// Ötödik sor létrehozása és kitöltése
const sor5 = document.createElement('tr'); // Ötödik sor létrehozása
torzs.appendChild(sor5); // Ötödik sor hozzáadása a táblázat törzséhez

const cella2Sor5 = document.createElement('td'); // Második cella létrehozása az ötödik sorban
sor5.appendChild(cella2Sor5); // Második cella hozzáadása az ötödik sorhoz
cella2Sor5.innerHTML = array[5].Esemeny5; // Ötödik sor második cellájának szövegének beállítása

const cella3Sor5 = document.createElement('td'); // Harmadik cella létrehozása az ötödik sorban
sor5.appendChild(cella3Sor5); // Harmadik cella hozzáadása az ötödik sorhoz
cella3Sor5.innerHTML = array[5].Evszam5; // Ötödik sor harmadik cellájának szövegének beállítása

// Hatodik sor létrehozása és kitöltése
const sor6 = document.createElement('tr'); // Hatodik sor létrehozása
torzs.appendChild(sor6); // Hatodik sor hozzáadása a táblázat törzséhez

const cella1Sor6 = document.createElement('td'); // Első cella létrehozása a hatodik sorban
sor6.appendChild(cella1Sor6); // Első cella hozzáadása a hatodik sorhoz
cella1Sor6.rowSpan = 2; // Cella összekapcsolása két sorral
cella1Sor6.innerHTML = array[6].Uralkodo4; // Hatodik sor első cellájának szövegének beállítása

const cella2Sor6 = document.createElement('td'); // Második cella létrehozása a hatodik sorban
sor6.appendChild(cella2Sor6); // Második cella hozzáadása a hatodik sorhoz
cella2Sor6.innerHTML = array[6].Esemeny6; // Hatodik sor második cellájának szövegének beállítása

const cella3Sor6 = document.createElement('td'); // Harmadik cella létrehozása a hatodik sorban
sor6.appendChild(cella3Sor6); // Harmadik cella hozzáadása a hatodik sorhoz
cella3Sor6.innerHTML = array[6].Evszam6; // Hatodik sor harmadik cellájának szövegének beállítása

// Hetedik sor létrehozása és kitöltése
const sor7 = document.createElement('tr'); // Hetedik sor létrehozása
torzs.appendChild(sor7); // Hetedik sor hozzáadása a táblázat törzséhez

const cella2Sor7 = document.createElement('td'); // Második cella létrehozása a hetedik sorban
sor7.appendChild(cella2Sor7); // Második cella hozzáadása a hetedik sorhoz
cella2Sor7.innerHTML = array[7].Esemeny7; // Hetedik sor második cellájának szövegének beállítása

const cella3Sor7 = document.createElement('td'); // Harmadik cella létrehozása a hetedik sorban
sor7.appendChild(cella3Sor7); // Harmadik cella hozzáadása a hetedik sorhoz
cella3Sor7.innerHTML = array[7].Evszam7; // Hetedik sor harmadik cellájának szövegének beállítása
