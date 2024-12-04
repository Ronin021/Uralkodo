// Tároló div létrehozása, ami a táblázatot fogja tartalmazni
const tableContainer = document.createElement('div'); 
document.body.appendChild(tableContainer); // Hozzáadás a body-hoz

// Táblázat fejléce
const tableHeader = document.createElement('div'); 
tableContainer.appendChild(tableHeader); // Hozzáfűzöm a táblázathoz

const headerUralkodo = document.createElement('span'); 
headerUralkodo.innerHTML = 'Uralkodó'; 
tableHeader.appendChild(headerUralkodo); // Fejléc első cellája

const headerEsemeny = document.createElement('span'); 
headerEsemeny.innerHTML = 'Esemény'; 
tableHeader.appendChild(headerEsemeny); // Fejléc második cellája

const headerEvszam = document.createElement('span'); 
headerEvszam.innerHTML = 'Évszám'; 
tableHeader.appendChild(headerEvszam); // Fejléc harmadik cellája

// Táblázat első sor
const firstRow = document.createElement('div'); 
tableContainer.appendChild(firstRow); 

const firstRowUralkodo = document.createElement('span'); 
firstRowUralkodo.innerHTML = 'I. István'; 
firstRow.appendChild(firstRowUralkodo); 

const firstRowEsemeny = document.createElement('span'); 
firstRowEsemeny.innerHTML = 'Koronázás'; 
firstRow.appendChild(firstRowEsemeny); 

const firstRowEvszam = document.createElement('span'); 
firstRowEvszam.innerHTML = '1000'; 
firstRow.appendChild(firstRowEvszam); 

// Táblázat második sor
const secondRow = document.createElement('div'); 
tableContainer.appendChild(secondRow);

const secondRowUralkodo = document.createElement('span'); 
secondRowUralkodo.innerHTML = 'IV. Béla'; 
secondRow.appendChild(secondRowUralkodo);

const secondRowEsemeny = document.createElement('span'); 
secondRowEsemeny.innerHTML = 'Tatárjárás'; 
secondRow.appendChild(secondRowEsemeny);

const secondRowEvszam = document.createElement('span'); 
secondRowEvszam.innerHTML = '1241-1242'; 
secondRow.appendChild(secondRowEvszam);

// Táblázat harmadik sor
const thirdRow = document.createElement('div'); 
tableContainer.appendChild(thirdRow);

const thirdRowUralkodo = document.createElement('span'); 
thirdRowUralkodo.innerHTML = 'Mátyás király'; 
thirdRow.appendChild(thirdRowUralkodo);

const thirdRowEsemeny = document.createElement('span'); 
thirdRowEsemeny.innerHTML = 'Bécs elfoglalása'; 
thirdRow.appendChild(thirdRowEsemeny);

const thirdRowEvszam = document.createElement('span'); 
thirdRowEvszam.innerHTML = '1485'; 
thirdRow.appendChild(thirdRowEvszam);


