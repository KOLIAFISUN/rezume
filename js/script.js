document.addEventListener('DOMContentLoaded', function() {
    // Инициализация
    initLanguageSwitcher();
    setupDocumentViewer();
});

function initLanguageSwitcher() {
    const defaultLang = 'de';
    setActiveLanguage(defaultLang);
    
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.dataset.lang;
            setActiveLanguage(lang);
            localStorage.setItem('preferredLang', lang);
        });
    });
}

function setActiveLanguage(lang) {
    // Обновляем активную кнопку
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    
    // Показываем нужную языковую секцию
    document.querySelectorAll('.lang-section').forEach(section => {
        section.classList.toggle('active', section.dataset.lang === lang);
    });
    
    // Обновляем атрибут lang у html
    document.documentElement.lang = lang;
}

function setupDocumentViewer() {
    // Можно добавить модальное окно для просмотра документов
    // Например, с использованием lightbox библиотеки
}