document.addEventListener('DOMContentLoaded', function() {
    // Устанавливаем язык по умолчанию (немецкий)
    const defaultLang = 'de';
    setActiveLanguage(defaultLang);
    
    // Обработчики для кнопок переключения языка
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            setActiveLanguage(lang);
            // Сохраняем выбор языка
            localStorage.setItem('preferredLang', lang);
        });
    });
    
    // Проверяем сохраненный язык
    const savedLang = localStorage.getItem('preferredLang');
    if (savedLang) {
        setActiveLanguage(savedLang);
    }
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
        section.style.display = 'none';
    });
    
    // 3. Показываем только выбранную языковую секцию
    const activeSection = document.querySelector(`.lang-section[data-lang="${lang}"]`);
    if (activeSection) {
        activeSection.style.display = 'block';
    }
    
    // 4. Обновляем атрибут lang у html
    document.documentElement.lang = lang;
    
    // 5. Обновляем мультиязычные элементы в боковой панели
    updateMultilingualElements(lang);
}

function updateMultilingualElements(lang) {
    // Обновляем заголовки в боковой панели
    document.querySelectorAll('[data-lang-title]').forEach(el => {
        el.textContent = el.getAttribute(`data-lang-${lang}`);
    });
    
    // Обновляем другие мультиязычные элементы при необходимости
    // ...
}