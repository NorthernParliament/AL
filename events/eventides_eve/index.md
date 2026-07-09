---
layout: event
title: "Канун Сумерек"
slug: eventides_eve
chapters_count: 7
black_scene99:
  - "..."
white_scene99:
  - "..."
---

<div class="chapter" id="part1"> <!-- начало главы -->
<p class="title-1">Предвестие коррозии</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg115-1.png" alt="">
{% include loc.html td_class="loc" text="Скапа-Флоу · Двор Камелота - Гарнизонный флот Врат Авалона" %}
{% assign rows = site.data.eventides_eve.part1.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg115-1.png"  %}
{% assign rows = site.data.eventides_eve.part1.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg mist" bg_file="/img/bg/bg115-1.png"  %}
</div> <!-- конец главы -->

<div class="chapter" id="part2"> <!-- начало главы -->
<p class="title-1">Утренний свет Восточной Европы</p>
{% include loc.html td_class="loc" text="Восточно-Европейская равнина - Бронепоезд «Богиня рассвета»" %}
{% assign rows = site.data.eventides_eve.part2.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" %}
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg176.png" alt="">
{% assign rows = site.data.eventides_eve.part2.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg176.png"  %}
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg22-1.png" alt="">
{% assign rows = site.data.eventides_eve.part2.chapter3.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg22-1.png"  %}
</div> <!-- конец главы -->

<div class="chapter" id="part3"> <!-- начало главы -->
<p class="title-1">Время еще не пришло, наверное...</p>
{% include loc.html td_class="loc" text="Остров Святой Елены · Крепость Трибунала" %}
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg2.png" alt="">
{% assign rows = site.data.eventides_eve.part3.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg2.png" %}
</div> <!-- конец главы -->

<div class="chapter" id="part4"> <!-- начало главы -->
<p class="title-1">Жди, и...</p>
{% include loc.html td_class="loc" text="Территория выставки · Великий собор" %}
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg191.png" alt="">
{% assign rows = site.data.eventides_eve.part4.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg191.png" %}
</div> <!-- конец главы -->

<div class="chapter" id="part5"> <!-- начало главы -->
<p class="title-1">Путешествие в отпуск</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg157.png" alt="">
{% include loc.html td_class="loc" text="Северная Атлантика · Безопасный маршрут" %}
{% assign rows = site.data.eventides_eve.part5.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg157.png" %}
{% include choice_header.html %}
{% assign rows = site.data.eventides_eve.part5.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg157.png" bg_overlay="blue-choise" %}
{% assign rows = site.data.eventides_eve.part5.chapter3.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg157.png" bg_overlay="red-choise" %}
{% assign rows = site.data.eventides_eve.part5.chapter4.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg157.png" %}
</div> <!-- конец главы -->

<div class="chapter" id="part6"> <!-- начало главы -->
<p class="title-1">Возвращение из командировки, но...</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg157.png" alt="">
{% include loc.html td_class="loc" text="Серебряный океан · Акватория мыса Хафун" %}
{% assign rows = site.data.eventides_eve.part6.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg157.png" %}
</div> <!-- конец главы -->

<div class="chapter" id="part7"> <!-- начало главы -->
<p class="title-1">Мимолетный сон</p>
{% assign rows = site.data.eventides_eve.part7.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_overlay="white-full" %}
{% include flash.html type="from-white" %}
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg125.png" alt="">
{% assign rows = site.data.eventides_eve.part7.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg125.png" %}
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg173.png" alt="">
{% assign rows = site.data.eventides_eve.part7.chapter3.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg173.png" %}
{% include blackscreen.html lines=page.black_scene99 %}
{% assign rows = site.data.eventides_eve.part7.chapter4.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg173.png" %}
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg176.png" alt="">
{% assign rows = site.data.eventides_eve.part7.chapter5.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg176.png" %}
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg156-2.png" alt="">
{% assign rows = site.data.eventides_eve.part7.chapter6.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg156-2.png" %}
{% include loc.html td_class="loc" text="До церемонии закрытия Всемирной выставки осталось десять часов." %}
</div> <!-- конец главы -->