---
layout: event
title: "Пролог"
slug: prologue
chapters_count: 6
---
<div class="chapter" id="part1">
  <p class="title-1">Враги и Мороженое</p>
  <img class="pict" src="{{ site.baseurl }}/img/bg/bg10.png" alt="bg10">
  {% assign rows = site.data.prologue.part1.rows %}
  {% include dialog.html background="background1" rows=site.data.prologue.part1.rows %}
</div>

