---
layout: event
title: "Пепельный Симулякр"
slug: ashen_simulacrum
chapters_count: 33
black_scene:
  - "Быстрее..."
  - "Ещё быстрее, ещё быстрее, ещё быстрее!"
  - "..."
  - "Сердце ещё никогда не билось так неистово от тревоги."
  - "Почему именно сегодня?"
  - "Почему именно в этот момент?!"
  - "......"
  - "Прошу... только бы вы были в безопасности..."
black_scene1:
  - "Это место должно было быть самой безопасной крепостью в мире... Почему всё обернулось так?.."
  - "«Уходи скорее! Этот рубеж тоже скоро падет!»"
  - "Я не могу уйти..."
  - "...Я хочу быть рядом с ними до конца."
  - "«Наше обещание... Похоже, на этом всё и закончится»."
  - "..."
  - "......!"
black_scene2:
  - "[СРОЧНОЕ ОПОВЕЩЕНИЕ ВСЕМ ФЛОТАМ В ДАННОМ КВАДРАТЕ]"
  - "[В ДАННУЮ МИНУТУ ПОРТ НЬЮ-ЙОРК ПОДВЕРГАЕТСЯ МАССИРОВАННОЙ АТАКЕ ОСНОВНЫХ СИЛ СИРЕН!]"
  - "[ЛИНИЯ ОБОРОНЫ ЛОНГ-АЙЛЕНДА ПРОРВАНА, ШТАБ НЬЮ-ЙОРКА НА ГРАНИ ПАДЕНИЯ!]"
  - "[ПОВТОРЯЮ: ЛИНИЯ ЛОНГ-АЙЛЕНДА РАЗРУШЕНА, ШТАБ НЬЮ-ЙОРКА ПОЧТИ ЗАХВАЧЕН!]"
  - "[ВСЕМ ДОСТУПНЫМ ГРУППАМ, ПОЛУЧИВШИМ ЭТО СООБЩЕНИЕ — НЕМЕДЛЕННО ИДТИ НА ПОДМОГУ!]"
  - "[СРОЧНО НА ПОДМОГУ————!!]"
black_scene3:
  - "«Мы обнаружили Моби Дика вчера на рассвете, и вот наступил новый рассвет»."
  - "«Сегодняшний рассвет ничем не отличается от вчерашнего. С той лишь разницей, что теперь мы потеряли Моби Дика из виду»."
  - "«Разумеется, все понимают: мы с Моби Диком обязательно встретимся снова»."
  - "«Иначе эта история просто не сможет завершиться»."
  - "«А любая история, будь то комедия или трагедия, должна иметь свой финал»."
---

