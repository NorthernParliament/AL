---
layout: event
title: "Гимн памяти"
slug: anthem_of_remembrance
chapters_count: 10
black_scene:
  - "R: Что ты думаешь об итогах собрания?"
  - "C: После таких серьезных уступок Железная Кровь определенно потребует большего."
  - "C: Рано или поздно Железная Кровь начнет действовать."
  - "R: Я тоже так думаю."
  - "R: Но вопрос в том... когда, где и каким образом?"
  - "C: Пока неясно, я усилю работу по сбору разведданных."
  - "R: А что насчет Королевского Флота? Предприняли ли они какие-нибудь действия после своего возвращения?"
  - "C: Ты имеешь в виду, после их заявления о «мире для целого поколения»?"
  - "R: ...Королевский Флот тайно заключил союз с Железной Кровью."
  - "R: Надеюсь, до такого не дойдет...?"
  - "C: Я не получала разведданных, которые бы на это указывали."
  - "C: Возможно, Королевский Флот просто выжидает."
  - "R: Тогда мы должны заставить их действовать как можно скорее."
  - "R: Насколько я помню, скоро к нам прибудет делегация Королевского Флота, это будет нашим первым шагом..."
black_scene1:
  - "Отправлено: По данным разведки, Железная Кровь стягивает войска к границе, намереваясь начать новую военную операцию."
  - "Получено: Принято, пожалуйста, продолжайте сбор разведданных."
  - "————————"
  - "Отправлено: По данным разведки, шпионская сеть Железной Крови перешла в состояние высокой активности."
  - "Отправлено: Анализ их радиограмм показывает, что Железная Кровь собирает информацию для крупномасштабной военной кампании."
  - "Получено: Принято, пожалуйста, продолжайте сбор разведданных."
  - "————————"
  - "Отправлено: По данным разведки, штаб Железной Крови разрабатывает детальный план наступления, пожалуйста, подготовьтесь как можно скорее."
  - "Получено: Принято, армия укрепляет линию обороны, чтобы исключить любые риски."
  - "————————"
  - "Отправлено: Разведывательный отдел перехватил донесение, обозначенное как «Желтый план»."
  - "Трибунал оценивает его достоверность как крайне высокую. Просим командование немедленно принять ответные меры."
  - "Получено: Принято, план «D» находится в стадии подготовки, союзники из Королевского Флота прибудут со дня на день, следите за обстановкой на море."
  - "Получено: В то же время, ради успешного проведения операции, просим соблюдать строжайшую секретность."
black_scene2:
  - ">> Наша армия потерпела поражение."
  - ">> Фронт прорван, войска Железной Крови стремительно наступают."
  - ">> Империя Сардиния также вступила в войну, ситуация не внушает оптимизма."
  - ">> На данный момент все войска, согласно требованию Святого Престола…… выведены из столицы."
  - ">> Чтобы сохранить за ней статус открытого города……"
  - ">> Я приказала всем подразделениям Трибунала подчиниться этому приказу ради сохранения наших сил."
  - ">> В то же время разведывательные службы уйдут в подполье, чтобы подготовиться к затяжной войне."
  - ">> Все флоты, включая флот Трибунала, уже рассредоточены по различным районам под командованием Жан Бар."
  - ">> Однако я отдала тайный приказ членам Трибунала не подчиняться беспрекословно приказам Жан Бар и командования Ортодоксии."
  - ">> В случае, если их приказы будут противоречить приказам Трибунала, приоритет отдается последним."
  - ">>  Что касается Ришелье…… я подделаю приказ о её отправке с дипломатической миссией в Королевский Флот, чтобы увести её из самого центра конфликта."
  - ">> …Если потоп неизбежен, нам нужно готовить свой ковчег."
black_scene3:
  - ">> ……Я уже потребовала от противника прекратить все враждебные действия."
  - ">> Как глава Святого Престола, это решение далось мне с величайшей болью."
  - ">> Но военная обстановка обязывает меня поступить именно так……"
  - ">> Слушая эту трансляцию, многие пребывали в состоянии оцепенения."
  - ">> Словно всё наконец-то подошло к концу."
  - ">> И это к лучшему, иначе это подлое заявление потеряло бы всякий смысл."
  - ">> Были и те, кто испытывал гнев из-за подобной грязной сделки."
  - ">> Гнев переполнял их грудь, и они проклинали тех, кто принял это решение."
  - ">> Это тоже хорошо, ведь гнев станет благодатной почвой для сопротивления."
  - ">> Битва Ортодоксии Ирис подошла к концу."
  - ">> Но моя битва только начинается."
