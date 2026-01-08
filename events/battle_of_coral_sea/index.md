---
layout: event
title: "Битва за Коралловое море"
slug: battle_of_coral_sea
chapters_count: 3
black_scene:
  - "Часть 2 - Битва за Коралловое море"
black_scene1:
  - "Некоторое время назад, где-то в западных водах..."
---

<style>
h1.title { color: #9b5e5e;}
</style>

<div class="chapter" id="part1"> <!-- начало главы -->
<p class="title-1">Часть 2: Коралловое море</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/p/bg28.png" alt="">
{% assign rows = site.data.battle_of_coral_sea.part1.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" %}
{% include blackscreen.html lines=page.black_scene %}
</div> <!-- конец главы -->

<div class="chapter" id="part2"> <!-- начало главы -->
<p class="title-1">Часть 2: Увертюра контратаки</p>
{% include blackscreen.html lines=page.black_scene1 %}
{% assign rows = site.data.battle_of_coral_sea.part2.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" %}
<img class="pict1" src="{{ site.baseurl }}/img/bg/p/bg29.png" alt="">
{% assign rows = site.data.battle_of_coral_sea.part2.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg" %}
</div> <!-- конец главы -->

<div class="chapter" id="part3"> <!-- начало главы -->
<p class="title-1">Часть 2: Следующий Город</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg10.png" alt="">
{% assign rows = site.data.battle_of_coral_sea.part3.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg10.png" %}
</div> <!-- конец главы -->