<div class="chapter" id="part1"> <!-- начало главы -->
<p class="title-1">Прибытие</p>
{% include blackscreen.html lines=page.black_scene %}
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg35.png" alt="">
{% assign rows = site.data.ashen_simulacrum.part1.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg35.png" %}
{% include loc.html td_class="loc" text="Союз Орла — Порт Ньюпорт" %}
{% assign rows = site.data.ashen_simulacrum.part1.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg35.png" %}
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg36.png" alt="">
{% assign rows = site.data.ashen_simulacrum.part1.chapter3.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg36.png" %}
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg35.png" alt="">
{% assign rows = site.data.ashen_simulacrum.part1.chapter4.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg35.png" %}
{% include blackscreen.html lines=page.black_scene1 %}
</div> <!-- конец главы -->

<div class="chapter" id="part2"> <!-- начало главы -->
<p class="title-1">Контратака</p>
{% assign rows = site.data.ashen_simulacrum.part2.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" %}
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg35.png" alt="">
{% assign rows = site.data.ashen_simulacrum.part2.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg35.png" %}
</div> <!-- конец главы -->

<div class="chapter" id="part3"> <!-- начало главы -->
<p class="title-1">Спасение</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg35.png" alt="">
{% assign rows = site.data.ashen_simulacrum.part3.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg35.png" %}
</div> <!-- конец главы -->

<div class="chapter" id="part4"> <!-- начало главы -->
<p class="title-1">Битва</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg35.png" alt="">
{% assign rows = site.data.ashen_simulacrum.part4.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg35.png" %}
</div> <!-- конец главы -->

<div class="chapter" id="part5"> <!-- начало главы -->
<p class="title-1">Сигнал</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg35.png" alt="">
{% assign rows = site.data.ashen_simulacrum.part5.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg35.png" %}
{% include blackscreen.html lines=page.black_scene2 %}
</div> <!-- конец главы -->

<div class="chapter" id="part6"> <!-- начало главы -->
<p class="title-1">Линия обороны Лонг-Айленда — Часть 1</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg35.png" alt="">
{% include loc.html td_class="loc" text="Союз Орла — Линия обороны Лонг-Айленда." %}
{% assign rows = site.data.ashen_simulacrum.part6.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg35.png" %}
</div> <!-- конец главы -->

<div class="chapter" id="part7"> <!-- начало главы -->
<p class="title-1">Линия обороны Лонг-Айленда — Часть 2</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg35.png" alt="">
{% assign rows = site.data.ashen_simulacrum.part7.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg35.png" %}
</div> <!-- конец главы -->

<div class="chapter" id="part8"> <!-- начало главы -->
<p class="title-1">Линия обороны в огне</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg35.png" alt="">
{% include loc.html td_class="loc" text="Союз Орла — Линия обороны Лонг-Айленда." %}
{% assign rows = site.data.ashen_simulacrum.part8.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg35.png" %}
</div> <!-- конец главы -->

<div class="chapter" id="part9"> <!-- начало главы -->
<p class="title-1">Конвергенция</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg35.png" alt="">
{% assign rows = site.data.ashen_simulacrum.part9.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg35.png" %}
</div> <!-- конец главы -->

<div class="chapter" id="part10"> <!-- начало главы -->
<p class="title-1">Задержка</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg35.png" alt="">
{% assign rows = site.data.ashen_simulacrum.part10.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg35.png" %}
</div> <!-- конец главы -->

<div class="chapter" id="part11"> <!-- начало главы -->
<p class="title-1">Поражение Пьюрифайер</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg35.png" alt="">
{% assign rows = site.data.ashen_simulacrum.part11.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg35.png" %}
</div> <!-- конец главы -->

<div class="chapter" id="part12"> <!-- начало главы -->
<p class="title-1">Штаб Квартира в Нью-Йорке - Часть 1</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg35.png" alt="">
{% include loc.html td_class="loc" text="Союз Орла — Порт Нью-Йорк. Незадолго до этого." %}
{% assign rows = site.data.ashen_simulacrum.part12.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg35.png" %}
</div> <!-- конец главы -->

<div class="chapter" id="part13"> <!-- начало главы -->
<p class="title-1">Штаб Квартира в Нью-Йорке - Часть 2</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg35.png" alt="">
{% assign rows = site.data.ashen_simulacrum.part13.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg35.png" %}
</div> <!-- конец главы -->

<div class="chapter" id="part14"> <!-- начало главы -->
<p class="title-1">Тест</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg35.png" alt="">
{% include loc.html td_class="loc" text="Союз Орла — Окраина порта Нью-Йорк. В настоящий момент." %}
{% assign rows = site.data.ashen_simulacrum.part14.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg35.png" %}
</div> <!-- конец главы -->

<div class="chapter" id="part15"> <!-- начало главы -->
<p class="title-1">Стадия</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg35.png" alt="">
{% assign rows = site.data.ashen_simulacrum.part15.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg35.png" %}
</div> <!-- конец главы -->

<div class="chapter" id="part16"> <!-- начало главы -->
<p class="title-1">Собрание</p>
{% include blackscreen.html lines=page.black_scene3 %}
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg24.png" alt="">
{% include loc.html td_class="loc" text="Зона Боевых Действий - Бермудский Треугольник" %}
{% assign rows = site.data.ashen_simulacrum.part16.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg24.png" %}
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg35.png" alt="">
{% include loc.html td_class="loc" text="Немного ранее. Порт Нью-Йорк" %}
{% assign rows = site.data.ashen_simulacrum.part16.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg35.png" %}
</div> <!-- конец главы -->

<div class="chapter" id="part17"> <!-- начало главы -->
<p class="title-1">Линия Фронта</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg24.png" alt="">
{% assign rows = site.data.ashen_simulacrum.part17.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg24.png" %}
</div> <!-- конец главы -->

<div class="chapter" id="part18"> <!-- начало главы -->
<p class="title-1">Марионетка</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg24.png" alt="">
{% assign rows = site.data.ashen_simulacrum.part18.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg24.png" %}
</div> <!-- конец главы -->

<div class="chapter" id="part19"> <!-- начало главы -->
<p class="title-1">Песнь ?</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg24.png" alt="">
{% assign rows = site.data.ashen_simulacrum.part19.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg24.png" %}
</div> <!-- конец главы -->

<div class="chapter" id="part20"> <!-- начало главы -->
<p class="title-1">Третий Флот - Часть 1</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg24.png" alt="">
{% include loc.html td_class="loc" text="Бермудский треугольник — Зона сражения Третьего флота" %}
{% assign rows = site.data.ashen_simulacrum.part20.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg24.png" %}
</div> <!-- конец главы -->

<div class="chapter" id="part21"> <!-- начало главы -->
<p class="title-1">Третий Флот - Часть 2</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg24.png" alt="">
{% assign rows = site.data.ashen_simulacrum.part21.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg24.png" %}
</div> <!-- конец главы -->

<div class="chapter" id="part22"> <!-- начало главы -->
<p class="title-1">Тайная Миссия</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg24.png" alt="">
{% include loc.html td_class="loc" text="Бермудский Треугольник - Центральный Сектор" %}
{% assign rows = site.data.ashen_simulacrum.part22.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg24.png" %}
</div> <!-- конец главы -->

<div class="chapter" id="part23"> <!-- начало главы -->
<p class="title-1">Враг</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg24.png" alt="">
{% assign rows = site.data.ashen_simulacrum.part23.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg24.png" %}
</div> <!-- конец главы -->

<div class="chapter" id="part24"> <!-- начало главы -->
<p class="title-1">Дежавю</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg24.png" alt="">
{% assign rows = site.data.ashen_simulacrum.part24.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg24.png" %}
{% include flash.html type="into-white" %}
{% assign rows = site.data.ashen_simulacrum.part24.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg" %}
{% include flash.html type="from-white" %}
{% assign rows = site.data.ashen_simulacrum.part24.chapter3.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg24.png" %}
</div> <!-- конец главы -->

<div class="chapter" id="part25"> <!-- начало главы -->
<p class="title-1">Четвёртый Флот - Часть 1</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg24.png" alt="">
{% include loc.html td_class="loc" text="Бермудский треугольник — Зона сражения Четвёртого флота" %}
{% assign rows = site.data.ashen_simulacrum.part25.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg24.png" %}
</div> <!-- конец главы -->

<div class="chapter" id="part26"> <!-- начало главы -->
<p class="title-1">Четвёртый Флот - Часть 2</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg24.png" alt="">
{% assign rows = site.data.ashen_simulacrum.part26.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg24.png" %}
</div> <!-- конец главы -->

<div class="chapter" id="part27"> <!-- начало главы -->
<p class="title-1">Око бури</p>
{% include flash.html type="into-white" %}
{% assign rows = site.data.ashen_simulacrum.part27.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" %}
{% include flash.html type="from-white" %}
{% assign rows = site.data.ashen_simulacrum.part27.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg24.png" %}
</div> <!-- конец главы -->

<div class="chapter" id="part28"> <!-- начало главы -->
<p class="title-1">Таинственная Персона</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg24.png" alt="">
{% assign rows = site.data.ashen_simulacrum.part28.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg24.png" %}
</div> <!-- конец главы -->

<div class="chapter" id="part29"> <!-- начало главы -->
<p class="title-1">Тлеющий Уголёк</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg24.png" alt="">
{% assign rows = site.data.ashen_simulacrum.part29.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg24.png" %}
<img class="pict1" src="{{ site.baseurl }}/img/bg/p/bg41.png" alt="">
{% assign rows = site.data.ashen_simulacrum.part29.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg24.png" %}
<img class="pict1" src="{{ site.baseurl }}/img/bg/p/bg42.png" alt="">
<img class="pict1" src="{{ site.baseurl }}/img/bg/p/bg43.png" alt="">
<img class="pict1" src="{{ site.baseurl }}/img/bg/p/bg44.png" alt="">
{% assign rows = site.data.ashen_simulacrum.part29.chapter3.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg24.png" %}
</div> <!-- конец главы -->

<div class="chapter" id="part30"> <!-- начало главы -->
<p class="title-1">Триумф ?</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg24.png" alt="">
{% assign rows = site.data.ashen_simulacrum.part30.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg24.png" %}
{% include choice_header.html %}
{% assign rows = site.data.ashen_simulacrum.part30.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg24.png" bg_overlay="blue-choise" %}
{% assign rows = site.data.ashen_simulacrum.part30.chapter3.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg24.png" bg_overlay="red-choise" %}
{% assign rows = site.data.ashen_simulacrum.part30.chapter4.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg24.png" %}
</div> <!-- конец главы -->

<div class="chapter" id="part31"> <!-- начало главы -->
<p class="title-1">Путешествие Домой</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg24.png" alt="">
{% assign rows = site.data.ashen_simulacrum.part31.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg24.png" %}
</div> <!-- конец главы -->

<div class="chapter" id="part32"> <!-- начало главы -->
<p class="title-1">Песочница</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg24.png" alt="">
{% assign rows = site.data.ashen_simulacrum.part32.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg24.png" %}
</div> <!-- конец главы -->

<div class="chapter" id="part33"> <!-- начало главы -->
<p class="title-1">Моби Дик</p>
{% include flash.html type="into-white" %}
{% assign rows = site.data.ashen_simulacrum.part33.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg memory-segment" %}
{% include flash.html type="from-white" %}
{% assign rows = site.data.ashen_simulacrum.part33.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg" %}
</div> <!-- конец главы -->