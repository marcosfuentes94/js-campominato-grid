// SELEZIONA L'ELEMENTO CONTENITORE DELLA GRIGLIA E IL BOTTONE DI GENERAZIONE
const gridContainer = document.querySelector('.grid');
const generateButton = document.querySelector('#generateButton');

// AGGIUNGI UN EVENT LISTENER AL BOTTONE DI GENERAZIONE
generateButton.addEventListener('click', generateGrid);

// FUNZIONE PER GENERARE LA GRIGLIA
function generateGrid() {
// SVUOTA IL CONTENUTO DELLA GRIGLIA
  gridContainer.innerHTML = '';

// CREA 100 CELLE NUMERATE DA 1 A 100
  for (let i = 1; i <= 100; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.textContent = i;
    cell.addEventListener('click', handleClick);
    gridContainer.appendChild(cell);
  }
}

// FUNZIONE PER GESTIRE IL CLICK SU UNA CELLA
function handleClick(event) {
  const clickedCell = event.target;
  clickedCell.classList.add('clicked');
  console.log('Hai cliccato la cella:', clickedCell.textContent);
}
