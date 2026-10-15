// ===== ГАЛЕРЕЯ ФОТО =====

document.addEventListener('DOMContentLoaded', function () {
    const track = document.querySelector('.gallery-track');
    if (!track) return; // если галереи на странице нет — выходим

    const images = track.querySelectorAll('img');
    const prevBtn = document.querySelector('.gallery-prev');
    const nextBtn = document.querySelector('.gallery-next');
    const dotsContainer = document.querySelector('.gallery-dots');

    let currentIndex = 0;
    const total = images.length;

    // Создаём точки-индикаторы
    images.forEach((_, i) => {
        const dot = document.createElement('span');
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
    });

    const dots = dotsContainer.querySelectorAll('span');

    // Переход к слайду
    function goToSlide(index) {
        currentIndex = (index + total) % total;
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === currentIndex);
        });
    }

    // Кнопки
    prevBtn.addEventListener('click', () => goToSlide(currentIndex - 1));
    nextBtn.addEventListener('click', () => goToSlide(currentIndex + 1));

    // Автоперелистывание каждые 4 секунды
    setInterval(() => goToSlide(currentIndex + 1), 4000);
});