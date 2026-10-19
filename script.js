/* ==========================================================================
   Huokaing Thara Gaming - Main Script
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Share Button Functionality
    const shareBtn = document.getElementById('shareBtn');
    const pageUrl = window.location.href; // Shares the current page URL

    if (shareBtn) {
        shareBtn.addEventListener('click', async () => {
            if (navigator.share) {
                try {
                    await navigator.share({
                        title: 'Huokaing Thara Gaming',
                        text: 'Check out the official Huokaing Thara Gaming page and video showcase!',
                        url: pageUrl,
                    });
                } catch (err) {
                    console.log('Share canceled or not supported in this browser context:', err);
                }
            } else {
                // Fallback for browsers without native Web Share API
                try {
                    await navigator.clipboard.writeText(pageUrl);
                    alert('Page link copied to clipboard! Share it with your friends.');
                } catch (err) {
                    alert('Copy failed. Please copy the URL from your browser address bar.');
                }
            }
        });
    }

    // 2. Interactive Video Play Button Ripple/Click Effect
    const playButtons = document.querySelectorAll('.play-btn');

    playButtons.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            console.log(`Navigating to Video #${index + 1} on Facebook...`);
        });
    });
});
