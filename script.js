document.addEventListener('DOMContentLoaded', function() {
    // Получаем элементы
    const aboutBtn = document.getElementById('aboutBtn');
    const collabBtn = document.getElementById('collabBtn');
    const aboutModal = document.getElementById('aboutModal');
    const collabModal = document.getElementById('collabModal');
    const closeButtons = document.querySelectorAll('.close');
    
    // Обо мне
    aboutBtn.addEventListener('click', function(e) {
        e.preventDefault();
        aboutModal.style.display = 'block';
    });
    
    // Сотрудничество
    collabBtn.addEventListener('click', function(e) {
        e.preventDefault();
        collabModal.style.display = 'block';
    });
    
    // Закрытие
    closeButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            aboutModal.style.display = 'none';
            collabModal.style.display = 'none';
        });
    });
    
    // Закрытие по клику вне окна
    window.addEventListener('click', function(e) {
        if (e.target === aboutModal) aboutModal.style.display = 'none';
        if (e.target === collabModal) collabModal.style.display = 'none';
    });
});