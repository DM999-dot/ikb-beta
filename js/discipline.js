const Referee = {
    showWarning(correctAnswer) {
        const overlay = document.getElementById('booking-overlay');
        const msg = document.getElementById('referee-message');
        overlay.style.display = 'flex';
        msg.innerHTML = `REFEREE WARNING<br>The correct answer was: ${correctAnswer}`;
        playAcademySound('whistle');
        setTimeout(() => overlay.style.display = 'none', 4000);
    }
};