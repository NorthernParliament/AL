---
layout: event
title: "Под Покровом Тумана"
slug: under_the_mist
chapters_count: 4
black_scene99:
  - "..."
---

<div class="chapter" id="part1"> <!-- начало главы -->
<p class="title-1">Передислокация</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg34.png" alt="">
{% include loc.html td_class="loc" text="Союз Орла — Штаб-квартира в Нью-Йорке. (Некоторое время назад)" %}
{% assign rows = site.data.under_the_mist.part1.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg34.png" %}
{% include blackscreen.html lines=page.black_scene99 %}
{% assign rows = site.data.under_the_mist.part1.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg34.png" %}
</div> <!-- конец главы -->

<div class="chapter" id="part2"> <!-- начало главы -->
<p class="title-1">Туман</p>
<img class="pict1 fog-effect" src="{{ site.baseurl }}/img/bg/bg40.png" alt="">
{% include loc.html td_class="loc" text="В открытом море к востоку от крепости ? В морском тумане" %}
{% assign rows = site.data.under_the_mist.part2.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg mist" bg_file="/img/bg/bg40.png" %}
</div> <!-- конец главы -->

<div class="chapter" id="part3"> <!-- начало главы -->
<p class="title-1">Дезориентация</p>
<img class="pict1 fog-effect" src="{{ site.baseurl }}/img/bg/bg40.png" alt="">
{% include loc.html td_class="loc" text="В открытом море к востоку от крепости? В морском тумане" %}
{% assign rows = site.data.under_the_mist.part3.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg mist" bg_file="/img/bg/bg40.png" %}
</div> <!-- конец главы -->

<div class="chapter" id="part4"> <!-- начало главы -->
<p class="title-1">Потерянные</p>
<img class="pict1 fog-effect" src="{{ site.baseurl }}/img/bg/bg24.png" alt="">
{% include loc.html td_class="loc" text="В открытом море к востоку от крепости? В морском тумане" %}
{% assign rows = site.data.under_the_mist.part4.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg mist" bg_file="/img/bg/bg24.png" %}
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg24.png" alt="">
{% assign rows = site.data.under_the_mist.part4.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg24.png" %}
<img class="pict1 fog-effect" src="{{ site.baseurl }}/img/bg/bg24.png" alt="">
{% assign rows = site.data.under_the_mist.part4.chapter3.rows %}
{% include dialog.html rows=rows bg_class="table-bg mist" bg_file="/img/bg/bg24.png" %}
<img class="pict1 fog-effect" src="{{ site.baseurl }}/img/bg/bg23.png" alt="">
{% include loc.html td_class="loc" text="Где-то в море к востоку от крепости — ???" %}
{% assign rows = site.data.under_the_mist.part4.chapter4.rows %}
{% include dialog.html rows=rows bg_class="table-bg mist" bg_file="/img/bg/bg23.png" %}
</div> <!-- конец главы -->