black_scene99:
  - "..."
white_scene99:
  - "..."
---

<div class="chapter" id="part1"> <!-- начало главы -->
<p class="title-1">Предзнаменование</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg26-1.png" alt="">
{% assign rows = site.data.anthem_of_remembrance.part1.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg26-1.png"  %}
<img class="pict1" src="{{ site.baseurl }}/img/bg/p/bg137-1.png" alt="">
{% include blackscreen.html lines=page.black_scene %}
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg176.png" alt="">
{% include loc.html td_class="loc" text="█ █ █·█ █ █ █ █ █" %}
{% assign rows = site.data.anthem_of_remembrance.part1.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg176.png"  %}
{% include flash.html type="into-white" %}
{% assign rows = site.data.anthem_of_remembrance.part1.chapter3.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_overlay="white-full" %}
{% include flash.html type="from-white" %}
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg18.png" alt="">
{% assign rows = site.data.anthem_of_remembrance.part1.chapter4.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg18.png"  %}
</div> <!-- конец главы -->

<div class="chapter" id="part2"> <!-- начало главы -->
<p class="title-1">Изгнание</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg2.png" alt="">
{% include loc.html td_class="loc" text="Годы назад - Доминион Виши - Командный центр - Воспоминание Марсельезе" %}
{% assign rows = site.data.anthem_of_remembrance.part2.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg2.png"  %}
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg157.png" alt="">
{% include loc.html td_class="loc" text="Наши дни - Где-то в Атлантическом океане - Основной флот Свободного Ириса" %}
{% assign rows = site.data.anthem_of_remembrance.part2.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg157.png"  %}
</div> <!-- конец главы -->

<div class="chapter" id="part3"> <!-- начало главы -->
<p class="title-1">Проверка</p>
{% include blackscreen.html lines=page.black_scene1 %}
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg157.png" alt="">
{% assign rows = site.data.anthem_of_remembrance.part3.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg157.png"  %}
</div> <!-- конец главы -->

<div class="chapter" id="part4"> <!-- начало главы -->
<p class="title-1">Старая знакомая</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg157.png" alt="">
{% include loc.html td_class="loc" text="Годы назад - Доминион Виши - Командный центр - Воспоминание Марсельезе" %}
{% assign rows = site.data.anthem_of_remembrance.part4.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg157.png"  %}
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg189.png" alt="">
{% include loc.html td_class="loc" text="Наши дни - Окрестности острова Святой Елены - Основной флот Свободного Ириса" %}
{% assign rows = site.data.anthem_of_remembrance.part4.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg189.png"  %}
</div> <!-- конец главы -->

<div class="chapter" id="part5"> <!-- начало главы -->
<p class="title-1">Подкрепление</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg189.png" alt="">
{% include loc.html td_class="loc" text="Наши дни - Остров Святой Елены" %}
{% assign rows = site.data.anthem_of_remembrance.part5.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg189.png"  %}
{% include blackscreen.html lines=page.black_scene99 %}
{% assign rows = site.data.anthem_of_remembrance.part5.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg189.png"  %}
{% include blackscreen.html lines=page.black_scene99 %}
{% assign rows = site.data.anthem_of_remembrance.part5.chapter3.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg189.png"  %}
</div> <!-- конец главы -->

<div class="chapter" id="part6"> <!-- начало главы -->
<p class="title-1">Крушение</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg27-1.png" alt="">
{% include loc.html td_class="loc" text="Годы назад - Столица Ортодоксии Ирис - Воспоминание Марсельезе" %}
{% assign rows = site.data.anthem_of_remembrance.part6.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg27-1.png"  %}
{% include blackscreen.html lines=page.black_scene99 %}
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg189.png" alt="">
{% include loc.html td_class="loc" text="Наши дни - Окрестности острова Святой Елены - ▇█▎■▄▆▋▂" %}
{% assign rows = site.data.anthem_of_remembrance.part6.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg fog-effect-red" bg_file="/img/bg/bg189.png"  %}
{% include blackscreen.html lines=page.black_scene99 %}
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg176.png" alt="">
{% assign rows = site.data.anthem_of_remembrance.part6.chapter3.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg176.png"  %}
{% include blackscreen.html lines=page.black_scene99 %}
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg189.png" alt="">
{% assign rows = site.data.anthem_of_remembrance.part6.chapter4.rows %}
{% include dialog.html rows=rows bg_class="table-bg fog-effect-red" bg_file="/img/bg/bg189.png"  %}
</div> <!-- конец главы -->

<div class="chapter" id="part7"> <!-- начало главы -->
<p class="title-1">Одинокий путь</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg190.png" alt="">
{% include loc.html td_class="loc" text="Годы назад - Остров Святой Елены - Секретная база Трибунала - Воспоминание Марсельезе" %}
{% assign rows = site.data.anthem_of_remembrance.part7.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg190.png"  %}
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg189.png" alt="">
{% include loc.html td_class="loc" text="Наши дни - Окрестности острова Святой Елены - ▇█▎■▄▆▋▂" %}
{% assign rows = site.data.anthem_of_remembrance.part7.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg fog-effect-red" bg_file="/img/bg/bg189.png"  %}
<img class="pict1" src="{{ site.baseurl }}/img/bg/p/bg195.png" alt="">
{% assign rows = site.data.anthem_of_remembrance.part7.chapter3.rows %}
{% include dialog.html rows=rows bg_class="table-bg fog-effect-red" bg_file="/img/bg/bg189.png"  %}
{% include whitescreen.html lines=page.white_scene99 %}
{% assign rows = site.data.anthem_of_remembrance.part7.chapter4.rows %}
{% include dialog.html rows=rows bg_class="table-bg fog-effect-red" bg_file="/img/bg/bg189.png"  %}
{% include whitescreen.html lines=page.white_scene99 %}
{% assign rows = site.data.anthem_of_remembrance.part7.chapter5.rows %}
{% include dialog.html rows=rows bg_class="table-bg fog-effect-red" bg_file="/img/bg/bg189.png"  %}
</div> <!-- конец главы -->

<div class="chapter" id="part8"> <!-- начало главы -->
<p class="title-1">Свет</p>
{% include blackscreen.html lines=page.black_scene2 %}
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg189.png" alt="">
{% assign rows = site.data.anthem_of_remembrance.part8.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg fog-effect-red" bg_file="/img/bg/bg189.png"  %}
{% include flash.html type="into-white" %}
{% assign rows = site.data.anthem_of_remembrance.part8.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_overlay="white-full" %}
<img class="pict1" src="{{ site.baseurl }}/img/bg/p/bg195-1.png" alt="">
{% assign rows = site.data.anthem_of_remembrance.part8.chapter3.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_overlay="white-full" %}
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg189.png" alt="">
{% assign rows = site.data.anthem_of_remembrance.part8.chapter4.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg189.png"  %}
</div> <!-- конец главы -->

<div class="chapter" id="part9"> <!-- начало главы -->
<p class="title-1">Новое будущее</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg2.png" alt="">
{% include loc.html td_class="loc" text="Остров Святой Елены - Секретная база Трибунала - Объединённый флот Ирис и Виши" %}
{% assign rows = site.data.anthem_of_remembrance.part9.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg2.png"  %}
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg189.png" alt="">
{% include loc.html td_class="loc" text="Остров Святой Елены · Прибрежная акватория" %}
{% assign rows = site.data.anthem_of_remembrance.part9.chapter2.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg189.png" %}
</div> <!-- конец главы -->

<div class="chapter" id="part10"> <!-- начало главы -->
<p class="title-1">Ожидание</p>
<img class="pict1" src="{{ site.baseurl }}/img/bg/bg2.png" alt="">
{% include loc.html td_class="loc" text="На следующий день в крепости Трибунала." %}
{% assign rows = site.data.anthem_of_remembrance.part10.chapter1.rows %}
{% include dialog.html rows=rows bg_class="table-bg" bg_file="/img/bg/bg2.png"  %}
{% include blackscreen.html lines=page.black_scene3 %}
</div> <!-- конец главы -->