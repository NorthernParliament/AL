---
layout: event
title: "Свет Мартириума"
slug: light_of_the_martyrium
menu_cards:
  - img: "menu.png"
    from: 1
    to: 4
  - img: "menu1.png"
    from: 5
    to: 5
  - img: "menu.png"
    from: 6
    to: 15
  - img: "menu1.png"
    from: 16
    to: 16
  - img: "menu.png"
    from: 17
    to: 20
  - img: "menu1.png"
    from: 21
    to: 22
  - img: "menu.png"
    from: 23
    to: 29
  - img: "menu2.png"
    from: 30
    to: 35
chapters:
  - "Незваный гость"
  - "Две Королевы"
  - "Охота начинается"
  - "Закрепление концепции"
  - "Конструирование и деконструкция смерти"
  - "Мартириум"
  - "Планы Пепла"
  - "Третья сторона"
  - "Надвигающаяся угроза"
  - "Самозванец"
  - "Экстренный побег"
  - "Слова, а не мечи"
  - "Второе кольцо"
  - "Правила пространства"
  - "Ответ на всё"
  - "Солнце заходит над Самосом"
  - "Демон Лапласа"
  - "Прошлое Факела"
  - "Звезды в ночном небе"
  - "«Мой» конец"
  - "Звонок, которого никогда не было"
  - "Подкрепление, которое так и не пришло"
  - "Смерть Королевы"
  - "«Моя» сила"
  - "Сияющее сердце"
  - "Присоединяйтесь к хору"
  - "К третьей смерти"
  - "Воссоздание"
  - "Охота продолжается"
  - "Хранимые секреты"
  - "Взгляд во тьме"
  - "Минутная передышка"
  - "Срочная помощь"
  - "Инцидент в Пацифике"
  - "Пылающее сердце"
menu_bg: /img/bg/i/bg8.webp
---

