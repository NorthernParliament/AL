---
layout: event
title: "Интерлюдия иллюзий"
slug: interlude_of_illusions
menu_cards:
  - img: "menu.png"
    from: 1
    to: 1
  - img: "menu1.png"
    from: 2
    to: 2
  - img: "menu.png"
    from: 3
    to: 9
  - img: "menu1.png"
    from: 10
    to: 10
chapters:
  - "Сон музыканта"
  - "Официальное приглашение"
  - "Непринуждённый обед"
  - "Мирная Интерлюдия"
  - "Лицом к лицу"
  - "Музыка в ночи"
  - "Секрет Базилики"
  - "ЕЁ сон"
  - "Прекрасный день"
  - "Ещё один прекрасный день"
menu_bg: /img/bg/i/bg10.webp
---

<div class="chapter" id="part1"> <!-- начало главы -->
<p class="title-1">Сон музыканта</p>
<img class="pict1" src="../../img/bg/z/bg8-1.webp" data-bg="../../img/bg/z/bg8-1.webp" alt="">
{% assign rows = site.data.interlude_of_illusions.part1.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/z/bg8-1.webp" %}
{% include break_light.html %}
<img class="pict1" src="../../img/bg/bg3.webp" data-bg="../../img/bg/bg3.webp" alt="">
{% assign rows = site.data.interlude_of_illusions.part1.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg3.webp" %}
{% include break_dark.html %}
<img class="pict1" src="../../img/bg/i/bg10.webp" data-bg="../../img/bg/i/bg10.webp" alt="">
{% include loc.html td_class="loc" text="Мон-Сен-Мишель — Базилика" %}
{% assign rows = site.data.interlude_of_illusions.part1.chapter3.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/i/bg10.webp" %}
{% include break_dark.html %}
{% include location.html lines=site.data.interlude_of_illusions.scenes.black_scene %}
</div> <!-- конец главы -->

<div class="chapter" id="part2"> <!-- начало главы -->
<p class="title-1">Официальное приглашение</p>
{% include location.html lines=site.data.interlude_of_illusions.scenes.black_scene1 %}
<img class="pict1" src="../../img/bg/y/bg37.webp" data-bg="../../img/bg/y/bg37.webp" alt="">
{% assign rows = site.data.interlude_of_illusions.part2.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/y/bg37.webp" %}
{% include break_dark.html %}
<div class="image-overlay-container">
    <img class="base-image pict1" src="../../img/bg/bg10-2.webp" alt="">
    <img class="overlay-layer pict1" src="/img/bg/bgm.png" alt="">
</div>
{% include loc.html td_class="loc" text="23 июля — Кабинет" %}
{% assign rows = site.data.interlude_of_illusions.part2.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg10-2.webp" %}
{% include break_dark.html %}
<img class="pict1" src="../../img/bg/y/bg37.webp" data-bg="../../img/bg/y/bg37.webp" alt="">
{% include loc.html td_class="loc" text="Личный вагон Командира — Настоящее время" %}
{% assign rows = site.data.interlude_of_illusions.part2.chapter3.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/y/bg37.webp" %}
</div> <!-- конец главы -->

<div class="chapter" id="part3"> <!-- начало главы -->
<p class="title-1">Непринуждённый обед</p>
{% include location.html lines=site.data.interlude_of_illusions.scenes.black_scene1 %}
<img class="pict1" src="../../img/bg/y/bg37.webp" data-bg="../../img/bg/y/bg37.webp" alt="">
{% assign rows = site.data.interlude_of_illusions.part3.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/y/bg37.webp" %}
{% include break_dark.html %}
{% assign rows = site.data.interlude_of_illusions.part3.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/y/bg37.webp" %}
{% include choice_header.html %}
{% assign rows = site.data.interlude_of_illusions.part3.chapter3.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/y/bg37.webp" bg_overlay="blue-choise" %}
{% assign rows = site.data.interlude_of_illusions.part3.chapter4.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/y/bg37.webp" bg_overlay="red-choise" %}
{% assign rows = site.data.interlude_of_illusions.part3.chapter5.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/y/bg37.webp" %}
{% include break_dark.html %}
{% assign rows = site.data.interlude_of_illusions.part3.chapter6.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/y/bg37.webp" %}
</div> <!-- конец главы -->

<div class="chapter" id="part4"> <!-- начало главы -->
<p class="title-1">Мирная Интерлюдия</p>
{% include location.html lines=site.data.interlude_of_illusions.scenes.black_scene2 %}
<img class="pict1" src="../../img/bg/i/bg10.webp" data-bg="../../img/bg/i/bg10.webp" alt="">
{% assign rows = site.data.interlude_of_illusions.part4.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/i/bg10.webp" %}
{% include break_dark.html %}
{% assign rows = site.data.interlude_of_illusions.part4.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/i/bg10.webp" %}
{% include break_dark.html %}
{% assign rows = site.data.interlude_of_illusions.part4.chapter3.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/i/bg10.webp" %}
{% include break_dark.html %}
{% assign rows = site.data.interlude_of_illusions.part4.chapter4.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/i/bg10.webp" %}
{% include break_dark.html %}
{% assign rows = site.data.interlude_of_illusions.part4.chapter5.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/i/bg10.webp" %}
{% include break_dark.html %}
{% assign rows = site.data.interlude_of_illusions.part4.chapter6.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/i/bg10.webp" %}
{% include break_dark.html %}
{% assign rows = site.data.interlude_of_illusions.part4.chapter7.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/i/bg10.webp" %}
</div> <!-- конец главы -->

<div class="chapter" id="part5"> <!-- начало главы -->
<p class="title-1">Лицом к лицу</p>
{% include location.html lines=site.data.interlude_of_illusions.scenes.black_scene3 %}
<img class="pict1" src="../../img/bg/y/bg2.webp" data-bg="../../img/bg/y/bg2.webp" alt="">
{% assign rows = site.data.interlude_of_illusions.part5.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/y/bg2.webp" %}
{% include break_dark.html %}
<img class="pict1" src="../../img/bg/y/bg1.webp" data-bg="../../img/bg/y/bg1.webp" alt="">
{% include loc.html td_class="loc" text="Базилика — Апартаменты Бисмарк" %}
{% assign rows = site.data.interlude_of_illusions.part5.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/y/bg1.webp" %}
{% include choice_header.html %}
{% assign rows = site.data.interlude_of_illusions.part5.chapter3.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/y/bg1.webp" bg_overlay="blue-choise" %}
{% assign rows = site.data.interlude_of_illusions.part5.chapter4.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/y/bg1.webp" bg_overlay="red-choise" %}
{% assign rows = site.data.interlude_of_illusions.part5.chapter5.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/y/bg1.webp" %}
</div> <!-- конец главы -->

<div class="chapter" id="part6"> <!-- начало главы -->
<p class="title-1">Музыка в ночи</p>
{% include location.html lines=site.data.interlude_of_illusions.scenes.black_scene4 %}
<img class="pict1" src="../../img/bg/y/bg36.webp" data-bg="../../img/bg/y/bg36.webp" alt="">
{% assign rows = site.data.interlude_of_illusions.part6.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/y/bg36.webp" %}
<img class="pict1" src="../../img/bg/p/bg164.webp" data-bg="../../img/bg/y/bg36.webp" alt="">
{% assign rows = site.data.interlude_of_illusions.part6.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/y/bg36.webp" %}
{% include break_dark.html %}
<img class="pict1" src="../../img/bg/y/bg3.webp" data-bg="../../img/bg/y/bg3.webp" alt="">
{% include loc.html td_class="loc" text="Личные апартаменты Командира — Ночь" %}
{% assign rows = site.data.interlude_of_illusions.part6.chapter3.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/y/bg3.webp" %}
{% include break_dark.html %}
{% include loc.html td_class="loc" text="Некоторое время спустя..." %}
{% assign rows = site.data.interlude_of_illusions.part6.chapter4.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/y/bg3.webp" %}
{% include break_dark.html %}
{% assign rows = site.data.interlude_of_illusions.part6.chapter5.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/y/bg3.webp" %}
</div> <!-- конец главы -->

<div class="chapter" id="part7"> <!-- начало главы -->
<p class="title-1">Секрет Базилики</p>
{% include location.html lines=site.data.interlude_of_illusions.scenes.black_scene5 %}
<img class="pict1" src="../../img/bg/y/bg3.webp" data-bg="../../img/bg/y/bg3.webp" alt="">
{% assign rows = site.data.interlude_of_illusions.part7.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/y/bg3.webp" %}
{% include break_dark.html %}
{% assign rows = site.data.interlude_of_illusions.part7.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/y/bg3.webp" %}
{% include break_dark.html %}
{% assign rows = site.data.interlude_of_illusions.part7.chapter3.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/y/bg3.webp" %}
{% include break_dark.html %}
{% assign rows = site.data.interlude_of_illusions.part7.chapter4.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/y/bg3.webp" %}
</div> <!-- конец главы -->

<div class="chapter" id="part8"> <!-- начало главы -->
<p class="title-1">ЕЁ сон</p>
<img class="pict1" src="../../img/bg/e/bg4-24.webp" data-bg="../../img/bg/e/bg4-24.webp" alt="">
{% assign rows = site.data.interlude_of_illusions.part8.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/e/bg4-24.webp" %}
{% include break_dark.html %}
{% assign rows = site.data.interlude_of_illusions.part8.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/e/bg4-24.webp" %}
{% include break_light.html %}
<img class="pict1" src="../../img/bg/i/bg10-1.webp" data-bg="../../img/bg/i/bg10-1.webp" alt="">
{% assign rows = site.data.interlude_of_illusions.part8.chapter3.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/i/bg10-1.webp" %}
{% include break_light.html %}
<img class="pict1" src="../../img/bg/i/bg2-3.webp" data-bg="../../img/bg/i/bg2-3.webp" alt="">
{% assign rows = site.data.interlude_of_illusions.part8.chapter4.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/i/bg2-3.webp" %}
{% include break_dark.html %}
{% assign rows = site.data.interlude_of_illusions.part8.chapter5.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/i/bg2-3.webp" %}
{% include break_dark.html %}
{% assign rows = site.data.interlude_of_illusions.part8.chapter6.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/i/bg2-3.webp" %}
{% include break_light.html %}
{% assign rows = site.data.interlude_of_illusions.part8.chapter7.rows %}
{% include dialog.html rows=rows bg_class="table-bg memory-segment" bg_file="/img/bg/i/bg2-3.webp" %}
{% include break_light.html %}
{% assign rows = site.data.interlude_of_illusions.part8.chapter8.rows %}
{% include dialog.html rows=rows bg_class="table-bg  memory-segment" bg_file="/img/bg/i/bg2-3.webp" %}
{% include break_light.html %}
{% assign rows = site.data.interlude_of_illusions.part8.chapter9.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/i/bg2-3.webp" %}
</div> <!-- конец главы -->

<div class="chapter" id="part9"> <!-- начало главы -->
<p class="title-1">Прекрасный день</p>
{% include location.html lines=site.data.interlude_of_illusions.scenes.black_scene6 %}
{% assign rows = site.data.interlude_of_illusions.part9.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bgb.webp" %}
{% include break_light.html %}
{% assign rows = site.data.interlude_of_illusions.part9.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bgb.webp" %}
{% include break_light.html %}
<img class="pict1" src="../../img/bg/i/bg10.webp" data-bg="../../img/bg/i/bg10.webp" alt="">
{% assign rows = site.data.interlude_of_illusions.part9.chapter3.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/i/bg10.webp" %}
{% include choice_header.html %}
{% assign rows = site.data.interlude_of_illusions.part9.chapter4.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/i/bg10.webp" bg_overlay="blue-choise" %}
{% assign rows = site.data.interlude_of_illusions.part9.chapter5.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/i/bg10.webp" bg_overlay="red-choise" %}
{% include break_light.html %}
{% include location.html lines=site.data.interlude_of_illusions.scenes.black_scene6 %}
<img class="pict1" src="../../img/bg/y/bg2.webp" data-bg="../../img/bg/y/bg2.webp" alt="">
{% assign rows = site.data.interlude_of_illusions.part9.chapter6.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/y/bg2.webp" %}
{% include break_dark.html %}
<img class="pict1" src="../../img/bg/y/bg1.webp" data-bg="../../img/bg/y/bg1.webp" alt="">
{% include loc.html td_class="loc" text="Базилика — Апартаменты Бисмарк" %}
{% assign rows = site.data.interlude_of_illusions.part9.chapter7.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/y/bg1.webp" %}
{% include break_light.html %}
{% include location.html lines=site.data.interlude_of_illusions.scenes.black_scene6 %}
<img class="pict1" src="../../img/bg/y/bg36.webp" data-bg="../../img/bg/y/bg36.webp" alt="">
{% assign rows = site.data.interlude_of_illusions.part9.chapter8.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/y/bg36.webp" %}
{% include break_light.html %}
{% include location.html lines=site.data.interlude_of_illusions.scenes.black_scene7 %}
<img class="pict1" src="../../img/bg/i/bg10-1.webp" data-bg="../../img/bg/i/bg10-1.webp" alt="">
{% assign rows = site.data.interlude_of_illusions.part9.chapter9.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/i/bg10-1.webp" %}
</div> <!-- конец главы -->

<div class="chapter" id="part10"> <!-- начало главы -->
<p class="title-1">Ещё один прекрасный день</p>
{% include location.html lines=site.data.interlude_of_illusions.scenes.black_scene8 %}
<img class="pict1" src="../../img/bg/bg3.webp" data-bg="../../img/bg/bg3.webp" alt="">
{% assign rows = site.data.interlude_of_illusions.part10.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg3.webp" %}
{% include break_dark.html %}
<img class="pict1" src="../../img/bg/i/bg10.webp" data-bg="../../img/bg/i/bg10.webp" alt="">
{% assign rows = site.data.interlude_of_illusions.part10.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/i/bg10.webp" %}
{% include break_dark.html %}
{% include location.html lines=site.data.interlude_of_illusions.scenes.black_scene9 %}
<img class="pict1" src="../../img/bg/y/bg3.webp" data-bg="../../img/bg/y/bg3.webp" alt="">
{% assign rows = site.data.interlude_of_illusions.part10.chapter3.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/y/bg3.webp" %}
{% include break_dark.html %}
{% assign rows = site.data.interlude_of_illusions.part10.chapter4.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/y/bg3.webp" %}
{% include break_dark.html %}
<img class="pict1" src="../../img/bg/i/bg10.webp" data-bg="../../img/bg/i/bg10.webp" alt="">
{% include loc.html td_class="loc" text="Некоторое время спустя на железнодорожной платформе..." %}
{% assign rows = site.data.interlude_of_illusions.part10.chapter5.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/i/bg10.webp" %}
{% include break_dark.html %}
{% assign rows = site.data.interlude_of_illusions.part10.chapter6.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/i/bg10.webp" %}
{% include break_dark.html %}
{% assign rows = site.data.interlude_of_illusions.part10.chapter7.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/i/bg10.webp" %}
{% include break_dark.html %}
{% assign rows = site.data.interlude_of_illusions.part10.chapter8.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/i/bg10.webp" %}
{% include break_dark.html %}
{% include blackscreen.html lines=site.data.interlude_of_illusions.scenes.black_scene10 %}
{% include break_dark.html %}
{% include blackscreen.html lines=site.data.interlude_of_illusions.scenes.black_scene11 %}
</div> <!-- конец главы -->

