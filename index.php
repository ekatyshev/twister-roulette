<!DOCTYPE html>

<html lang="en" prefix="og: http://ogp.me/ns#">

<head>

<base href="//twister-roulette.com/" />

<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="robots" content="index, follow" />
<meta name="viewport" content="width=device-width" />

<link rel='manifest' href='/manifest.json' />

<link rel="stylesheet" type="text/css" href="css/style.css" />
<link rel="icon" type="image/png" href="favicon.ico" />

<!-- jQuery -->
<script type="text/javascript" src="js/jquery-2.1.3.min.js"></script>
<script type="text/javascript" src="js/jquery.cookie.js"></script>

<!-- Languages -->
<script type="text/javascript" src="js/i18n.js"></script>

<!-- Likely -->
<script src="js/likely-0.91/likely.js"></script>
<link rel="stylesheet" href="js/likely-0.91/likely.css">

<!-- Roulette -->
<script type="text/javascript" src="js/roulette.js"></script>

<title>Roulette for Twister</title>

<meta name="description" content="Online roulette for playing Twister" />
<meta name="keywords" content="roulette,twister,online" />

<meta property="og:image" content="//twister-roulette.com/img/twister-roulette-ru.png" />

<link href="https://fonts.googleapis.com/css?family=Roboto:400,500&amp;subset=cyrillic,cyrillic-ext,greek,greek-ext,latin-ext,vietnamese" rel="stylesheet" />

<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-55N0Y2MHR5"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-55N0Y2MHR5');
</script>

<!-- Yandex.Metrika counter --> <script type="text/javascript" > (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)}; m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)}) (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym"); ym(26947902, "init", { clickmap:true, trackLinks:true, accurateTrackBounce:true, webvisor:true }); </script> <noscript><div><img src="https://mc.yandex.ru/watch/26947902" style="position:absolute; left:-9999px;" alt="" /></div></noscript> <!-- /Yandex.Metrika counter -->

<script data-ad-client="ca-pub-1005301514822444" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>

<!-- Matomo Tag Manager -->
<script>
  var _mtm = window._mtm = window._mtm || [];
  _mtm.push({'mtm.startTime': (new Date().getTime()), 'event': 'mtm.Start'});
  (function() {
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.async=true; g.src='https://cdn.matomo.cloud/twisterroulette.matomo.cloud/container_gTYKKEbR.js'; s.parentNode.insertBefore(g,s);
  })();
</script>
<!-- End Matomo Tag Manager -->

</head>

<body>

<?php include_once('img/icons.svg'); ?>

<div class="content__wrapper content__wrapper_full">

<header id="header">
  <h1 id="title">Roulette for Twister</h1>
  <div class="button button_help disable">
    <svg class="button__icon">
      <use xlink:href="#help_icon"></use>
    </svg>
  </div>
  <div id="timer" class="hidden">
    <div class="button button_minus enable">
      <svg class="button__icon">
        <use xlink:href="#minus_icon"></use>
      </svg>
    </div>
    <div id="time_period"></div>
    <div id="time"></div>
    <div class="button button_plus enable">
      <svg class="button__icon plus_icon">
        <use xlink:href="#plus_icon"></use>
      </svg>
    </div>
  </div>
  <div class="button button_play">
    <svg class="button__icon">
      <use xlink:href="#timer_off_icon"></use>
    </svg>
  </div>
  <div class="button button_stop">
    <svg class="button__icon">
      <use xlink:href="#timer_icon"></use>
    </svg>
  </div>
  <div class="button button_lang">
    <svg class="button__icon">
      <use xlink:href="#language_icon"></use>
    </svg>
  </div>
  <ul id="lang-list">
    <li><a rel="alternate" hreflang="be" href="be" class="lang">Белорусский</a></li>
    <li><a rel="alternate" hreflang="de" href="de" class="lang">Deutsch</a></li>
    <li><a rel="alternate" hreflang="en" href="en" class="lang">English</a></li>
    <li><a rel="alternate" hreflang="es" href="es" class="lang">Español</a></li>
    <li><a rel="alternate" hreflang="fr" href="fr" class="lang">Français</a></li>
    <li><a rel="alternate" hreflang="he" href="he" class="lang">עברית</a></li>
    <li><a rel="alternate" hreflang="hi" href="hi" class="lang">हिन्दी</a></li>
    <li><a rel="alternate" hreflang="it" href="it" class="lang">Italiano</a></li>
    <li><a rel="alternate" hreflang="ja" href="ja" class="lang">日本語</a></li>
    <li><a rel="alternate" hreflang="po" href="po" class="lang">Polski</a></li>
    <li><a rel="alternate" hreflang="pt" href="pt" class="lang">Português</a></li>
    <li><a rel="alternate" hreflang="ru" href="ru" class="lang">Русский</a></li>
    <li><a rel="alternate" hreflang="tr" href="tr" class="lang">Türkçe</a></li>
    <li><a rel="alternate" hreflang="uk" href="uk" class="lang">Українська</a></li>
    <li><a rel="alternate" hreflang="zh" href="zh" class="lang">中文</a></li>
  </ul>
  <div id="tip" class="desktop-part">Click anywhere or press any key</div>
</header>

<div id="main">
  <div id="limb"></div>
  <div id="circle"></div>
  <div id="color-name"></div>
</div>

<div id="info">
  <div class="button button_close">
    <svg class="button__icon">
      <use xlink:href="#close_icon"></use>
    </svg>
  </div>
  <div id="info__canvas">
    <img id="wheel" src="img/twister-field.svg" alt="roulette" />
    <div id="help">
      <p>If you'd like to play <a href="//en.wikipedia.org/wiki/Twister_(game)" title="" class="link link_dark" target="_blank">Twister</a> but don't have a spinner, you can use this website. Tap anywhere on screen and app show color and hand or foot.</p>
      <p>Also you can select language and use timer.</p>
    </div>
    <button id="start">Start play!</button>
    <div id="about">
      <span id="author">© <a href="//ekatyshev.com" class="link link_dark">Evgeny Katyshev</a></span>
    </div>
  </div>
</div>

</div>
</body>
</html>