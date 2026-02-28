---
layout: default
title: "Azur Lane на русском"
---

<header class="main-header">
  <div class="header-content">
    <h1>Azur Lane на русском</h1>
    <p class="system-status">System Status: <span class="status-online">Online</span></p>
    <img src="{{ '/img/main/head1.png' | relative_url }}" alt="">
<div class="content1"></div>
  </div>

<section class="welcome-briefing">
  <div class="briefing-content">
    <div class="briefing-label">Приветствую</div>
    <div class="briefing-text">
      На сайте представлен любительский перевод некоторых сюжетных ивентов из игры Azur Lane. Перевод делается в свободное время, на безвозмездной основе, так что выходит нерегулярно и наполнен орфографическими ошибками, которые со временем будут исправлены. В переводе используется как английский так и китайский текст ивентов, так что содержимое может незначительно в деталях отличаться от того что представлено в английском клиенте игры для лучшего понимания. По вопросам писать в дискорд Seiffear.
      Используйте поиск ниже для навигации по хронологии.
    </div>
  </div>
</section>
  
  <div class="search-container">
    <input type="text" id="eventSearch" placeholder="Поиск операции по названию..." onkeyup="filterEvents()">
  </div>
</header>

<div id="eventGrid">
  {% assign arcs = site.data.events | group_by: "arc" %}
  
  {% for arc in arcs %}
    <section class="arc-section">
      <h2 class="arc-header">
  {% if arc.name.size > 3 %}
    {{ arc.name | slice: 3, arc.name.size }}
  {% else %}
    {{ arc.name }}
  {% endif %}
</h2>

<div class="event-grid">
        {% for event in arc.items %}
          <a href="{{ site.baseurl }}/events/{{ event.slug }}/{% if event.anchor %}#{{ event.anchor }}{% endif %}" class="event-card">
            <div class="card-bg" style="background-image: url('{{ site.baseurl }}{{ event.image }}');"></div>
            <div class="card-content">
              <div class="card-titles">
                <span class="en-title">{{ event.title_en }}</span>
                <h2 class="ru-title">{{ event.title_ru }}</h2>
              </div>
              <div class="card-footer">
                <p class="card-desc">{{ event.desc }}</p>
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
function filterEvents() {
  let input = document.getElementById('eventSearch').value.toLowerCase();
  let cards = document.getElementsByClassName('event-card');
  
  for (let i = 0; i < cards.length; i++) {
    let titleRu = cards[i].querySelector('.ru-title').innerText.toLowerCase();
    let titleEn = cards[i].querySelector('.en-title').innerText.toLowerCase();
    if (titleRu.includes(input) || titleEn.includes(input)) {
      cards[i].style.display = "";
    } else {
      cards[i].style.display = "none";
    }
  }
}
</script>