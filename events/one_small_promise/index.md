---
layout: event
title: "Одно маленькое обещание"
slug: one_small_promise
chapters_count: 3
---

<div class="chapter" id="part1"> <!-- начало главы -->
<p class="title-1">Вылазка начинается</p>
{% assign rows = site.data.one_small_promise.part1.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" %}
</div> <!-- конец главы --> 

<div class="chapter" id="part2"> <!-- начало главы -->
<p class="title-1">После Первой Битвы</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg10.png" alt="">
{% assign rows = site.data.one_small_promise.part2.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg10.png" %}
</div> <!-- конец главы --> 

<div class="chapter" id="part3"> <!-- начало главы -->
<p class="title-1">Тьма</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg10.png" alt="">
{% assign rows = site.data.one_small_promise.part3.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg10.png" %}
</div> <!-- конец главы -->