/**
 * Counter Animation Script
 * Animates numeric .metric-value elements from 0 to target on page load.
 * Non-numeric values (e.g. "v9.9.7", "<1.5s") are left untouched — parseFloat
 * would yield NaN and the element would display "NaN" mid-animation.
 * Respects prefers-reduced-motion: values render instantly, never stuck at 0.
 */

function animateCounters() {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    document.querySelectorAll('.metric-value').forEach(el => {
        const finalText = el.innerText;
        const endValue = parseFloat(finalText.replace(/,/g, ''));

        // Skip non-numeric metrics and skip animation entirely under reduced motion
        if (!Number.isFinite(endValue) || !/^\d/.test(finalText.trim()) || reducedMotion) {
            return;
        }

        const hasPlus = finalText.includes('+');
        el.setAttribute('data-target', finalText);
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
