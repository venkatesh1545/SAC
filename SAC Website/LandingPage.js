// JavaScript to toggle menu on mobile
const menuIcon = document.getElementById('menu-icon');
const navbarRight = document.getElementById('navbar-right');

menuIcon.addEventListener('click', function () {
    // Toggle the 'show' class to display mobile menu
    navbarRight.classList.toggle('show');
    // Toggle the 'change' class to change the menu icon to a cross
    menuIcon.classList.toggle('change');
});

let currentSlideIndex = 0;
const totalSlides = document.querySelectorAll('.frame').length;
const framesPerSlide = 4; // Number of frames to display per slide

function showFrames(slideIndex) {
    const frames = document.querySelectorAll('.frame');

    // Hide all frames
    frames.forEach((frame, index) => {
        frame.style.display = 'none';
    });

    // Show only the frames for the current slide
    for (let i = slideIndex * framesPerSlide; i < (slideIndex * framesPerSlide) + framesPerSlide; i++) {
        if (i < totalSlides) {
            frames[i].style.display = 'block';
        }
    }

    // Update dots
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.classList.remove('active');
        if (index === slideIndex) {
            dot.classList.add('active');
        }
    });
}

// Move to the next slide automatically
function nextSlide() {
    currentSlideIndex++;
    if (currentSlideIndex >= Math.ceil(totalSlides / framesPerSlide)) {
        currentSlideIndex = 0; // Reset to the first slide when reaching the end
    }
    showFrames(currentSlideIndex);
}

// Add dot click functionality
document.querySelectorAll('.dot').forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlideIndex = index;
        showFrames(currentSlideIndex);
    });
});

// Initial display of the first slide
showFrames(0);

// Auto-slide functionality (every 5 seconds)
setInterval(nextSlide, 5000);
