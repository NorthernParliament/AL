---
layout: event
title: "Имперская Трагикомедия"
slug: empyreal_tragicmedy
chapters_count: 23
black_scene:
  - "Мы прошли долгий и трудный путь, и нам казалось, что впереди уже виден свет зари..."
  - "Но мы лишь снова ступили под сень сумрачного леса."
  - "О! Как же этот лес заброшен, как коварен, как тяжело в нем сделать каждый шаг!"
  - "И насколько же мы были тогда невежественны и слепы..."
  - "Что сошли с истинного пути и теперь не знаем, куда идти и к чему стремиться..."
black_scene1:
  - "У самого выхода из этого сумрачного леса путь мне преградили три зверя:"
  - "Рысь — С пятнистой шкурой, сверкающим взглядом и острыми клыками."
  - "Лев — С высоко поднятой головой, преисполненный гордыни и властолюбия."
  - "Волчица — Изнуренная до костей, но безумная в своем вечном голоде."
  - "Они окружили меня, полные ненасытной жадности и вожделения."
  - "О! Шаг за шагом они теснят меня назад, туда, в глубину мрачного леса..."
  - "Где даже само солнце кажется тусклым и лишенным света."
black_scene2:
  - "И снова я вернулся в тот мрачный, низинный лес, Где влажная земля поглощает мои стопы."
  - "И в миг, когда я начал погружаться в бездну, Ко мне обратил свой взор иссохший силуэт."
  - "Он долго стоял предо мною, храня молчание..."
  - "Вергилий."
  - "О, ты — тот самый неиссякаемый источник, Изливаешь ты потоки дивных песен и стихов. Вергилий."
  - "Путеводная звезда Вечного Града. Вергилий."
black_scene3:
  - "«Зачем же ты возвращаешься в эту мучительную бездну? Почему не восходишь на ту сияющую гору?"
  - "Ведь именно эта гора — исток и начало всякого счастья»."
  - "Так молвил Вергилий."
  - "Ответь мне, мой учитель! Спаси меня, мой избавитель!"
  - "Именем Господа, которого ты не знал, Помоги мне бежать из этих земель раздора и страданий,"
  - "Веди меня туда, о чем ты только что поведал, Чтобы я мог своими глазами узреть врата Святого Петра"
  - "И взглянуть на скорбные души этого мира..."
---

