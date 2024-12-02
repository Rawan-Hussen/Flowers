function addToCart() {
    alert("Product added to cart!");
}

const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        const img = card.querySelector('img');
        img.style.opacity = 0.8; 
    });

    card.addEventListener('mouseleave', function() {
        const img = card.querySelector('img');
        img.style.opacity = 1; 
    });
});
