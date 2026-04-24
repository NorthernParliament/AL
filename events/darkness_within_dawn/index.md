---
layout: event
title: "Тьма перед рассветом"
slug: darkness_within_dawn
chapters_count: 4
black_scene99:
  - "..."
white_scene99:
  - "..."
---

<div class="chapter" id="part1"> <!-- начало главы -->
<p class="title-1">Секретная операция</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg6.png" alt="">
{% include loc.html td_class="loc" text="Северный Парламент, военная гавань" %}
{% assign rows = site.data.darkness_within_dawn.part1.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg6.png" %}
{% include whitescreen.html lines=page.white_scene99 %}
{% assign rows = site.data.darkness_within_dawn.part1.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg6.png" %}
</div> <!-- конец главы -->

<div class="chapter" id="part2"> <!-- начало главы -->
<p class="title-1">Прошлое</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg153.png" alt="">
{% include loc.html td_class="loc" text="Зона контроля Железной Крови, внутри Зеркального моря" %}
{% assign rows = site.data.darkness_within_dawn.part2.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg153.png" %}
</div> <!-- конец главы -->

<div class="chapter" id="part3"> <!-- начало главы -->
<p class="title-1">Инцидент с помехами</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg6.png" alt="">
{% assign rows = site.data.darkness_within_dawn.part3.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg6.png" %}
</div> <!-- конец главы -->

<div class="chapter" id="part4"> <!-- начало главы -->
<p class="title-1">Искренность</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg2.png" alt="">
{% include loc.html td_class="loc" text="Северный Парламент - ???" %}
{% assign rows = site.data.darkness_within_dawn.part4.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg2.png" %}
</div> <!-- конец главы -->