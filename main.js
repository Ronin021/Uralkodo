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

// Fejrész kitöltése
const fejlecSor = document.createElement('tr'); // Új sor létrehozása a fejléchez
fejlec.appendChild(fejlecSor); // Fejléchez tartozó sor hozzáadása

const fejlecCella1 = document.createElement('th'); // Első cella létrehozása a fejléchez
fejlecSor.appendChild(fejlecCella1); // Első cella hozzáadása a fejléchez
fejlecCella1.innerHTML = fejlecek.Uralkodo_fej; // Fejléc első oszlopának szövegének beállítása

const fejlecCella2 = document.createElement('th'); // Második cella létrehozása a fejléchez
fejlecSor.appendChild(fejlecCella2); // Második cella hozzáadása a fejléchez
fejlecCella2.innerHTML = fejlecek.Esemeny_fej; // Fejléc második oszlopának szövegének beállítása

const fejlecCella3 = document.createElement('th'); // Harmadik cella létrehozása a fejléchez
fejlecSor.appendChild(fejlecCella3); // Harmadik cella hozzáadása a fejléchez
fejlecCella3.innerHTML = fejlecek.Evszam_fej; // Fejléc harmadik oszlopának szövegének beállítása




// A ciklust innen vezetjük be
for (const currentElement of array) { // Végigmegyünk az array tömb elemein
    const aktivsor = document.createElement('tr'); // Új sor létrehozása
    torzs.appendChild(aktivsor); // Sor hozzáfűzése a táblázat törzséhez

    const Uralkodosor = document.createElement('td'); // Első oszlop cellájának létrehozása
    Uralkodosor.innerHTML = currentElement.Uralkodo ; // Cellatartalom beállítása
    aktivsor.appendChild(Uralkodosor); // Első cella hozzáfűzése az aktuális sorhoz
 
  
    const Esemenysor = document.createElement('td'); // Második oszlop cellájának létrehozása
    Esemenysor.innerHTML = currentElement.Esemeny; // Cellatartalom beállítása
    aktivsor.appendChild(Esemenysor);// Második cella hozzáfűzése az aktuális sorhoz
  
  
    const Evszamsor = document.createElement('td'); // Harmadik oszlop cellájának létrehozása
    Evszamsor.innerHTML = currentElement.Evszam;// Cellatartalom beállítása
    aktivsor.appendChild(Evszamsor);// Harmadik cella hozzáfűzése az aktuális sorhoz

    if (currentElement.Esemeny2 !== undefined && currentElement.Evszam2 !== undefined) { 
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

