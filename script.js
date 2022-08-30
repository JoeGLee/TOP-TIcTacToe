const start = (()=>{
    const startBtn = document.querySelector('.startbtn');
    startBtn.addEventListener('click',()=>{
        reset();
    })

    function reset(){
        for(let i = 0; i < gameboard.length; i++){
            gameboard[i] = '';
        }
        const squares = document.querySelectorAll('li');
        squares.forEach(square => {square.textContent =''})
    }
})();



const factoryPlayer = (turn, symbol)=>{
    return{turn, symbol};
}

const gameboard = (function() {
    let board = ['','','','','','','','',''];

    board.forEach((square) =>{
      const section = document.createElement('li');
       const gb = document.querySelector('.gameboard');
       section.textContent = square;
       gb.appendChild(section);
        
    })
    return board;
})();


const game = (function() {

    // const players = player();
    // const playerX = factoryPlayer(players[0], 'x');
    // const playerO = factoryPlayer(players[1], 'o');
    // const squares = document.querySelectorAll('li');

    let turn = playerX.turn;
    squares.forEach((square) => {
        square.addEventListener('click', ()=>{
            
            if(turn === playerX.turn){
                if(square.textContent === ''){
                square.textContent = playerX.symbol;
                turn = playerO.turn;
                }
            }
            else{
                if(square.textContent === ''){
                square.textContent = playerO.symbol;
                turn = playerX.turn;
                }
            }
            gameboardUpdate();
            displayWinner();
        })
    })

   const gameboardUpdate = (() => {
        for(let i = 0; i < gameboard.length; i++){
            gameboard[i] = squares[i].textContent;
        }
        return gameboard;
   })

   const winner = (() => {
        if (gameboard[0] === playerX.symbol && gameboard[1] === playerX.symbol && gameboard[2] === playerX.symbol ||
            gameboard[3] === playerX.symbol && gameboard[4] === playerX.symbol && gameboard[5] === playerX.symbol ||
            gameboard[6] === playerX.symbol && gameboard[7] === playerX.symbol && gameboard[8] === playerX.symbol ||
            gameboard[0] === playerX.symbol && gameboard[3] === playerX.symbol && gameboard[6] === playerX.symbol ||
            gameboard[1] === playerX.symbol && gameboard[4] === playerX.symbol && gameboard[7] === playerX.symbol ||
            gameboard[2] === playerX.symbol && gameboard[5] === playerX.symbol && gameboard[8] === playerX.symbol ||
            gameboard[0] === playerX.symbol && gameboard[4] === playerX.symbol && gameboard[8] === playerX.symbol ||
            gameboard[6] === playerX.symbol && gameboard[4] === playerX.symbol && gameboard[2] === playerX.symbol)
            { return playerX.turn + ' wins!'}
        else if (gameboard[0] === playerO.symbol && gameboard[1] === playerO.symbol && gameboard[2] === playerO.symbol ||
            gameboard[3] === playerO.symbol && gameboard[4] === playerO.symbol && gameboard[5] === playerO.symbol ||
            gameboard[6] === playerO.symbol && gameboard[7] === playerO.symbol && gameboard[8] === playerO.symbol ||
            gameboard[0] === playerO.symbol && gameboard[3] === playerO.symbol && gameboard[6] === playerO.symbol ||
            gameboard[1] === playerO.symbol && gameboard[4] === playerO.symbol && gameboard[7] === playerO.symbol ||
            gameboard[2] === playerO.symbol && gameboard[5] === playerO.symbol && gameboard[8] === playerO.symbol ||
            gameboard[0] === playerO.symbol && gameboard[4] === playerO.symbol && gameboard[8] === playerO.symbol ||
            gameboard[6] === playerO.symbol && gameboard[4] === playerO.symbol && gameboard[2] === playerO.symbol)
            { return playerO.turn + ' wins!'}
        
   })

   const displayWinner = (() => {
        if(winner() !== undefined){
            const winnerDeclared = document.createElement('h1');
            winnerDeclared.textContent = winner();
            const container = document.querySelector('.container');
            container.appendChild(winnerDeclared);
        }
   })

})();