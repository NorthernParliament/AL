---
layout: event
title: "Зеркальная инволюция"
slug: mirror_involution
chapters_count: 33
black_scene99:
  - "..."
black_scene:
  - "«Спираль — стабильная структура, рождённая естественным отбором»."
  - "«Скручивание и растяжение порождают бесконечность»."
  - "«Перемены и принятие порождают возможности»."
  - "«Бесконечность и возможности порождают надежду»."
  - "«Надежда взращивает печаль»."
  - "«Настанет ли в конце печали долгожданный исход?»"
  - "«И действительно ли существует лишь одна-единственная спираль?»"
black_scene1:
  - "«Либо следовать старым догмам, либо плыть по течению»"
  - "«Две спирали, связанные тысячами нитей, но никогда не пересекающиеся»"
  - "«И всё же»"
  - "«Что будет, если разорвать зеркальную гладь и исказить саму траекторию?»"
  - "«Если нынешняя система бессильна, почему бы просто не заменить её?»"
  - "«Правила игры… пришло время обновить»."
white_scene99:
  - "..."
record_text1: >
  «Командир… пожалуйста, позвольте и мне принять участие в операции AF!».<br>
  «Империя Сакуры наверняка уверена, что у нас в строю всего два авианосца. Если я тоже выйду в море…»<br>
  «Фу-фу, это всего лишь пустяковая царапина… Командиру не о чем беспокоиться.»<br>
  «Если мы проиграем эту битву, то у нас просто не останется никакого тыла.».<br>
  «…Три дня. Всего три дня, и я вернусь в строй, готовая к полноценным боевым действиям.»<br>
  «…Командир, битва в Коралловом море была впечатляющей. Уверена, леди Лексингтон со мной согласилась бы.»<br>
  «…Поэтому ты просто обязан держаться бодрее. В грядущих битвах все будут полагаться на тебя.»
record_text2: >
  «…Мм? Командир, у вас есть ещё какие-то дела?».<br>
  «Аварийные ремонтные работы не прекращались ни на минуту, уверяю вас, я сейчас в полном порядке.»<br>
  «Вместо того чтобы переживать за меня, побеспокойтесь лучше о других вещах.»<br>
  «Эх~ даже после повышения в должности, ваш стиль ни капли не изменился.»<br>
  «С этого момента таких ситуаций, когда вы не можете лично присутствовать на передовой, будет всё больше. Лучше привыкнуть к этому заранее.»
record_text3: >
  «Авиагруппа завершает подготовку к взлёту, мы скоро отправляемся на поиски авианосного соединения Империи Сакуры.».<br>
  «Мне плевать, как сильно удивятся в Империи Сакуры. Единственное, что меня волнует — это наша победа!»<br>
  «Хе-хе~ это дуэль, которая решится в небе. Возможно, всё закончится ещё до того, как дело дойдёт до артиллерийской перестрелки~!»<br>
  «Хотя главные силы Империи Сакуры пока не обнаружены, в любом случае, это авианосное соединение уже у нас в кармане, под присмотром трёх сестёр класса «Йорктаун»~!»<br>
  «Командир, просто ждите в тылу, пока мы не вернёмся с вестями о нашей победе~!»
---

