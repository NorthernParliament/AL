---
layout: event
title: "Серебряные Архивы"
slug: silver_archives
chapters_count: 4
black_scene:
  - "Проверка полномочий..."
  - "CV-3 —— Саратога —— Уровень доступа —— II"
  - "Проверка полномочий завершена."
  - "Анализ данных..."
  - "Воспроизведение архивной записи..."
---

  <div class="chapter" id="part1"> <!-- начало главы -->
  <p class="title-1">Запись в Архиве I</p>
  {% include blackscreen.html lines=page.black_scene %}
  {% assign rows = site.data.silver_archives.part1.chapter1.rows %}
  {% include dialog.html rows=rows bg_class="table-bg" %}
  </div> <!-- конец главы --> 

  <div class="chapter" id="part2"> <!-- начало главы -->
  <p class="title-1">Запись в Архиве II</p>
  {% include blackscreen.html lines=page.black_scene %}
  {% assign rows = site.data.silver_archives.part2.chapter1.rows %}
  {% include dialog.html rows=rows bg_class="table-bg" %}
  </div> <!-- конец главы -->

  <div class="chapter" id="part3"> <!-- начало главы -->
  <p class="title-1">Запись в Архиве III</p>
  {% include blackscreen.html lines=page.black_scene %}
  {% assign rows = site.data.silver_archives.part3.chapter1.rows %}
  {% include dialog.html rows=rows bg_class="table-bg" %}
  </div> <!-- конец главы -->

  <div class="chapter" id="part4"> <!-- начало главы -->
  <p class="title-1">Запись в Архиве IV</p>
  {% include blackscreen.html lines=page.black_scene %}
  {% assign rows = site.data.silver_archives.part4.chapter1.rows %}
  {% include dialog.html rows=rows bg_class="table-bg" %}
  </div> <!-- конец главы -->