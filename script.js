// Sample JavaScript for interactivity

document.addEventListener("DOMContentLoaded", function() {
    const filterButtons = document.querySelectorAll(".filters button");
    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            alert(`Filter by ${button.textContent}`);
        });
    });
});


        // Slideshow Functionality
        let slideIndex = 0;
        showSlides();

        function showSlides() {
            let slides = document.getElementsByClassName("mySlides");
            let dots = document.getElementsByClassName("dot");
            for (let i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slideIndex++;
            if (slideIndex > slides.length) { slideIndex = 1 }
            for (let i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[slideIndex - 1].style.display = "block";
            dots[slideIndex - 1].className += " active";
            setTimeout(showSlides, 2000); // Change image every 2 seconds
        }

        // Dots Navigation for Slideshow
        const dots = document.querySelectorAll('.dot');
        dots.forEach(dot => {
            dot.addEventListener('click', function() {
                let slideNumber = parseInt(this.getAttribute('data-slide'));
                slideIndex = slideNumber;
                showSlides();
            });
        });

