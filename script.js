let board = Array(6).fill().map(() => Array(7).fill(0)); 
let currentPlayer = 1; 
let gameActive = true;



function createBoard() {
    const boardDiv = document.getElementById('board');  
    boardDiv.innerHTML = '';
    for(let row = 0; row < 6; row++) { 
        for(let col = 0; col < 7; col++) {
            const cellDiv = document.createElement('div'); 
            cellDiv.dataset.row = row; 
            cellDiv.dataset.col = col;
            cellDiv.classList.add('cell');
            if(board[row][col] === 1) cellDiv.classList.add('red'); 
            if(board[row][col] === 2) cellDiv.classList.add('yellow');
            cellDiv.addEventListener('click', cellClick);
            boardDiv.appendChild(cellDiv);
        }
    }
}

function cellClick(e) {
    if(!gameActive) return;
    const col = e.target.dataset.col; 
    let row = 5; 
    while(row >= 0) { 
        if(board[row][col] === 0) break; 
        
        row--;  
    }
    if(row === -1) return; 
    board[row][col] = currentPlayer; 
    createBoard();
    if(checkWin(currentPlayer)) { 
        gameActive = false; 
        document.getElementById('message').innerText = 'Player ' + currentPlayer + ' wins!'; 
        document.getElementById('restart').style.display = 'block'; 
        return;
    }
    currentPlayer = currentPlayer === 1 ? 2 : 1; 
    document.getElementById('message').innerText = 'Player ' + currentPlayer + '\'s turn';
}

function checkWin(player) { 
*/
for(let row = 0; row < 6; row++) {
    for(let col = 0; col < 7; col++) {
    if(checkDirection(row, col, 1, 0, player) || checkDirection(row, col, 0, 1, player) || checkDirection(row, col, 1, 1, player) || checkDirection(row, col, 1, -1, player)) return true;
    }
}
return false;
}


function checkDirection(row, col, dirRow, dirCol, player) {
for(let i = 0; i < 4; i++) {
    if(row < 0 || row > 5 || col < 0 || col > 6 || board[row][col] !== player) return false;
    row += dirRow;
    col += dirCol;
}
return true;
}

function restartGame() {
board = Array(6).fill().map(() => Array(7).fill(0));
currentPlayer = 1;
gameActive = true;
document.getElementById('message').innerText = 'Player Red\'s turn';
document.getElementById('restart').style.display = 'none';
createBoard();
}

createBoard();
