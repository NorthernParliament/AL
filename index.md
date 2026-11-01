---
layout: default
title: "Сюжет Azur Lane на русском"
---

<header class="main-header">
  <div class="header-content">
    <h1 class="tittle99">Сюжет <span class="title-accent">Azur Lane</span> на русском</h1>
 <div class="top-banner-container">
    <img src="{{ site.baseurl }}/img/main/head1.webp" alt="" class="main-banner">
</div>
<div class="content1"></div>
  </div>

<section class="welcome-briefing">
  <div class="briefing-content">
    <div class="briefing-label">Приветствую</div>
    <div class="briefing-text">
      На сайте представлен любительский перевод некоторых сюжетных ивентов из игры Azur Lane.<br><br> Перевод делается в свободное время, на безвозмездной основе, так что выходит нерегулярно. В переводе используется как английский так и китайский текст ивентов, так что содержимое может незначительно в деталях отличаться от того что представлено в английском клиенте игры для лучшего понимания.<br><br>Проект на  <a href="https://github.com/NorthernParliament/AL">Github</a>.<br> <br>Поддержать проект можно на <a href="https://boosty.to/alrusnet">Boosty</a>. Там же вы можете оставить комментарий или написать мне в личку по вопросам связанным с сайтом.<br>
    </div>
  </div>
</section>
  
  <div class="search-container">
    <input type="text" id="eventSearch" placeholder="Поиск по русскому и английскому названию..." oninput="filterEvents()">
  </div>
</header>

<div id="eventGrid">
  {% assign arc_names = site.data.events | map: "arc" | uniq | sort %}
  {% for arc_name in arc_names %}
    {% assign arc_events = site.data.events | where: "arc", arc_name %}
    <section class="arc-section">
      <h2 class="arc-heading">
        <button type="button" class="arc-header" aria-expanded="false">
          <span class="arc-header__name">
            {% if arc_name.size > 3 %}
              {{ arc_name | slice: 3, arc_name.size }}
            {% else %}
              {{ arc_name }}
            {% endif %}
          </span>
          <span class="arc-header__count" data-total="{{ arc_events.size }}">{{ arc_events.size }}</span>
          <span class="arc-chevron" aria-hidden="true"></span>
        </button>
      </h2>
      <div class="event-grid">
        {% for event in arc_events %}
          <a href="{{ site.baseurl }}/events/{{ event.slug }}/{% if event.anchor %}#{{ event.anchor }}{% endif %}" class="event-card">
            <div class="card-bg" style="background-image: url('{{ site.baseurl }}{{ event.image }}');"></div>
            <div class="card-content">
              <div class="card-titles">
                <span class="en-title">{{ event.title_en }}</span>
                <h2 class="ru-title">{{ event.title_ru }}</h2>
              </div>
            </div>
          </a>
        {% endfor %}
      </div>
    </section>
  {% endfor %}
</div>
<section class="welcome-briefing">
  <div class="briefing-content">
    <div class="briefing-label">Ивенты на старом движке, будут переделаны позднее</div>
    <div class="briefing-text">
 <a href="./summons_from_sakura_empire/index.html"><img src="{{ '/summons_from_sakura_empire/img/head.png' | relative_url }}" alt="Призыв из Империи Сакуры"></a>
 <a href="./dance_for_amahara/index.html"><img src="{{ '/dance_for_amahara/img/head.png' | relative_url }}" alt="Танец над Амахара"></a>
 <a href="./memories_in_echo/index.html"><img src="{{ '/memories_in_echo/img/head.png' | relative_url }}" alt="Воспоминания в Отголосках"></a>
 <a href="./to_a_brighter_world/index.html"><img src="{{ '/to_a_brighter_world/img/head.png' | relative_url }}" alt="Сделаем ярче этот Прекрасный Мир"></a>
    </div>
  </div>
</section>

<script>
(function () {
  var search = document.getElementById("eventSearch");
  var sections = document.querySelectorAll(".arc-section");

  function setOpen(section, open) {
    section.classList.toggle("is-open", open);
    var btn = section.querySelector(".arc-header");
    if (btn) btn.setAttribute("aria-expanded", open ? "true" : "false");
  }

  sections.forEach(function (section) {
    var btn = section.querySelector(".arc-header");
    if (!btn) return;
    btn.addEventListener("click", function () {
      if (search && search.value.trim()) return;
      var open = !section.classList.contains("is-open");
      section.dataset.userOpen = open ? "1" : "0";
      setOpen(section, open);
    });
  });

  window.filterEvents = function () {
    var q = (search && search.value ? search.value : "").trim().toLowerCase();
    var searching = q.length > 0;

    sections.forEach(function (section) {
      var hits = 0;
      section.querySelectorAll(".event-card").forEach(function (card) {
        var ru = (card.querySelector(".ru-title").textContent || "").toLowerCase();
        var en = (card.querySelector(".en-title").textContent || "").toLowerCase();
        var match = !searching || ru.indexOf(q) !== -1 || en.indexOf(q) !== -1;
        card.style.display = match ? "" : "none";
        if (match) hits += 1;
      });

      var countEl = section.querySelector(".arc-header__count");
      if (countEl) countEl.textContent = searching ? String(hits) : countEl.getAttribute("data-total");

      if (searching) {
        section.classList.toggle("is-search-hidden", hits === 0);
        setOpen(section, hits > 0);
      } else {
        section.classList.remove("is-search-hidden");
        setOpen(section, section.dataset.userOpen === "1");
      }
    });
  };
})();
</script>