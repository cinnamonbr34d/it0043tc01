

document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for menu links
    const menuLinks = document.querySelectorAll('.menu a');

    menuLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        });
    });

    // Image modal functionality
    var modal = document.getElementById("imageModal");
    var modalImg = document.getElementById("modalImage");
    var captionText = document.getElementById("caption");

    document.querySelectorAll('.show-image').forEach(item => {
        item.addEventListener('click', function(event) {
            event.preventDefault();
            var imgSrc = this.getAttribute('data-img');
            var imgCaption = this.getAttribute('data-caption');
            modal.style.display = "block";
            modalImg.src = imgSrc; // Path to your image
            captionText.innerHTML = imgCaption;
        });
    });

    var span = document.getElementsByClassName("close")[0];

    span.onclick = function() {
        modal.style.display = "none";
    };
});
