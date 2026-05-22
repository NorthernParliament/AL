---
layout: event
title: "Суперпозиция параллелей"
slug: parallel_superimposition
chapters_count: 35
black_scene99:
  - "..."
black_scene:
  - "«Я ваш капитан, и сейчас я обращаюсь ко всем на борту»."
  - "«За последние несколько часов произошло очень многое»."
  - "«Я верю, что ситуация, с которой мы столкнулись, вызвана не человеческим фактором, а природным явлением»."
  - "«Необъяснимым природным явлением»."
  - "«Насколько нам сейчас известно, это явление оказало некое воздействие на время»."
  - "«Тем самым создав проход, ведущий в другую эпоху»."
  - "«Нам предстоит вступить в войну»."
  - "«В войну, которая была проиграна ещё до того, как кто-либо из вас появился на свет»."
  - "«Но в этот раз, благодаря нашим усилиям, исход этой войны изменится»."
  - "«Предопределённое прошлое — возможно переписать»."
  - "«... И да пребудет с нами удача»."
black_scene1:
  - "«Отозвать наши истребители.»"
  - "«Повторяю, задание отменяется. Отозвать наши истребители.»"
  - "«Говорит капитан корабля, внимание всему экипажу.»"
  - "«Мы вот-вот снова войдём в шторм.»"
  - "«Приготовиться к сближению.»"
  - "«Пусть буря вернёт нас домой——»"
white_scene99:
  - "..."
---

