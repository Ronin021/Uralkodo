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



const fejlecCella1_inner = 'Uralkodó'; // Fejléc 1. cellája
const fejlecCella2_inner = 'Esemény'; // Fejléc 2. cellája
const fejlecCella3_inner = 'Évszám'; // Fejléc 3. cellája


// Fejrész kitöltése
const fejlecSor = document.createElement('tr'); // Új sor a fejléchez
fejlec.appendChild(fejlecSor); // Sor hozzáadása a fejléchez

const fejlecCella1 = document.createElement('th'); // Első cella a fejléchez
fejlecSor.appendChild(fejlecCella1); // Első cella hozzáadása a fejléchez
fejlecCella1.innerHTML = fejlecCella1_inner; // Fejléc 1. cella szövege

const fejlecCella2 = document.createElement('th'); // Második cella a fejléchez
fejlecSor.appendChild(fejlecCella2); // Második cella hozzáadása a fejléchez
fejlecCella2.innerHTML = fejlecCella2_inner; // Fejléc 2. cella szövege

const fejlecCella3 = document.createElement('th'); // Harmadik cella a fejléchez    
fejlecSor.appendChild(fejlecCella3); // Harmadik cella hozzáadása a fejléchez
fejlecCella3.innerHTML = fejlecCella3_inner; // Fejléc 3. cella szövege



const cella1Sor1_inner = 'I. István'; // Első sor 1. cella szövege
const cella2Sor1_inner = 'Koronázás'; // Első sor 2. cella szövege
const cella3Sor1_inner = '1000'; // Első sor 3. cella szövege

// Első sor hozzáadása
const sor1 = document.createElement('tr'); // Első sor létrehozása
torzs.appendChild(sor1); // Első sor hozzáadása a táblázat törzséhez

const cella1Sor1 = document.createElement('td'); // Első oszlop cellája az első sorban
sor1.appendChild(cella1Sor1); // Cella hozzáadása az első sorhoz
cella1Sor1.rowSpan = 2; // Cella összekapcsolása két sorral
cella1Sor1.innerHTML = cella1Sor1_inner; // Első oszlop cella szövege

const cella2Sor1 = document.createElement('td'); // Második oszlop cellája az első sorban
sor1.appendChild(cella2Sor1); // Cella hozzáadása az első sorhoz
cella2Sor1.innerHTML = cella2Sor1_inner; // Második oszlop cella szövege

const cella3Sor1 = document.createElement('td'); // Harmadik oszlop cellája az első sorban
sor1.appendChild(cella3Sor1); // Cella hozzáadása az első sorhoz
cella3Sor1.innerHTML = cella3Sor1_inner; // Harmadik oszlop cella szövege

const cella2Sor2_inner = 'Pannonhalmi apátság megalapítása'; // Második sor 2. cella szövege
const cella3Sor2_inner = '1001'; // Második sor 3. cella szövege

// Második sor hozzáadása
const sor2 = document.createElement('tr'); // Második sor létrehozása
torzs.appendChild(sor2); // Második sor hozzáadása a táblázat törzséhez

const cella2Sor2 = document.createElement('td'); // Második oszlop cellája a második sorban
sor2.appendChild(cella2Sor2); // Cella hozzáadása a második sorhoz
cella2Sor2.innerHTML = cella2Sor2_inner; // Második oszlop cella szövege

const cella3Sor2 = document.createElement('td'); // Harmadik oszlop cellája a második sorban
sor2.appendChild(cella3Sor2); // Cella hozzáadása a második sorhoz
cella3Sor2.innerHTML = cella3Sor2_inner; // Harmadik oszlop cella szövege


const cella1Sor3_inner = 'IV. Béla'; // Harmadik sor 1. cella szövege
const cella2Sor3_inner = 'tatárjárás'; // Harmadik sor 2. cella szövege
const cella3Sor3_inner = '1241-1242'; // Harmadik sor 3. cella szövege

// Harmadik sor hozzáadása
const sor3 = document.createElement('tr'); // Harmadik sor létrehozása
torzs.appendChild(sor3); // Harmadik sor hozzáadása a táblázat törzséhez

const cella1Sor3 = document.createElement('td'); // Első oszlop cellája a harmadik sorban
sor3.appendChild(cella1Sor3); // Cella hozzáadása a harmadik sorhoz
cella1Sor3.innerHTML = cella1Sor3_inner; // Első oszlop cella szövege

const cella2Sor3 = document.createElement('td'); // Második oszlop cellája a harmadik sorban
sor3.appendChild(cella2Sor3); // Cella hozzáadása a harmadik sorhoz
cella2Sor3.innerHTML = cella2Sor3_inner; // Második oszlop cella szövege

const cella3Sor3 = document.createElement('td'); // Harmadik oszlop cellája a harmadik sorban
sor3.appendChild(cella3Sor3); // Cella hozzáadása a harmadik sorhoz
cella3Sor3.innerHTML = cella3Sor3_inner; // Harmadik oszlop cella szövege


