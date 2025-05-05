document.addEventListener('DOMContentLoaded', function() {
    // Устанавливаем немецкий как язык по умолчанию
    setActiveLanguage('de');

    // Обработчики для кнопок переключения языка
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            setActiveLanguage(lang);
        });
    });
});

function setActiveLanguage(lang) {
    // 1. Обновляем активную кнопку
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`.lang-btn[data-lang="${lang}"]`).classList.add('active');

    // 2. Показываем нужную языковую секцию
    document.querySelectorAll('.lang-section').forEach(section => {
        section.classList.remove('active');
    });
    document.querySelector(`.lang-section[data-lang="${lang}"]`).classList.add('active');

    // 3. Обновляем атрибут lang у html
    document.documentElement.lang = lang;
}