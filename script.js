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
})