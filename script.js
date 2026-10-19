/* ==========================================================================
   Huokaing Thara Gaming - Main Script with Live View Counters
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Share Button Functionality
    const shareBtn = document.getElementById('shareBtn');
    const pageUrl = window.location.href;

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
                    console.log('Share canceled or not supported:', err);
                }
            } else {
                try {
                    await navigator.clipboard.writeText(pageUrl);
                    alert('Page link copied to clipboard!');
                } catch (err) {
                    alert('Copy failed.');
                }
            }
        });
    }

    // 2. Live View Counter Logic (+20 views every 5 seconds for all 5 videos)
    const viewCounts = [10000000, 10000000, 10000000, 10000000, 10000000]; // Starts at 10 Million views each

    setInterval(() => {
        for (let i = 0; i < viewCounts.length; i++) {
            viewCounts[i] += 1; // Add 1 views
            const viewElement = document.getElementById(`views-${i + 1}`);
            if (viewElement) {
                viewElement.textContent = viewCounts[i].toLocaleString(); // Format with commas (e.g., 10,000,020)
            }
        }
    }, 5000); // Triggers every 5 seconds
});
