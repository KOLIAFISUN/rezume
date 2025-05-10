document.addEventListener('DOMContentLoaded', function() {
    // Устанавливаем язык по умолчанию (немецкий)
    const defaultLang = 'de';
    
    // Проверяем сохраненный язык
    const savedLang = localStorage.getItem('preferredLang');
    const initialLang = savedLang || defaultLang;
    
    setActiveLanguage(initialLang);

    // Обработчики для кнопок переключения языка
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            setActiveLanguage(lang);
            // Сохраняем выбор языка
            localStorage.setItem('preferredLang', lang);
        });
    });
});

function setActiveLanguage(lang) {
    // 1. Обновляем активную кнопку
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });
    
    // 2. Скрываем все языковые секции
    document.querySelectorAll('.lang-section').forEach(section => {
        section.classList.remove('active');
    });
    
    // 3. Показываем только выбранную языковую секцию
    const activeSection = document.querySelector(`.lang-section[data-lang="${lang}"]`);
    if (activeSection) {
        activeSection.classList.add('active');
    }
    
    // 4. Обновляем атрибут lang у html
    document.documentElement.lang = lang;
}