---
layout: event
title: "Письма и Поездки"
slug: letters_and_travels
chapters_count: 4
black_scene:
  - "Случайное путешествие"
  - "1 - Праздник"
black_scene1:
  - "Случайное путешествие"
  - "2 - Забытье"
black_scene2:
  - "Случайное путешествие"
  - "3 - Безисходность"
black_scene3:
  - "Случайное путешествие"
  - "4 - Выбор"
black_scene99:
  - "..."
white_scene99:
  - "..."
---

<div class="chapter" id="part1"> <!-- начало главы -->
<p class="title-1">Праздник</p>
{% include blackscreen.html lines=page.black_scene %}
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg70.png" alt="">
{% include loc.html td_class="loc" text="Скапа-Флоу · Площадь для выступлений" %}
{% assign rows = site.data.letters_and_travels.part1.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg70.png"  %}
{% include blackscreen.html lines=page.black_scene99 %}
{% include loc.html td_class="loc" text="Скапа-Флоу · Причал" %}
{% assign rows = site.data.letters_and_travels.part1.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg70.png"  %}
{% include blackscreen.html lines=page.black_scene99 %}
{% include loc.html td_class="loc" text="Некоторое время спустя" %}
{% assign rows = site.data.letters_and_travels.part1.chapter3.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg70.png"  %}
</div> <!-- конец главы -->

<div class="chapter" id="part2"> <!-- начало главы -->
<p class="title-1">Забытье</p>
{% include blackscreen.html lines=page.black_scene1 %}
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg22-1.png" alt="">
{% include loc.html td_class="loc" text="Скапа-Флоу · Где-то на базе" %}
{% assign rows = site.data.letters_and_travels.part2.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg22-1.png"  %}
</div> <!-- конец главы -->

<div class="chapter" id="part3"> <!-- начало главы -->
<p class="title-1">Безисходность</p>
{% include blackscreen.html lines=page.black_scene2 %}
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg22-1.png" alt="">
{% include loc.html td_class="loc" text="Скапа-Флоу · Где-то на базе" %}
{% assign rows = site.data.letters_and_travels.part3.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg22-1.png"  %}
</div> <!-- конец главы -->

<div class="chapter" id="part4"> <!-- начало главы -->
<p class="title-1">Выбор</p>
{% include blackscreen.html lines=page.black_scene3 %}
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg22-1.png" alt="">
{% include loc.html td_class="loc" text="Скапа-Флоу · Где-то на базе" %}
{% assign rows = site.data.letters_and_travels.part4.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg22-1.png"  %}
</div> <!-- конец главы -->