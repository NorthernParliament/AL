document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector(".nav");
    // Собираем все главы в массив
    const chapters = Array.from(document.querySelectorAll(".chapter"));
    
    // 1. Изначально скрываем все главы
    chapters.forEach(ch => ch.style.display = 'none');

    // Функция для создания кнопок управления
    function createControls(currentIndex) {
        const container = document.createElement("div");
        container.className = "chapter-controls";
        
        // Кнопка "Предыдущая глава" (если это не первая глава)
        if (currentIndex > 0) {
            const prevBtn = document.createElement("button");
            prevBtn.textContent = "Предыдущая глава";
            prevBtn.onclick = () => openChapter(currentIndex - 1);
            container.appendChild(prevBtn);
        }
        
        // Кнопка "К выбору глав"
        const indexBtn = document.createElement("button");
        indexBtn.textContent = "К выбору глав";
        indexBtn.onclick = () => showNav();
        container.appendChild(indexBtn);
        
        // Кнопка "Следующая глава" (если это не последняя глава)
        if (currentIndex < chapters.length - 1) {
            const nextBtn = document.createElement("button");
            nextBtn.textContent = "Следующая глава";
            nextBtn.onclick = () => openChapter(currentIndex + 1);
            container.appendChild(nextBtn);
        }
        return container;
    }

   // Функция открытия конкретной главы
    function openChapter(index) {
        // Скрываем навигацию и все главы
        nav.style.display = 'none';
        chapters.forEach(ch => {
            ch.style.display = 'none';
            // Удаляем старые кнопки, чтобы они не дублировались
            const oldControls = ch.querySelectorAll('.chapter-controls');
            oldControls.forEach(c => c.remove());
        });
        
        // Показываем нужную главу
        const targetChapter = chapters[index];
        targetChapter.style.display = 'block';
        
        // НОВАЯ МАГИЯ: Принудительно ищем первый фон в открытой главе и ставим его
        const firstBgElement = targetChapter.querySelector('[data-bg]');
        if (firstBgElement) {
            const bgUrl = firstBgElement.getAttribute('data-bg');
            document.body.style.backgroundImage = `url('${bgUrl}')`;
        }
        
        // Внедряем кнопки управления в начало и в конец главы
        targetChapter.prepend(createControls(index));
        targetChapter.append(createControls(index));
        
        // Возвращаем пользователя на самый верх страницы
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Функция возврата в меню
    function showNav() {
        chapters.forEach(ch => ch.style.display = 'none');
        nav.style.display = 'grid'; // Возвращаем наш Grid из CSS
        document.body.style.backgroundImage = ''; // Сбрасываем фон на стандартный
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // 2. Перехватываем клики по картинкам в меню навигации
    const navLinks = document.querySelectorAll(".nav a");
    navLinks.forEach((link, idx) => {
        link.addEventListener("click", (e) => {
            e.preventDefault(); // Блокируем стандартный прыжок по ссылке
            openChapter(idx);
        });
    });

    // 3. Магия смены фона (Intersection Observer)
    const bgObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Если блок с диалогом попал в видимую зону экрана
            if (entry.isIntersecting) {
                const bgUrl = entry.target.getAttribute('data-bg');
                if (bgUrl) {
                    // Меняем фоновое изображение у body
                    document.body.style.backgroundImage = `url('${bgUrl}')`;
                }
            }
        });
    }, { 
        threshold: 0.3 // Срабатывает, когда видно хотя бы 30% блока диалога
    });

    // Натравливаем наблюдателя на все элементы, у которых есть атрибут data-bg
    document.querySelectorAll('[data-bg]').forEach(el => {
        bgObserver.observe(el);
    });
});

  document.addEventListener("DOMContentLoaded", function () {
  const backToTop = document.getElementById("floating-button");
 
  // Показать/скрыть кнопку при прокрутке страницы
  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 300) {
      backToTop.style.display = "block";
    } else {
      backToTop.style.display = "none";
    }
  });
 
  // Плавная прокрутка при клике на кнопку
  backToTop.addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
