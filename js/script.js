document.addEventListener('DOMContentLoaded', function() {
    // По умолчанию активен немецкий
    setActiveLanguage('de');

    // Обработчики для кнопок
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            setActiveLanguage(lang);
        });
    });
});

function setActiveLanguage(lang) {
    // Убираем активные классы
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    document.querySelectorAll('.lang-section').forEach(section => {
        section.classList.remove('active');
    });

    // Активируем выбранный язык
    document.querySelector(`.lang-btn[data-lang="${lang}"]`).classList.add('active');
    document.querySelector(`.lang-section[data-lang="${lang}"]`).classList.add('active');
    
    // Меняем атрибут lang у html
    document.documentElement.lang = lang;
}