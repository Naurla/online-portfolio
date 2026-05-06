// Handle Loader Removal on Window Load
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    const body = document.body;
    
    // Adding a small delay (e.g., 600ms) to ensure everything renders smoothly
    setTimeout(() => {
        loader.style.opacity = '0';
        loader.style.visibility = 'hidden';
        body.classList.remove('loading');
    }, 600);
});

// Smooth Scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Intersection Observer for Fade-In Animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Stop observing once animated
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(element => {
    observer.observe(element);
});

// Trigger animations for elements immediately in view right after load
setTimeout(() => {
    document.querySelectorAll('.fade-in').forEach(element => {
        const rect = element.getBoundingClientRect();
        if(rect.top < window.innerHeight) {
            element.classList.add('visible');
        }
    });
}, 800); // Trigger slightly after loader fades