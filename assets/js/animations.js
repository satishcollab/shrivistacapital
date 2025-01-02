// Intersection Observer for scroll animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Animate elements when they come into view
document.addEventListener('DOMContentLoaded', () => {
    // Timeline animations
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = `all 0.5s ease ${index * 0.2}s`;
        observer.observe(item);
    });

    // Value cards animations
    const valueCards = document.querySelectorAll('.value-card');
    valueCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `all 0.5s ease ${index * 0.2}s`;
        observer.observe(card);
    });

    // Team member animations
    const teamMembers = document.querySelectorAll('.team-member');
    teamMembers.forEach((member, index) => {
        member.style.opacity = '0';
        member.style.transform = 'translateY(20px)';
        member.style.transition = `all 0.5s ease ${index * 0.2}s`;
        observer.observe(member);
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Parallax effect for about hero section
const aboutHero = document.querySelector('.about-hero');
if (aboutHero) {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        aboutHero.style.backgroundPositionY = `${scrolled * 0.5}px`;
    });
}

// Add animation class when elements come into view
document.querySelectorAll('.animate').forEach(element => {
    element.classList.add('animate');
});