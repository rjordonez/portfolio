window.addEventListener('scroll', function () {
    const header = document.querySelector('.header');
    const arrowButton = document.querySelector('.arrow-button');
    const section2 = document.querySelector('.section2');
    const section2Top = section2.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    // Calculate the threshold for when 90% of the viewport is within the white section
    const threshold = windowHeight * 0.05;
    if (section2Top < threshold) {
        header.classList.add('black-images');
    } else {
        header.classList.remove('black-images');
    }

});

let topButton = document.getElementById("topButton");
let section3 = document.querySelector('.section3');

// Function to check if the user has scrolled 90% of section 3
function checkSection3Scroll() {
    let rect = section3.getBoundingClientRect();
    let windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    let sectionHeight = section3.offsetHeight;
    let scrolledHeight = windowHeight - rect.top;
    return scrolledHeight >= sectionHeight * 0.8;
}

// When the user scrolls, check if they have scrolled 90% of section 3
window.onscroll = function () {
    if (checkSection3Scroll()) {
        topButton.classList.add("show");
    } else {
        topButton.classList.remove("show");
    }
};
window.addEventListener('scroll', function () {
    const header = document.querySelector('.header');
    const arrowButton = document.querySelector('.arrow-button');
    const section2 = document.querySelector('.section2');
    const section2Top = section2.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    // Calculate the threshold for when 90% of the viewport is within the white section
    const threshold = windowHeight * 0.95;
    if (section2Top < threshold) {
        arrowButton.classList.add('black-images2');
    } else {
        arrowButton.classList.remove('black-images2');
    }

});
document.addEventListener('DOMContentLoaded', () => {
    const arrowButton = document.getElementById('arrowButton');
    const sections = document.querySelectorAll('.section');
    const totalPages = sections.length;
    let currentPage = 0;

    arrowButton.addEventListener('click', () => {
        if (currentPage < totalPages - 1) {
            currentPage++;
            sections[currentPage].scrollIntoView({ behavior: 'smooth' });
        } else {
            // Scroll to the bottom of the last section
            window.scrollTo({
                top: document.body.scrollHeight,
                behavior: 'smooth'
            });
        }

        // Check if we're on the last page and handle the button visibility
        if (currentPage === totalPages - 1) {
            const lastSection = sections[totalPages - 1];
            const lastSectionHeight = lastSection.offsetHeight;
            const lastSectionBottom = lastSection.getBoundingClientRect().bottom + window.scrollY;

            // Check if the current scroll position is within the last 5% of the last section
            if (window.scrollY + window.innerHeight > lastSectionBottom - lastSectionHeight * 0.05) {
                arrowButton.classList.add('hidden');
            } else {
                arrowButton.classList.remove('hidden');
            }
        }
    });

    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY + window.innerHeight;
        const lastSection = sections[totalPages - 1];
        const lastSectionTop = lastSection.getBoundingClientRect().top + window.scrollY;
        const lastSectionHeight = lastSection.offsetHeight;
        const lastSectionThreshold = lastSectionTop + (lastSectionHeight * 0.95);

        // Show the arrow button when not within the last 5% of the last section
        if (scrollPosition < lastSectionThreshold) {
            arrowButton.classList.remove('hidden');
        } else {
            arrowButton.classList.add('hidden');
        }

        // Update currentPage based on the visible section
        sections.forEach((section, index) => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                currentPage = index;
            }
        });
    });
});


window.addEventListener('scroll', function () {
    const header = document.querySelector('.arrow-button');

    const section2 = document.querySelector('.section2');
    const section2Top = section2.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    // Calculate the threshold for when 90% of the viewport is within the white section
    const threshold = windowHeight * 0.05;

    if (section2Top < threshold) {
        header.classList.add('black-images');
    } else {
        header.classList.remove('black-images');
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.getElementById("typed-text");
    const firstPart = "Hi my name is Rex!";
    const secondPart = "I'm a ";
    const roles = ["founder.", "software engineer.", "student."];
    let currentRoleIndex = 0;
    let fullText = firstPart + "<br>" + secondPart + roles[currentRoleIndex];
    let index = 0;
    const typingSpeed = 60; // Typing speed in milliseconds
    const deletingSpeed = 30; // Deleting speed in milliseconds
    const delayBetweenTexts = 1000; // Delay before starting to delete and type new text
    let isDeleting = false;

    function typeWriter() {
        if (isDeleting) {
            if (index > firstPart.length + "<br>".length + secondPart.length) {
                textElement.innerHTML = fullText.substring(0, index - 1);
                index--;
                setTimeout(typeWriter, deletingSpeed);
            } else {
                isDeleting = false;
                currentRoleIndex = (currentRoleIndex + 1) % roles.length;
                fullText = firstPart + "<br>" + secondPart + roles[currentRoleIndex];
                setTimeout(typeWriter, delayBetweenTexts);
            }
        } else {
            if (index < fullText.length) {
                textElement.innerHTML = fullText.substring(0, index + 1);
                index++;
                setTimeout(typeWriter, typingSpeed);
            } else {
                setTimeout(() => {
                    isDeleting = true;
                    setTimeout(typeWriter, delayBetweenTexts);
                }, delayBetweenTexts);
            }
        }
    }

    typeWriter();
});

document.addEventListener('DOMContentLoaded', () => {
    const rightImage = document.getElementById('rightImage');
    const iconContainer = document.getElementById('iconContainer');
    const icons = document.querySelectorAll('.icon');

    rightImage.addEventListener('click', () => {
        if (iconContainer.style.display === 'none' || iconContainer.style.display === '') {
            iconContainer.style.display = 'flex';
            setTimeout(() => {
                icons.forEach((icon, index) => {
                    setTimeout(() => {
                        icon.classList.add('show');
                    }, index * 100); // staggered appearance
                });
            }, 10); // slight delay to trigger the transition
        } else {
            icons.forEach((icon, index) => {
                setTimeout(() => {
                    icon.classList.remove('show');
                }, index * 100); // staggered disappearance
            });
            setTimeout(() => {
                iconContainer.style.display = 'none';
            }, icons.length * 100 + 300); // wait for the transitions to end before hiding the container
        }
    });
});
document.getElementById('rightImage').addEventListener('click', function () {
    if (window.innerWidth <= 500) {
        const hotbarMenu = document.getElementById('hotbarMenu');
        hotbarMenu.style.display = 'flex';
    }
});

document.getElementById('hotbarMenu').addEventListener('click', function () {
    this.style.display = 'none';
});
topButton.onclick = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    topButton.classList.remove("show");
};