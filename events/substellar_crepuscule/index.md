---
layout: event
title: "Субзвёздные Сумерки"
slug: substellar_crepuscule
menu_cards:
  - img: "menu.webp"
    from: 1
    to: 5
  - img: "menu1.webp"
    from: 6
    to: 8
  - img: "menu.webp"
    from: 9
    to: 12
  - img: "menu1.webp"
    from: 13
    to: 15
  - img: "menu.webp"
    from: 16
    to: 18
  - img: "menu1.webp"
    from: 19
    to: 20
  - img: "menu2.webp"
    from: 21
    to: 21
  - img: "menu.webp"
    from: 22
    to: 22
  - img: "menu1.webp"
    from: 23
    to: 24
  - img: "menu.webp"
    from: 25
    to: 29
  - img: "menu3.webp"
    from: 30
    to: 33
chapters:
  - "Судьбоносная встреча"
  - "Установка контакта"
  - "Сопротивление"
  - "База на закате"
  - "Скверное предчувствие"
  - "Далёкая битва"
  - "В павильоне Сакуры"
  - "Старый друг?"
  - "Второй шанс"
  - "Восстановление Вечных Звёзд"
  - "Кристаллизованная сила"
  - "Жертвенная охота"
  - "Косвенное позиционирование"
  - "О Командире"
  - "Размышления и обсуждение"
  - "Приготовления"
  - "На защиту штаба"
  - "Владыка звёзд"
  - "Внутри магического круга"
  - "Пределы возможного"
  - "Подготовка к решающей битве"
  - "Исчезнуть в тумане"
  - "Воспоминание"
  - "Единение"
  - "Другой план"
  - "Воплощение эмоций"
  - "Бок о бок"
  - "Прорицание Фокусника"
  - "Эпилог"
  - "Верхушка айсберга"
  - "Навстречу будущему"
  - "Её новая игрушка"
  - "Немногие избранные"
menu_bg: /img/bg/b/bg5.webp
---

