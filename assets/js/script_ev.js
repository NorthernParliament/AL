document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector(".nav");
    const chapters = Array.from(document.querySelectorAll(".chapter"));
    
    // Создаем контейнер для плавающей панели глобально
    const fixedNav = document.createElement("div");
    fixedNav.className = "fixed-bottom-nav";
    fixedNav.style.display = "none"; // Скрываем, пока мы в меню выбора
    document.body.appendChild(fixedNav);
    
    // Изначально скрываем все главы
    chapters.forEach(ch => ch.style.display = 'none');

    // Функция обновления плавающей панели
    function updateFixedNav(currentIndex) {
        fixedNav.innerHTML = ""; // Очищаем старые кнопки
        
        // Кнопка "Предыдущая глава"
        if (currentIndex > 0) {
            const prevBtn = document.createElement("a");
            prevBtn.href = "#";
            prevBtn.className = "nav-btn";
            prevBtn.textContent = "Пред. глава";
            prevBtn.onclick = (e) => { e.preventDefault(); openChapter(currentIndex - 1); };
            fixedNav.appendChild(prevBtn);
        }
        
        // Кнопка "К выбору глав"
        const indexBtn = document.createElement("a");
        indexBtn.href = "#";
        indexBtn.className = "nav-btn";
        indexBtn.textContent = "К выбору глав";
        indexBtn.onclick = (e) => { e.preventDefault(); showNav(); };
        fixedNav.appendChild(indexBtn);
        
        // Кнопка "Следующая глава"
        if (currentIndex < chapters.length - 1) {
            const nextBtn = document.createElement("a");
            nextBtn.href = "#";
            nextBtn.className = "nav-btn";
            nextBtn.textContent = "След. глава";
            nextBtn.onclick = (e) => { e.preventDefault(); openChapter(currentIndex + 1); };
            fixedNav.appendChild(nextBtn);
        }
        
        // Кнопка "Наверх"
        const upBtn = document.createElement("a");
        upBtn.href = "#";
        upBtn.className = "nav-btn";
        upBtn.textContent = "Наверх";
        upBtn.onclick = (e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); };
        fixedNav.appendChild(upBtn);
        
        fixedNav.style.display = "flex"; // Показываем панель
    }

   // Функция открытия конкретной главы
    function openChapter(index) {
        nav.style.display = 'none';
        chapters.forEach(ch => ch.style.display = 'none');
        
        const targetChapter = chapters[index];
        targetChapter.style.display = 'block';
        
        const firstBgElement = targetChapter.querySelector('[data-bg]');
        if (firstBgElement) {
            const bgUrl = firstBgElement.getAttribute('data-bg');
            document.body.style.backgroundImage = `url('${bgUrl}')`;
        }
        
        // Обновляем данные кнопок и показываем панель
        updateFixedNav(index);
        
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Функция возврата в меню
    function showNav() {
        chapters.forEach(ch => ch.style.display = 'none');
        nav.style.display = 'grid'; 
        document.body.style.backgroundImage = ''; 
        
        // Прячем плавающую панель, когда читатель в главном меню
        fixedNav.style.display = 'none'; 
        
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Перехватываем клики по картинкам в меню навигации
    const navLinks = document.querySelectorAll(".nav a");
    navLinks.forEach((link, idx) => {
        link.addEventListener("click", (e) => {
            e.preventDefault(); 
            openChapter(idx);
        });
    });

    // Магия смены фона (Intersection Observer)
    const bgObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bgUrl = entry.target.getAttribute('data-bg');
                if (bgUrl) {
                    document.body.style.backgroundImage = `url('${bgUrl}')`;
                }
            }
        });
    }, { 
        threshold: 0.3 
    });

    document.querySelectorAll('[data-bg]').forEach(el => {
        bgObserver.observe(el);
    });
});