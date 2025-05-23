var languages = ['be', 'de', 'en', 'es', 'fr', 'he', 'hi', 'it', 'ja', 'po', 'pt', 'ru', 'tr', 'uk', 'zh'];

var strings =
{
  title: {
    be: "Рулетка для Твистера",
    cs: "Ruleta pro Twister",
    de: "Roulette für Twister",
    en: "Spinner for Twister",
    es: "Ruleta de Twister",
    fr: "Roulette pour Twister",
    he: "רולטה לטוויסטר",
    hi: "रूले ट्विस्टर के लिए",
    it: "Roulette per Twister",
    ja: "ツイスターのルーレット",
    po: "Ruletka dla Twistera",
    pt: "Roleta para Twister",
    ru: "Рулетка для Твистера",
    tr: "Twister için rulet",
    uk: "Рулетка для Твістера",
    zh: "轮盘赌为扭扭樂",
  },
  title2: {
    be: 'Онлайн рулетка для гульні ў <a href="//ru.wikipedia.org/wiki/Твистер_(игра)" title="" class="link link_dark" target="_blank">Твистер</a>',
    cs: 'Online ruleta pro hraní <a href="//en.wikipedia.org/wiki/Twister_(game)" title="" class="link link_dark" target="_blank">Twister</a>',
    de: 'Online-Roulette zu spielen <a href="//de.wikipedia.org/wiki/Twister_(Spiel)" title="" class="link link_dark" target="_blank">Twister</a>',
    en: 'Online spinner to play <a href="//en.wikipedia.org/wiki/Twister_(game)" title="" class="link link_dark" target="_blank">Twister</a>',
    es: 'Ruleta online para jugar <a href="//es.wikipedia.org/wiki/Twister_(juego)" title="" class="link link_dark" target="_blank">Twister</a>',
    fr: 'Roulette en ligne pour jouer <a href="//fr.wikipedia.org/wiki/Twister_(jeu)" title="" class="link link_dark" target="_blank">Twister</a>',
    he: 'רולטה מקוונת למשחק טוויסטר',
    hi: 'ऑनलाइन रूले ट्विस्टर खेलने के लिए',
    it: 'Roulette online per giocare a <a href="//it.wikipedia.org/wiki/Twister_(gioco)" title="" class="link link_dark" target="_blank">Twister</a>',
    ja: '<a href="//ja.wikipedia.org/wiki/ツイスター_(ゲーム)" title="" class="link link_dark" target="_blank">ツイスター</a>をプレイするオンラインルーレット',
    po: 'Ruletka online do gry w <a href="//en.wikipedia.org/wiki/Twister_(game)" title="" class="link link_dark" target="_blank">Twister</a>',
    pt: 'Roleta online para jogar <a href="//pt.wikipedia.org/wiki/Twister_(jogo)" title="" class="link link_dark" target="_blank">Twister</a>',
    ru: 'Онлайн рулетка для игры в <a href="//ru.wikipedia.org/wiki/Твистер_(игра)" title="" class="link link_dark" target="_blank">Твистер</a>',
    tr: '<a href="//tr.wikipedia.org/wiki/Twister_(oyun)" title="" class="link link_dark" target="_blank">Twister</a> oynamak için çevrimiçi rulet',
    uk: 'Онлайн рулетка для гри в <a href="//uk.wikipedia.org/wiki/Твістер" title="" class="link link_dark" target="_blank">Твістер</a>',
    zh: '在线轮盘赌玩<a href="//zh.wikipedia.org/wiki/扭扭樂" title="" class="link link_dark" target="_blank">扭扭樂</a>',
  },
  description: {
    be: "Онлайн рулетка для гульні ў Твистер",
    cs: "Online ruleta pro hraní Twister",
    de: "Online-Roulette zu spielen Twister",
    en: "Online spinner to play Twister",
    es: "Ruleta online para jugar Twister",
    fr: "Roulette en ligne pour jouer Twister",
    he: "רולטה מקוונת למשחק טוויסטר",
    hi: "ऑनलाइन रूले ट्विस्टर खेलने के लिए",
    it: "Roulette online per giocare a Twister",
    ja: "ツイスターをプレイするオンラインルーレット",
    po: "Ruletka online do gry w Twister",
    pt: "Roleta online para jogar Twister",
    ru: "Онлайн рулетка для игры в Твистер",
    tr: "Twister oynamak için çevrimiçi rulet",
    uk: "Онлайн рулетка для гри в Твістер",
    zh: "在线轮盘赌玩扭扭樂",
  },
  keywords: {
    be: "рулетка,твистер,онлайн",
    cs: "ruleta,twister,online",
    de: "roulette,twister,online",
    en: "spinner,roulette,twister,online",
    es: "spinner,ruleta,twister,online",
    fr: "spinner,girouette,roulette,twister,en ligne",
    he: "רולטה, טוויסטר",
    hi: "रूले,भांजनेवाला,ऑनलाइन",
    it: "roulette,twister,online",
    ja: "ルーレット,ツイスター,オンライン",
    po: "ruletka,twister,online",
    pt: "roleta,twister,online",
    ru: "рулетка,крутилка,твистер,онлайн",
    tr: "rulet,twister,çevrimiçi",
    uk: "рулетка,твістер,онлайн",
    zh: "扭扭樂,线上",
  },
  tip: {
    be: "Клікні ў любым месцы або націсні любую клавішу",
    cs: "Klikněte kamkoli nebo stiskněte libovolnou klávesu",
    de: "Klicken Sie irgendwo oder eine beliebige Taste drücken",
    en: "Click anywhere or press any key",
    es: "Haga clic en cualquier lugar o presione cualquier tecla",
    fr: "Cliquez n'importe où ou appuyez sur n'importe quelle touche",
    he: "לחץ במקום כלשהו או לחץ על מקש כלשהו",
    hi: "कहीं भी क्लिक करें या किसी भी कुंजी को दबाएं",
    it: "Fare clic su qualsiasi o premere un tasto qualsiasi",
    ja: "どこかをクリックするか、任意のキーを押します",
    po: "Kliknij gdzieś lub naciśnij dowolny klawisz",
    pt: "Clique em algum lugar ou pressione qualquer tecla",
    ru: "Кликни в любом месте или нажми любую клавишу",
    tr: "Herhangi bir yere tıklayın veya herhangi bir tuşa basın",
    uk: "Клікни в будь-якому місці або натисни будь-яку клавішу",
    zh: "单击任意位置或按任意键",
  },
  red: {
    be: "чырвоны",
    cs: "červená",
    de: "rot",
    en: "red",
    es: "rojo",
    fr: "rouge",
    he: "אדום",
    hi: "लाल",
    it: "rosso",
    ja: "赤",
    po: "czerwona",
    pt: "vermelho",
    ru: "красный",
    tr: "kırmızı",
    uk: "червоний",
    zh: "红色",
  },
  yellow: {
    be: "жоўты",
    cs: "žlutá",
    de: "gelb",
    en: "yellow",
    es: "amarillo",
    fr: "jaune",
    he: "צהוב",
    hi: "पीला",
    it: "giallo",
    ja: "黄色",
    po: "żółta",
    pt: "amarelo",
    ru: "жёлтый",
    tr: "sarı",
    uk: "жовтий",
    zh: "黄色",
  },
  green: {
    be: "зялёны",
    cs: "zelená",
    de: "grün",
    en: "green",
    es: "verde",
    fr: "vert",
    he: "ירוק",
    hi: "हरा",
    it: "verde",
    ja: "緑",
    po: "zielona",
    pt: "verde",
    ru: "зелёный",
    tr: "yeşil",
    uk: "зелений",
    zh: "绿色",
  },
  blue: {
    be: "сіні",
    cs: "modrá",
    de: "blau",
    en: "blue",
    es: "azul",
    fr: "bleu",
    he: "כחול",
    hi: "नीला",
    it: "blu",
    ja: "青",
    po: "niebieska",
    pt: "azul",
    ru: "синий",
    tr: "mavi",
    uk: "синій",
    zh: "蓝色",
  },
  rightHand: {
    be: "правая рука",
    cs: "pravá ruka",
    de: "Rechte Hand",
    en: "right hand",
    es: "mano izquierda",
    fr: "main droit",
    he: "יד ימין",
    hi: "दायाँ हाथ",
    it: "mano destra",
    ja: "右手",
    po: "prawa ręka",
    pt: "mão direita",
    ru: "правая рука",
    tr: "sağ el",
    uk: "права рука",
    zh: "右手",
  },
  leftHand: {
    be: "левая рука",
    cs: "levá ruka",
    de: "Linke Hand",
    en: "left hand",
    es: "mano derecha",
    fr: "main gauche",
    he: "יד שמאל",
    hi: "बायां हाथ",
    it: "mano sinistra",
    ja: "左手",
    po: "lewa ręka",
    pt: "mão esquerda",
    ru: "левая рука",
    tr: "sol el",
    uk: "ліва рука",
    zh: "左手",
  },
  rightFoot: {
    be: "правая нага",
    cs: "pravá noha",
    de: "Rechte Fuß",
    en: "right foot",
    es: "pie izquierdo",
    fr: "pied droit",
    he: "רגל ימין",
    hi: "दाहिना पैर",
    it: "piede destro",
    ja: "右足",
    po: "prawa noga",
    pt: "pé direito",
    ru: "правая нога",
    tr: "sağ ayak",
    uk: "права нога",
    zh: "右脚",
  },
  leftFoot: {
    be: "левая нага",
    cs: "levá noha",
    de: "Linke Fuß",
    en: "left foot",
    es: "pie derecho",
    fr: "pied gauche",
    he: "רגל שמאלית",
    hi: "बायां पैर",
    it: "piede sinistro",
    ja: "左足",
    po: "lewa noga",
    pt: "pé esquerdo",
    ru: "левая нога",
    tr: "sol ayak",
    uk: "ліва нога",
    zh: "左脚",
  },
  design: {
    be: "Design",
    cs: "Design",
    de: "Design",
    en: "Design",
    es: "Design",
    fr: "Design",
    he: "Design",
    hi: "डिज़ाइन",
    it: "Design",
    ja: "設計",
    po: "Deseń",
    pt: "Projetar",
    ru: "Дизайн",
    tr: "Tasarım",
    uk: "Design",
    zh: "Design",
  },
  author: {
    be: "Эўгеній Катышев",
    cs: "Evgeny Katyshev",
    de: "Evgeny Katyshev",
    en: "Evgeny Katyshev",
    es: "Evgeny Katyshev",
    fr: "Evgeny Katyshev",
    he: "Evgeny Katyshev",
    hi: "एवगेनी कटेशेव",
    it: "Evgeny Katyshev",
    ja: "Evgeny Katyshev",
    po: "Evgeny Katyshev",
    pt: "Evgeny Katyshev",
    ru: "Евгений Катышев",
    tr: "Evgeny Katyshev",
    uk: "Євгеній Катишев",
    zh: "Evgeny Katyshev",
  },
  "old version": {
    be: "Старая версія",
    cs: "Stará verze",
    de: "Alte Version",
    en: "Old version",
    es: "Versión antigua",
    fr: "Ancienne version",
    he: "גרסה ישנה",
    hi: "पुराना संस्करण",
    it: "Vecchia versione",
    ja: "古いバージョン",
    po: "Stara wersja",
    pt: "Versão antiga",
    ru: "Старая версия",
    tr: "Eski versiyon",
    uk: "Cтара версія",
    zh: "旧版",
  },
};