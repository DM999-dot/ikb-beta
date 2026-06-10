/* ============================================================
   IKB NAVIGATION ENGINE: NUCLEAR RESET VERSION
   ============================================================ */
function showScreen(screenId) {
    // 1. Hide EVERY possible screen container to prevent stacking
    const allContainers = document.querySelectorAll('.screen, .topic-screen, .topic-screen-container');
    
    allContainers.forEach(s => {
        s.style.display = 'none';
        s.setAttribute('hidden', 'true'); // Support for both CSS and HTML hidden states
    });

    // 2. Target the specific screen
    const target = document.getElementById(screenId);
    
    if (target) {
        // 3. Clean and Show the target
        target.removeAttribute('hidden');
        target.style.display = 'block';
        
        // 4. Snap the user back to the top of the new page
        window.scrollTo(0, 0);

        // 5. Audit: Force iFrame refresh for video topics (Topic 2/3/6)
        target.querySelectorAll('iframe').forEach(f => {
            const currentSrc = f.src;
            f.src = '';
            f.src = currentSrc;
        });
        
        console.log("IKB Nav: Successfully mounted", screenId);
    } else {
        console.error("IKB Nav Critical Error: Target screen not found ->", screenId);
    }
}