---
layout: event
title: "Ангел Ириса"
slug: angel_of_the_iris
chapters_count: 7
black_scene:
  - "Не так давно, еще до появления Багровой Оси и Доминиона Виши,"
  - "те, кто склонялся в молитве пред сиянием Ириса, маршировали под единым знаменем."
  - "На суше и на море они мирно сосуществовали, объединенные общей верой."
  - "Вот один день из тех спокойных времён..."
black_scene1:
  - "«Милосердный Господи, я возношу Тебе свою смиренную молитву...»"
  - "«Да озарит Твое сияние каждый уголок Ортодоксии...»"
  - "«Да защитит оно наш мир и нашу надежду...»"
  - "«И да сохранит наш тихий и безмятежный покой»."
---

<style>
  h1.title { color: #ccc;}
</style>

<div class="chapter" id="part1"> <!-- начало главы -->
<p class="title-1">Ангел Войны и Судья</p>
{% include blackscreen.html lines=page.black_scene %}
{% include blackscreen.html lines=page.black_scene1 %}
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg26.png" alt="">
{% include loc.html td_class="loc" text="Где-то в Ортодоксии Ирис..." %}
{% assign rows = site.data.angel_of_the_iris.part1.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg26.png" %}
</div> <!-- конец главы -->

<div class="chapter" id="part2"> <!-- начало главы -->
<p class="title-1">Принцесса-Рыцарь и её Сёстры</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg27.png" alt="">
{% assign rows = site.data.angel_of_the_iris.part2.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg27.png" %}
</div> <!-- конец главы -->

<div class="chapter" id="part3"> <!-- начало главы -->
<p class="title-1">Кардинал и Капер</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg3.png" alt="">
{% assign rows = site.data.angel_of_the_iris.part3.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg3.png" %}
</div> <!-- конец главы -->

<div class="chapter" id="part4"> <!-- начало главы -->
<p class="title-1">Тамплиер и Свита</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg3.png" alt="">
{% include loc.html td_class="loc" text="Место проведения приёма — Лобби." %}
{% assign rows = site.data.angel_of_the_iris.part4.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg3.png" %}
</div> <!-- конец главы -->

<div class="chapter" id="part5"> <!-- начало главы -->
<p class="title-1">Святая и Мастермайнд</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg3.png" alt="">
{% include loc.html td_class="loc" text="Место проведения приёма — Лобби." %}
{% assign rows = site.data.angel_of_the_iris.part5.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg3.png" %}
</div> <!-- конец главы -->

<div class="chapter" id="part6"> <!-- начало главы -->
<p class="title-1">Праздник</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg3.png" alt="">
{% assign rows = site.data.angel_of_the_iris.part6.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg3.png" %}
</div> <!-- конец главы -->

<div class="chapter" id="part7"> <!-- начало главы -->
<p class="title-1">Завершение дня</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg28.png" alt="">
{% assign rows = site.data.angel_of_the_iris.part7.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg28.png" %}
</div> <!-- конец главы -->