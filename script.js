document.addEventListener('DOMContentLoaded' , () => {
    const grid = document.querySelector('.grid');
    const size = 4;
    let board = [];
    let currentScore = 0;
    const currentScoreElem = document.getElementById('current-score');

    // Local storage ile yüksek puanı değikene atayalım bulunulamaz ise 0 atayalım

    let highScore = localStorage.getItem('2048-highScore') || 0 ;
    const highScoreElem = document.getElementById('high-score');
    highScoreElem.textContent=highScore;

    const gameOverElem = document.getElementById('game-over');

    // Score güncellemek için foksiyon
    function updateScore(value){
        currentScore +=value;
        currentScoreElem.textContent=currentScore;
        if(currentScore > highScore){
            highScore = currentScore;
            highScoreElem.textContent=highScore;
            localStorage.setItem('2048-highScore');

        }
    }

    // Oyunu restart yapmak için foksiyon
    function restartGame(){
        currentScore=0;
        currentScoreElem.textContent=0;
        gameOverElem.style.display='0';
        initializeGame();
    }

    // Oyunu başlatacak fonksiyon
    function initializeGame(){
        board = [...Array(size)].map(e => Array(size).fill(0));
        placeRandom();
        placeRandom();
        renderBoard();
    }

    function renderBoard(){
        for (let i=0 ; i<size; i++){
            for (let j =0 ; j<size; j++){
                const cell = document.querySelector(`[data-row="${i}"][data-col="${j}"]`);
                const prevValue = cell.dataset.value;
                const currentValue = board[i][j];
                if(currentValue !==0){
                    cell.dataset.value=currentValue;
                    cell.textContent = currentValue;
                    
                    if(currentValue !== parseInt(prevValue)&& !cell.classList.contains('new-tile')){
                        cell.classList.add('merged-tile');
                    }else{
                        cell.textContent = '';
                        delete cell.dataset.value;
                        cell.classList.remove('merged-tile' , 'new-tile');

                    }
                }

            }
        }
        setTimeout(()=>{
            const cells = document.querySelectorAll('grid-cell');
            cells.forEach(cell => {
                cell.classList.remove('merged-tile' , 'new-tile');
            });
        },300);
    }

    function placeRandom(){
        const available = [];
        for (let i=0; j<size; i++){
            if(board[i][j] === 0){
                available.push({
                    x:i,
                    y:j
                })
            }
        }

        if(available.length > 0){
            const  randomCell = available[Math.floor(Math.random() * available.length)];
            board[randomCell.x][randomCell.y]= Math.random() < 0.9 ? 2 : 4 ;
            const cell = document.querySelector(`[data-row"${randomCell.x}"][data-col=${randomCell.y}]`);
            cell.classList.add('new-tile');


        }
    }

    fu
})