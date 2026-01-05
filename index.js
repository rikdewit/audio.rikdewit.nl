function EaseInOut(t) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function EaseIn(t){
    return t * t;
}

document.addEventListener("DOMContentLoaded", function () {
    const titleElement = document.querySelector('.title');
    const subtitleElement = document.querySelector('.subtitle');
    const lineElement = document.querySelector('.line'); 
    const triggerElement = document.querySelector('.bars'); // Trigger element for the title


    const textAnimation = (element, trigger, moveMax) => {
        const rect = triggerElement.getBoundingClientRect();
        const windowTop = window.innerHeight;

        if (rect.top < trigger) {
            const animationProgress = 1 - (rect.top / trigger);
            const translate = EaseIn(animationProgress) * -1 * moveMax;

            element.style.transform = `translateY(${translate}px)`;
        } else {
            element.style.transform = `translateY(0px)`;
        }
    };

    function updatePositions() {
        textAnimation(titleElement, 110, 100); // Title parameters
        textAnimation(lineElement, 105, 110); // Line parameters
        textAnimation(subtitleElement, 98, 105); // Subtitle parameters
    }

    // Initial check
    updatePositions();
    
    // Add scroll event listener
    window.addEventListener('scroll', updatePositions);
});