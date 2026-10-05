---
layout: event
title: "Эхо издалека"
slug: echoes_from_afar
chapters_count: 7
menu_bg: /img/bg/x/bg25.webp
---

<div class="chapter" id="part1"> <!-- начало главы -->
<p class="title-1">Во Дворце Дракона</p>
<img class="pict1" src="../../img/bg/s/bg8-1.webp" data-bg="../../img/bg/s/bg8-1.webp" alt="">
{% assign rows = site.data.echoes_from_afar.part1.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/s/bg8-1.webp" %}
</div> <!-- конец главы -->

<div class="chapter" id="part2"> <!-- начало главы -->
<p class="title-1">Скиталица</p>
<img class="pict1" src="../../img/bg/y/bg7.webp" data-bg="../../img/bg/y/bg7.webp" alt="">
{% include loc.html td_class="loc" text="Где-то в Северном Парламенте..." %}
{% assign rows = site.data.echoes_from_afar.part2.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/y/bg7.webp" %}
</div> <!-- конец главы -->

<div class="chapter" id="part3"> <!-- начало главы -->
<p class="title-1">Королевский экспресс</p>
<img class="pict1" src="../../img/bg/y/bg15.webp" data-bg="../../img/bg/y/bg15.webp" alt="">
{% assign rows = site.data.echoes_from_afar.part3.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/y/bg15.webp" %}
</div> <!-- конец главы -->

<div class="chapter" id="part4"> <!-- начало главы -->
<p class="title-1">Удар</p>
<img class="pict1" src="../../img/bg/x/bg25.webp" data-bg="../../img/bg/x/bg25.webp" alt="">
{% assign rows = site.data.echoes_from_afar.part4.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/x/bg25.webp" %}
<img class="pict1" src="../../img/bg/x/bg19.webp" data-bg="../../img/bg/x/bg19.webp" alt="">
{% include loc.html td_class="loc" text="Где-то в неизвестном месте..." %}
{% assign rows = site.data.echoes_from_afar.part4.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/x/bg19.webp" %}
<img class="pict1" src="../../img/bg/z/bg8-1.webp" data-bg="../../img/bg/z/bg8-1.webp" alt="">
{% include loc.html td_class="loc" text="??? — Временная база Пепла" %}
{% assign rows = site.data.echoes_from_afar.part4.chapter3.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/z/bg8-1.webp" %}
</div> <!-- конец главы -->

<div class="chapter" id="part5"> <!-- начало главы -->
<p class="title-1">Ограниченная помощь</p>
<img class="pict1" src="../../img/bg/y/bg3.webp" data-bg="../../img/bg/y/bg3.webp" alt="">
{% assign rows = site.data.echoes_from_afar.part5.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/y/bg3.webp" %}
{% include break_dark.html %}
<img class="pict1" src="../../img/bg/x/bg23.webp" data-bg="../../img/bg/x/bg23.webp" alt="">
{% assign rows = site.data.echoes_from_afar.part5.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/x/bg23.webp" %}
</div> <!-- конец главы -->

<div class="chapter" id="part6"> <!-- начало главы -->
<p class="title-1">Мост Смерти</p>
<img class="pict1" src="../../img/bg/z/bg6-1.webp" data-bg="../../img/bg/z/bg6-1.webp" alt="">
{% assign rows = site.data.echoes_from_afar.part6.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/z/bg6-1.webp" %}
</div> <!-- конец главы -->

<div class="chapter" id="part7"> <!-- начало главы -->
<p class="title-1">Межзвездный сон</p>
<img class="pict1" src="../../img/bg/bg10.webp" data-bg="../../img/bg/bg10.webp" alt="">
{% include loc.html td_class="loc" text="Ортодоксия Ирис — Конференц-зал" %}
{% assign rows = site.data.echoes_from_afar.part7.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg10.webp" %}
{% include choice_header.html %}
{% assign rows = site.data.echoes_from_afar.part7.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg10.webp" bg_overlay="blue-choise" %}
{% assign rows = site.data.echoes_from_afar.part7.chapter3.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg10.webp" bg_overlay="red-choise" %}
{% assign rows = site.data.echoes_from_afar.part7.chapter4.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg10.webp" %}
{% include break_dark.html %}
{% assign rows = site.data.echoes_from_afar.part7.chapter5.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg10.webp" %}
{% include break_light.html %}
<img class="pict1" src="../../img/bg/c/bg4.webp" data-bg="../../img/bg/c/bg4.webp" alt="">
{% assign rows = site.data.echoes_from_afar.part7.chapter6.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/c/bg4.webp" %}
{% include break_light.html %}
{% assign rows = site.data.echoes_from_afar.part7.chapter7.rows %}
{% include dialog.html rows=rows bg_class="table-bg memory-segment" bg_file="/img/bg/c/bg4.webp" %}
{% include break_light.html %}
{% assign rows = site.data.echoes_from_afar.part7.chapter8.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/c/bg4.webp" %}
{% include choice_header.html %}
{% assign rows = site.data.echoes_from_afar.part7.chapter9.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/c/bg4.webp" bg_overlay="blue-choise" %}
{% assign rows = site.data.echoes_from_afar.part7.chapter10.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/c/bg4.webp" bg_overlay="red-choise" %}
{% assign rows = site.data.echoes_from_afar.part7.chapter11.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/c/bg4.webp" bg_overlay="yellow-choise" %}
{% assign rows = site.data.echoes_from_afar.part7.chapter12.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/c/bg4.webp" bg_overlay="sea-choise" %}
{% assign rows = site.data.echoes_from_afar.part7.chapter13.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/c/bg4.webp" %}
{% include break_light.html %}
{% assign rows = site.data.echoes_from_afar.part7.chapter14.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/c/bg4.webp" %}
</div> <!-- конец главы -->

