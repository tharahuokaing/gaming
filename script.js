document.addEventListener('DOMContentLoaded', () => {
    const shareBtn = document.getElementById('shareBtn');
    const targetUrl = 'https://www.facebook.com/share/r/18xYna64AR/';

    // Share Button functionality
    if (shareBtn) {
        shareBtn.addEventListener('click', async () => {
            if (navigator.share) {
                try {
                    await navigator.share({
                        title: 'Huokaing Thara Gaming',
                        text: 'Check out this gaming reel from Huokaing Thara Gaming!',
                        url: targetUrl,
                    });
                } catch (err) {
                    console.log('Share canceled or failed:', err);
                }
            } else {
                // Fallback to copying URL to clipboard
                navigator.clipboard.writeText(targetUrl);
                alert('Link copied to clipboard! Share it with your friends.');
            }
        });
    }
});
