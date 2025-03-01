// navigation hide and Show
const navbar = document.getElementById('nav') || null;
if (navbar) {
    window.addEventListener('scroll', function() {
        const scroll = window.scrollY || document.documentElement.scrollTop;
        if (scroll > 50 && scroll < 610) {
            navbar.style.display = 'none';
        } else {
            navbar.style.display = 'grid';
            if (scroll > 610) {
                navbar.classList.add('nav');
            } else {
                navbar.classList.remove('nav');
            }
        }
    });
}

// smoothscroll
const smoothScrollLinks = document.querySelectorAll('.smoothscroll');

smoothScrollLinks.forEach(smoothScrollLink => {
    smoothScrollLink.addEventListener('click', event => {
        event.preventDefault();

        const targetId = smoothScrollLink.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        const offsetTop = targetElement.offsetTop;

        const scrollDuration = 800; // Adjust scroll duration here (in milliseconds)

        scrollToTarget(offsetTop, scrollDuration);
    });
});

const scrollToTarget = (targetPosition, duration) => {
    const start = window.scrollY;
    const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();

    const scroll = () => {
        const now = 'now' in window.performance ? performance.now() : new Date().getTime();
        const time = Math.min(1, ((now - startTime) / duration));

        window.scroll(0, Math.ceil((time * (targetPosition - start)) + start));

        if (window.scrollY === targetPosition) return;
        requestAnimationFrame(scroll);
    };

    scroll();
};
