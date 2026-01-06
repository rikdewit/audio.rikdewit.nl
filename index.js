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
    const triggerElement = document.querySelector('.sticky'); // Trigger element for the title
    const bars = document.querySelector('.bars');
    

    const textAnimation = (element, trigger, moveMax) => {
        const rect = triggerElement.getBoundingClientRect();

        if (rect.top < trigger) {
            const animationProgress = 1 - (rect.top / trigger);
            const translate = EaseIn(animationProgress) * -1 * moveMax;

            element.style.transform = `translateY(${translate}px)`;
        } else {
            element.style.transform = `translateY(0px)`;
        }
    };
    const logoResize = () => {
        const scrollpos = window.scrollY;
        const rect = triggerElement.getBoundingClientRect();

        if (rect.top <= 1) {
            // console.log(rect.top)

            bars.classList.add("headersmall");
        }else{
      bars.classList.remove("headersmall");
            
        }
    }

    function updatePositions() {
        textAnimation(titleElement, 110, 100); // Title parameters
        textAnimation(lineElement, 105, 110); // Line parameters
        textAnimation(subtitleElement, 98, 105); // Subtitle parameters
    }

    // Initial check
    updatePositions();
    logoResize();
    
    // Add scroll event listener
    window.addEventListener('scroll', updatePositions);
    window.addEventListener('scroll', logoResize);
});