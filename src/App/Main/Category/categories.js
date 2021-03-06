const categories = {
    "appetizers": {
        title: "Закуски",
        text: "Заку́ска (у французькій кухні фр. hors d'œuvre, entrée) — їжа, яка подається перед основними стравами. Закуска часто вживається разом зі спиртними напоями (аперитивом). Бувають холодні (ті що не потребують розігріву) й гарячі закуски.Закуски виготовляють із овочів, фруктів, грибів, м'яса, риби. В українській кухні як закуски популярні солоні або мариновані огірки, квашена капуста, чорна й червона ікра, овочева ікра, салати, шпроти й інші рибні консерви, оселедець, солона риба, солоні гриби. Закускою може також служити нарізка: м'ясна (ковбаса), рибна, сирна тощо.",
        image: "snacks.png",

    },
    "salads": {
        title: "Салати",
        text: "Салат (від італ. Salato, Salate — солоне) — холодна страва, що готується з різних сирих, запечених на грилі, відварених чи солених, маринованих овочів та фруктів. Назва салату залежить від його складників. Це може бути власне салат, різна зелень, коренеплоди, гриби, картопля, огірки, боби, фрукти,сир, риба та морепродукти та ін. Також додаються приправи, наприклад оцет, рослинна олія, майонез, сметана, гірчиця, сіль, перець і т. д. Салати подаються як закуска (hors d'oeuvre) до смаженого м'яса, риби чи як самостійна страва. Салат можна приготувати з одного виду овочів (салат з огірків, томатів, капусти) або кількох видів (салати Літній, Київський та ін.). До багатьох салатів входять м'ясо, птиця, риба та продукти морського промислу, яйця. Продукти для салатів нарізають тоненькими скибочками, кружальцями, маленькими кубиками, деякі шинкують соломкою.Також салати готують консервованими, як то салат «Ніжинський», «Донський». Овочеві салати стимулюють апетит, сприяють виділенню шлункових соків, сприяють перетравленню іншої їжі а також засвоєнню організмом людини жирів, білків та вуглеводів. Овочі нейтралізують гальмівний вплив жирів на секреторну функцію шлунку. Також овочі в поєднанні з жирами мають жовчогінну дію.",
        image: "salads.jpg",
    },
    "soups":{
        title: "Супи",
        text: "Суп, Юшка (нім. Suppe, фр. Soupe) — рідка страва, розповсюджена в багатьох країнах. Суп звичайно подають «на перше». Причому суп — це найпоширеніша перша страва. Супи складаються з рідкої частини — основи і щільної частини — гарніру. Супи є стравами, які містять ряд смакових речовин, збуджують апетит і мають велике поживне значення. Вони містять велику кількість рідини і покривають 20% добової потреби організму людини у воді. Поживність перших страв обумовлюється наявністю гарніру, а також супроводжуючими супи продуктами — хлібом, сметаною. Супи відрізняються високою поживністю, калорійністю, здатністю збуджувати апетит.",
        image: "soups.png",
    },
    "main-courses":{
        title: "Головні страви",
        text: "Головна страва — основна страва, що подається під час прийому їжі, що складається з декількох страв. Як правило, вона йде за антре (entrée). Головна страва зазвичай найважча, гаряча та найскладніша страва в меню. Основними інгредієнтами є м'ясо або риба. Іноді у вегетаріанських стравах, в головній страві намагаються імітувати м'ясні страви. Головній страві передує закуска, суп і (або) салат, а після нього — десерт. З цих причин, головну страву іноді називають «м'ясною стравою».На офіційних обідах, добре спланована головна страва може представляти гастрономічну вершину або кульмінацію. В такому випадку, попередні страви готують і ведуть до основної страви таким чином, що головна страва передзахоплюється, і, при вдалій схемі прийому їжі, збільшує задоволення й насолоду від обіду. Страви, які йдуть за головною стравою, заспокоюють смакові відчуття й шлунок.",
        image: "main-courses.jpg",
    },
    "bakery": {
        title: "Випічка",
        text: "Ви́пічка — загальна назва для хлібобулочних та кондитерських виробів, виробів що виготовляються методом випікання, а також сам цей процес. Залежно від виду борошна, яке використовується для приготування тіста, хліб поділяється на житній, пшеничний, житньо-пшеничний і пшенично-житній; від способу випікання — формовий і подовий; від рецептури — простий і поліпшений. Дрібноштучні хлібобулочні вироби включають в себе випічку переважно з хлібного тіста вагою до 250 грамів. Це булочки, рогалики, круасани тощо.Хліб з житнього борошна. До простих видів хліба з житнього борошна належать: хліб з оббивного, з обдирного та із сіяного борошна. Поверхня хліба з сіяного борошна, як правило, гладенька, з оббивного — шорстка, з наколеннями або без них; колір від світло-коричневого (сіяного) до темно-коричневого (оббивного). Вологість хліба коливається в межах 43-53 %, пористість — від 45 до 60 %, кислотність — від 7 до 13°. Хліб з нижчих сортів борошна характеризується вищою вологістю і кислотністю і меншою пористістю. Дещо меншу вологість і пористість мають подові види хліба. Кондитерські вироби виробляються з інших видів тіста, переважно із додаванням жирів та цукру. Сюди також відносяться й несолодкі вироби з тривалим терміном зберігання (галети, крекери, солоні палички, брецлі). Класичними видами кондитерських виробів є печиво, пироги і торти.",
        image: "bakery.jpg",
    },
    "desserts": {
        title: "Десерти",
        text: "Десе́рт (фр. Dessert від desservir «розчищати стіл») — страва, що подають після обіду, тобто основних страв (взагалі наприкінці трапези). Десерти знаходять величезну варіативність — від кондитерських і запечених виробів (тортів, тістечок, пирогів, млинців, штруделів, кексів, мафінів) до меду, шоколаду, кремів, морозива, сербетів, желе тощо.",
        image: "desserts.jpg",
    },
    "drinks": {
        title: "Напої",
        text: "Напо́ї, іноді напи́тки — рідини, що вживаються для пиття. Поділяються на спиртні та безалкогольні.Напої Законом України віднесено до харчових продуктів: «харчовий продукт – речовина або продукт (неперероблений, частково перероблений або перероблений), призначені для споживання людиною. До харчових продуктів належать напої (в тому числі вода питна), жувальна гумка та будь-яка інша речовина, що спеціально включена до харчового продукту під час виробництва, підготовки або обробки»",
        image: "drinks.jpg",
    },
    
}
export default categories