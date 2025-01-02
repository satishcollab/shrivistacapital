document.addEventListener('DOMContentLoaded', () => {
    const categoryCards = document.querySelectorAll('.category-card');
    const serviceDetails = document.getElementById('serviceDetails');
    let activeService = null;

    // Service card click handler
    categoryCards.forEach(card => {
        card.addEventListener('click', () => {
            const serviceId = card.dataset.service;
            showServiceDetails(serviceId);
            highlightActiveCard(card);
        });
    });

    function showServiceDetails(serviceId) {
        // Hide previously active service
        if (activeService) {
            document.getElementById(activeService).style.display = 'none';
        }

        // Show new service
        const serviceContent = document.getElementById(serviceId);
        serviceDetails.style.display = 'block';
        serviceContent.style.display = 'block';
        activeService = serviceId;

        // Smooth scroll to details
        serviceDetails.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    function highlightActiveCard(activeCard) {
        // Remove highlight from all cards
        categoryCards.forEach(card => {
            card.classList.remove('active');
        });

        // Add highlight to active card
        activeCard.classList.add('active');
    }

    // Animate stats when in view
    const stats = document.querySelectorAll('.stat-number');
    
    const animateStats = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const value = parseInt(target.dataset.value);
                animateValue(target, 0, value, 2000);
                observer.unobserve(target);
            }
        });
    };

    const statsObserver = new IntersectionObserver(animateStats, {
        threshold: 0.5
    });

    stats.forEach(stat => statsObserver.observe(stat));

    // Number animation function
    function animateValue(element, start, end, duration) {
        let current = start;
        const range = end - start;
        const increment = end > start ? 1 : -1;
        const stepTime = Math.abs(Math.floor(duration / range));
        
        const timer = setInterval(() => {
            current += increment;
            element.textContent = current;
            if (current === end) {
                clearInterval(timer);
            }
        }, stepTime);
    }

    // Process steps animation
    const processSteps = document.querySelectorAll('.process-step');
    
    const animateProcessSteps = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    };

    const processObserver = new IntersectionObserver(animateProcessSteps, {
        threshold: 0.2
    });

    processSteps.forEach(step => processObserver.observe(step));
});

// Handle service category hover effects
const categoryCards = document.querySelectorAll('.category-card');

categoryCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        const icon = card.querySelector('.category-icon svg');
        if (icon) {
            icon.style.color = 'var(--primary-600)';
        }
    });
    card.addEventListener('mouseleave', () => {
        const icon = card.querySelector('.category-icon svg');
        if (icon) {
            icon.style.color = '';
        }
    });
});
