/**
 * Counter Animation Script
 * Animates numbers from 0 to target value immediately on page load
 */

function animateCounters() {
    document.querySelectorAll('.metric-value').forEach(el => {
        const endValue = parseFloat(el.innerText.replace(/,/g, ''));
        const hasPlus = el.innerText.includes('+');
        el.setAttribute('data-target', el.innerText);
        el.innerText = '0';

        const duration = 2000;
        const startTime = performance.now();

        function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Ease out expo
            const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

            const currentValue = Math.floor(easeProgress * endValue);

            // Format with commas if needed
            if (endValue > 1000) {
                el.innerText = currentValue.toLocaleString();
            } else {
                el.innerText = currentValue + (hasPlus ? '+' : '');
            }

            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                // Ensure final value is exact
                el.innerText = el.getAttribute('data-target');
            }
        }

        requestAnimationFrame(update);
    });
}

document.addEventListener('DOMContentLoaded', animateCounters);