<div class="chapter" id="part1"> <!-- начало главы -->
<p class="title-1">Судьбоносная встреча</p>
{% include location.html lines=site.data.substellar_crepuscule.scenes.black_scene %}
<img class="pict1" src="../../img/bg/x/bg19-5.webp" data-bg="../../img/bg/x/bg19-5.webp" alt="">
{% assign rows = site.data.substellar_crepuscule.part1.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/x/bg19-5.webp" %}
{% include break_dark.html %}
{% assign rows = site.data.substellar_crepuscule.part1.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/x/bg19-5.webp" %}
{% include blackscreen.html lines=site.data.substellar_crepuscule.scenes.black_scene1 %}
{% include break_dark.html %}
{% include loc.html td_class="loc" text="Некоторое время спустя, внутри Восходящего прилива..." %}
{% assign rows = site.data.substellar_crepuscule.part1.chapter3.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/x/bg19-5.webp" %}
</div> <!-- конец главы -->

<div class="chapter" id="part2"> <!-- начало главы -->
<p class="title-1">Установка контакта</p>
<img class="pict1" src="../../img/bg/x/bg19-5.webp" data-bg="../../img/bg/x/bg19-5.webp" alt="">
{% assign rows = site.data.substellar_crepuscule.part2.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/x/bg19-5.webp" %}
<img class="pict1" src="../../img/bg/y/bg3.webp" data-bg="../../img/bg/y/bg3.webp" alt="">
{% include loc.html td_class="loc" text="Серийный корабль - Комната отдыха" %}
{% assign rows = site.data.substellar_crepuscule.part2.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/y/bg3.webp" %}
{% include choice_header.html %}
{% assign rows = site.data.substellar_crepuscule.part2.chapter3.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/y/bg3.webp" bg_overlay="blue-choise" %}
{% assign rows = site.data.substellar_crepuscule.part2.chapter4.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/y/bg3.webp" bg_overlay="red-choise" %}
{% assign rows = site.data.substellar_crepuscule.part2.chapter5.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/y/bg3.webp" bg_overlay="yellow-choise" %}
{% include break_dark.html %}
<img class="pict1" src="../../img/bg/x/bg20-1.webp" data-bg="../../img/bg/x/bg20-1.webp" alt="">
{% assign rows = site.data.substellar_crepuscule.part2.chapter6.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/x/bg20-1.webp" %}
<img class="pict1" src="../../img/bg/b/bg5.webp" data-bg="../../img/bg/b/bg5.webp" alt="">
{% assign rows = site.data.substellar_crepuscule.part2.chapter7.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/b/bg5.webp" %}
</div> <!-- конец главы -->

<div class="chapter" id="part3"> <!-- начало главы -->
<p class="title-1">Сопротивление</p>
<img class="pict1" src="../../img/bg/y/bg3.webp" data-bg="../../img/bg/y/bg3.webp" alt="">
{% include loc.html td_class="loc" text="Штаб-квартира Сопротивления - Гостевая комната" %}
{% include loc.html td_class="loc" text="На следующий день..." %}
{% assign rows = site.data.substellar_crepuscule.part3.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/y/bg3.webp" %}
{% include break_light.html %}
{% assign rows = site.data.substellar_crepuscule.part3.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg memory-segment" bg_file="/img/bg/y/bg3.webp" %}
{% include break_light.html %}
<img class="pict1" src="../../img/bg/b/bg5.webp" data-bg="../../img/bg/b/bg5.webp" alt="">
{% include loc.html td_class="loc" text="Штаб-квартира Сопротивления - Центральная площадь" %}
{% include loc.html td_class="loc" text="Позже, в полдень..." %}
{% assign rows = site.data.substellar_crepuscule.part3.chapter3.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/b/bg5.webp" %}
<img class="pict1" src="../../img/bg/p/bg185.webp" data-bg="../../img/bg/b/bg5.webp" alt="">
{% assign rows = site.data.substellar_crepuscule.part3.chapter4.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/b/bg5.webp" %}
<img class="pict1" src="../../img/bg/y/bg40.webp" data-bg="../../img/bg/y/bg40.webp" alt="">
{% include loc.html td_class="loc" text="Штаб-квартира Сопротивления - Кабинет Командующего" %}
{% assign rows = site.data.substellar_crepuscule.part3.chapter5.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/y/bg40.webp" %}
</div> <!-- конец главы -->

<div class="chapter" id="part4"> <!-- начало главы -->
<p class="title-1">База на закате</p>
<img class="pict1" src="../../img/bg/y/bg3.webp" data-bg="../../img/bg/y/bg3.webp" alt="">
{% assign rows = site.data.substellar_crepuscule.part4.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/y/bg3.webp" %}
{% include break_light.html %}
{% assign rows = site.data.substellar_crepuscule.part4.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg memory-segment" bg_file="/img/bg/y/bg40.webp" %}
{% include break_light.html %}
{% assign rows = site.data.substellar_crepuscule.part4.chapter3.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/y/bg3.webp" %}
{% include break_light.html %}
{% assign rows = site.data.substellar_crepuscule.part4.chapter4.rows %}
{% include dialog.html rows=rows bg_class="table-bg memory-segment" bg_file="/img/bg/y/bg40.webp" %}
{% include break_light.html %}
{% assign rows = site.data.substellar_crepuscule.part4.chapter5.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/y/bg3.webp" %}
{% include break_dark.html %}
{% assign rows = site.data.substellar_crepuscule.part4.chapter6.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/y/bg3.webp" %}
{% include break_dark.html %}
<img class="pict1" src="../../img/bg/b/bg5.webp" data-bg="../../img/bg/b/bg5.webp" alt="">
{% include loc.html td_class="loc" text="Штаб-квартира Сопротивления - Территория рядом со штабом" %}
{% include loc.html td_class="loc" text="Некоторое время спустя..." %}
{% assign rows = site.data.substellar_crepuscule.part4.chapter7.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/b/bg5.webp" %}
{% include choice_header.html %}
{% assign rows = site.data.substellar_crepuscule.part4.chapter8.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/b/bg5.webp" bg_overlay="blue-choise" %}
{% assign rows = site.data.substellar_crepuscule.part4.chapter9.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/b/bg5.webp" bg_overlay="red-choise" %}
{% assign rows = site.data.substellar_crepuscule.part4.chapter10.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/b/bg5.webp" %}
<img class="pict1" src="../../img/bg/p/bg186.webp" data-bg="../../img/bg/bgb.png" alt="">
{% include loc.html td_class="loc" text="Внутри башни" %}
{% include loc.html td_class="loc" text="Некоторое время спустя..." %}
{% assign rows = site.data.substellar_crepuscule.part4.chapter11.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bgb.png" %}
{% include break_dark.html %}
<img class="pict1" src="../../img/bg/b/bg5-1.webp" data-bg="../../img/bg/b/bg5-1.webp" alt="">
{% assign rows = site.data.substellar_crepuscule.part4.chapter12.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/b/bg5-1.webp" %}
</div> <!-- конец главы -->

<div class="chapter" id="part5"> <!-- начало главы -->
<p class="title-1">Скверное предчувствие</p>
<img class="pict1" src="../../img/bg/x/bg20-1.webp" data-bg="../../img/bg/x/bg20-1.webp" alt="">
{% include loc.html td_class="loc" text="Остров Сопротивления - Место встречи" %}
{% assign rows = site.data.substellar_crepuscule.part5.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/x/bg20-1.webp" %}
{% include break_dark.html %}
<img class="pict1" src="../../img/bg/x/bg19.webp" data-bg="../../img/bg/x/bg19.webp" alt="">
{% assign rows = site.data.substellar_crepuscule.part5.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/x/bg19.webp" %}
{% include break_dark.html %}
{% assign rows = site.data.substellar_crepuscule.part5.chapter3.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bgb.webp" %}
</div> <!-- конец главы -->

<div class="chapter" id="part6"> <!-- начало главы -->
<p class="title-1">Далёкая битва</p>
{% include location.html lines=site.data.substellar_crepuscule.scenes.black_scene2 %}
<img class="pict1" src="../../img/bg/c/bg4.webp" data-bg="../../img/bg/c/bg4.webp" alt="">
{% assign rows = site.data.substellar_crepuscule.part6.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/c/bg4.webp" %}
</div> <!-- конец главы -->

<div class="chapter" id="part7"> <!-- начало главы -->
<p class="title-1">В павильоне Сакуры</p>
{% include location.html lines=site.data.substellar_crepuscule.scenes.black_scene3 %}
<img class="pict1" src="../../img/bg/s/bg13-2.webp" data-bg="../../img/bg/s/bg13-2.webp" alt="">
{% assign rows = site.data.substellar_crepuscule.part7.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/s/bg13-2.webp" %}
</div> <!-- конец главы -->

<div class="chapter" id="part8"> <!-- начало главы -->
<p class="title-1">Старый друг?</p>
{% include break_light.html %}
<img class="pict1" src="../../img/bg/c/bg6.webp" data-bg="../../img/bg/c/bg6.webp" alt="">
{% assign rows = site.data.substellar_crepuscule.part8.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/c/bg6.webp" %}
{% include break_light.html %}
{% assign rows = site.data.substellar_crepuscule.part8.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bgw.png" bg_overlay="white-full" %}
</div> <!-- конец главы -->

<div class="chapter" id="part9"> <!-- начало главы -->
<p class="title-1">Второй шанс</p>
{% include blackscreen.html lines=site.data.substellar_crepuscule.scenes.black_scene4 %}
{% assign rows = site.data.substellar_crepuscule.part9.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bgb.webp" %}
{% include break_light.html %}
<img class="pict1" src="../../img/bg/y/bg3.webp" data-bg="../../img/bg/y/bg3.webp" alt="">
{% assign rows = site.data.substellar_crepuscule.part9.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/y/bg3.webp" %}
{% include break_dark.html %}
{% assign rows = site.data.substellar_crepuscule.part9.chapter3.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/y/bg3.webp" %}
{% include break_dark.html %}
<img class="pict1" src="../../img/bg/y/bg40.webp" data-bg="../../img/bg/y/bg40.webp" alt="">
{% include loc.html td_class="loc" text="Штаб-квартира Сопротивления - Кабинет Командующего" %}
{% include loc.html td_class="loc" text="Примерно 30 минут спустя..." %}
{% assign rows = site.data.substellar_crepuscule.part9.chapter4.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/y/bg40.webp" %}
</div> <!-- конец главы -->

<div class="chapter" id="part10"> <!-- начало главы -->
<p class="title-1">Восстановление Вечных Звёзд</p>
<img class="pict1" src="../../img/bg/b/bg5.webp" data-bg="../../img/bg/b/bg5.webp" alt="">
{% assign rows = site.data.substellar_crepuscule.part10.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/b/bg5.webp" %}
<img class="pict1" src="../../img/bg/y/bg3.webp" data-bg="../../img/bg/y/bg3.webp" alt="">
{% include loc.html td_class="loc" text="Вечная звезда - Внутри" %}
{% include loc.html td_class="loc" text="Некоторое время спустя..." %}
{% assign rows = site.data.substellar_crepuscule.part10.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/y/bg3.webp" %}
{% include break_light.html %}
<img class="pict1" src="../../img/bg/b/bg5.webp" data-bg="../../img/bg/b/bg5.webp" alt="">
{% assign rows = site.data.substellar_crepuscule.part10.chapter3.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/b/bg5.webp" %}
{% include break_dark.html %}
{% assign rows = site.data.substellar_crepuscule.part10.chapter4.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/b/bg5.webp" %}
</div> <!-- конец главы -->

<div class="chapter" id="part11"> <!-- начало главы -->
<p class="title-1">Кристаллизованная сила</p>
<img class="pict1" src="../../img/bg/x/bg19-2.webp" data-bg="../../img/bg/x/bg19-2.webp" alt="">
{% assign rows = site.data.substellar_crepuscule.part11.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/x/bg19-2.webp" %}
{% include break_dark.html %}
<img class="pict1" src="../../img/bg/z/bg9.webp" data-bg="../../img/bg/z/bg9.webp" alt="">
{% assign rows = site.data.substellar_crepuscule.part11.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/z/bg9.webp" %}
{% include break_dark.html %}
<img class="pict1" src="../../img/bg/x/bg7.webp" data-bg="../../img/bg/x/bg7.webp" alt="">
{% assign rows = site.data.substellar_crepuscule.part11.chapter3.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/x/bg7.webp" %}
{% include break_dark.html %}
{% include blackscreen.html lines=site.data.substellar_crepuscule.scenes.black_scene5 %}
{% include break_dark.html %}
{% include blackscreen.html lines=site.data.substellar_crepuscule.scenes.black_scene6 %}
{% include break_dark.html %}
{% assign rows = site.data.substellar_crepuscule.part11.chapter4.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/x/bg7.webp" %}
{% include break_dark.html %}
<img class="pict1" src="../../img/bg/z/bg9.webp" data-bg="../../img/bg/z/bg9.webp" alt="">
{% assign rows = site.data.substellar_crepuscule.part11.chapter5.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/z/bg9.webp" %}
</div> <!-- конец главы -->

<div class="chapter" id="part12"> <!-- начало главы -->
<p class="title-1">Жертвенная охота</p>
<img class="pict1" src="../../img/bg/x/bg19-2.webp" data-bg="../../img/bg/x/bg19-2.webp" alt="">
{% include loc.html td_class="loc" text="Сектор IB-AX-98" %}
{% assign rows = site.data.substellar_crepuscule.part12.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/x/bg19-2.webp" %}
{% include break_dark.html %}
{% include loc.html td_class="loc" text="Сектор IB-AX-98" %}
{% assign rows = site.data.substellar_crepuscule.part12.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/x/bg19-2.webp" %}
{% include break_dark.html %}
{% assign rows = site.data.substellar_crepuscule.part12.chapter3.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/x/bg19-2.webp" %}
{% include break_dark.html %}
{% assign rows = site.data.substellar_crepuscule.part12.chapter4.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bgb.png" %}
</div> <!-- конец главы -->

<div class="chapter" id="part13"> <!-- начало главы -->
<p class="title-1">Косвенное позиционирование</p>
{% include location.html lines=site.data.substellar_crepuscule.scenes.black_scene2 %}
<img class="pict1" src="../../img/bg/c/bg4.webp" data-bg="../../img/bg/c/bg4.webp" alt="">
{% assign rows = site.data.substellar_crepuscule.part13.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/c/bg4.webp" %}
{% include break_blue.html %}
{% assign rows = site.data.substellar_crepuscule.part13.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/c/bg4.webp" %}
</div> <!-- конец главы -->

<div class="chapter" id="part14"> <!-- начало главы -->
<p class="title-1">О Командире</p>
{% include location.html lines=site.data.substellar_crepuscule.scenes.black_scene3 %}
<img class="pict1" src="../../img/bg/s/bg13-2.webp" data-bg="../../img/bg/s/bg13-2.webp" alt="">
{% assign rows = site.data.substellar_crepuscule.part14.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/s/bg13-2.webp" %}
{% include break_dark.html %}
{% assign rows = site.data.substellar_crepuscule.part14.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/s/bg13-2.webp" %}
{% include break_light.html %}
{% assign rows = site.data.substellar_crepuscule.part14.chapter3.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/s/bg13-2.webp" %}
</div> <!-- конец главы -->

<div class="chapter" id="part15"> <!-- начало главы -->
<p class="title-1">Размышления и обсуждение</p>
{% include break_light.html %}
<img class="pict1" src="../../img/bg/c/bg6.webp" data-bg="../../img/bg/c/bg6.webp" alt="">
{% assign rows = site.data.substellar_crepuscule.part15.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/c/bg6.webp" %}
</div> <!-- конец главы -->

<div class="chapter" id="part16"> <!-- начало главы -->
<p class="title-1">Приготовления</p>
{% include blackscreen.html lines=site.data.substellar_crepuscule.scenes.black_scene7 %}
<img class="pict1" src="../../img/bg/z/bg9.webp" data-bg="../../img/bg/z/bg9.webp" alt="">
{% assign rows = site.data.substellar_crepuscule.part16.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/z/bg9.webp" %}
{% include break_dark.html %}
<img class="pict1" src="../../img/bg/x/bg7.webp" data-bg="../../img/bg/x/bg7.webp" alt="">
{% assign rows = site.data.substellar_crepuscule.part16.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/x/bg7.webp" %}
{% include blackscreen.html lines=site.data.substellar_crepuscule.scenes.black_scene8 %}
{% include blackscreen.html lines=site.data.substellar_crepuscule.scenes.black_scene9 %}
{% assign rows = site.data.substellar_crepuscule.part16.chapter3.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/x/bg7.webp" %}
{% include break_dark.html %}
<img class="pict1" src="../../img/bg/z/bg9.webp" data-bg="../../img/bg/z/bg9.webp" alt="">
{% assign rows = site.data.substellar_crepuscule.part16.chapter4.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/z/bg9.webp" %}
{% include choice_header.html %}
{% assign rows = site.data.substellar_crepuscule.part16.chapter5.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/z/bg9.webp" bg_overlay="blue-choise" %}
{% assign rows = site.data.substellar_crepuscule.part16.chapter6.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/z/bg9.webp" bg_overlay="red-choise" %}
{% assign rows = site.data.substellar_crepuscule.part16.chapter7.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/z/bg9.webp" %}
{% include break_dark.html %}
{% assign rows = site.data.substellar_crepuscule.part16.chapter8.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/z/bg9.webp" %}
</div> <!-- конец главы -->

<div class="chapter" id="part17"> <!-- начало главы -->
<p class="title-1">На защиту штаба</p>
<img class="pict1" src="../../img/bg/b/bg5-2.webp" data-bg="../../img/bg/b/bg5-2.webp" alt="">
{% assign rows = site.data.substellar_crepuscule.part17.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/b/bg5-2.webp" %}
{% include break_dark.html %}
{% assign rows = site.data.substellar_crepuscule.part17.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/b/bg5-2.webp" %}
{% include break_dark.html %}
{% assign rows = site.data.substellar_crepuscule.part17.chapter3.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/b/bg5-2.webp" %}
{% include break_dark.html %}
{% assign rows = site.data.substellar_crepuscule.part17.chapter4.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/b/bg5-2.webp" %}
</div> <!-- конец главы -->

<div class="chapter" id="part18"> <!-- начало главы -->
<p class="title-1">Владыка звёзд</p>
<img class="pict1" src="../../img/bg/x/bg19-2.webp" data-bg="../../img/bg/x/bg19-2.webp" alt="">
{% assign rows = site.data.substellar_crepuscule.part18.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/x/bg19-2.webp" %}
{% include break_dark.html %}
<img class="pict1" src="../../img/bg/p/bg187.webp" data-bg="../../img/bg/x/bg19-2.webp" alt="">
{% assign rows = site.data.substellar_crepuscule.part18.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/x/bg19-2.webp" %}
{% include break_dark.html %}
{% assign rows = site.data.substellar_crepuscule.part18.chapter3.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/x/bg19-2.webp" %}
<img class="pict1" src="../../img/bg/p/bg187-1.webp" data-bg="../../img/bg/x/bg19-2.webp" alt="">
{% assign rows = site.data.substellar_crepuscule.part18.chapter4.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/x/bg19-2.webp" %}
{% include break_light.html %}
<img class="pict1" src="../../img/bg/p/bg187-2.webp" data-bg="../../img/bg/bgw.webp" alt="">
{% assign rows = site.data.substellar_crepuscule.part18.chapter5.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bgw.webp" bg_overlay="white-full" %}
{% include break_light.html %}
{% assign rows = site.data.substellar_crepuscule.part18.chapter6.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bgw.webp" bg_overlay="white-full" %}
</div> <!-- конец главы -->

<div class="chapter" id="part19"> <!-- начало главы -->
<p class="title-1">Внутри магического круга</p>
{% include location.html lines=site.data.substellar_crepuscule.scenes.black_scene3 %}
<img class="pict1" src="../../img/bg/s/bg13-2.webp" data-bg="../../img/bg/s/bg13-2.webp" alt="">
{% assign rows = site.data.substellar_crepuscule.part19.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/s/bg13-2.webp" %}
<img class="pict1" src="../../img/bg/x/bg25.webp" data-bg="../../img/bg/x/bg25.webp" alt="">
{% assign rows = site.data.substellar_crepuscule.part19.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/x/bg25.webp" %}
{% include break_gold.html %}
{% assign rows = site.data.substellar_crepuscule.part19.chapter3.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/x/bg25.webp" %}
</div> <!-- конец главы -->

<div class="chapter" id="part20"> <!-- начало главы -->
<p class="title-1">Пределы возможного</p>
{% include break_light.html %}
<img class="pict1" src="../../img/bg/c/bg6.webp" data-bg="../../img/bg/c/bg6.webp" alt="">
{% assign rows = site.data.substellar_crepuscule.part20.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/c/bg6.webp" %}
</div> <!-- конец главы -->

<div class="chapter" id="part21"> <!-- начало главы -->
<p class="title-1">Подготовка к решающей битве</p>
{% include blackscreen.html lines=site.data.substellar_crepuscule.scenes.black_scene10 %}
<img class="pict1" src="../../img/bg/b/bg5-2.webp" data-bg="../../img/bg/b/bg5-2.webp" alt="">
{% assign rows = site.data.substellar_crepuscule.part21.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/b/bg5-2.webp" %}
</div> <!-- конец главы -->

<div class="chapter" id="part22"> <!-- начало главы -->
<p class="title-1">Исчезнуть в тумане</p>
{% include loc.html td_class="loc" text="Парящая лодка" %}
<img class="pict1" src="../../img/bg/p/bg188.webp" data-bg="../../img/bg/b/bg5-2.webp" alt="">
{% assign rows = site.data.substellar_crepuscule.part22.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/b/bg5-2.webp" %}
{% include break_dark.html %}
{% assign rows = site.data.substellar_crepuscule.part22.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/b/bg5-2.webp" %}
{% include break_dark.html %}
{% include loc.html td_class="loc" text="Вечная Звезда - Комната Управления" %}
{% include loc.html td_class="loc" text="Некоторое время спустя..." %}
{% assign rows = site.data.substellar_crepuscule.part22.chapter3.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/b/bg5-2.webp" %}
{% include break_dark.html %}
<img class="pict1" src="../../img/bg/p/bg187.webp" data-bg="../../img/bg/b/bg5-2.webp" alt="">
{% assign rows = site.data.substellar_crepuscule.part22.chapter4.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/b/bg5-2.webp" %}
{% include break_light.html %}
{% assign rows = site.data.substellar_crepuscule.part22.chapter5.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/b/bg5-2.webp" %}
{% include break_dark.html %}
{% assign rows = site.data.substellar_crepuscule.part22.chapter6.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/b/bg5-2.webp" %}
<img class="pict1" src="../../img/bg/x/bg19-2.webp" data-bg="../../img/bg/x/bg19-2.webp" alt="">
{% assign rows = site.data.substellar_crepuscule.part22.chapter7.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/x/bg19-2.webp" %}
<img class="pict1" src="../../img/bg/p/bg187-1.webp" data-bg="../../img/bg/x/bg19-2.webp" alt="">
{% assign rows = site.data.substellar_crepuscule.part22.chapter8.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/x/bg19-2.webp" %}
{% include break_light.html %}
<img class="pict1" src="../../img/bg/p/bg187-2.webp" data-bg="../../img/bg/bgw.webp" alt="">
{% assign rows = site.data.substellar_crepuscule.part22.chapter9.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bgw.webp" bg_overlay="white-full" %}
</div> <!-- конец главы -->

<div class="chapter" id="part23"> <!-- начало главы -->
<p class="title-1">Воспоминание</p>
{% include location.html lines=site.data.substellar_crepuscule.scenes.black_scene3 %}
<img class="pict1" src="../../img/bg/bg29.webp" data-bg="../../img/bg/bg29.webp" alt="">
{% assign rows = site.data.substellar_crepuscule.part23.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg29.webp" %}
{% include break_dark.html %}
<img class="pict1" src="../../img/bg/a/bg1.webp" data-bg="../../img/bg/a/bg1.webp" alt="">
{% assign rows = site.data.substellar_crepuscule.part23.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/a/bg1.webp" %}
{% include break_gold.html %}
{% assign rows = site.data.substellar_crepuscule.part23.chapter3.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg29.webp" %}
{% include break_dark.html %}
<img class="pict1" src="../../img/bg/z/bg3.webp" data-bg="../../img/bg/z/bg3.webp" alt="">
{% assign rows = site.data.substellar_crepuscule.part23.chapter4.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/z/bg3.webp" %}
{% include break_gold.html %}
{% assign rows = site.data.substellar_crepuscule.part23.chapter5.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg29.webp" %}
{% include break_dark.html %}
<img class="pict1" src="../../img/bg/a/bg3-1.webp" data-bg="../../img/bg/a/bg3-1.webp" alt="">
{% assign rows = site.data.substellar_crepuscule.part23.chapter6.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/a/bg3-1.webp" %}
{% include break_gold.html %}
{% assign rows = site.data.substellar_crepuscule.part23.chapter7.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg29.webp" %}
{% include break_dark.html %}
<img class="pict1" src="../../img/bg/x/bg24-1.webp" data-bg="../../img/bg/x/bg24-1.webp" alt="">
{% assign rows = site.data.substellar_crepuscule.part23.chapter8.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/x/bg24-1.webp" %}
{% include break_gold.html %}
<img class="pict1" src="../../img/bg/x/bg31.webp" data-bg="../../img/bg/x/bg31.webp" alt="">
{% assign rows = site.data.substellar_crepuscule.part23.chapter9.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/x/bg31.webp" %}
{% include break_gold.html %}
<img class="pict1" src="../../img/bg/m/bg1-1.webp" data-bg="../../img/bg/m/bg1-1.webp" alt="">
{% assign rows = site.data.substellar_crepuscule.part23.chapter10.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/m/bg1-1.webp" %}
{% include break_gold.html %}
{% assign rows = site.data.substellar_crepuscule.part23.chapter11.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/m/bg1-1.webp" %}
{% include break_light.html %}
<img class="pict1" src="../../img/bg/m/bg1-4.webp" data-bg="../../img/bg/m/bg1-4.webp" alt="">
{% assign rows = site.data.substellar_crepuscule.part23.chapter12.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/m/bg1-4.webp" %}
{% include break_gold.html %}
{% assign rows = site.data.substellar_crepuscule.part23.chapter13.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/m/bg1-4.webp" %}
{% include break_gold.html %}
{% assign rows = site.data.substellar_crepuscule.part23.chapter14.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/m/bg1-4.webp" %}
{% include break_gold.html %}
{% assign rows = site.data.substellar_crepuscule.part23.chapter15.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/m/bg1-4.webp" %}
{% include break_light.html %}
<img class="pict1" src="../../img/bg/b/bg5-3.webp" data-bg="../../img/bg/b/bg5-3.webp" alt="">
{% assign rows = site.data.substellar_crepuscule.part23.chapter16.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/b/bg5-3.webp" %}
{% include break_light.html %}
<img class="pict1" src="../../img/bg/c/bg6.webp" data-bg="../../img/bg/c/bg6.webp" alt="">
{% assign rows = site.data.substellar_crepuscule.part23.chapter17.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/c/bg6.webp" %}
</div> <!-- конец главы -->

<div class="chapter" id="part24"> <!-- начало главы -->
<p class="title-1">Единение</p>
<img class="pict1" src="../../img/bg/c/bg6.webp" data-bg="../../img/bg/c/bg6.webp" alt="">
{% assign rows = site.data.substellar_crepuscule.part24.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/c/bg6.webp" %}
{% include break_gold.html %}
{% assign rows = site.data.substellar_crepuscule.part24.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/c/bg6.webp" %}
{% include break_light.html %}
{% assign rows = site.data.substellar_crepuscule.part24.chapter3.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/c/bg6.webp" %}
{% include break_gold.html %}
{% assign rows = site.data.substellar_crepuscule.part24.chapter4.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/c/bg6.webp" %}
{% include break_dark.html %}
{% assign rows = site.data.substellar_crepuscule.part24.chapter5.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/c/bg6.webp" %}
{% include break_light.html %}
{% assign rows = site.data.substellar_crepuscule.part24.chapter6.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/c/bg6.webp" %}
</div> <!-- конец главы -->

<div class="chapter" id="part25"> <!-- начало главы -->
<p class="title-1">Другой план</p>
{% include blackscreen.html lines=site.data.substellar_crepuscule.scenes.black_scene7 %}
<img class="pict1" src="../../img/bg/b/bg5-2.webp" data-bg="../../img/bg/b/bg5-2.webp" alt="">
{% assign rows = site.data.substellar_crepuscule.part25.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/b/bg5-2.webp" %}
</div> <!-- конец главы -->

<div class="chapter" id="part26"> <!-- начало главы -->
<p class="title-1">Воплощение эмоций</p>
<img class="pict1" src="../../img/bg/y/bg28.webp" data-bg="../../img/bg/y/bg28.webp" alt="">
{% include loc.html td_class="loc" text="Внутри энергетической башни." %}
{% include loc.html td_class="loc" text="Два часа спустя..." %}
{% assign rows = site.data.substellar_crepuscule.part26.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/y/bg28.webp" %}
{% include break_light.html %}
{% include break_dark.html %}
{% assign rows = site.data.substellar_crepuscule.part26.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bgb.webp" %}
{% include break_purple.html %}
{% assign rows = site.data.substellar_crepuscule.part26.chapter3.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bgb.webp" %}
{% include break_light.html %}
{% assign rows = site.data.substellar_crepuscule.part26.chapter4.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg4-1.webp" bg_overlay="white-full" %}
{% include break_light.html %}
{% assign rows = site.data.substellar_crepuscule.part26.chapter5.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/y/bg28.webp" %}
{% include break_dark.html %}
<img class="pict1" src="../../img/bg/b/bg5-2.webp" data-bg="../../img/bg/b/bg5-2.webp" alt="">
{% assign rows = site.data.substellar_crepuscule.part26.chapter6.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/b/bg5-2.webp" %}
</div> <!-- конец главы -->

<div class="chapter" id="part27"> <!-- начало главы -->
<p class="title-1">Бок о бок</p>
<img class="pict1" src="../../img/bg/b/bg5-2.webp" data-bg="../../img/bg/b/bg5-2.webp" alt="">
{% assign rows = site.data.substellar_crepuscule.part27.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/b/bg5-2.webp" %}
{% include break_dark.html %}
{% assign rows = site.data.substellar_crepuscule.part27.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/b/bg5-2.webp" %}
{% include break_dark.html %}
<img class="pict1" src="../../img/bg/p/bg187.webp" data-bg="../../img/bg/b/bg5-2.webp" alt="">
{% assign rows = site.data.substellar_crepuscule.part27.chapter3.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/b/bg5-2.webp" %}
{% include break_dark.html %}
{% include break_light.html %}
<img class="pict1" src="../../img/bg/p/bg187-1.webp" data-bg="../../img/bg/b/bg5-2.webp" alt="">
{% assign rows = site.data.substellar_crepuscule.part27.chapter4.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/b/bg5-2.webp" %}
{% include break_light.html %}
<img class="pict1" src="../../img/bg/p/bg187-3.webp" data-bg="../../img/bg/b/bg5-2.webp" alt="">
{% assign rows = site.data.substellar_crepuscule.part27.chapter5.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/b/bg5-2.webp" %}
{% include break_light.html %}
<img class="pict1" src="../../img/bg/p/bg187-2.webp" data-bg="../../img/bg/bgw.webp" alt="">
{% assign rows = site.data.substellar_crepuscule.part27.chapter6.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="../../img/bg/bgw.webp" bg_overlay="white-full" %}
{% include break_light.html %}
{% assign rows = site.data.substellar_crepuscule.part27.chapter7.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="../../img/bg/bgw.webp" bg_overlay="white-full" %}
{% include break_light.html %}
{% assign rows = site.data.substellar_crepuscule.part27.chapter8.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="../../img/bg/bgw.webp" bg_overlay="white-full" %}
{% include break_light.html %}
{% assign rows = site.data.substellar_crepuscule.part27.chapter9.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="../../img/bg/bgw.webp" bg_overlay="white-full" %}
{% include break_light.html %}
<img class="pict1" src="../../img/bg/b/bg5-1.webp" data-bg="../../img/bg/b/bg5-1.webp" alt="">
{% assign rows = site.data.substellar_crepuscule.part27.chapter10.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/b/bg5-1.webp" %}
{% include break_dark.html %}
{% assign rows = site.data.substellar_crepuscule.part27.chapter11.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/b/bg5-1.webp" %}
{% include break_light.html %}
{% assign rows = site.data.substellar_crepuscule.part27.chapter12.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg4-1.webp" bg_overlay="white-full" %}
</div> <!-- конец главы -->

<div class="chapter" id="part28"> <!-- начало главы -->
<p class="title-1">Прорицание Фокусника</p>
<img class="pict1" src="../../img/bg/c/bg6.webp" data-bg="../../img/bg/c/bg6.webp" alt="">
{% assign rows = site.data.substellar_crepuscule.part28.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/c/bg6.webp" %}
{% include break_light.html %}
<img class="pict1" src="../../img/bg/p/bg189.webp" data-bg="../../img/bg/bgb.webp" alt="">
{% assign rows = site.data.substellar_crepuscule.part28.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bgb.webp" %}
{% include break_dark.html %}
<img class="pict1" src="../../img/bg/p/bg189-1.webp" data-bg="../../img/bg/bgb.webp" alt="">
{% assign rows = site.data.substellar_crepuscule.part28.chapter3.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bgb.webp" %}
{% include break_dark.html %}
<img class="pict1" src="../../img/bg/p/bg189-2.webp" data-bg="../../img/bg/bgb.webp" alt="">
{% assign rows = site.data.substellar_crepuscule.part28.chapter4.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bgb.webp" %}
{% include break_dark.html %}
<img class="pict1" src="../../img/bg/p/bg189-3.webp" data-bg="../../img/bg/bgb.webp" alt="">
{% assign rows = site.data.substellar_crepuscule.part28.chapter5.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bgb.webp" %}
</div> <!-- конец главы -->

<div class="chapter" id="part29"> <!-- начало главы -->
<p class="title-1">Эпилог</p>
<img class="pict1" src="../../img/bg/x/bg25.webp" data-bg="../../img/bg/x/bg25.webp" alt="">
{% assign rows = site.data.substellar_crepuscule.part29.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/x/bg25.webp" %}
{% include blackscreen.html lines=site.data.substellar_crepuscule.scenes.black_scene11 %}
{% include blackscreen.html lines=site.data.substellar_crepuscule.scenes.black_scene12 %}
</div> <!-- конец главы -->

<div class="chapter" id="part30"> <!-- начало главы -->
<p class="title-1">Верхушка айсберга</p>
{% include location.html lines=site.data.substellar_crepuscule.scenes.black_scene2 %}
<img class="pict1" src="../../img/bg/c/bg4.webp" data-bg="../../img/bg/c/bg4.webp" alt="">
{% assign rows = site.data.substellar_crepuscule.part30.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/c/bg4.webp" %}
{% include break_dark.html %}
{% assign rows = site.data.substellar_crepuscule.part30.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/c/bg4.webp" %}
{% include break_blue.html %}
{% assign rows = site.data.substellar_crepuscule.part30.chapter3.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/c/bg4.webp" %}
</div> <!-- конец главы -->

<div class="chapter" id="part31"> <!-- начало главы -->
<p class="title-1">Навстречу будущему</p>
<img class="pict1" src="../../img/bg/i/bg4.webp" data-bg="../../img/bg/i/bg4.webp" alt="">
{% assign rows = site.data.substellar_crepuscule.part31.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/i/bg4.webp" %}
{% include break_dark.html %}
{% include location.html lines=site.data.substellar_crepuscule.scenes.black_scene3 %}
<img class="pict1" src="../../img/bg/e/bg3.webp" data-bg="../../img/bg/e/bg3.webp" alt="">
{% assign rows = site.data.substellar_crepuscule.part31.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/e/bg3.webp" %}
{% include break_dark.html %}
{% assign rows = site.data.substellar_crepuscule.part31.chapter3.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/e/bg3.webp" %}
</div> <!-- конец главы -->

<div class="chapter" id="part32"> <!-- начало главы -->
<p class="title-1">Её новая игрушка</p>
<img class="pict1" src="../../img/bg/x/bg25.webp" data-bg="../../img/bg/x/bg25.webp" alt="">
{% assign rows = site.data.substellar_crepuscule.part32.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/x/bg25.webp" %}
{% include break_light.html %}
{% assign rows = site.data.substellar_crepuscule.part32.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/x/bg25.webp" %}
</div> <!-- конец главы -->

<div class="chapter" id="part33"> <!-- начало главы -->
<p class="title-1">Немногие избранные</p>
<img class="pict1" src="../../img/bg/e/bg4-2.webp" data-bg="../../img/bg/e/bg4-2.webp" alt="">
{% assign rows = site.data.substellar_crepuscule.part33.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/e/bg4-2.webp" %}
{% include break_gold.html %}
{% assign rows = site.data.substellar_crepuscule.part33.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/e/bg4-2.webp" %}
<img class="pict1" src="../../img/bg/p/bg85-1.webp" data-bg="../../img/bg/bgb.webp" alt="">
</div> <!-- конец главы -->

