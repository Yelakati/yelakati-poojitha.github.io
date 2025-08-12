function scrollRow(button) {
    const container = button.parentElement.querySelector('.movie-container');
    const scrollAmount = 300;
    if (button.classList.contains('left')) {
        container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
}
