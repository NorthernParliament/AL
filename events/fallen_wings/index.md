---
layout: event
title: "Падшие Крылья"
slug: fallen_wings
chapters_count: 13
black_scene:
  - "«…Я когда-то думала… что если мы одолеем всех врагов, наставивших на нас свои орудия… то сможем обрести хоть каплю покоя»."
  - "«Однако… будущее предало нас»."
  - "«Лица тех, кто преграждал нам путь, возникая один за другим… и исчезая один за другим… Я уже не могу их вспомнить»."
  - "«—— Пора снова выходить в бой, напарник»."
  - "«Этой ночью звезды сияют так же ярко, как и прежде»."
  - "—— Кодовое название операции: «Падшие Крылья»"
black_scene1:
  - "«Мы, люди, на самом деле — существа очень скромные и ничтожные»."
  - "«Однако в наших крошечных телах заключены бесконечно великие надежды и идеалы»."
  - "«Мы часто придаем своим надеждам и идеалам ту форму, которую желаем видеть сами. Мы хотим, чтобы они были вечными и могущественными»."
  - "«Настолько могущественными, чтобы они могли заменить наше материальное и мимолетное существование, став своего рода бесконечным духовным пристанищем»."
  - "«Именно в этом заключается смысл твоего имени»."
  - "«Но... если однажды мы, люди, отбросим свои самые гордые идеалы и даже встанем на путь, противоречащий им...»"
  - "«Будешь ли ты готова... помочь нам исправить это ошибочное будущее?»"
---

<div class="chapter" id="part1"> <!-- начало главы -->
<p class="title-1">Пролог</p>
{% include blackscreen.html lines=page.black_scene %}
<img class="pict1" src="{{ site.baseurl }}/img/bg/p/bg35.png" alt="">
{% assign rows = site.data.fallen_wings.part1.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" %}
</div> <!-- конец главы --> 

<div class="chapter" id="part2"> <!-- начало главы -->
<p class="title-1">Взрыв</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg10.png" alt="">
{% assign rows = site.data.fallen_wings.part2.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg10.png" %}
</div> <!-- конец главы -->

<div class="chapter" id="part3"> <!-- начало главы -->
<p class="title-1">Подготовка</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg10.png" alt="">
{% assign rows = site.data.fallen_wings.part3.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg10.png" %}
<img class="pict1" src="{{ site.baseurl }}/img/bg/p/bg36.png" alt="">
{% assign rows = site.data.fallen_wings.part3.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg" %}
</div> <!-- конец главы -->

<div class="chapter" id="part4"> <!-- начало главы -->
<p class="title-1">Сцена I</p>
{% assign rows = site.data.fallen_wings.part4.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" %}
</div> <!-- конец главы -->

<div class="chapter" id="part5"> <!-- начало главы -->
<p class="title-1">Исследование</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/p/bg36.png" alt="">
{% assign rows = site.data.fallen_wings.part5.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" %}
</div> <!-- конец главы -->

<div class="chapter" id="part6"> <!-- начало главы -->
<p class="title-1">Сцена II</p>
{% include divider.html %}
{% assign rows = site.data.fallen_wings.part6.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg memory-segment" %}
{% include divider.html %}
</div> <!-- конец главы -->

<div class="chapter" id="part7"> <!-- начало главы -->
<p class="title-1">Сцена III</p>
{% assign rows = site.data.fallen_wings.part7.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" %}
</div> <!-- конец главы -->

<div class="chapter" id="part8"> <!-- начало главы -->
<p class="title-1">Неопределённость</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg10.png" alt="">
{% assign rows = site.data.fallen_wings.part8.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg10.png" %}
</div> <!-- конец главы -->

<div class="chapter" id="part9"> <!-- начало главы -->
<p class="title-1">Сцена IV</p>
{% include divider.html %}
{% assign rows = site.data.fallen_wings.part6.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg memory-segment" %}
{% include divider.html %}
</div> <!-- конец главы -->

<div class="chapter" id="part10"> <!-- начало главы -->
<p class="title-1">Кризис</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg10.png" alt="">
{% assign rows = site.data.fallen_wings.part10.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg10.png" %}
<img class="pict1" src="{{ site.baseurl }}/img/bg/p/bg83.png" alt="">
{% assign rows = site.data.fallen_wings.part10.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg10.png" %}
{% include blackscreen.html lines=page.black_scene1 %}
</div> <!-- конец главы --> 

<div class="chapter" id="part11"> <!-- начало главы -->
<p class="title-1">Бездна</p>
{% assign rows = site.data.fallen_wings.part11.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" %}
</div> <!-- конец главы -->

<div class="chapter" id="part12"> <!-- начало главы -->
<p class="title-1">Встреча с Неизвестным</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg10.png" alt="">
{% assign rows = site.data.fallen_wings.part12.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg10.png" %}
</div> <!-- конец главы -->

<div class="chapter" id="part13"> <!-- начало главы -->
<p class="title-1">ЭКСТРА</p>
{% assign rows = site.data.fallen_wings.part13.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" %}
</div> <!-- конец главы -->