<style>
h1.title { color: #1fb288;}
</style>

<div class="chapter" id="part1"> <!-- начало главы -->
<p class="title-1">Преддверие Ада</p>
{% include blackscreen.html lines=page.black_scene %}
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg1.png" alt="">
{% assign rows = site.data.empyreal_tragicmedy.part1.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg1.png" %}
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg2.png" alt="">
{% assign rows = site.data.empyreal_tragicmedy.part1.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg2.png" %}
</div> <!-- конец главы -->

<div class="chapter" id="part2"> <!-- начало главы -->
<p class="title-1">Угроза</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg1.png" alt="">
{% assign rows = site.data.empyreal_tragicmedy.part2.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg1.png" %}
</div> <!-- конец главы -->

<div class="chapter" id="part3"> <!-- начало главы -->
<p class="title-1">Краткая передышка</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg1.png" alt="">
{% assign rows = site.data.empyreal_tragicmedy.part3.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg1.png" %}
</div> <!-- конец главы -->

<div class="chapter" id="part4"> <!-- начало главы -->
<p class="title-1">Опасения</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg3.png" alt="">
{% include loc.html td_class="loc" text="Королевские острова" %}
{% assign rows = site.data.empyreal_tragicmedy.part4.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg3.png" %}
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg4.png" alt="">
{% assign rows = site.data.empyreal_tragicmedy.part4.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg4.png" %}
</div> <!-- конец главы -->

<div class="chapter" id="part5"> <!-- начало главы -->
<p class="title-1">Переговоры</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg1.png" alt="">
{% assign rows = site.data.empyreal_tragicmedy.part5.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg1.png" %}
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg2.png" alt="">
{% assign rows = site.data.empyreal_tragicmedy.part5.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg2.png" %}
</div> <!-- конец главы -->

<div class="chapter" id="part6"> <!-- начало главы -->
<p class="title-1">Битва</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg1.png" alt="">
{% assign rows = site.data.empyreal_tragicmedy.part6.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg1.png" %}
</div> <!-- конец главы -->

<div class="chapter" id="part7"> <!-- начало главы -->
<p class="title-1">Божественные пушки</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg1.png" alt="">
{% assign rows = site.data.empyreal_tragicmedy.part7.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg1.png" %}
</div> <!-- конец главы --> 

<div class="chapter" id="part8"> <!-- начало главы -->
<p class="title-1">Вторая Операция</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg1.png" alt="">
{% assign rows = site.data.empyreal_tragicmedy.part8.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg1.png" %}
</div> <!-- конец главы -->

<div class="chapter" id="part9"> <!-- начало главы -->
<p class="title-1">Подготовка к битве</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg1.png" alt="">
{% assign rows = site.data.empyreal_tragicmedy.part9.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg1.png" %}
</div> <!-- конец главы -->

<div class="chapter" id="part10"> <!-- начало главы -->
<p class="title-1">Лакримоза моря</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg1.png" alt="">
{% assign rows = site.data.empyreal_tragicmedy.part10.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg1.png" %}
</div> <!-- конец главы -->

<div class="chapter" id="part11"> <!-- начало главы -->
<p class="title-1">Свет в Ночи</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/p/bg1.png" alt="">
{% assign rows = site.data.empyreal_tragicmedy.part11.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" %}
</div> <!-- конец главы --> 

<div class="chapter" id="part11"> <!-- начало главы -->
<p class="title-1">Слишком поздно</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg1.png" alt="">
{% assign rows = site.data.empyreal_tragicmedy.part12.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg1.png" %}
</div> <!-- конец главы -->

<div class="chapter" id="part13"> <!-- начало главы -->
<p class="title-1">Приглашение</p>
{% include blackscreen.html lines=page.black_scene1 %}
<img class="pict1" src="{{ site.baseurl }}/img/bg/p/bg2.png" alt="">
{% include loc.html td_class="loc" text="Королевские Острова" %}
{% assign rows = site.data.empyreal_tragicmedy.part13.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" %}
</div> <!-- конец главы -->

<div class="chapter" id="part14"> <!-- начало главы -->
<p class="title-1">Выбор</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg2.png" alt="">
{% include loc.html td_class="loc" text="Città Eterna (Вечный Город) - Столица Империи Сардинии" %}
{% assign rows = site.data.empyreal_tragicmedy.part14.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg2.png" %}
</div> <!-- конец главы -->

<div class="chapter" id="part15"> <!-- начало главы -->
<p class="title-1">Имперское Гостеприимство</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg5.png" alt="">
{% assign rows = site.data.empyreal_tragicmedy.part15.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg5.png" %}
</div> <!-- конец главы -->

<div class="chapter" id="part16"> <!-- начало главы -->
<p class="title-1">Пункт назначения</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg5.png" alt="">
{% assign rows = site.data.empyreal_tragicmedy.part16.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg5.png" %}
</div> <!-- конец главы --> 

<div class="chapter" id="part17"> <!-- начало главы -->
<p class="title-1">Гонка</p>
{% include blackscreen.html lines=page.black_scene2 %}
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg5.png" alt="">
{% assign rows = site.data.empyreal_tragicmedy.part17.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg5.png" %}
</div> <!-- конец главы --> 

<div class="chapter" id="part18"> <!-- начало главы -->
<p class="title-1">Страсть</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg5.png" alt="">
{% assign rows = site.data.empyreal_tragicmedy.part18.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg5.png" %}
</div> <!-- конец главы --> 

<div class="chapter" id="part19"> <!-- начало главы -->
<p class="title-1">Комедия или Трагедия?</p>
{% include blackscreen.html lines=page.black_scene3 %}
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg5.png" alt="">
{% assign rows = site.data.empyreal_tragicmedy.part19.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg5.png" %}
</div> <!-- конец главы -->

<div class="chapter" id="part20"> <!-- начало главы -->
<p class="title-1">Жемчужина Калабрии</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg5.png" alt="">
{% assign rows = site.data.empyreal_tragicmedy.part20.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg5.png" %}
<img class="pict1" src="{{ site.baseurl }}/img/bg/p/bg3.png" alt="">
{% assign rows = site.data.empyreal_tragicmedy.part20.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg5.png" %}
</div> <!-- конец главы -->

<div class="chapter" id="part21"> <!-- начало главы -->
<p class="title-1">Тайное чаепитие</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/p/bg2.png" alt="">
{% include loc.html td_class="loc" text="Королевские Острова" %}
{% assign rows = site.data.empyreal_tragicmedy.part21.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" %}
</div> <!-- конец главы --> 

<div class="chapter" id="part22"> <!-- начало главы -->
<p class="title-1">Остаточная стоимость</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg5.png" alt="">
{% assign rows = site.data.empyreal_tragicmedy.part22.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg5.png" %}
</div> <!-- конец главы --> 

<div class="chapter" id="part23"> <!-- начало главы -->
<p class="title-1">Развязка</p>
{% assign rows = site.data.empyreal_tragicmedy.part23.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" %}
</div> <!-- конец главы -->
