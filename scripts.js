document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.querySelector('.nav-toggle');
    const navRight = document.querySelector('.nav-right');

    navToggle.addEventListener('click', function () {
        navRight.classList.toggle('active');
    });
});


document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.scroll-container').forEach(container => {
        const prevButton = container.querySelector('.scroll-arrow.prev');
        const nextButton = container.querySelector('.scroll-arrow.next');
        const imageList = container.querySelector('.image-list');

        // Function to update arrow visibility based on scrollable content
        function updateArrowVisibility() {
            const isOverflowing = imageList.scrollWidth > imageList.clientWidth;
            prevButton.classList.toggle('show', isOverflowing && imageList.scrollLeft > 0);
            nextButton.classList.toggle('show', isOverflowing && imageList.scrollLeft < (imageList.scrollWidth - imageList.clientWidth));
        }

        // Scroll by button click
        prevButton.addEventListener('click', () => {
            imageList.scrollBy({
                left: -50, // Adjust scroll distance as needed
                behavior: 'smooth'
            });
            updateArrowVisibility();
        });

        nextButton.addEventListener('click', () => {
            imageList.scrollBy({
                left: 50, // Adjust scroll distance as needed
                behavior: 'smooth'
            });
            updateArrowVisibility();
        });

        // Initial visibility check
        updateArrowVisibility();

        // Optional: Update visibility on window resize
        window.addEventListener('resize', updateArrowVisibility);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('image-modal');
    const modalImage = document.getElementById('modal-image');
    const modalCaption = document.getElementById('modal-caption');
    const closeBtn = document.querySelector('.modal-close');

    // Handle image clicks
    document.querySelectorAll('.project-image').forEach(image => {
        image.addEventListener('click', () => {
            modal.style.display = 'flex';
            modalImage.src = image.src;
            modalCaption.textContent = image.alt;
        });
    });

    // Close modal
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Close modal if clicked outside the image
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});

