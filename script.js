// SELEZIONA L'ELEMENTO CONTENITORE DELLA GRIGLIA E IL BOTTONE DI GENERAZIONE
const gridContainer = document.querySelector('.grid');
const generateButton = document.querySelector('#generateButton');
const difficultySelect = document.querySelector('#difficultySelect');

// AGGIUNGI UN EVENT LISTENER AL BOTTONE DI GENERAZIONE
generateButton.addEventListener('click', generateGrid);

// FUNZIONE PER GENERARE LA GRIGLIA
function generateGrid() {
// SVUOTA IL CONTENUTO DELLA GRIGLIA
  gridContainer.innerHTML = '';

// OTTIENI IL VALORE DELLA DIFFICOLTÀ SELEZIONATA
  const difficulty = parseInt(difficultySelect.value);

// CALCOLA IL NUMERO DI CELLE E DI RIGHE IN BASE ALLA DIFFICOLTÀ
  let numCells, numRows;
  if (difficulty === 1) {
    numCells = 100;
    numRows = 10;
  } else if (difficulty === 2) {
    numCells = 81;
    numRows = 9;
  } else if (difficulty === 3) {
    numCells = 49;
    numRows = 7;
  }

// CREA LE CELLE NUMERATE IN BASE AL NUMERO DI CELLE E DI RIGHE
  for (let i = 1; i <= numCells; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.textContent = i;
    cell.addEventListener('click', handleClick);
    gridContainer.appendChild(cell);
  }

// IMPOSTA LA GRIGLIA UTILIZZANDO GRID
  gridContainer.style.gridTemplateColumns = `repeat(${numRows}, 1fr)`;
}

// FUNZIONE PER GESTIRE IL CLICK SU UNA CELLA
function handleClick(event) {
  const clickedCell = event.target;
  clickedCell.classList.add('clicked');
  console.log('Hai cliccato la cella:', clickedCell.textContent);
}