<div class="chapter" id="part1"> <!-- начало главы -->
<p class="title-1">Неизвестный мегаполис</p>
{% assign rows = site.data.parallel_superimposition.part1.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_overlay="white-full" %}
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg93.png" alt="">
{% assign rows = site.data.parallel_superimposition.part1.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg93.png"  %}
{% include choice_header.html %}
{% assign rows = site.data.parallel_superimposition.part1.chapter3.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg93.png" bg_overlay="blue-choise" %}
{% assign rows = site.data.parallel_superimposition.part1.chapter4.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg93.png" bg_overlay="red-choise" %}
{% assign rows = site.data.parallel_superimposition.part1.chapter5.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg93.png"  %}
{% include blackscreen.html lines=page.black_scene99 %}
{% assign rows = site.data.parallel_superimposition.part1.chapter6.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg93.png"  %}
{% include blackscreen.html lines=page.black_scene %}
</div> <!-- конец главы -->

<div class="chapter" id="part2"> <!-- начало главы -->
<p class="title-1">Старый друг из завтрашнего дня</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg93.png" alt="">
{% assign rows = site.data.parallel_superimposition.part2.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg93.png"  %}
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg164.png" alt="">
{% assign rows = site.data.parallel_superimposition.part2.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg164.png"  %}
{% include choice_header.html %}
{% assign rows = site.data.parallel_superimposition.part2.chapter3.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg164.png" bg_overlay="blue-choise" %}
{% assign rows = site.data.parallel_superimposition.part2.chapter4.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg164.png" bg_overlay="red-choise" %}
{% assign rows = site.data.parallel_superimposition.part2.chapter5.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg164.png"  %}
</div> <!-- конец главы -->

<div class="chapter" id="part3"> <!-- начало главы -->
<p class="title-1">Возвращение в родные края</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg164.png" alt="">
{% assign rows = site.data.parallel_superimposition.part3.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg164.png"  %}
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg165.png" alt="">
{% assign rows = site.data.parallel_superimposition.part3.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg165.png"  %}
</div> <!-- конец главы -->

<div class="chapter" id="part4"> <!-- начало главы -->
<p class="title-1">Фрагменты</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg165.png" alt="">
{% assign rows = site.data.parallel_superimposition.part4.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg165.png"  %}
</div> <!-- конец главы -->

<div class="chapter" id="part5"> <!-- начало главы -->
<p class="title-1">Гранат</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg165.png" alt="">
{% include loc.html td_class="loc" text="Кофейня «Гранат» · Спустя некоторое время" %}
{% assign rows = site.data.parallel_superimposition.part5.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg165.png"  %}
</div> <!-- конец главы -->

<div class="chapter" id="part6"> <!-- начало главы -->
<p class="title-1">Звезда в центре внимания</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg93.png" alt="">
{% assign rows = site.data.parallel_superimposition.part6.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg93.png"  %}
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg166.png" alt="">
{% include loc.html td_class="loc" text="Внутри сувенирной лавки..." %}
{% assign rows = site.data.parallel_superimposition.part6.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg166.png"  %}
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg93.png" alt="">
{% assign rows = site.data.parallel_superimposition.part6.chapter3.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg93.png"  %}
<img class="pict1" src="{{ site.baseurl }}/img/bg/p/bg165.png" alt="">
{% assign rows = site.data.parallel_superimposition.part6.chapter4.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg93.png"  %}
{% include whitescreen.html lines=page.white_scene99 %}
{% assign rows = site.data.parallel_superimposition.part6.chapter5.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg93.png"  %}
</div> <!-- конец главы -->

<div class="chapter" id="part7"> <!-- начало главы -->
<p class="title-1">Шаг за шагом</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg93.png" alt="">
{% assign rows = site.data.parallel_superimposition.part7.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg93.png"  %}
{% include choice_header.html %}
{% assign rows = site.data.parallel_superimposition.part7.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg164.png" bg_overlay="blue-choise" %}
{% assign rows = site.data.parallel_superimposition.part7.chapter3.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg164.png" bg_overlay="red-choise" %}
{% assign rows = site.data.parallel_superimposition.part7.chapter4.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg164.png" bg_overlay="yellow-choise" %}
{% assign rows = site.data.parallel_superimposition.part7.chapter5.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg93.png"  %}
</div> <!-- конец главы -->

<div class="chapter" id="part8"> <!-- начало главы -->
<p class="title-1">Изменение планов</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg99.png" alt="">
{% include loc.html td_class="loc" text="Университетский городок · Ближе к вечеру" %}
{% assign rows = site.data.parallel_superimposition.part8.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg99.png"  %}
{% include blackscreen.html lines=page.black_scene99 %}
{% assign rows = site.data.parallel_superimposition.part8.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg99.png"  %}
</div> <!-- конец главы -->

<div class="chapter" id="part9"> <!-- начало главы -->
<p class="title-1">Учитель и Командир</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg93-1.png" alt="">
{% include loc.html td_class="loc" text="Зона учений · Следующий день" %}
{% assign rows = site.data.parallel_superimposition.part9.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg93-1.png" %}
</div> <!-- конец главы -->

<div class="chapter" id="part10"> <!-- начало главы -->
<p class="title-1">Оснастка типа II</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg93-1.png" alt="">
{% include loc.html td_class="loc" text="Зона учений · Немного позже..." %}
{% assign rows = site.data.parallel_superimposition.part10.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg93-1.png" %}
</div> <!-- конец главы -->

<div class="chapter" id="part11"> <!-- начало главы -->
<p class="title-1">Удар по слабым точкам</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg93-1.png" alt="">
{% assign rows = site.data.parallel_superimposition.part11.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg93-1.png" %}
</div> <!-- конец главы -->

<div class="chapter" id="part12"> <!-- начало главы -->
<p class="title-1">Замысел Мемфис</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg93-1.png" alt="">
{% include loc.html td_class="loc" text="Зона учений · Немного позже..." %}
{% assign rows = site.data.parallel_superimposition.part12.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg93-1.png" %}
</div> <!-- конец главы -->

<div class="chapter" id="part13"> <!-- начало главы -->
<p class="title-1">Узы</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg87-1.png" alt="">
{% include loc.html td_class="loc" text="База «Море Звёзд» · Центральный сектор · «Сердце Галактики» · Зона X" %}
{% assign rows = site.data.parallel_superimposition.part13.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg87-1.png" %}
</div> <!-- конец главы -->

<div class="chapter" id="part14"> <!-- начало главы -->
<p class="title-1">Комфортное путешествие №1</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg91.png" alt="">
{% include loc.html td_class="loc" text="Персональный самолёт Анзил — «Комфортное путешествие №1» · Салон для гостей" %}
{% assign rows = site.data.parallel_superimposition.part14.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg91.png" %}
</div> <!-- конец главы -->

<div class="chapter" id="part15"> <!-- начало главы -->
<p class="title-1">Остров Самос</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg168.png" alt="">
{% assign rows = site.data.parallel_superimposition.part15.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg168.png" %}
{% include divider.html %}
<div class="image-overlay-container">
    <img class="base-image pict1" src="/img/bg/bg70-4.png" alt="">    
    <img class="overlay-layer pict1" src="/img/bg/bgm.png" alt="">
</div>
{% assign rows = site.data.parallel_superimposition.part15.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg memory-segment" bg_file="/img/bg/bg70-4.png" %}
{% include divider.html %}
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg168.png" alt="">
{% assign rows = site.data.parallel_superimposition.part15.chapter3.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg168.png" %}
</div> <!-- конец главы -->

<div class="chapter" id="part16"> <!-- начало главы -->
<p class="title-1">Зеро?</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg168.png" alt="">
{% assign rows = site.data.parallel_superimposition.part16.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg168.png" %}
{% include blackscreen.html lines=page.black_scene99 %}
{% assign rows = site.data.parallel_superimposition.part16.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg168.png" %}
</div> <!-- конец главы -->

<div class="chapter" id="part17"> <!-- начало главы -->
<p class="title-1">Антиох</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg22-1.png" alt="">
{% include loc.html td_class="loc" text="Институт изучения морской фауны острова Самос · Подземный туннель" %}
{% assign rows = site.data.parallel_superimposition.part17.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg22-1.png" %}
{% include blackscreen.html lines=page.black_scene99 %}
{% assign rows = site.data.parallel_superimposition.part17.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg22-1.png" %}
{% include divider.html %}
{% assign rows = site.data.parallel_superimposition.part17.chapter3.rows %}
{% include dialog.html rows=rows bg_class="table-bg" %}
{% include divider.html %}
{% assign rows = site.data.parallel_superimposition.part17.chapter4.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg22-1.png" %}
<img class="pict1" src="{{ site.baseurl }}/img/bg/p/bg166.png" alt="">
{% assign rows = site.data.parallel_superimposition.part17.chapter5.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg22-1.png" %}
</div> <!-- конец главы -->

<div class="chapter" id="part18"> <!-- начало главы -->
<p class="title-1">Магистр</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg65.png" alt="">
{% include loc.html td_class="loc" text="Институт изучения морской фауны острова Самос · Кабинет Аосте" %}
{% assign rows = site.data.parallel_superimposition.part18.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg65.png" %}
{% include choice_header.html %}
{% assign rows = site.data.parallel_superimposition.part18.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg65.png" bg_overlay="blue-choise" %}
{% assign rows = site.data.parallel_superimposition.part18.chapter3.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg65.png" bg_overlay="red-choise" %}
</div> <!-- конец главы -->

<div class="chapter" id="part19"> <!-- начало главы -->
<p class="title-1">Дьявол XV</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg168.png" alt="">
{% include loc.html td_class="loc" text="Зона учений · Немного позже..." %}
{% assign rows = site.data.parallel_superimposition.part19.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg168.png" %}
<img class="pict1" src="{{ site.baseurl }}/img/bg/p/bg167.png" alt="">
{% assign rows = site.data.parallel_superimposition.part19.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg168.png" %}
</div> <!-- конец главы -->

<div class="chapter" id="part20"> <!-- начало главы -->
<p class="title-1">Совместные испытания I</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg168.png" alt="">
{% assign rows = site.data.parallel_superimposition.part20.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg168.png" %}
</div> <!-- конец главы -->

<div class="chapter" id="part21"> <!-- начало главы -->
<p class="title-1">Совместные испытания II</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg168.png" alt="">
{% assign rows = site.data.parallel_superimposition.part21.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg168.png" %}
</div> <!-- конец главы -->

<div class="chapter" id="part22"> <!-- начало главы -->
<p class="title-1">Инфорсеры Дьявол</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg168-1.png" alt="">
{% assign rows = site.data.parallel_superimposition.part22.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg168-1.png" %}
</div> <!-- конец главы -->

<div class="chapter" id="part23"> <!-- начало главы -->
<p class="title-1">Благодарность</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg168-1.png" alt="">
{% assign rows = site.data.parallel_superimposition.part23.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg168-1.png" %}
</div> <!-- конец главы -->

<div class="chapter" id="part24"> <!-- начало главы -->
<p class="title-1">Коррозия</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg168-1.png" alt="">
{% assign rows = site.data.parallel_superimposition.part24.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg168-1.png" %}
</div> <!-- конец главы -->

<div class="chapter" id="part25"> <!-- начало главы -->
<p class="title-1">Растворение</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg168-1.png" alt="">
{% assign rows = site.data.parallel_superimposition.part25.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg168-1.png" %}
{% include divider.html %}
{% include whitescreen.html lines=page.white_scene99 %}
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg132.png" alt="">
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg133.png" alt="">
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg134.png" alt="">
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg135.png" alt="">
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg136.png" alt="">
<img class="pict1" src="{{ site.baseurl }}/img/bg/p/bg115.png" alt="">
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg111-1.png" alt="">
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg111.png" alt="">
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg137-1.png" alt="">
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg133-1.png" alt="">
{% assign rows = site.data.parallel_superimposition.part25.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg memory-segment" bg_file="/img/bg/bg137-1.png" %}
{% include divider.html %}
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg168-1.png" alt="">
{% assign rows = site.data.parallel_superimposition.part25.chapter3.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg168-1.png" %}
<img class="pict1" src="{{ site.baseurl }}/img/bg/p/bg168.png" alt="">
{% assign rows = site.data.parallel_superimposition.part25.chapter4.rows %}
{% include dialog.html rows=rows bg_class="table-bg" %}
<img class="pict1" src="{{ site.baseurl }}/img/bg/p/bg169.png" alt="">
{% assign rows = site.data.parallel_superimposition.part25.chapter5.rows %}
{% include dialog.html rows=rows bg_class="table-bg" %}
<img class="pict1" src="{{ site.baseurl }}/img/bg/p/bg170.png" alt="">
{% assign rows = site.data.parallel_superimposition.part25.chapter6.rows %}
{% include dialog.html rows=rows bg_class="table-bg" %}
<img class="pict1" src="{{ site.baseurl }}/img/bg/p/bg168-2.png" alt="">
{% assign rows = site.data.parallel_superimposition.part25.chapter7.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg168-2.png" %}
{% include choice_header.html %}
{% assign rows = site.data.parallel_superimposition.part25.chapter8.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg168-2.png" bg_overlay="blue-choise" %}
{% assign rows = site.data.parallel_superimposition.part25.chapter9.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg168-2.png" bg_overlay="red-choise" %}
{% assign rows = site.data.parallel_superimposition.part25.chapter10.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg168-2.png" %}
{% include divider.html %}
<div class="image-overlay-container">
    <img class="base-image pict1" src="/img/bg/bg91.png" alt="">    
    <img class="overlay-layer pict1" src="/img/bg/bgm.png" alt="">
</div>
{% assign rows = site.data.parallel_superimposition.part25.chapter11.rows %}
{% include dialog.html rows=rows bg_class="table-bg memory-segment" bg_file="/img/bg/bg91.png" %}
{% include whitescreen.html lines=page.white_scene99 %}
{% assign rows = site.data.parallel_superimposition.part25.chapter12.rows %}
{% include dialog.html rows=rows bg_class="table-bg memory-segment" bg_overlay="white-full" %}
{% include divider.html %}
{% assign rows = site.data.parallel_superimposition.part25.chapter13.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg168-2.png" %}
{% include choice_header.html %}
{% assign rows = site.data.parallel_superimposition.part25.chapter14.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg168-2.png" bg_overlay="blue-choise" %}
{% assign rows = site.data.parallel_superimposition.part25.chapter15.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg168-2.png" bg_overlay="red-choise" %}
</div> <!-- конец главы -->

<div class="chapter" id="part26"> <!-- начало главы -->
<p class="title-1">Средство против Дьявола</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg168-2.png" alt="">
{% assign rows = site.data.parallel_superimposition.part26.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg168-2.png" %}
</div> <!-- конец главы -->

<div class="chapter" id="part27"> <!-- начало главы -->
<p class="title-1">Разрушение</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg168-2.png" alt="">
{% assign rows = site.data.parallel_superimposition.part27.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg168-2.png" %}
{% include whitescreen.html lines=page.white_scene99 %}
{% assign rows = site.data.parallel_superimposition.part27.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg168-2.png" %}
{% include choice_header.html %}
{% assign rows = site.data.parallel_superimposition.part27.chapter3.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg168-2.png" bg_overlay="blue-choise" %}
{% assign rows = site.data.parallel_superimposition.part27.chapter4.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg168-2.png" bg_overlay="red-choise" %}
{% assign rows = site.data.parallel_superimposition.part27.chapter5.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg168-2.png" %}
{% include whitescreen.html lines=page.white_scene99 %}
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg90.png" alt="">
{% assign rows = site.data.parallel_superimposition.part27.chapter6.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg90.png" %}
<img class="pict1" src="{{ site.baseurl }}/img/bg/p/bg171.png" alt="">
{% assign rows = site.data.parallel_superimposition.part27.chapter7.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg168-2.png" %}
{% include blackscreen.html lines=page.black_scene99 %}
{% assign rows = site.data.parallel_superimposition.part27.chapter8.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg168-2.png" %}
</div> <!-- конец главы -->

<div class="chapter" id="part28"> <!-- начало главы -->
<p class="title-1">Струна IV — "Компилятор"</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg168-2.png" alt="">
{% include loc.html td_class="loc" text="Вход в подземный тоннель Института морской фауны острова Самос" %}
{% assign rows = site.data.parallel_superimposition.part28.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg168-2.png" %}
{% include whitescreen.html lines=page.white_scene99 %}
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg65.png" alt="">
{% assign rows = site.data.parallel_superimposition.part28.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg65.png" %}
<img class="pict1" src="{{ site.baseurl }}/img/bg/p/bg172.png" alt="">
{% assign rows = site.data.parallel_superimposition.part28.chapter3.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg65.png" %}
{% include whitescreen.html lines=page.white_scene99 %}
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg65-1.png" alt="">
{% assign rows = site.data.parallel_superimposition.part28.chapter4.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg65-1.png" %}
{% include blackscreen.html lines=page.black_scene1 %}
</div> <!-- конец главы -->

<div class="chapter" id="part29"> <!-- начало главы -->
<p class="title-1">Истина внутри иллюзии</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg87.png" alt="">
{% assign rows = site.data.parallel_superimposition.part29.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg87.png" %}
{% include choice_header.html %}
{% assign rows = site.data.parallel_superimposition.part29.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg87.png" bg_overlay="blue-choise" %}
{% assign rows = site.data.parallel_superimposition.part29.chapter3.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg87.png" bg_overlay="red-choise" %}
{% assign rows = site.data.parallel_superimposition.part29.chapter4.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg87.png" %}
</div> <!-- конец главы -->

<div class="chapter" id="part30"> <!-- начало главы -->
<p class="title-1">Тропический циклон</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg115-1.png" alt="">
{% include loc.html td_class="loc" text="Королевский Флот · ???" %}
{% assign rows = site.data.parallel_superimposition.part30.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg115-1.png" %}
</div> <!-- конец главы -->

<div class="chapter" id="part31"> <!-- начало главы -->
<p class="title-1">Лови момент</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg156-7.png" alt="">
{% include loc.html td_class="loc" text="Территория Всемирной выставки · Павильон Железной Крови" %}
{% assign rows = site.data.parallel_superimposition.part31.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg156-7.png" %}
</div> <!-- конец главы -->

<div class="chapter" id="part32"> <!-- начало главы -->
<p class="title-1">Сеть</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg158.png" alt="">
{% include loc.html td_class="loc" text="Острова Империи Сакуры · Резиденция Мусаси" %}
{% assign rows = site.data.parallel_superimposition.part32.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg158.png" %}
{% include blackscreen.html lines=page.black_scene99 %}
{% assign rows = site.data.parallel_superimposition.part32.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg158.png" %}
</div> <!-- конец главы -->

<div class="chapter" id="part33"> <!-- начало главы -->
<p class="title-1">Политика и вера</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg46.png" alt="">
{% include loc.html td_class="loc" text="Где-то в Африке" %}
{% assign rows = site.data.parallel_superimposition.part33.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg46.png" %}
</div> <!-- конец главы -->

<div class="chapter" id="part34"> <!-- начало главы -->
<p class="title-1">Дружеская подсказочка~</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg154.png" alt="">
{% assign rows = site.data.parallel_superimposition.part34.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg154.png" %}
</div> <!-- конец главы -->

<div class="chapter" id="part35"> <!-- начало главы -->
<p class="title-1">Я вернулась, Энтерпрайз</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/p/bg82.png" alt="">
{% assign rows = site.data.parallel_superimposition.part35.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" %}
<img class="pict1" src="{{ site.baseurl }}/img/bg/p/bg28.png" alt="">
{% assign rows = site.data.parallel_superimposition.part35.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg" %}
<img class="pict1" src="{{ site.baseurl }}/img/bg/p/bg29.png" alt="">
{% assign rows = site.data.parallel_superimposition.part35.chapter3.rows %}
{% include dialog.html rows=rows bg_class="table-bg" %}
<img class="pict1" src="{{ site.baseurl }}/img/bg/p/bg32.png" alt="">
{% assign rows = site.data.parallel_superimposition.part35.chapter4.rows %}
{% include dialog.html rows=rows bg_class="table-bg" %}
<img class="pict1" src="{{ site.baseurl }}/img/bg/p/bg33.png" alt="">
{% assign rows = site.data.parallel_superimposition.part35.chapter5.rows %}
{% include dialog.html rows=rows bg_class="table-bg" %}
<img class="pict1" src="{{ site.baseurl }}/img/bg/p/bg173.png" alt="">
{% assign rows = site.data.parallel_superimposition.part35.chapter6.rows %}
{% include dialog.html rows=rows bg_class="table-bg" %}
<img class="pict1" src="{{ site.baseurl }}/img/bg/p/bg174.png" alt="">
{% assign rows = site.data.parallel_superimposition.part35.chapter7.rows %}
{% include dialog.html rows=rows bg_class="table-bg" %}
<img class="pict1" src="{{ site.baseurl }}/img/bg/p/bg175.png" alt="">
{% assign rows = site.data.parallel_superimposition.part35.chapter8.rows %}
{% include dialog.html rows=rows bg_class="table-bg" %}
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg22-1.png" alt="">
{% assign rows = site.data.parallel_superimposition.part35.chapter9.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg22-1.png" %}
<img class="pict1" src="{{ site.baseurl }}/img/bg/p/bg176.png" alt="">
{% assign rows = site.data.parallel_superimposition.part35.chapter10.rows %}
{% include dialog.html rows=rows bg_class="table-bg" %}
<img class="pict1" src="{{ site.baseurl }}/img/bg/p/bg177.png" alt="">
{% assign rows = site.data.parallel_superimposition.part35.chapter11.rows %}
{% include dialog.html rows=rows bg_class="table-bg" %}
</div> <!-- конец главы -->