<div class="chapter" id="part1"> <!-- начало главы -->
<p class="title-1">Незваный гость</p>
{% include blackscreen.html lines=site.data.light_of_the_martyrium.scenes.black_scene1 %}
{% include blackscreen.html lines=site.data.light_of_the_martyrium.scenes.black_scene2 %}
{% include blackscreen.html lines=site.data.light_of_the_martyrium.scenes.black_scene3 %}
{% include blackscreen.html lines=site.data.light_of_the_martyrium.scenes.black_scene4 %}
<img class="pict1" src="../../img/bg/bg10-1.webp" data-bg="../../img/bg/bg10-1.webp" alt="">
{% assign rows = site.data.light_of_the_martyrium.part1.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg10-1.webp" %}
<img class="pict1" src="../../img/bg/p/bg158.webp" data-bg="../../img/bg/bgb.webp" alt="">
{% assign rows = site.data.light_of_the_martyrium.part1.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bgb.webp" %}
<img class="pict1" src="../../img/bg/p/bg159.webp" data-bg="../../img/bg/bgb.webp" alt="">
{% assign rows = site.data.light_of_the_martyrium.part1.chapter3.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bgb.webp" %}
<img class="pict1" src="../../img/bg/p/bg158.webp" data-bg="../../img/bg/bgb.webp" alt="">
{% assign rows = site.data.light_of_the_martyrium.part1.chapter4.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bgb.webp" %}
<img class="pict1" src="../../img/bg/p/bg159.webp" data-bg="../../img/bg/bgb.webp" alt="">
{% assign rows = site.data.light_of_the_martyrium.part1.chapter5.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bgb.webp" %}
{% include choice_header.html %}
{% assign rows = site.data.light_of_the_martyrium.part1.chapter6.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bgb.webp" bg_overlay="blue-choise" %}
{% assign rows = site.data.light_of_the_martyrium.part1.chapter7.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bgb.webp" bg_overlay="red-choise" %}
{% assign rows = site.data.light_of_the_martyrium.part1.chapter8.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bgb.webp" bg_overlay="yellow-choise" %}
{% assign rows = site.data.light_of_the_martyrium.part1.chapter9.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bgb.webp" %}
{% include choice_header.html %}
{% assign rows = site.data.light_of_the_martyrium.part1.chapter10.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bgb.webp" bg_overlay="blue-choise" %}
{% assign rows = site.data.light_of_the_martyrium.part1.chapter11.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bgb.webp" bg_overlay="red-choise" %}
<img class="pict1" src="../../img/bg/bg10-1.webp" data-bg="../../img/bg/bg10-1.webp" alt="">
{% assign rows = site.data.light_of_the_martyrium.part1.chapter12.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg10-1.webp" %}
{% include choice_header.html %}
{% assign rows = site.data.light_of_the_martyrium.part1.chapter13.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg10-1.webp" bg_overlay="blue-choise" %}
{% assign rows = site.data.light_of_the_martyrium.part1.chapter14.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg10-1.webp" bg_overlay="red-choise" %}
{% assign rows = site.data.light_of_the_martyrium.part1.chapter15.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg10-1.webp" %}
{% include choice_header.html %}
{% assign rows = site.data.light_of_the_martyrium.part1.chapter16.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg10-1.webp" bg_overlay="blue-choise" %}
{% assign rows = site.data.light_of_the_martyrium.part1.chapter17.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg10-1.webp" bg_overlay="red-choise" %}
{% assign rows = site.data.light_of_the_martyrium.part1.chapter18.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg10-1.webp" %}
{% include choice_header.html %}
{% assign rows = site.data.light_of_the_martyrium.part1.chapter19.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg10-1.webp" bg_overlay="blue-choise" %}
{% assign rows = site.data.light_of_the_martyrium.part1.chapter20.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg10-1.webp" bg_overlay="red-choise" %}
{% assign rows = site.data.light_of_the_martyrium.part1.chapter21.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg10-1.webp" %}
{% include choice_header.html %}
{% assign rows = site.data.light_of_the_martyrium.part1.chapter22.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg10-1.webp" bg_overlay="blue-choise" %}
{% assign rows = site.data.light_of_the_martyrium.part1.chapter23.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg10-1.webp" bg_overlay="red-choise" %}
{% assign rows = site.data.light_of_the_martyrium.part1.chapter24.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg10-1.webp" %}
<img class="pict1" src="../../img/bg/n/bg7.webp" data-bg="../../img/bg/n/bg7.webp" alt="">
{% assign rows = site.data.light_of_the_martyrium.part1.chapter25.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/n/bg7.webp" %}
{% include choice_header.html %}
{% assign rows = site.data.light_of_the_martyrium.part1.chapter26.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/n/bg7.webp" bg_overlay="blue-choise" %}
{% assign rows = site.data.light_of_the_martyrium.part1.chapter27.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/n/bg7.webp" bg_overlay="red-choise" %}
<img class="pict1" src="../../img/bg/bg23-1.webp" data-bg="../../img/bg/bg23-1.webp" alt="">
{% assign rows = site.data.light_of_the_martyrium.part1.chapter28.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg23-1.webp" %}
{% include break_dark.html %}
{% assign rows = site.data.light_of_the_martyrium.part1.chapter29.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg23-1.webp" %}
</div> <!-- конец главы -->

<div class="chapter" id="part2"> <!-- начало главы -->
<p class="title-1">Две Королевы</p>
<img class="pict1" src="../../img/bg/y/bg15.webp" data-bg="../../img/bg/y/bg15.webp" alt="">
{% assign rows = site.data.light_of_the_martyrium.part2.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/y/bg15.webp" %}
{% include break_dark.html %}
{% include location.html lines=site.data.light_of_the_martyrium.scenes.black_scene5 %}
<img class="pict1" src="../../img/bg/u/bg4-7.webp" data-bg="../../img/bg/u/bg4-7.webp" alt="">
{% assign rows = site.data.light_of_the_martyrium.part2.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/u/bg4-7.webp" %}
{% include break_light.html %}
<img class="pict1" src="../../img/bg/bg4-2.webp" data-bg="../../img/bg/bg4-2.webp" alt="">
{% assign rows = site.data.light_of_the_martyrium.part2.chapter3.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg4-2.webp" %}
{% include break_light.html %}
<img class="pict1" src="../../img/bg/u/bg4-7.webp" data-bg="../../img/bg/u/bg4-7.webp" alt="">
{% assign rows = site.data.light_of_the_martyrium.part2.chapter4.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/u/bg4-7.webp" %}
{% include choice_header.html %}
{% assign rows = site.data.light_of_the_martyrium.part2.chapter5.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/u/bg4-7.webp" bg_overlay="blue-choise" %}
{% assign rows = site.data.light_of_the_martyrium.part2.chapter6.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/u/bg4-7.webp" bg_overlay="red-choise" %}
{% assign rows = site.data.light_of_the_martyrium.part2.chapter7.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/u/bg4-7.webp" %}
</div> <!-- конец главы -->

<div class="chapter" id="part3"> <!-- начало главы -->
<p class="title-1">Охота начинается</p>
<img class="pict1" src="../../img/bg/u/bg4-7.webp" data-bg="../../img/bg/u/bg4-7.webp" alt="">
{% assign rows = site.data.light_of_the_martyrium.part3.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/u/bg4-7.webp" %}
<img class="pict1" src="../../img/bg/p/bg160.webp" data-bg="../../img/bg/u/bg4-7.webp" alt="">
{% include loc.html td_class="loc" text="Во дворе..." %}
{% assign rows = site.data.light_of_the_martyrium.part3.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/u/bg4-7.webp" %}
{% include choice_header.html %}
{% assign rows = site.data.light_of_the_martyrium.part3.chapter3.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/u/bg4-7.webp" bg_overlay="blue-choise" %}
{% assign rows = site.data.light_of_the_martyrium.part3.chapter4.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/u/bg4-7.webp" bg_overlay="red-choise" %}
{% include break_dark.html %}
{% assign rows = site.data.light_of_the_martyrium.part3.chapter5.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/u/bg4-7.webp" %}
<img class="pict1" src="../../img/bg/p/bg160-1.webp" data-bg="../../img/bg/u/bg4-7.webp" alt="">
{% assign rows = site.data.light_of_the_martyrium.part3.chapter6.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/u/bg4-7.webp" %}
<img class="pict1" src="../../img/bg/p/bg160-2.webp" data-bg="../../img/bg/u/bg4-7.webp" alt="">
{% assign rows = site.data.light_of_the_martyrium.part3.chapter7.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/u/bg4-7.webp" %}
</div> <!-- конец главы -->

<div class="chapter" id="part4"> <!-- начало главы -->
<p class="title-1">Закрепление концепции</p>
<img class="pict1" src="../../img/bg/u/bg4-7.webp" data-bg="../../img/bg/u/bg4-7.webp" alt="">
{% assign rows = site.data.light_of_the_martyrium.part4.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/u/bg4-7.webp" %}
{% include break_dark.html %}
{% assign rows = site.data.light_of_the_martyrium.part4.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/u/bg4-7.webp" %}
{% include choice_header.html %}
{% assign rows = site.data.light_of_the_martyrium.part4.chapter3.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/u/bg4-7.webp" bg_overlay="blue-choise" %}
{% assign rows = site.data.light_of_the_martyrium.part4.chapter4.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/u/bg4-7.webp" bg_overlay="red-choise" %}
{% assign rows = site.data.light_of_the_martyrium.part4.chapter5.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/u/bg4-7.webp" %}
{% include break_dark.html %}
{% assign rows = site.data.light_of_the_martyrium.part4.chapter6.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/u/bg4-7.webp" %}
{% include break_dark.html %}
{% assign rows = site.data.light_of_the_martyrium.part4.chapter7.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/u/bg4-7.webp" %}
</div> <!-- конец главы -->

<div class="chapter" id="part5"> <!-- начало главы -->
<p class="title-1">Конструирование и деконструкция смерти</p>
<img class="pict1" src="../../img/bg/y/bg15-1.webp" data-bg="../../img/bg/y/bg15-1.webp" alt="">
{% assign rows = site.data.light_of_the_martyrium.part5.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/y/bg15-1.webp" %}
<img class="pict1" src="../../img/bg/y/bg15-2.webp" data-bg="../../img/bg/y/bg15-2.webp" alt="">
{% assign rows = site.data.light_of_the_martyrium.part5.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/y/bg15-2.webp" %}
<img class="pict1" src="../../img/bg/y/bg15-1.webp" data-bg="../../img/bg/y/bg15-1.webp" alt="">
{% assign rows = site.data.light_of_the_martyrium.part5.chapter3.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/y/bg15-1.webp" %}
</div> <!-- конец главы -->

<div class="chapter" id="part6"> <!-- начало главы -->
<p class="title-1">Мартириум</p>
<img class="pict1" src="../../img/bg/i/bg8-1.webp" data-bg="../../img/bg/i/bg8-1.webp" alt="">
{% assign rows = site.data.light_of_the_martyrium.part6.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/i/bg8-1.webp" %}
{% include break_dark.html %}
{% assign rows = site.data.light_of_the_martyrium.part6.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/i/bg8-1.webp" %}
</div> <!-- конец главы -->

<div class="chapter" id="part7"> <!-- начало главы -->
<p class="title-1">Планы Пепла</p>
<img class="pict1" src="../../img/bg/x/bg25.webp" data-bg="../../img/bg/x/bg25.webp" alt="">
{% include loc.html td_class="loc" text="Некоторое время назад..." %}
{% assign rows = site.data.light_of_the_martyrium.part7.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/x/bg25.webp" %}
{% include break_gold.html %}
{% assign rows = site.data.light_of_the_martyrium.part7.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/x/bg25.webp" %}
</div> <!-- конец главы -->

<div class="chapter" id="part8"> <!-- начало главы -->
<p class="title-1">Третья сторона</p>
<img class="pict1" src="../../img/bg/x/bg25.webp" data-bg="../../img/bg/x/bg25.webp" alt="">
{% include loc.html td_class="loc" text="Тем временем, в другом месте..." %}
{% assign rows = site.data.light_of_the_martyrium.part8.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/x/bg25.webp" %}
</div> <!-- конец главы -->

<div class="chapter" id="part9"> <!-- начало главы -->
<p class="title-1">Надвигающаяся угроза</p>
{% include location.html lines=site.data.light_of_the_martyrium.scenes.black_scene6 %}
<img class="pict1" src="../../img/bg/y/bg15-1.webp" data-bg="../../img/bg/y/bg15-1.webp" alt="">
{% assign rows = site.data.light_of_the_martyrium.part9.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/y/bg15-1.webp" %}
{% include break_dark.html %}
{% assign rows = site.data.light_of_the_martyrium.part9.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/y/bg15-1.webp" %}
{% include break_dark.html %}
{% assign rows = site.data.light_of_the_martyrium.part9.chapter3.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/y/bg15-1.webp" %}
</div> <!-- конец главы -->

<div class="chapter" id="part10"> <!-- начало главы -->
<p class="title-1">Самозванец</p>
<img class="pict1" src="../../img/bg/y/bg15-1.webp" data-bg="../../img/bg/y/bg15-1.webp" alt="">
{% assign rows = site.data.light_of_the_martyrium.part10.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/y/bg15-1.webp" %}
<img class="pict1" src="../../img/bg/p/bg161.webp" data-bg="../../img/bg/y/bg15-1.webp" alt="">
{% assign rows = site.data.light_of_the_martyrium.part10.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/y/bg15-1.webp" %}
{% include break_dark.html %}
{% assign rows = site.data.light_of_the_martyrium.part10.chapter3.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/y/bg15-1.webp" %}
{% include break_dark.html %}
{% assign rows = site.data.light_of_the_martyrium.part10.chapter4.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/y/bg15-1.webp" %}
{% include break_dark.html %}
{% assign rows = site.data.light_of_the_martyrium.part10.chapter5.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/y/bg15-1.webp" %}
{% include choice_header.html %}
{% assign rows = site.data.light_of_the_martyrium.part10.chapter6.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/y/bg15-1.webp" bg_overlay="blue-choise" %}
{% assign rows = site.data.light_of_the_martyrium.part10.chapter7.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/y/bg15-1.webp" bg_overlay="red-choise" %}
{% assign rows = site.data.light_of_the_martyrium.part10.chapter8.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/y/bg15-1.webp" %}
</div> <!-- конец главы -->

<div class="chapter" id="part11"> <!-- начало главы -->
<p class="title-1">Экстренный побег</p>
{% assign rows = site.data.light_of_the_martyrium.part11.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg27.webp" %}
{% assign rows = site.data.light_of_the_martyrium.part11.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg27.webp" bg_overlay="blue-choise" %}
{% assign rows = site.data.light_of_the_martyrium.part11.chapter3.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg27.webp" bg_overlay="red-choise" %}
{% assign rows = site.data.light_of_the_martyrium.part11.chapter4.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg27.webp" bg_overlay="yellow-choise" %}
{% assign rows = site.data.light_of_the_martyrium.part11.chapter5.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg27.webp" bg_overlay="sea-choise" %}
{% include break_dark.html %}
{% assign rows = site.data.light_of_the_martyrium.part11.chapter6.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg27.webp" %}
{% include break_light.html %}
<img class="pict1" src="../../img/bg/i/bg8-1.webp" data-bg="../../img/bg/i/bg8-1.webp" alt="">
{% assign rows = site.data.light_of_the_martyrium.part11.chapter7.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/i/bg8-1.webp" %}
{% include break_dark.html %}
{% assign rows = site.data.light_of_the_martyrium.part11.chapter8.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/i/bg8-1.webp" %}
</div> <!-- конец главы -->

<div class="chapter" id="part12"> <!-- начало главы -->
<p class="title-1">Слова, а не мечи</p>
<img class="pict1" src="../../img/bg/i/bg8-1.webp" data-bg="../../img/bg/i/bg8-1.webp" alt="">
{% assign rows = site.data.light_of_the_martyrium.part12.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/i/bg8-1.webp" %}
{% include break_dark.html %}
{% assign rows = site.data.light_of_the_martyrium.part12.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/i/bg8-1.webp" %}
{% include break_dark.html %}
{% assign rows = site.data.light_of_the_martyrium.part12.chapter3.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/i/bg8-1.webp" %}
</div> <!-- конец главы -->

<div class="chapter" id="part13"> <!-- начало главы -->
<p class="title-1">Второе кольцо</p>
<img class="pict1" src="../../img/bg/i/bg8-1.webp" data-bg="../../img/bg/i/bg8-1.webp" alt="">
{% assign rows = site.data.light_of_the_martyrium.part13.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/i/bg8-1.webp" %}
{% include break_gold.html %}
{% assign rows = site.data.light_of_the_martyrium.part13.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/i/bg8-1.webp" %}
<img class="pict1" src="../../img/bg/i/bg8-2.webp" data-bg="../../img/bg/i/bg8-2.webp" alt="">
{% assign rows = site.data.light_of_the_martyrium.part13.chapter3.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/i/bg8-2.webp" %}
{% include break_gold.html %}
{% assign rows = site.data.light_of_the_martyrium.part13.chapter4.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/i/bg8-2.webp" %}
</div> <!-- конец главы -->

<div class="chapter" id="part14"> <!-- начало главы -->
<p class="title-1">Правила пространства</p>
<img class="pict1" src="../../img/bg/i/bg8-2.webp" data-bg="../../img/bg/i/bg8-2.webp" alt="">
{% include loc.html td_class="loc" text="Где-то в Мартириуме..." %}
{% assign rows = site.data.light_of_the_martyrium.part14.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/i/bg8-2.webp" %}
{% include break_dark.html %}
{% include loc.html td_class="loc" text="Где-то в Мартириуме..." %}
{% assign rows = site.data.light_of_the_martyrium.part14.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/i/bg8-2.webp" %}
{% include break_dark.html %}
<img class="pict1" src="../../img/bg/x/bg25.webp" data-bg="../../img/bg/x/bg25.webp" alt="">
{% include loc.html td_class="loc" text="Вдали от Мартириума, между вратами и поездом..." %}
{% include break_light.html %}
{% assign rows = site.data.light_of_the_martyrium.part14.chapter3.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/x/bg25.webp" %}
{% include break_light.html %}
<img class="pict1" src="../../img/bg/c/bg4.webp" data-bg="../../img/bg/c/bg4.webp" alt="">
{% assign rows = site.data.light_of_the_martyrium.part14.chapter4.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/c/bg4.webp" %}
</div> <!-- конец главы -->

<div class="chapter" id="part15"> <!-- начало главы -->
<p class="title-1">Ответ на всё</p>
{% assign rows = site.data.light_of_the_martyrium.part15.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg27.webp" %}
{% include break_dark.html %}
{% assign rows = site.data.light_of_the_martyrium.part15.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg27.webp" %}
{% include choice_header.html %}
{% assign rows = site.data.light_of_the_martyrium.part15.chapter3.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg27.webp" bg_overlay="blue-choise" %}
{% assign rows = site.data.light_of_the_martyrium.part15.chapter4.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg27.webp" bg_overlay="red-choise" %}
{% assign rows = site.data.light_of_the_martyrium.part15.chapter5.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg27.webp" bg_overlay="yellow-choise" %}
{% assign rows = site.data.light_of_the_martyrium.part15.chapter6.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg27.webp" %}
</div> <!-- конец главы -->

<div class="chapter" id="part16"> <!-- начало главы -->
<p class="title-1">Солнце заходит над Самосом</p>
<img class="pict1" src="../../img/bg/x/bg16-1.webp" data-bg="../../img/bg/x/bg16-1.webp" alt="">
{% assign rows = site.data.light_of_the_martyrium.part16.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/x/bg16-1.webp" %}
{% include choice_header.html %}
{% assign rows = site.data.light_of_the_martyrium.part16.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/x/bg16-1.webp" bg_overlay="blue-choise" %}
{% assign rows = site.data.light_of_the_martyrium.part16.chapter3.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/x/bg16-1.webp" bg_overlay="red-choise" %}
{% assign rows = site.data.light_of_the_martyrium.part16.chapter4.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/x/bg16-1.webp" %}
{% include choice_header.html %}
{% assign rows = site.data.light_of_the_martyrium.part16.chapter5.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/x/bg16-1.webp" bg_overlay="blue-choise" %}
{% assign rows = site.data.light_of_the_martyrium.part16.chapter6.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/x/bg16-1.webp" bg_overlay="red-choise" %}
{% assign rows = site.data.light_of_the_martyrium.part16.chapter7.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/x/bg16-1.webp" %}
</div> <!-- конец главы -->

<div class="chapter" id="part17"> <!-- начало главы -->
<p class="title-1">Демон Лапласа</p>
<img class="pict1" src="../../img/bg/x/bg16-1.webp" data-bg="../../img/bg/x/bg16-1.webp" alt="">
{% assign rows = site.data.light_of_the_martyrium.part17.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/x/bg16-1.webp" %}
{% include break_dark.html %}
{% assign rows = site.data.light_of_the_martyrium.part17.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/x/bg16-1.webp" %}
{% include break_dark.html %}
{% assign rows = site.data.light_of_the_martyrium.part17.chapter3.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/x/bg16-1.webp" %}
{% include break_dark.html %}
{% assign rows = site.data.light_of_the_martyrium.part17.chapter4.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/x/bg16-1.webp" %}
{% include break_dark.html %}
{% assign rows = site.data.light_of_the_martyrium.part17.chapter5.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/x/bg16-1.webp" %}
{% include break_light.html %}
<div class="image-overlay-container">
    <img class="base-image pict1" src="../../img/bg/c/bg3.webp" alt="">
    <img class="overlay-layer pict1" src="/img/bg/bgnoise.png" alt="">
</div>
{% assign rows = site.data.light_of_the_martyrium.part17.chapter6.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/c/bg3.webp" bg_overlay="noise" %}
{% include break_light.html %}
<img class="pict1" src="../../img/bg/x/bg16-1.webp" data-bg="../../img/bg/x/bg16-1.webp" alt="">
{% assign rows = site.data.light_of_the_martyrium.part17.chapter7.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/x/bg16-1.webp" %}
{% include choice_header.html %}
{% assign rows = site.data.light_of_the_martyrium.part17.chapter8.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/x/bg16-1.webp" bg_overlay="blue-choise" %}
{% assign rows = site.data.light_of_the_martyrium.part17.chapter9.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/x/bg16-1.webp" bg_overlay="red-choise" %}
{% assign rows = site.data.light_of_the_martyrium.part17.chapter10.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/x/bg16-1.webp" bg_overlay="yellow-choise" %}
{% assign rows = site.data.light_of_the_martyrium.part17.chapter11.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/x/bg16-1.webp" %}
</div> <!-- конец главы -->

<div class="chapter" id="part18"> <!-- начало главы -->
<p class="title-1">Прошлое Факела</p>
<img class="pict1" src="../../img/bg/x/bg19.webp" data-bg="../../img/bg/x/bg19.webp" alt="">
{% assign rows = site.data.light_of_the_martyrium.part18.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/x/bg19.webp" %}
{% include break_dark.html %}
{% assign rows = site.data.light_of_the_martyrium.part18.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/x/bg19.webp" %}
{% include break_light.html %}
{% assign rows = site.data.light_of_the_martyrium.part18.chapter3.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/x/bg19.webp" %}
</div> <!-- конец главы -->

<div class="chapter" id="part19"> <!-- начало главы -->
<p class="title-1">Звезды в ночном небе</p>
<img class="pict1" src="../../img/bg/x/bg16-1.webp" data-bg="../../img/bg/x/bg16-1.webp" alt="">
{% include loc.html td_class="loc" text="Остров Самос — Незадолго до этого" %}
{% assign rows = site.data.light_of_the_martyrium.part19.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/x/bg16-1.webp" %}
{% include break_light.html %}
{% include loc.html td_class="loc" text="Вскоре после этого..." %}
{% assign rows = site.data.light_of_the_martyrium.part19.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/x/bg16-1.webp" %}
{% include break_dark.html %}
{% assign rows = site.data.light_of_the_martyrium.part19.chapter3.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/x/bg16-1.webp" %}
{% include break_dark.html %}
{% assign rows = site.data.light_of_the_martyrium.part19.chapter4.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/x/bg16-1.webp" %}
<div class="image-overlay-container">
    <img class="base-image pict1" src="../../img/bg/p/bg90.webp" alt="">
    <img class="overlay-layer pict1" src="/img/bg/bgdark.png" alt="">
</div>
{% assign rows = site.data.light_of_the_martyrium.part19.chapter5.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/p/bg90.webp" %}
</div> <!-- конец главы -->

<div class="chapter" id="part20"> <!-- начало главы -->
<p class="title-1">«Мой» конец</p>
{% assign rows = site.data.light_of_the_martyrium.part20.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg27.webp" %}
{% include choice_header.html %}
{% assign rows = site.data.light_of_the_martyrium.part20.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg27.webp" bg_overlay="blue-choise" %}
{% assign rows = site.data.light_of_the_martyrium.part20.chapter3.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg27.webp" bg_overlay="red-choise" %}
{% assign rows = site.data.light_of_the_martyrium.part20.chapter4.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg27.webp" bg_overlay="yellow-choise" %}
{% assign rows = site.data.light_of_the_martyrium.part20.chapter5.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg27.webp" %}
{% include break_light.html %}
<img class="pict1" src="../../img/bg/c/bg1.webp" data-bg="../../img/bg/c/bg1.webp" alt="">
{% assign rows = site.data.light_of_the_martyrium.part20.chapter6.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/c/bg1.webp" %}
{% include break_light.html %}
{% assign rows = site.data.light_of_the_martyrium.part20.chapter7.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bgw.webp" bg_overlay="white-full" %}
</div> <!-- конец главы -->

<div class="chapter" id="part21"> <!-- начало главы -->
<p class="title-1">Звонок, которого никогда не было</p>
{% include break_light.html %}
<img class="pict1" src="../../img/bg/x/bg19.webp" data-bg="../../img/bg/x/bg19.webp" alt="">
{% assign rows = site.data.light_of_the_martyrium.part21.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/x/bg19.webp" %}
{% include break_dark.html %}
{% assign rows = site.data.light_of_the_martyrium.part21.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/x/bg19.webp" %}
</div> <!-- конец главы -->

<div class="chapter" id="part22"> <!-- начало главы -->
<p class="title-1">Подкрепление, которое так и не пришло</p>
<img class="pict1" src="../../img/bg/x/bg19.webp" data-bg="../../img/bg/x/bg19.webp" alt="">
{% assign rows = site.data.light_of_the_martyrium.part22.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/x/bg19.webp" %}
{% include break_dark.html %}
{% assign rows = site.data.light_of_the_martyrium.part22.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/x/bg19.webp" %}
{% include break_dark.html %}
{% assign rows = site.data.light_of_the_martyrium.part22.chapter3.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/x/bg19.webp" %}
{% include choice_header.html %}
{% assign rows = site.data.light_of_the_martyrium.part22.chapter4.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/x/bg19.webp" bg_overlay="blue-choise" %}
{% assign rows = site.data.light_of_the_martyrium.part22.chapter5.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/x/bg19.webp" bg_overlay="red-choise" %}
{% assign rows = site.data.light_of_the_martyrium.part22.chapter6.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/x/bg19.webp" %}
</div> <!-- конец главы -->

<div class="chapter" id="part23"> <!-- начало главы -->
<p class="title-1">Смерть Королевы</p>
<img class="pict1" src="../../img/bg/x/bg19.webp" data-bg="../../img/bg/x/bg19.webp" alt="">
{% assign rows = site.data.light_of_the_martyrium.part23.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/x/bg19.webp" %}
{% include break_dark.html %}
{% assign rows = site.data.light_of_the_martyrium.part23.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/x/bg19.webp" %}
<div class="image-overlay-container">
    <img class="base-image pict1" src="../../img/bg/x/bg19.webp" alt="">
    <img class="overlay-layer pict1" src="/img/bg/bgdark.png" alt="">
</div>
{% assign rows = site.data.light_of_the_martyrium.part23.chapter3.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/x/bg19.webp" bg_overlay="dark" %}
{% include break_light.html %}
{% assign rows = site.data.light_of_the_martyrium.part23.chapter4.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/x/bg19.webp" bg_overlay="dark" %}
{% include break_light.html %}
{% assign rows = site.data.light_of_the_martyrium.part23.chapter5.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bgw.webp" bg_overlay="white-full" %}
{% include break_light.html %}
<img class="pict1" src="../../img/bg/i/bg8-2.webp" data-bg="../../img/bg/i/bg8-2.webp" alt="">
{% assign rows = site.data.light_of_the_martyrium.part23.chapter6.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/i/bg8-2.webp" %}
{% include break_light.html %}
{% assign rows = site.data.light_of_the_martyrium.part23.chapter7.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bgw.webp" bg_overlay="white-full" %}
{% include break_gold.html %}
{% assign rows = site.data.light_of_the_martyrium.part23.chapter8.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bgw.webp" bg_overlay="white-full" %}
{% include break_light.html %}
<img class="pict1" src="../../img/bg/x/bg19.webp" data-bg="../../img/bg/x/bg19.webp" alt="">
{% include loc.html td_class="loc" text="В то же время снаружи командного судна..." %}
{% assign rows = site.data.light_of_the_martyrium.part23.chapter9.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/x/bg19.webp" %}
{% include break_dark.html %}
{% include loc.html td_class="loc" text="Тем временем, неподалеку оттуда..." %}
{% assign rows = site.data.light_of_the_martyrium.part23.chapter10.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/x/bg19.webp" %}
</div> <!-- конец главы -->

<div class="chapter" id="part24"> <!-- начало главы -->
<p class="title-1">«Моя» сила</p>
<img class="pict1" src="../../img/bg/x/bg19.webp" data-bg="../../img/bg/x/bg19.webp" alt="">
{% assign rows = site.data.light_of_the_martyrium.part24.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/x/bg19.webp" %}
{% include break_dark.html %}
{% include loc.html td_class="loc" text="На борту парящего линкора..." %}
{% assign rows = site.data.light_of_the_martyrium.part24.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/x/bg19.webp" %}
{% include break_dark.html %}
{% assign rows = site.data.light_of_the_martyrium.part24.chapter3.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/x/bg19.webp" %}
{% include choice_header.html %}
{% assign rows = site.data.light_of_the_martyrium.part24.chapter4.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/x/bg19.webp" bg_overlay="blue-choise" %}
{% assign rows = site.data.light_of_the_martyrium.part24.chapter5.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/x/bg19.webp" bg_overlay="red-choise" %}
{% assign rows = site.data.light_of_the_martyrium.part24.chapter6.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/x/bg19.webp" %}
{% include break_light.html %}
<img class="pict1" src="../../img/bg/i/bg8-2.webp" data-bg="../../img/bg/i/bg8-2.webp" alt="">
{% assign rows = site.data.light_of_the_martyrium.part24.chapter7.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/i/bg8-2.webp" %}
<img class="pict1" src="../../img/bg/p/bg162.webp" data-bg="../../img/bg/i/bg8-2.webp" alt="">
{% assign rows = site.data.light_of_the_martyrium.part24.chapter8.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/i/bg8-2.webp" %}
{% include break_dark.html %}
{% assign rows = site.data.light_of_the_martyrium.part24.chapter9.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/i/bg8-2.webp" %}
</div> <!-- конец главы -->

<div class="chapter" id="part25"> <!-- начало главы -->
<p class="title-1">Сияющее сердце</p>
<img class="pict1" src="../../img/bg/i/bg8-3.webp" data-bg="../../img/bg/i/bg8-3.webp" alt="">
{% assign rows = site.data.light_of_the_martyrium.part25.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/i/bg8-3.webp" %}
</div> <!-- конец главы -->

<div class="chapter" id="part26"> <!-- начало главы -->
<p class="title-1">Присоединяйтесь к хору</p>
<img class="pict1" src="../../img/bg/i/bg8-3.webp" data-bg="../../img/bg/i/bg8-3.webp" alt="">
{% assign rows = site.data.light_of_the_martyrium.part26.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/i/bg8-3.webp" %}
{% include choice_header.html %}
{% assign rows = site.data.light_of_the_martyrium.part26.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/i/bg8-3.webp" bg_overlay="blue-choise" %}
{% assign rows = site.data.light_of_the_martyrium.part26.chapter3.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/i/bg8-3.webp" bg_overlay="red-choise" %}
{% assign rows = site.data.light_of_the_martyrium.part26.chapter4.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/i/bg8-3.webp" bg_overlay="yellow-choise" %}
{% assign rows = site.data.light_of_the_martyrium.part26.chapter5.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/i/bg8-3.webp" %}
{% include break_light.html %}
<img class="pict1" src="../../img/bg/i/bg8-4.webp" data-bg="../../img/bg/i/bg8-4.webp" alt="">
{% assign rows = site.data.light_of_the_martyrium.part26.chapter6.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/i/bg8-4.webp" %}
{% include break_light.html %}
<img class="pict1" src="../../img/bg/i/bg8-5.webp" data-bg="../../img/bg/i/bg8-5.webp" alt="">
{% assign rows = site.data.light_of_the_martyrium.part26.chapter7.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/i/bg8-5.webp" %}
<img class="pict1" src="../../img/bg/p/bg163.webp" data-bg="../../img/bg/i/bg8-5.webp" alt="">
{% assign rows = site.data.light_of_the_martyrium.part26.chapter8.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/i/bg8-5.webp" %}
<img class="pict1" src="../../img/bg/p/bg163-1.webp" data-bg="../../img/bg/i/bg8-5.webp" alt="">
{% assign rows = site.data.light_of_the_martyrium.part26.chapter9.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/i/bg8-5.webp" %}
<img class="pict1" src="../../img/bg/p/bg163-2.webp" data-bg="../../img/bg/i/bg8-5.webp" alt="">
{% assign rows = site.data.light_of_the_martyrium.part26.chapter10.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/i/bg8-5.webp" %}
<img class="pict1" src="../../img/bg/p/bg163-3.webp" data-bg="../../img/bg/i/bg8-5.webp" alt="">
{% assign rows = site.data.light_of_the_martyrium.part26.chapter11.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/i/bg8-5.webp" %}
<img class="pict1" src="../../img/bg/p/bg163-4.webp" data-bg="../../img/bg/i/bg8-5.webp" alt="">
{% assign rows = site.data.light_of_the_martyrium.part26.chapter12.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/i/bg8-5.webp" %}
</div> <!-- конец главы -->

<div class="chapter" id="part27"> <!-- начало главы -->
<p class="title-1">К третьей смерти</p>
<img class="pict1" src="../../img/bg/i/bg8-5.webp" data-bg="../../img/bg/i/bg8-5.webp" alt="">
{% assign rows = site.data.light_of_the_martyrium.part27.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/i/bg8-5.webp" %}
{% include break_dark.html %}
{% assign rows = site.data.light_of_the_martyrium.part27.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/i/bg8-5.webp" %}
{% include break_dark.html %}
{% assign rows = site.data.light_of_the_martyrium.part27.chapter3.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/i/bg8-5.webp" %}
</div> <!-- конец главы -->

<div class="chapter" id="part28"> <!-- начало главы -->
<p class="title-1">Воссоздание</p>
<img class="pict1" src="../../img/bg/i/bg8-5.webp" data-bg="../../img/bg/i/bg8-5.webp" alt="">
{% assign rows = site.data.light_of_the_martyrium.part28.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/i/bg8-5.webp" %}
{% include break_dark.html %}
{% assign rows = site.data.light_of_the_martyrium.part28.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/i/bg8-5.webp" %}
{% include break_light.html %}
<img class="pict1" src="../../img/bg/x/bg25.webp" data-bg="../../img/bg/x/bg25.webp" alt="">
{% assign rows = site.data.light_of_the_martyrium.part28.chapter3.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/x/bg25.webp" %}
{% include break_light.html %}
{% assign rows = site.data.light_of_the_martyrium.part28.chapter4.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/x/bg25.webp" %}
</div> <!-- конец главы -->

<div class="chapter" id="part29"> <!-- начало главы -->
<p class="title-1">Охота продолжается</p>
<img class="pict1" src="../../img/bg/i/bg8-5.webp" data-bg="../../img/bg/i/bg8-5.webp" alt="">
{% include loc.html td_class="loc" text="Ядро Мартириума — У базилики" %}
{% assign rows = site.data.light_of_the_martyrium.part29.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/i/bg8-5.webp" %}
{% include break_light.html %}
<img class="pict1" src="../../img/bg/u/bg4-7.webp" data-bg="../../img/bg/u/bg4-7.webp" alt="">
{% assign rows = site.data.light_of_the_martyrium.part29.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/u/bg4-7.webp" %}
{% include break_gold.html %}
{% assign rows = site.data.light_of_the_martyrium.part29.chapter3.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/u/bg4-7.webp" %}
{% include break_light.html %}
<img class="pict1" src="../../img/bg/i/bg8-5.webp" data-bg="../../img/bg/i/bg8-5.webp" alt="">
{% assign rows = site.data.light_of_the_martyrium.part29.chapter4.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/i/bg8-5.webp" %}
{% include break_gold.html %}
{% assign rows = site.data.light_of_the_martyrium.part29.chapter5.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/i/bg8-5.webp" %}
<img class="pict1" src="../../img/bg/i/bg8-4.webp" data-bg="../../img/bg/i/bg8-4.webp" alt="">
{% assign rows = site.data.light_of_the_martyrium.part29.chapter6.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/i/bg8-4.webp" %}
{% include break_gold.html %}
<img class="pict1" src="../../img/bg/i/bg8-3.webp" data-bg="../../img/bg/i/bg8-3.webp" alt="">
{% assign rows = site.data.light_of_the_martyrium.part29.chapter7.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/i/bg8-3.webp" %}
{% include break_light.html %}
<img class="pict1" src="../../img/bg/i/bg8-6.webp" data-bg="../../img/bg/i/bg8-6.webp" alt="">
{% assign rows = site.data.light_of_the_martyrium.part29.chapter8.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/i/bg8-6.webp" %}
{% include break_dark.html %}
{% assign rows = site.data.light_of_the_martyrium.part29.chapter9.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/i/bg8-6.webp" %}
{% include break_dark.html %}
{% include blackscreen.html lines=site.data.light_of_the_martyrium.scenes.black_scene7 %}
</div> <!-- конец главы -->

<div class="chapter" id="part30"> <!-- начало главы -->
<p class="title-1">Хранимые секреты</p>
{% include location.html lines=site.data.light_of_the_martyrium.scenes.black_scene8 %}
<img class="pict1" src="../../img/bg/u/bg4-7.webp" data-bg="../../img/bg/u/bg4-7.webp" alt="">
{% assign rows = site.data.light_of_the_martyrium.part30.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/u/bg4-7.webp" %}
{% include choice_header.html %}
{% assign rows = site.data.light_of_the_martyrium.part30.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/u/bg4-7.webp" bg_overlay="blue-choise" %}
{% assign rows = site.data.light_of_the_martyrium.part30.chapter3.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/u/bg4-7.webp" bg_overlay="red-choise" %}
{% assign rows = site.data.light_of_the_martyrium.part30.chapter4.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/u/bg4-7.webp" %}
{% include choice_header.html %}
{% assign rows = site.data.light_of_the_martyrium.part30.chapter5.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/u/bg4-7.webp" bg_overlay="blue-choise" %}
{% assign rows = site.data.light_of_the_martyrium.part30.chapter6.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/u/bg4-7.webp" bg_overlay="red-choise" %}
{% assign rows = site.data.light_of_the_martyrium.part30.chapter7.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/u/bg4-7.webp" %}
</div> <!-- конец главы -->

<div class="chapter" id="part31"> <!-- начало главы -->
<p class="title-1">Взгляд во тьме</p>
<img class="pict1" src="../../img/bg/z/bg6-1.webp" data-bg="../../img/bg/z/bg6-1.webp" alt="">
{% assign rows = site.data.light_of_the_martyrium.part31.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/z/bg6-1.webp" %}
{% include break_dark.html %}
{% assign rows = site.data.light_of_the_martyrium.part31.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/z/bg6-1.webp" %}
</div> <!-- конец главы -->

<div class="chapter" id="part32"> <!-- начало главы -->
<p class="title-1">Минутная передышка</p>
<img class="pict1" src="../../img/bg/z/bg11-1.webp" data-bg="../../img/bg/z/bg11-1.webp" alt="">
{% include loc.html td_class="loc" text="Тестовый полигон бета — Внешний периметр обороны" %}
{% assign rows = site.data.light_of_the_martyrium.part32.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/z/bg11-1.webp" %}
{% include break_dark.html %}
<img class="pict1" src="../../img/bg/x/bg23.webp" data-bg="../../img/bg/x/bg23.webp" alt="">
{% include loc.html td_class="loc" text="Где-то в Тихом Океане..." %}
{% assign rows = site.data.light_of_the_martyrium.part32.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/x/bg23.webp" %}
{% include break_dark.html %}
{% assign rows = site.data.light_of_the_martyrium.part32.chapter3.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/x/bg23.webp" %}
</div> <!-- конец главы -->

<div class="chapter" id="part33"> <!-- начало главы -->
<p class="title-1">Срочная помощь</p>
<img class="pict1" src="../../img/bg/x/bg25.webp" data-bg="../../img/bg/x/bg25.webp" alt="">
{% include loc.html td_class="loc" text="Где-то на тестовом полигоне F-45733..." %}
{% assign rows = site.data.light_of_the_martyrium.part33.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/x/bg25.webp" %}
</div> <!-- конец главы -->

<div class="chapter" id="part34"> <!-- начало главы -->
<p class="title-1">Инцидент в Пацифике</p>
{% include location.html lines=site.data.light_of_the_martyrium.scenes.black_scene9 %}
<img class="pict1" src="../../img/bg/bg10-1.webp" data-bg="../../img/bg/bg10-1.webp" alt="">
{% assign rows = site.data.light_of_the_martyrium.part34.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg10-1.webp" %}
</div> <!-- конец главы -->

<div class="chapter" id="part35"> <!-- начало главы -->
<p class="title-1">Пылающее сердце</p>
{% include blackscreen.html lines=site.data.light_of_the_martyrium.scenes.black_scene10 %}
<img class="pict1" src="../../img/bg/s/bg5.webp" data-bg="../../img/bg/s/bg5.webp" alt="">
{% include loc.html td_class="loc" text="Диадема Света — Утро" %}
{% assign rows = site.data.light_of_the_martyrium.part35.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/s/bg5.webp" %}
{% include break_dark.html %}
{% assign rows = site.data.light_of_the_martyrium.part35.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/s/bg5.webp" %}
{% include break_dark.html %}
{% assign rows = site.data.light_of_the_martyrium.part35.chapter3.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/s/bg5.webp" %}
{% include break_dark.html %}
{% assign rows = site.data.light_of_the_martyrium.part35.chapter4.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/s/bg5.webp" %}
{% include break_dark.html %}
{% include blackscreen.html lines=site.data.light_of_the_martyrium.scenes.black_scene11 %}
<div class="image-overlay-container">
    <img class="base-image pict1" src="../../img/bg/s/bg5-1.webp" alt="">
    <img class="overlay-layer pict1" src="/img/bg/bgdark.png" alt="">
</div>
{% assign rows = site.data.light_of_the_martyrium.part35.chapter5.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/s/bg5-1.webp" bg_overlay="dark" %}
{% include break_light.html %}
{% assign rows = site.data.light_of_the_martyrium.part35.chapter6.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bgw.webp" bg_overlay="white-full" %}
</div> <!-- конец главы -->

