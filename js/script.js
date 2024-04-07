document.addEventListener('DOMContentLoaded', function () {
    const videosContainer = document.querySelector('.videos');
    const scrollButtons = document.querySelectorAll('.scroll-button');
    const videoWidth = 560; // Ширина одного відео
    const scrollDistance = 300; // Відстань прокрутки за раз

    let scrollPosition = 0; // Початкова позиція прокрутки

    // Функція для прокрутки вліво
    function scrollLeft() {
        scrollPosition -= scrollDistance;
        if (scrollPosition < 0) {
            scrollPosition = 0;
        }
        videosContainer.style.transform = `translateX(-${scrollPosition}px)`;
    }

    // Функція для прокрутки вправо
    function scrollRight() {
        scrollPosition += scrollDistance;
        const maxScroll = videosContainer.scrollWidth - videosContainer.clientWidth;
        if (scrollPosition > maxScroll) {
            scrollPosition = maxScroll;
        }
        videosContainer.style.transform = `translateX(-${scrollPosition}px)`;
    }

    // Додамо події на кнопки прокрутки
    scrollButtons.forEach(button => {
        button.addEventListener('click', function () {
            if (button.classList.contains('left')) {
                scrollLeft();
            } else {
                scrollRight();
            }
        });
    });
});
