---
layout: event
title: "Пролог"
slug: prologue
chapters_count: 6
black_scene:
  - "Мир раскололся на части… Те, кто обрел силу, восстали, желая пойти наперекор потоку истории."
  - "Но они и не подозревают, что одна сила неизбежно притягивает другую, порождая еще более сокрушительные волны."
---

<style>
  h1.title { color: #a69932;}
</style>

<div class="chapter" id="part1"> <!-- начало главы -->
<p class="title-1">Враги и Мороженое</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg10.png" alt="">
{% assign rows = site.data.prologue.part1.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg10.png"  %}
</div> <!-- конец главы --> 

<div class="chapter" id="part2"> <!-- начало главы -->
<p class="title-1">Столкновение</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg10.png" alt="">
{% assign rows = site.data.prologue.part2.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg10.png"  %}
</div> <!-- конец главы --> 

<div class="chapter" id="part3"> <!-- начало главы -->
<p class="title-1">Слава Королевского Флота</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg10.png" alt="">
{% assign rows = site.data.prologue.part3.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg10.png"  %}
</div> <!-- конец главы --> 

<div class="chapter" id="part4"> <!-- начало главы -->
<p class="title-1">Конфликт</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg10.png" alt="">
{% assign rows = site.data.prologue.part4.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg10.png"  %}
</div> <!-- конец главы --> 

<div class="chapter" id="part5"> <!-- начало главы -->
<p class="title-1">Рейнский Бур</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg10.png" alt="">
{% assign rows = site.data.prologue.part5.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg10.png"  %}
</div> <!-- конец главы -->

<div class="chapter" id="part6"> <!-- начало главы -->
<p class="title-1">Конец и Начало</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/p/bg25.png" alt="">
{% assign rows = site.data.prologue.part6.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg10.png"  %}
<img class="pict1" src="{{ site.baseurl }}/img/bg/p/bg26.png" alt="">
{% assign rows = site.data.prologue.part6.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg10.png"  %}
{% assign rows = site.data.prologue.part6.chapter3.rows %}
{% include dialog.html rows=rows bg_class="table-bg" %}
{% include blackscreen.html lines=page.black_scene %}
</div> <!-- конец главы -->

