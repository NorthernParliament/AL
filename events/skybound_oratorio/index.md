---
layout: event
title: "Небесная Оратория"
slug: skybound_oratorio
chapters_count: 34
black_scene99:
  - "..."
black_scene:
  - "«Отче наш, иже еси на небесех! Да святится имя Твое;»"
  - "«Да приидет Царствие Твое; да будет воля Твоя и на земли, яко на небеси;»"
  - "«Хлеб наш насущный даждь нам днесь;»"
  - "«И остави нам долги наша, яко и мы оставляем должником нашим;»"
  - "«И не введи нас во искушение, но избави нас от лукавого;»"
  - "«Ибо Твое есть Царство и сила, и слава во веки.»"
  - "«Аминь»."
---

<div class="chapter" id="part1"> <!-- начало главы -->
<p class="title-1">Лимб</p>
{% assign rows = site.data.skybound_oratorio.part1.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" %}
{% include divider.html %}
{% assign rows = site.data.skybound_oratorio.part1.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg memory-segment" %}
{% include divider.html %}
{% assign rows = site.data.skybound_oratorio.part1.chapter3.rows %}
{% include dialog.html rows=rows bg_class="table-bg" %}
{% include divider.html %}
{% assign rows = site.data.skybound_oratorio.part1.chapter4.rows %}
{% include dialog.html rows=rows bg_class="table-bg memory-segment" %}
{% include divider.html %}
{% assign rows = site.data.skybound_oratorio.part1.chapter5.rows %}
{% include dialog.html rows=rows bg_class="table-bg" %}
{% include blackscreen.html lines=page.black_scene %}
{% assign rows = site.data.skybound_oratorio.part1.chapter6.rows %}
{% include dialog.html rows=rows bg_class="table-bg" %}
{% include blackscreen.html lines=page.black_scene %}
</div> <!-- конец главы -->

<div class="chapter" id="part2"> <!-- начало главы -->
<p class="title-1">Новый рассвет</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg46.png" alt="">
{% assign rows = site.data.skybound_oratorio.part2.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg46.png"  %}
<img class="pict1" src="{{ site.baseurl }}/img/bg/p/bg58.png" alt="">
{% include loc.html td_class="loc" text="Африка · Мозамбикский пролив" %}
{% assign rows = site.data.skybound_oratorio.part2.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg46.png"  %}
</div> <!-- конец главы -->

<div class="chapter" id="part3"> <!-- начало главы -->
<p class="title-1">Обмен информацией</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg46.png" alt="">
{% assign rows = site.data.skybound_oratorio.part3.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg46.png"  %}
</div> <!-- конец главы -->

<div class="chapter" id="part4"> <!-- начало главы -->
<p class="title-1">Враги и Друзья</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg46.png" alt="">
{% include loc.html td_class="loc" text="Мозамбикский пролив · Зона контроля Сирен" %}
{% assign rows = site.data.skybound_oratorio.part4.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg46.png"  %}
</div> <!-- конец главы -->

<div class="chapter" id="part5"> <!-- начало главы -->
<p class="title-1">Друзья и Враги</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg46.png" alt="">
{% include loc.html td_class="loc" text="Мозамбикский пролив · Зона контроля Сирен" %}
{% assign rows = site.data.skybound_oratorio.part5.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg46.png"  %}
</div> <!-- конец главы -->

<div class="chapter" id="part6"> <!-- начало главы -->
<p class="title-1">Секретное оружие</p>
{% include loc.html td_class="loc" text="В то время как объединенный флот Свободного Ириса и Королевского Флота вступил в бой с Сиренами..." %}
<img class="pict1" src="{{ site.baseurl }}/img/bg/p/bg59.png" alt="">
{% assign rows = site.data.skybound_oratorio.part6.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg46.png"  %}
</div> <!-- конец главы -->

<div class="chapter" id="part7"> <!-- начало главы -->
<p class="title-1">Нерешительность</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg46.png" alt="">
{% include loc.html td_class="loc" text="Мозамбикский пролив · Центр Базилики" %}
{% assign rows = site.data.skybound_oratorio.part7.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg46.png"  %}
</div> <!-- конец главы -->

<div class="chapter" id="part8"> <!-- начало главы -->
<p class="title-1">Автономия</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg46.png" alt="">
{% include loc.html td_class="loc" text="Мозамбикский пролив · Граница зоны контроля Доминиона Виши" %}
{% assign rows = site.data.skybound_oratorio.part8.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg46.png"  %}
</div> <!-- конец главы -->

<div class="chapter" id="part9"> <!-- начало главы -->
<p class="title-1">Переговоры</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg46.png" alt="">
{% assign rows = site.data.skybound_oratorio.part9.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg46.png"  %}
</div> <!-- конец главы -->

<div class="chapter" id="part10"> <!-- начало главы -->
<p class="title-1">Размышления</p>
{% include loc.html td_class="loc" text="Мозамбикский пролив · Где-то в зоне контроля Доминиона Виши. Немного ранее." %}
{% assign rows = site.data.skybound_oratorio.part10.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" %}
</div> <!-- конец главы -->

<div class="chapter" id="part11"> <!-- начало главы -->
<p class="title-1">Выбранный путь</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg46.png" alt="">
{% include loc.html td_class="loc" text="Мозамбикский пролив · Зона контроля Доминиона Виши" %}
{% assign rows = site.data.skybound_oratorio.part11.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg46.png"  %}
</div> <!-- конец главы -->

<div class="chapter" id="part12"> <!-- начало главы -->
<p class="title-1">Истинные намерения?</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg46.png" alt="">
{% include loc.html td_class="loc" text="Мозамбикский пролив · Зона контроля Доминиона Виши" %}
{% assign rows = site.data.skybound_oratorio.part12.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg46.png"  %}
</div> <!-- конец главы -->

<div class="chapter" id="part13"> <!-- начало главы -->
<p class="title-1">Кардинал и Рыцарь</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg46.png" alt="">
{% assign rows = site.data.skybound_oratorio.part13.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg46.png"  %}
{% include blackscreen.html lines=page.black_scene99 %}
{% assign rows = site.data.skybound_oratorio.part13.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg46.png"  %}
</div> <!-- конец главы -->

<div class="chapter" id="part14"> <!-- начало главы -->
<p class="title-1">Церемония капитуляции</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg46.png" alt="">
{% assign rows = site.data.skybound_oratorio.part14.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg46.png"  %}
</div> <!-- конец главы -->

<div class="chapter" id="part15"> <!-- начало главы -->
<p class="title-1">Воскресенье</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg119.png" alt="">
{% include loc.html td_class="loc" text="Мозамбикский пролив · Зона контроля Доминиона Виши" %}
{% assign rows = site.data.skybound_oratorio.part15.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg119.png"  %}
{% include blackscreen.html lines=page.black_scene99 %}
{% assign rows = site.data.skybound_oratorio.part15.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg119.png"  %}
</div> <!-- конец главы -->

<div class="chapter" id="part16"> <!-- начало главы -->
<p class="title-1">Секрет</p>
<img class="pict1 memory-segment" src="{{ site.baseurl }}/img/bg/bg120.png" alt="">
{% include loc.html td_class="loc" text="Ортодоксия Ирис · Тулон. Несколько лет назад." %}
{% assign rows = site.data.skybound_oratorio.part16.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg memory-segment" bg_file="/img/bg/bg120.png"  %}
{% include blackscreen.html lines=page.black_scene99 %}
{% assign rows = site.data.skybound_oratorio.part16.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg  memory-segment" bg_file="/img/bg/bg120.png"  %}
{% include blackscreen.html lines=page.black_scene99 %}
{% assign rows = site.data.skybound_oratorio.part16.chapter3.rows %}
{% include dialog.html rows=rows bg_class="table-bg  memory-segment" bg_file="/img/bg/bg120.png"  %}
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg46.png" alt="">
{% include loc.html td_class="loc" text="Мозамбикский пролив · Центр Базилики. Немного ранее." %}
{% assign rows = site.data.skybound_oratorio.part16.chapter4.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg46.png"  %}
</div> <!-- конец главы -->

<div class="chapter" id="part17"> <!-- начало главы -->
<p class="title-1">Врата Базилики</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg121.png" alt="">
{% include loc.html td_class="loc" text="Акватория вблизи Базилики Доминиона Виши" %}
{% assign rows = site.data.skybound_oratorio.part17.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg121.png"  %}
</div> <!-- конец главы -->

<div class="chapter" id="part18"> <!-- начало главы -->
<p class="title-1">Вокелен</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg121.png" alt="">
{% assign rows = site.data.skybound_oratorio.part18.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg121.png"  %}
</div> <!-- конец главы -->

<div class="chapter" id="part19"> <!-- начало главы -->
<p class="title-1">Соратники</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg121.png" alt="">
{% assign rows = site.data.skybound_oratorio.part19.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg121.png"  %}
</div> <!-- конец главы -->

<div class="chapter" id="part20"> <!-- начало главы -->
<p class="title-1">Форчун</p>
{% assign rows = site.data.skybound_oratorio.part20.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg memory-segment" %}
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg121.png" alt="">
{% assign rows = site.data.skybound_oratorio.part20.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg121.png"  %}
{% include blackscreen.html lines=page.black_scene99 %}
{% assign rows = site.data.skybound_oratorio.part20.chapter3.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg121.png"  %}
{% include blackscreen.html lines=page.black_scene99 %}
{% assign rows = site.data.skybound_oratorio.part20.chapter4.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg121.png"  %}
</div> <!-- конец главы -->

<div class="chapter" id="part21"> <!-- начало главы -->
<p class="title-1">Стена Авроры</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg121.png" alt="">
{% include loc.html td_class="loc" text="Акватория вблизи Базилики Доминиона Виши" %}
{% assign rows = site.data.skybound_oratorio.part21.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg121.png"  %}
</div> <!-- конец главы -->

<div class="chapter" id="part22"> <!-- начало главы -->
<p class="title-1">Поиск правды</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg121.png" alt="">
{% assign rows = site.data.skybound_oratorio.part22.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg121.png"  %}
</div> <!-- конец главы -->

<div class="chapter" id="part23"> <!-- начало главы -->
<p class="title-1">Слепящий свет</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg121.png" alt="">
{% include loc.html td_class="loc" text="Акватория Базилики Виши · Внутри Стены Авроры" %}
{% assign rows = site.data.skybound_oratorio.part23.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg121.png"  %}
</div> <!-- конец главы -->

<div class="chapter" id="part24"> <!-- начало главы -->
<p class="title-1">Штурм</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg121.png" alt="">
{% assign rows = site.data.skybound_oratorio.part24.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg121.png"  %}
</div> <!-- конец главы -->

<div class="chapter" id="part25"> <!-- начало главы -->
<p class="title-1">Отступление</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg121.png" alt="">
{% include loc.html td_class="loc" text="Акватория вблизи Базилики Доминиона Виши. Немного ранее" %}
{% assign rows = site.data.skybound_oratorio.part25.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg121.png"  %}
</div> <!-- конец главы -->

<div class="chapter" id="part26"> <!-- начало главы -->
<p class="title-1">Решимость</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg121.png" alt="">
{% include loc.html td_class="loc" text="Доминион Виши · Базилика" %}
{% assign rows = site.data.skybound_oratorio.part26.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg121.png"  %}
{% include blackscreen.html lines=page.black_scene99 %}
{% assign rows = site.data.skybound_oratorio.part26.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg121.png"  %}
{% include blackscreen.html lines=page.black_scene99 %}
{% assign rows = site.data.skybound_oratorio.part26.chapter3.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg121.png"  %}
{% include blackscreen.html lines=page.black_scene99 %}
{% assign rows = site.data.skybound_oratorio.part26.chapter4.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg121.png"  %}
</div> <!-- конец главы -->

<div class="chapter" id="part27"> <!-- начало главы -->
<p class="title-1">Молитва</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg121.png" alt="">
{% assign rows = site.data.skybound_oratorio.part27.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg121.png"  %}
</div> <!-- конец главы -->

<div class="chapter" id="part28"> <!-- начало главы -->
<p class="title-1">Под священным знаменем</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg121.png" alt="">
{% assign rows = site.data.skybound_oratorio.part28.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg121.png"  %}
<img class="pict1" src="{{ site.baseurl }}/img/bg/p/bg100.png" alt="">
{% assign rows = site.data.skybound_oratorio.part28.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg" %}
</div> <!-- конец главы -->

<div class="chapter" id="part29"> <!-- начало главы -->
<p class="title-1">Рассвет</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg119.png" alt="">
{% assign rows = site.data.skybound_oratorio.part29.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg119.png"  %}
</div> <!-- конец главы -->

<div class="chapter" id="part30"> <!-- начало главы -->
<p class="title-1">Утренняя звезда</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg119.png" alt="">
{% assign rows = site.data.skybound_oratorio.part30.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg119.png"  %}
{% include blackscreen.html lines=page.black_scene99 %}
{% assign rows = site.data.skybound_oratorio.part30.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg119.png"  %}
<img class="pict1" src="{{ site.baseurl }}/img/bg/p/bg101.png" alt="">
{% assign rows = site.data.skybound_oratorio.part30.chapter3.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg119.png"  %}
{% include blackscreen.html lines=page.black_scene99 %}
{% assign rows = site.data.skybound_oratorio.part30.chapter4.rows %}
{% include dialog.html rows=rows bg_class="table-bg" %}
</div> <!-- конец главы -->

<div class="chapter" id="part31"> <!-- начало главы -->
<p class="title-1">Взгляд издалека</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg119.png" alt="">
{% include loc.html td_class="loc" text="Мозамбикский пролив · Немного ранее" %}
{% assign rows = site.data.skybound_oratorio.part31.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg119.png"  %}
</div> <!-- конец главы -->

<div class="chapter" id="part32"> <!-- начало главы -->
<p class="title-1">Соглашение</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg18.png" alt="">
{% assign rows = site.data.skybound_oratorio.part32.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg memory-segment" bg_file="/img/bg/bg18.png"  %}
{% include blackscreen.html lines=page.black_scene99 %}
{% assign rows = site.data.skybound_oratorio.part32.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg18.png"  %}
</div> <!-- конец главы -->

<div class="chapter" id="part33"> <!-- начало главы -->
<p class="title-1">Другой план</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg6.png" alt="">
{% include loc.html td_class="loc" text="Некий порт Железной Крови · Спустя несколько дней после завершения операции" %}
{% assign rows = site.data.skybound_oratorio.part33.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg6.png"  %}
</div> <!-- конец главы -->

<div class="chapter" id="part34"> <!-- начало главы -->
<p class="title-1">Прелюдия под куполом</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg5.png" alt="">
{% include loc.html td_class="loc" text="Средиземное море · Остров Мальта" %}
{% assign rows = site.data.skybound_oratorio.part34.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg5.png"  %}
</div> <!-- конец главы -->