<div class="chapter" id="part1"> <!-- начало главы -->
<p class="title-1">Путь домой</p>
{% assign rows = site.data.mirror_involution.part1.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" %}
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg36.png" alt="">
{% assign rows = site.data.mirror_involution.part1.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg36.png" %}
{% include choice_header.html %}
{% assign rows = site.data.mirror_involution.part1.chapter3.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg36.png" bg_overlay="blue-choise" %}
{% assign rows = site.data.mirror_involution.part1.chapter4.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg36.png" bg_overlay="red-choise" %}
{% assign rows = site.data.mirror_involution.part1.chapter5.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg36.png" %}
{% include blackscreen.html lines=page.black_scene99 %}
{% assign rows = site.data.mirror_involution.part1.chapter6.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg36.png" %}
{% include blackscreen.html lines=page.black_scene %}
</div> <!-- конец главы -->

<div class="chapter" id="part2"> <!-- начало главы -->
<p class="title-1">Передача дел</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg75.png" alt="">
{% include loc.html td_class="loc" text="Гавань PH · Кабинет Командира" %}
{% assign rows = site.data.mirror_involution.part2.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg75.png"  %}
{% include choice_header.html %}
{% assign rows = site.data.mirror_involution.part2.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg75.png" bg_overlay="blue-choise" %}
{% assign rows = site.data.mirror_involution.part2.chapter3.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg75.png" bg_overlay="red-choise" %}
{% assign rows = site.data.mirror_involution.part2.chapter4.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg75.png"  %}
</div> <!-- конец главы -->

<div class="chapter" id="part3"> <!-- начало главы -->
<p class="title-1">Передача дел</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg75-1.png" alt="">
{% include loc.html td_class="loc" text="Гавань PH · Кабинет Командира. Семь часов спустя." %}
{% assign rows = site.data.mirror_involution.part3.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg75-1.png"  %}
{% include choice_header.html %}
{% assign rows = site.data.mirror_involution.part3.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg75-1.png" bg_overlay="blue-choise" %}
{% assign rows = site.data.mirror_involution.part3.chapter3.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg75-1.png" bg_overlay="red-choise" %}
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg75.png" alt="">
{% assign rows = site.data.mirror_involution.part3.chapter4.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg75.png"  %}
</div> <!-- конец главы -->

<div class="chapter" id="part4"> <!-- начало главы -->
<p class="title-1">Противник</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg75.png" alt="">
{% assign rows = site.data.mirror_involution.part4.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg75.png"  %}
{% include blackscreen.html lines=page.black_scene99 %}
{% assign rows = site.data.mirror_involution.part4.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg75.png"  %}
</div> <!-- конец главы -->

<div class="chapter" id="part5"> <!-- начало главы -->
<p class="title-1">Разворот</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg36.png" alt="">
{% include loc.html td_class="loc" text="Флот Нью-Джерси" %}
{% assign rows = site.data.mirror_involution.part5.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg36.png" %}
</div> <!-- конец главы -->

<div class="chapter" id="part6"> <!-- начало главы -->
<p class="title-1">Заместитель</p>
{% include loc.html td_class="loc" text="Флот Нью-Джерси · Спустя несколько часов" %}
<img class="pict1" src="{{ site.baseurl }}/img/bg/p/bg124.png" alt="">
{% assign rows = site.data.mirror_involution.part6.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" %}
{% assign rows = site.data.mirror_involution.part6.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg75.png" %}
</div> <!-- конец главы -->

<div class="chapter" id="part7"> <!-- начало главы -->
<p class="title-1">Проникновение</p>
{% include loc.html td_class="loc" text="??? · ???" %}
{% assign rows = site.data.mirror_involution.part7.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg mist" %}
</div> <!-- конец главы -->

<div class="chapter" id="part8"> <!-- начало главы -->
<p class="title-1">Оценка ущерба</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg75.png" alt="">
{% include loc.html td_class="loc" text="Прибрежные воды гавани PH" %}
{% assign rows = site.data.mirror_involution.part8.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg75.png"  %}
</div> <!-- конец главы -->

<div class="chapter" id="part9"> <!-- начало главы -->
<p class="title-1">Медвежонок</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg75.png" alt="">
{% assign rows = site.data.mirror_involution.part9.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg75.png"  %}
</div> <!-- конец главы -->

<div class="chapter" id="part10"> <!-- начало главы -->
<p class="title-1">Реконструкция</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg75.png" alt="">
{% assign rows = site.data.mirror_involution.part10.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg75.png"  %}
</div> <!-- конец главы -->

<div class="chapter" id="part11"> <!-- начало главы -->
<p class="title-1">Неполная Реконструкция</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg75.png" alt="">
{% assign rows = site.data.mirror_involution.part11.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg75.png"  %}
</div> <!-- конец главы -->

<div class="chapter" id="part12"> <!-- начало главы -->
<p class="title-1">Записи AF</p>
{% include loc.html td_class="loc" text="??? · ???" %}
{% assign rows = site.data.mirror_involution.part12.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg mist" %}
{% include choice_header.html %}
{% assign rows = site.data.mirror_involution.part12.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_overlay="blue-choise" %}
{% assign rows = site.data.mirror_involution.part12.chapter3.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_overlay="red-choise" %}
{% assign rows = site.data.mirror_involution.part12.chapter4.rows %}
{% include dialog.html rows=rows bg_class="table-bg mist" %}
</div> <!-- конец главы -->

<div class="chapter" id="part13"> <!-- начало главы -->
<p class="title-1">Союзники</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg75.png" alt="">
{% include loc.html td_class="loc" text="Акватория к юго-западу от AF" %}
{% assign rows = site.data.mirror_involution.part13.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg75.png" %}
</div> <!-- конец главы -->

<div class="chapter" id="part14"> <!-- начало главы -->
<p class="title-1">Серебряные крылья</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg75.png" alt="">
{% assign rows = site.data.mirror_involution.part14.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg75.png" %}
</div> <!-- конец главы -->

<div class="chapter" id="part15"> <!-- начало главы -->
<p class="title-1">Слияние границ</p>
{% include loc.html td_class="loc" text="??? · ???" %}
{% assign rows = site.data.mirror_involution.part15.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg mist" %}
</div> <!-- конец главы -->

<div class="chapter" id="part16"> <!-- начало главы -->
<p class="title-1">Архивы</p>
{% assign rows = site.data.mirror_involution.part16.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg mist" %}
{% include blackscreen.html lines=page.black_scene99 %}
{% assign rows = site.data.mirror_involution.part16.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg mist" %}
{% include whitescreen.html lines=page.white_scene99 %}
{% include image_text.html src="/img/bg/bg75-2.png" text=page.record_text1 %}
{% include whitescreen.html lines=page.white_scene99 %}
{% include image_text.html src="/img/bg/bg75-2.png" text=page.record_text2 %}
{% include whitescreen.html lines=page.white_scene99 %}
{% include image_text.html src="/img/bg/bg75-2.png" text=page.record_text3 %}
{% include whitescreen.html lines=page.white_scene99 %}
{% assign rows = site.data.mirror_involution.part16.chapter3.rows %}
{% include dialog.html rows=rows bg_class="table-bg mist" %}
</div> <!-- конец главы -->

<div class="chapter" id="part17"> <!-- начало главы -->
<p class="title-1">Призраки прошлого</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg75-1.png" alt="">
{% include loc.html td_class="loc" text="Акватория к юго-западу от AF, внутри морского тумана" %}
{% assign rows = site.data.mirror_involution.part17.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg75-1.png" %}
{% include blackscreen.html lines=page.black_scene1 %}
</div> <!-- конец главы -->

<div class="chapter" id="part18"> <!-- начало главы -->
<p class="title-1">Безмолвие</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg75-1.png" alt="">
{% assign rows = site.data.mirror_involution.part18.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg75-1.png" %}
</div> <!-- конец главы -->

<div class="chapter" id="part19"> <!-- начало главы -->
<p class="title-1">Тестирование закономерностей</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg75-1.png" alt="">
{% assign rows = site.data.mirror_involution.part19.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg75-1.png" %}
</div> <!-- конец главы -->

<div class="chapter" id="part20"> <!-- начало главы -->
<p class="title-1">Дополнительные сведения</p>
{% include loc.html td_class="loc" text="??? · ???" %}
{% assign rows = site.data.mirror_involution.part20.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg mist" %}
</div> <!-- конец главы -->

<div class="chapter" id="part21"> <!-- начало главы -->
<p class="title-1">Таинственные союзники</p>
{% assign rows = site.data.mirror_involution.part21.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg mist" %}
{% include choice_header.html %}
{% assign rows = site.data.mirror_involution.part21.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_overlay="blue-choise" %}
{% assign rows = site.data.mirror_involution.part21.chapter3.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_overlay="red-choise" %}
{% assign rows = site.data.mirror_involution.part21.chapter4.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_overlay="yellow-choise" %}
{% assign rows = site.data.mirror_involution.part21.chapter5.rows %}
{% include dialog.html rows=rows bg_class="table-bg mist" %}
</div> <!-- конец главы -->

<div class="chapter" id="part22"> <!-- начало главы -->
<p class="title-1">Напролом</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg75-1.png" alt="">
{% include loc.html td_class="loc" text="Акватория к юго-западу от AF, внутри морского тумана" %}
{% assign rows = site.data.mirror_involution.part22.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg75-1.png" %}
</div> <!-- конец главы -->

<div class="chapter" id="part23"> <!-- начало главы -->
<p class="title-1">Невидимое</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg75-1.png" alt="">
{% assign rows = site.data.mirror_involution.part23.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg75-1.png" %}
{% include whitescreen.html lines=page.white_scene99 %}
{% assign rows = site.data.mirror_involution.part23.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg75-1.png" %}
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg75-3.png" alt="">
{% assign rows = site.data.mirror_involution.part23.chapter3.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg75-3.png" %}
</div> <!-- конец главы -->

<div class="chapter" id="part24"> <!-- начало главы -->
<p class="title-1">Видеокассета</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg75-2.png" alt="">
{% include loc.html td_class="loc" text="？？？·？？？" %}
{% assign rows = site.data.mirror_involution.part24.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg75-2.png" %}
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
{% include whitescreen.html lines=page.white_scene99 %}
{% assign rows = site.data.mirror_involution.part24.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg75-2.png" %}
{% include blackscreen.html lines=page.black_scene99 %}
{% assign rows = site.data.mirror_involution.part24.chapter3.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg75-2.png" %}
</div> <!-- конец главы -->

<div class="chapter" id="part25"> <!-- начало главы -->
<p class="title-1">Пролом</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/p/bg125.png" alt="">
{% assign rows = site.data.mirror_involution.part25.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg75-3.png" %}
</div> <!-- конец главы -->

<div class="chapter" id="part26"> <!-- начало главы -->
<p class="title-1">Воссоединение</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg75-2.png" alt="">
{% assign rows = site.data.mirror_involution.part26.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg75-2.png" %}
{% include blackscreen.html lines=page.black_scene99 %}
{% assign rows = site.data.mirror_involution.part26.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg75-2.png" %}
</div> <!-- конец главы -->

<div class="chapter" id="part27"> <!-- начало главы -->
<p class="title-1">Тогда и сейчас</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg75-2.png" alt="">
{% assign rows = site.data.mirror_involution.part27.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg75-2.png" %}
</div> <!-- конец главы -->

<div class="chapter" id="part28"> <!-- начало главы -->
<p class="title-1">Классификация META</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg75-2.png" alt="">
{% assign rows = site.data.mirror_involution.part28.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg75-2.png" %}
</div> <!-- конец главы -->

<div class="chapter" id="part29"> <!-- начало главы -->
<p class="title-1">Старая знакомая</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg75-2.png" alt="">
{% assign rows = site.data.mirror_involution.part29.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg75-2.png" %}
{% include choice_header.html %}
{% assign rows = site.data.mirror_involution.part29.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_overlay="blue-choise" %}
{% assign rows = site.data.mirror_involution.part29.chapter3.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_overlay="red-choise" %}
{% assign rows = site.data.mirror_involution.part29.chapter4.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg75-2.png" %}
</div> <!-- конец главы -->

<div class="chapter" id="part30"> <!-- начало главы -->
<p class="title-1">Модернизация флота</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/p/bg126.png" alt="">
{% assign rows = site.data.mirror_involution.part30.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" %}
</div> <!-- конец главы -->

<div class="chapter" id="part31"> <!-- начало главы -->
<p class="title-1">Многослойная ловушка</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/p/bg126.png" alt="">
{% assign rows = site.data.mirror_involution.part31.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" %}
<img class="pict1" src="{{ site.baseurl }}/img/bg/p/bg127.png" alt="">
{% assign rows = site.data.mirror_involution.part31.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg" %}
{% assign rows = site.data.mirror_involution.part31.chapter3.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg75-2.png" %}
{% include whitescreen.html lines=page.white_scene99 %}
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg75.png" alt="">
{% assign rows = site.data.mirror_involution.part31.chapter4.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg75.png" %}
{% include choice_header.html %}
{% assign rows = site.data.mirror_involution.part31.chapter5.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_overlay="blue-choise" %}
{% assign rows = site.data.mirror_involution.part31.chapter6.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_overlay="red-choise" %}
{% assign rows = site.data.mirror_involution.part31.chapter7.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg75.png" %}
</div> <!-- конец главы -->

<div class="chapter" id="part32"> <!-- начало главы -->
<p class="title-1">Новое расследование</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg18.png" alt="">
{% include loc.html td_class="loc" text="Несколько дней спустя. Объект Союза Орла." %}
{% assign rows = site.data.mirror_involution.part32.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg18.png" %}
</div> <!-- конец главы -->

<div class="chapter" id="part33"> <!-- начало главы -->
<p class="title-1">Обновление правил</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg90.png" alt="">
{% include loc.html td_class="loc" text="？？？·？？？" %}
{% assign rows = site.data.mirror_involution.part33.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg90.png" %}
</div> <!-- конец главы -->