const cella1Sor4_inner = 'Mátyás király'; // Negyedik sor 1. cella szövege
const cella2Sor4_inner = 'Bécs elfoglalása'; // Negyedik sor 2. cella szövege
const cella3Sor4_inner = '1485'; // Negyedik sor 3. cella szövege


// Negyedik sor hozzáadása
const sor4 = document.createElement('tr'); // Negyedik sor létrehozása
torzs.appendChild(sor4); // Negyedik sor hozzáadása a táblázat törzséhez

const cella1Sor4 = document.createElement('td'); // Első oszlop cellája a negyedik sorban
sor4.appendChild(cella1Sor4); // Cella hozzáadása a negyedik sorhoz
cella1Sor4.rowSpan = 2; // Cella összekapcsolása két sorral
cella1Sor4.innerHTML = cella1Sor4_inner; // Első oszlop cella szövege

const cella2Sor4 = document.createElement('td'); // Második oszlop cellája a negyedik sorban
sor4.appendChild(cella2Sor4); // Cella hozzáadása a negyedik sorhoz
cella2Sor4.innerHTML = cella2Sor4_inner; // Második oszlop cella szövege

const cella3Sor4 = document.createElement('td'); // Harmadik oszlop cellája a negyedik sorban
sor4.appendChild(cella3Sor4); // Cella hozzáadása a negyedik sorhoz
cella3Sor4.innerHTML = cella3Sor4_inner; // Harmadik oszlop cella szövege


const cella2Sor5_inner = 'Kenyérmezei csata'; // Ötödik sor 2. cella szövege
const cella3Sor5_inner = '1479'; // Ötödik sor 3. cella szövege

// Ötödik sor hozzáadása
const sor5 = document.createElement('tr'); // Ötödik sor létrehozása
torzs.appendChild(sor5); // Ötödik sor hozzáadása a táblázat törzséhez

const cella2Sor5 = document.createElement('td'); // Második oszlop cellája az ötödik sorban
sor5.appendChild(cella2Sor5); // Cella hozzáadása az ötödik sorhoz
cella2Sor5.innerHTML = cella2Sor5_inner; // Második oszlop cella szövege

const cella3Sor5 = document.createElement('td'); // Harmadik oszlop cellájának létrehozása az ötödik sorban
sor5.appendChild(cella3Sor5); // Cella hozzáadása az ötödik sorhoz
cella3Sor5.innerHTML = cella3Sor5_inner; // Harmadik oszlop cella szövege


const cella1Sor6_inner = 'II. Rákóczi Ferenc'; // Hatodik sor 1. cella szövege
const cella2Sor6_inner = 'Rákóczi-szabadságharc'; // Hatodik sor 2. cella szövege
const cella3Sor6_inner = '1703-1711'; // Hatodik sor 3. cella szövege


// Hatodik sor hozzáadása
const sor6 = document.createElement('tr'); // Hatodik sor létrehozása
torzs.appendChild(sor6); // Hatodik sor hozzáadása a táblázat törzséhez

const cella1Sor6 = document.createElement('td'); // Első oszlop cellája a hatodik sorban
sor6.appendChild(cella1Sor6); // Cella hozzáadása a hatodik sorhoz
cella1Sor6.innerHTML = cella1Sor6_inner; // Első oszlop cella szövege

const cella2Sor6 = document.createElement('td'); // Második oszlop cellája a hatodik sorban
sor6.appendChild(cella2Sor6); // Cella hozzáadása a hatodik sorhoz
cella2Sor6.innerHTML = cella2Sor6_inner; // Második oszlop cella szövege

const cella3Sor6 = document.createElement('td'); // Harmadik oszlop cellája a hatodik sorban
sor6.appendChild(cella3Sor6); // Cella hozzáadása a hatodik sorhoz
cella3Sor6.innerHTML = cella3Sor6_inner; // Harmadik oszlop cella szövege


const cella1Sor7_inner = 'Kossuth Lajos'; // Hetedik sor 1. cella szövege
const cella2Sor7_inner = 'Szabadságharc'; // Hetedik sor 2. cella szövege
const cella3Sor7_inner = '1848-1849'; // Hetedik sor 3. cella szövege

// Hetedik sor hozzáadása
const sor7 = document.createElement('tr'); // Hetedik sor létrehozása
torzs.appendChild(sor7); // Hetedik sor hozzáadása a táblázat törzséhez

const cella1Sor7 = document.createElement('td'); // Első oszlop cellája a hetedik sorban
sor7.appendChild(cella1Sor7); // Cella hozzáadása a hetedik sorhoz
cella1Sor7.innerHTML = cella1Sor7_inner; // Hetedik sor 1. cella szövege

const cella2Sor7 = document.createElement('td'); // Második oszlop cellája a hetedik sorban
sor7.appendChild(cella2Sor7); // Cella hozzáadása a hetedik sorhoz
cella2Sor7.innerHTML = cella2Sor7_inner; // Hetedik sor 2. cella szövege

const cella3Sor7 = document.createElement('td'); // Harmadik oszlop cellája a hetedik sorban
sor7.appendChild(cella3Sor7); // Cella hozzáadása a hetedik sorhoz
cella3Sor7.innerHTML = cella3Sor7_inner; // Hetedik sor 3. cella szövege
