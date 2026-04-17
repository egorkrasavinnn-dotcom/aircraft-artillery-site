'use client';

import { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows, useGLTF } from '@react-three/drei';
import { Suspense } from 'react';

function Model({ url }: { url: string }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} />;
}

const timelineData: Record<string, any> = {
  "1914": {
    title: "Начало Первой мировой войны",
    year: "1914",
    description: "Русская армия вступила в войну с современной артиллерией, но столкнулась с острым дефицитом боеприпасов. Авиация только начинала развиваться и использовалась исключительно для разведки. На вооружении стояли французские и собственные конструкции самолётов, основной упор делался на сбор информации о противнике.",
    
    artillery: {
      main: "76-мм полевая пушка обр. 1902 г. • 122-мм гаубица обр. 1909/10 гг.",
      details: "В войну Россия вступила примерно с 7 тысячами орудий. Основной боевой единицей была 76-мм пушка образца 1902 года, спроектированная германским конструктором Крейзотом. Это было надёжное, хорошо отработанное орудие со скоростью стрельбы 8-10 выстрелов в минуту. Однако уже с первых месяцев войны русская промышленность не могла обеспечить достаточный выпуск боеприпасов. К концу 1914 года ощущался острый снарядный голод. Тяжёлая артиллерия была недостаточна: 122-мм гаубицы образца 1909/10 годов выпускались ограниченным количеством. Немецкая артиллерия была намного более мощной и лучше организованной.",
      production: "Производство снарядов: ~ 550 тысяч в месяц (недостаточно)",
      losses: "К концу года потери в орудиях составили около 15%"
    },
    
    aviation: {
      main: "Самолёты-разведчики: Farman MF.7, Blériot XI • Первые боевые вылеты",
      details: "Русская авиация в начале войны состояла из примерно 200 самолётов, разбросанных по фронту. Это были в основном французские самолёты и несколько русских экземпляров конструкции Сикорского. Самолёты Фармана (Farman) и Блерио (Blériot) не имели никакого вооружения, пилоты вели разведку с фотокамерами. Авиация полностью подчинялась военно-полевому начальству, не имела ни малейшей самостоятельности. За целый год воздушных боёв произошло буквально несколько случаев: пилоты стреляли друг в друга из личного оружия или отстреливались от немецких самолётов.",
      aircraft: "Farman MF.7: скорость 60 км/ч • Потолок 800 м • Экипаж 2 человека",
      operations: "Боевых вылетов: ~ 200 за весь год • Роль: разведка, наблюдение за артиллерией"
    },
    
    model: "/models/ilya_muromets.glb"
  },

  "1915": {
    title: "Великое отступление. Снарядный голод",
    year: "1915",
    description: "Критический дефицит боеприпасов привёл к массовым потерям. Немецкая артиллерия подавляла русскую численно и по огневой мощи. Авиация становится более активной: появляются первые истребители, начинаются попытки вооружения самолётов. Первые воздушные дуэли, хотя ещё примитивные по характеру.",
    
    artillery: {
      main: "76-мм полевые пушки (критическая нехватка боеприпасов) • 122-мм и 152-мм гаубицы",
      details: "1915 год стал годом величайшего кризиса русской артиллерии. Дефицит снарядов был настолько острым, что в приказах главнокомандующего ограничивались выстрелы при артиллерийской подготовке. Офицеры получали приказания экономить боеприпасы и вести огонь только в критические моменты. Немецкая артиллерия, напротив, имела достаточно снарядов и вела интенсивный огонь. На центральных участках фронта немцы имели тройное и даже четырёхкратное превосходство в орудиях. Русская армия отступала, бросая орудия и боеприпасы. За год потери составили около 3000 орудий. Начали срочно организовываться новые артиллерийские мастерские.",
      production: "Производство снарядов: ~ 600-700 тысяч в месяц (остаётся критическим)",
      tactics: "Введены ограничения на расход боеприпасов, развивается артиллерийская разведка"
    },
    
    aviation: {
      main: "Истребители: Morane-Saulnier L, Type N • Первые вооруженные самолёты",
      details: "В 1915 году началась революция в авиации. Появились первые истребители с пулемётами. Русская авиация получила французские Morane-Saulnier Type N с одним пулемётом Льюиса. Первоначально пулемёты крепились причудливо: кто-то устанавливал их на крыльях для стрельбы в стороны, кто-то пытался монтировать сверху фюзеляжа. Началась эпоха первых воздушных дуэлей. Боевой дух авиаторов был высок, несмотря на примитивное вооружение. Происходили поединки между отдельными пилотами. Численность авиации увеличилась до 400 самолётов, но боевая подготовка оставалась очень низкой.",
      aircraft: "Morane-Saulnier Type N: скорость 160 км/ч • Потолок 4000 м • 1 пулемёт 7,62 мм",
      operations: "Боевых вылетов: ~ 1500 за год • Зафиксировано первых воздушных боёв: ~ 50"
    },
    
    model: "/models/ilya_muromets.glb"
  },

  "1916": {
    title: "Брусиловский прорыв. Триумф артиллерии",
    year: "1916",
    description: "Самая успешная операция русской армии в войне. Артиллерия использовалась новаторскими способами с массированными артподготовками на узком фронте. Авиация активно поддерживала наземные войска разведкой, бомбардировкой и штурмом позиций. Единственная операция, где русская военная машина показала свои возможности при правильной организации.",
    
    artillery: {
      main: "76-мм пушки обр. 1902 г. • 122-мм и 152-мм гаубицы • 203-мм и 305-мм мортиры",
      details: "Брусиловский прорыв стал вершиной мастерства русской артиллерии. К 1916 года русская промышленность нарастила производство, и артиллеристы использовали новые методы: координированный огонь по глубине, связь с авиацией, подвижные орудия поддержки пехоты. Немцы и австрийцы, привыкшие к позиционной войне, были потрясены мощью русской артиллерии.",
      concentration: "1884 орудия на фронте операции • Плотность огня: 300 орудий на км в точке прорыва",
      barrage: "Артподготовка: 1.7 миллиона выстрелов за несколько дней",
      casualties: "Противник потерял убитыми и раненными около 400 тысяч человек"
    },
    
    aviation: {
      main: "Истребители Nieuport XVII, SPAD VII • Бомбардировщики De Havilland DH.4 • Бомбардировщик Илья Муромец",
      details: "Авиация сыграла значительную роль в Брусиловском прорыве. Впервые русская авиация применялась массированно и организованно. В небе над полем боя каждый день находилось до 150 самолётов, которые вели разведку, фотографирование позиций, бомбардировку и прикрытие наземных войск. Истребители Nieuport XVII были лучшими машинами своего класса в то время — они обладали отличной скороподъёмностью и маневренностью. На них летали лучшие русские асы: Александр Казаков, Константин Смирнов и другие. Бомбардировщики наносили удары по скоплениям противника, его артиллерийским позициям и штабам. Тяжёлые бомбардировщики Илья Муромец впервые показали свою ценность: они были практически неуязвимы для истребителей противника благодаря своему мощному оборонительному вооружению. Начала развиваться новая тактика боевого обеспечения войск: авиация становилась отдельным родом войск.",
      aircraft: {
        nieuport: "Nieuport XVII: скорость 180 км/ч • Потолок 5300 м • 1-2 пулемёта",
        spad: "SPAD VII: скорость 190 км/ч • Потолок 5600 м • 1 пулемёт синхронизированный",
        dh4: "De Havilland DH.4: скорость 200 км/ч • Бомбовая нагрузка 200 кг • 2 пулемёта"
      },
      operations: "Боевых вылетов: ~ 8000 за операцию • Сбитых немецких машин: ~ 150 • Перевес в воздухе: русский"
    },
    
    model: "/models/ilya_muromets.glb"
  },

  "1917": {
    title: "Революция. Развал боевой мощи",
    year: "1917",
    description: "После Февральской революции боевая мощь русской армии катастрофически упала. Артиллерийские расчёты распадались, офицеры нередко убивались солдатами. После Октябрьской революции началась гражданская война, основные боевые самолёты и орудия были разделены между красными и белыми. Авиация переходит под контроль большевиков, многие опытные пилоты бегут с белыми армиями.",
    
    artillery: {
      main: "Остатки 76-мм и 122-мм орудий, распределённые между красными и белыми",
      details: "К 1917 году русская артиллерия представляла собой развалину. После Февральской революции дисциплина в армии разрушилась напрочь. Артиллерийские расчёты отказывались вести огонь, офицеры подвергались избиениям, а то и убивались. Приказы главнокомандующего больше не исполнялись. В период Октябрьской революции начались грабежи складов боеприпасов, артиллерийское имущество расхищалось или уничтожалось. Орудия, которые раньше были в боевом строю, либо остались в расположении войск, либо захватывались то красными, то белыми. К концу года артиллерия как вид боевого обеспечения практически перестала существовать. Начали формироваться части Красной армии, которым нужно было всё переучивать заново.",
      breakdown: "Боевая способность: снизилась на 90% • Численность артиллеристов: уменьшилась вдвое • Боеприпасы: в дефиците"
    },
    
    aviation: {
      main: "Хаотичное переформирование авиации, переход на сторону большевиков",
      details: "Авиация распадалась параллельно с армией. Часть опытных пилотов и механиков присоединилась к большевикам, другая часть уехала с белыми армиями, третья просто разбежалась по домам. Авиационные заводы, расположенные в европейской части России, оказались под контролем большевиков и были переориентированы на производство самолётов для Красной армии. Самолёты, которые раньше летали в боях, либо уничтожались, либо захватывались. К концу 1917 года боевых вылетов практически не было. Авиация существовала только номинально, как остатки старой армии, которые нужно было заново организовать и переподготовить.",
      operations: "Боевые вылеты: практически прекратились • Переход на сторону большевиков: массовый • Потери техники: неизвестны точно"
    },
    
    model: "/models/ilya_muromets.glb"
  },

  "1918": {
    title: "Гражданская война. Адская мешанина",
    year: "1918",
    description: "Год полного военного хаоса. Гражданская война, интервенция, множество армий красных, белых, зелёных и интервентов. Авиация и артиллерия использовались противоборствующими сторонами в условиях острой нехватки боеприпасов, топлива и запчастей. Техника кустарно ремонтировалась, боеприпасы производились в полевых условиях. Единственное организованное боевое применение техники осуществляла Красная армия.",
    
    artillery: {
      main: "Смешанный парк: 76-мм русские пушки, трофейные немецкие, австро-венгерские, британские орудия",
      details: "Артиллерия периода гражданской войны была кошмаром логистики. Одна и та же пушка могла за месяц переходить из рук белых в руки красных, потом в руки зелёных, потом снова к красным. Красная армия, несмотря на хаос, начала методично собирать и восстанавливать артиллерию. Были созданы артиллерийские школы, начата подготовка новых расчётов из рабочих и крестьян. Белые армии использовали трофейную немецкую, австро-венгерскую и британскую артиллерию, которая была там же, где и русская. Интервенты (британцы, французы, американцы, японцы) привозили собственную артиллерию, но её было немного. Боеприпасы производились в кустарных условиях на захваченных или переоборудованных заводах. Качество было низким, половину выпуска составляли холостые патроны. Снабжение артиллеристов было ужасным: люди голодали, не получали обмундирования. Несмотря на все трудности, Красная армия организационно превосходила своих противников.",
      red_army: "Красная армия: собрано и восстановлено ~ 3000 орудий • Подготовка: интенсивная переподготовка",
      white_armies: "Белые армии: использовали трофейное вооружение • Снабжение: критическое • Боевая подготовка: теряла уровень",
      ammunition: "Боеприпасы: производство кустарное • Выход годных снарядов: 40-50%"
    },
    
    aviation: {
      main: "Смешанный парк: Nieuport XVII, SPAD VII, De Havilland DH.4, Илья Муромец, Sopwith Camel, Брегет XIV",
      details: "Авиация в период гражданской войны была куда менее организованной, чем артиллерия. Красная армия постепенно собирала остатки старого авиационного парка. На аэродромах нашли самолёты, оставленные старой армией, трофейные немецкие и австро-венгерские машины, самолёты интервентов. Лётчики были в основном старые офицеры, которые служили красным за отсутствием лучшего варианта. Топливо — и особенно авиационный бензин высокого качества — был в огромном дефиците. Масло, смазка, запчасти производились в заводских условиях из того, что есть. Многие самолёты были просто разобраны на детали для ремонта других. Боевые вылеты происходили редко и, в основном, для разведки и штурма позиций. Воздушные дуэли были редкостью. Белые лётчики летали на остатках старого авиационного парка, но боевой подготовки практически не было. Интервенты использовали собственные самолёты, но их было немного. К концу 1918 года Красная армия имела примерно 150 боевых самолётов в разных степенях готовности.",
      red_air_force: "Красная авиация: ~ 150 самолётов в боевом составе • Боевые вылеты: нерегулярны • Топливо: хронический дефицит",
      resources: "Топливо: производство минимальное • Масло: кустарное производство • Запчасти: разборка здоровых машин на части",
      operations: "Боевые операции: редкие • Основная роль: разведка и штурм позиций • Организация: хаотичная"
    },
    
    model: "/models/ilya_muromets.glb"
  }
};

const aircraftInfo = {
  name: "Илья Муромец",
  country: "Российская Империя",
  type: "Четырёхмоторный тяжёлый бомбардировщик",
  designer: "Игорь Иванович Сикорский",
  year: "1914",
  
  specs: {
    length: "17,4 м",
    wingspan: "34,5 м",
    height: "4,7 м",
    empty_weight: "4200 кг",
    max_weight: "5400 кг",
    max_speed: "140 км/ч",
    cruise_speed: "110 км/ч",
    ceiling: "3000 м",
    range: "800 км",
    endurance: "5 часов",
    crew: "5-7 человек",
    engines: "4x Sunbeam 150 л.с. (или RBVZ M-6, 150 л.с.)",
    total_power: "600 л.с."
  },
  
  armament: {
    machine_guns: "7 пулемётов Льюиса 7,62 мм на гибких установках",
    gun_positions: "Передняя башенка (1), левая (1), правая (1), нижняя (2), верхняя (2)",
    bombs: "500-1000 кг бомб различного калибра"
  },
  
  history: "Илья Муромец — легендарный самолёт, первый в мире практически применённый тяжёлый многомоторный бомбардировщик. Создан великим авиаконструктором Игорем Сикорским в 1914 году на основе его же пассажирского самолёта «Гранд». Первоначально использовался как пассажирский лайнер на маршрутах Санкт-Петербург—Киев—Одесса, но с началом войны был переоборудован в бомбардировщик. На вооружение поступил в 1915 году. Машина была революционной для своего времени: четыре двигателя обеспечивали достаточную мощность для подъёма в воздух тяжёлого груза. Экипаж состоял из пилота, второго пилота, штурмана, бомбардира, двух-трёх стрелков и механика. Вооружение состояло из семи пулемётов Льюиса на гибких установках, расположенных в разных местах фюзеляжа. Это позволяло машине защищаться от истребителей противника со всех направлений. За всю историю боевого применения ни один Илья Муромец не был сбит истребителем противника — немецкие Albatros и Fokker не могли справиться с интенсивным огнём из семи пулемётов. Самолёт был уязвим только для зенитной артиллерии противника.",
  
  combat_record: "Всего было построено 73 самолёта Илья Муромец различных модификаций (от И.М-1 до И.М-6). На фронте они совершили более 400 боевых вылетов. Прошли все основные операции Первой мировой войны: Брусиловский прорыв, наступление 1917 года. Самолёты использовались для бомбардировки позиций противника, его коммуникаций, складов и даже железнодорожных станций. Максимальное боевое применение имело место в 1916 году. На каждый самолёт в среднем совершалось 5-6 боевых вылетов. Потери составили около 20 машин, но большей частью не от боевых действий, а от технических неисправностей, ошибок пилотов или аварийных посадок. После революции несколько самолётов продолжили летать в составе Красной армии до 1920 года.",
  
  modifications: "И.М-1 (базовая модель), И.М-2 (более мощные двигатели), И.М-3 (лучшее вооружение), И.М-4 (усиленная конструкция), И.М-5 (более лёгкая версия), И.М-6 (последняя модификация с авиационной пушкой 37 мм)",
  
  legacy: "Илья Муромец стал родоначальником советских дальних бомбардировщиков. Его конструкция и концепция повлияли на развитие авиации не только в России, но и в других странах. Сикорский, эмигрировав в Америку, применил опыт создания многомоторных машин при разработке для США. Самолёт остался в истории авиации как первый успешный тяжёлый бомбардировщик, который доказал пригодность многомоторной схемы для боевого применения."
};

export default function WW1ArtilleryTimeline() {
  const [selectedYear, setSelectedYear] = useState<string>("1916");
  const years = Object.keys(timelineData);

  return (
    <div className="min-h-screen bg-zinc-950 text-amber-100 overflow-hidden">
      <div className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/90 border-b border-amber-900/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-amber-300 tracking-tight">
            Русская артиллерия и авиация в ПМВ
          </h1>
          <div className="text-sm text-amber-500/70">Интерактивная хронология</div>
        </div>
      </div>

      <div className="pt-24 pb-12 max-w-7xl mx-auto px-8">
        <div className="flex flex-wrap gap-3 mb-12 justify-center">
          {years.map((yearKey) => (
            <button
              key={yearKey}
              onClick={() => setSelectedYear(yearKey)}
              className={`px-6 py-3 rounded-xl text-sm transition-all duration-300 border ${
                selectedYear === yearKey 
                  ? 'bg-amber-400 text-zinc-950 border-amber-400 font-medium shadow-lg shadow-amber-500/30' 
                  : 'border-amber-800 hover:border-amber-600 text-amber-400'
              }`}
            >
              {timelineData[yearKey].year}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-10 mb-12">
          <div className="md:col-span-2">
            <h2 className="text-4xl font-bold text-amber-300 mb-6">
              {timelineData[selectedYear].title}
            </h2>
            <p className="text-lg leading-relaxed text-amber-100/90 mb-8">
              {timelineData[selectedYear].description}
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-zinc-900/80 border border-amber-900/60 rounded-2xl p-8">
            <h3 className="uppercase text-amber-500 text-sm tracking-widest mb-6 font-bold">Артиллерия</h3>
            <div className="space-y-4">
              <div>
                <p className="text-amber-400 font-semibold mb-2">Основные орудия:</p>
                <p className="text-amber-100/80 text-sm leading-relaxed">
                  {timelineData[selectedYear].artillery.main}
                </p>
              </div>
              <div>
                <p className="text-amber-400 font-semibold mb-2">Подробно:</p>
                <p className="text-amber-100/80 text-sm leading-relaxed">
                  {timelineData[selectedYear].artillery.details}
                </p>
              </div>
              {timelineData[selectedYear].artillery.concentration && (
                <div>
                  <p className="text-amber-400 font-semibold mb-2">Концентрация:</p>
                  <p className="text-amber-100/80 text-sm">
                    {timelineData[selectedYear].artillery.concentration}
                  </p>
                </div>
              )}
              {timelineData[selectedYear].artillery.production && (
                <div>
                  <p className="text-amber-400 font-semibold mb-2">Производство:</p>
                  <p className="text-amber-100/80 text-sm">
                    {timelineData[selectedYear].artillery.production}
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="bg-zinc-900/80 border border-blue-900/60 rounded-2xl p-8">
            <h3 className="uppercase text-blue-400 text-sm tracking-widest mb-6 font-bold">Авиация</h3>
            <div className="space-y-4">
              <div>
                <p className="text-blue-300 font-semibold mb-2">Основные машины:</p>
                <p className="text-amber-100/80 text-sm leading-relaxed">
                  {timelineData[selectedYear].aviation.main}
                </p>
              </div>
              <div>
                <p className="text-blue-300 font-semibold mb-2">Подробно:</p>
                <p className="text-amber-100/80 text-sm leading-relaxed">
                  {timelineData[selectedYear].aviation.details}
                </p>
              </div>
              {timelineData[selectedYear].aviation.operations && (
                <div>
                  <p className="text-blue-300 font-semibold mb-2">Операции:</p>
                  <p className="text-amber-100/80 text-sm">
                    {timelineData[selectedYear].aviation.operations}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-12 h-[560px] rounded-3xl overflow-hidden border border-amber-900/40 bg-black relative mb-8">
          <Canvas camera={{ position: [0, 0.5, 1.2], fov: 45 }}>
            <ambientLight intensity={0.6} />
            <spotLight position={[10, 15, 5]} angle={0.3} intensity={1.5} />
            <Environment preset="warehouse" />
            <ContactShadows position={[0, -2.5, 0]} opacity={0.7} scale={12} blur={2} />

            <Suspense fallback={null}>
              <Model url={timelineData[selectedYear].model} />
            </Suspense>

            <OrbitControls 
              enablePan={false}
              minDistance={0.8}
              maxDistance={5}
              autoRotate
              autoRotateSpeed={0.4}
            />
          </Canvas>

          <div className="absolute bottom-6 left-6 bg-black/70 text-amber-400 text-xs px-4 py-2 rounded-xl border border-amber-900">
            Вращай модель мышкой • Прокручивай колёсиком для масштабирования
          </div>
        </div>

        <div className="bg-zinc-900/80 border border-amber-900/60 rounded-2xl p-10">
          <h2 className="text-3xl font-bold text-amber-300 mb-8">Легендарный Илья Муромец</h2>
          
          <div className="grid md:grid-cols-2 gap-10 mb-10">
            <div>
              <h3 className="text-amber-400 font-bold mb-6 uppercase tracking-widest text-sm">Основные характеристики</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between border-b border-amber-900/40 pb-2">
                  <span className="text-amber-500">Тип:</span>
                  <span className="text-amber-100/80">{aircraftInfo.type}</span>
                </div>
                <div className="flex justify-between border-b border-amber-900/40 pb-2">
                  <span className="text-amber-500">Конструктор:</span>
                  <span className="text-amber-100/80">{aircraftInfo.designer}</span>
                </div>
                <div className="flex justify-between border-b border-amber-900/40 pb-2">
                  <span className="text-amber-500">Год:</span>
                  <span className="text-amber-100/80">{aircraftInfo.year}</span>
                </div>
                <div className="flex justify-between border-b border-amber-900/40 pb-2">
                  <span className="text-amber-500">Двигатели:</span>
                  <span className="text-amber-100/80">{aircraftInfo.specs.engines}</span>
                </div>
                <div className="flex justify-between border-b border-amber-900/40 pb-2">
                  <span className="text-amber-500">Максимальная скорость:</span>
                  <span className="text-amber-100/80">{aircraftInfo.specs.max_speed}</span>
                </div>
                <div className="flex justify-between border-b border-amber-900/40 pb-2">
                  <span className="text-amber-500">Потолок:</span>
                  <span className="text-amber-100/80">{aircraftInfo.specs.ceiling}</span>
                </div>
                <div className="flex justify-between border-b border-amber-900/40 pb-2">
                  <span className="text-amber-500">Дальность полёта:</span>
                  <span className="text-amber-100/80">{aircraftInfo.specs.range}</span>
                </div>
                <div className="flex justify-between border-b border-amber-900/40 pb-2">
                  <span className="text-amber-500">Экипаж:</span>
                  <span className="text-amber-100/80">{aircraftInfo.specs.crew}</span>
                </div>
                <div className="flex justify-between border-b border-amber-900/40 pb-2">
                  <span className="text-amber-500">Пулемёты:</span>
                  <span className="text-amber-100/80">{aircraftInfo.armament.machine_guns}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-amber-500">Бомбовая нагрузка:</span>
                  <span className="text-amber-100/80">{aircraftInfo.armament.bombs}</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-amber-400 font-bold mb-6 uppercase tracking-widest text-sm">Размеры</h3>
              <div className="space-y-3 text-sm mb-8">
                <div className="flex justify-between border-b border-amber-900/40 pb-2">
                  <span className="text-amber-500">Длина:</span>
                  <span className="text-amber-100/80">{aircraftInfo.specs.length}</span>
                </div>
                <div className="flex justify-between border-b border-amber-900/40 pb-2">
                  <span className="text-amber-500">Размах крыла:</span>
                  <span className="text-amber-100/80">{aircraftInfo.specs.wingspan}</span>
                </div>
                <div className="flex justify-between border-b border-amber-900/40 pb-2">
                  <span className="text-amber-500">Высота:</span>
                  <span className="text-amber-100/80">{aircraftInfo.specs.height}</span>
                </div>
                <div className="flex justify-between border-b border-amber-900/40 pb-2">
                  <span className="text-amber-500">Пустой вес:</span>
                  <span className="text-amber-100/80">{aircraftInfo.specs.empty_weight}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-amber-500">Максимальный взлётный вес:</span>
                  <span className="text-amber-100/80">{aircraftInfo.specs.max_weight}</span>
                </div>
              </div>

              <h3 className="text-amber-400 font-bold mb-3 uppercase tracking-widest text-sm">Боевые характеристики</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between border-b border-amber-900/40 pb-2">
                  <span className="text-amber-500">Крейсерская скорость:</span>
                  <span className="text-amber-100/80">{aircraftInfo.specs.cruise_speed}</span>
                </div>
                <div className="flex justify-between border-b border-amber-900/40 pb-2">
                  <span className="text-amber-500">Длительность полёта:</span>
                  <span className="text-amber-100/80">{aircraftInfo.specs.endurance}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-amber-500">Суммарная мощность:</span>
                  <span className="text-amber-100/80">{aircraftInfo.specs.total_power}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-amber-900/40 pt-10">
            <h3 className="text-amber-400 font-bold mb-4 uppercase tracking-widest text-sm">История</h3>
            <p className="text-amber-100/90 leading-relaxed mb-6">
              {aircraftInfo.history}
            </p>

            <h3 className="text-amber-400 font-bold mb-4 uppercase tracking-widest text-sm">Боевой Рекорд</h3>
            <p className="text-amber-100/90 leading-relaxed mb-6">
              {aircraftInfo.combat_record}
            </p>

            <h3 className="text-amber-400 font-bold mb-4 uppercase tracking-widest text-sm">Наследие</h3>
            <p className="text-amber-100/90 leading-relaxed">
              {aircraftInfo.legacy}
            </p>
          </div>
        </div>

        <p className="text-center text-[10px] text-amber-500/30 mt-12">
          Интерактивный проект • Русская артиллерия и авиация в ПМВ • 1914–1918
        </p>
      </div>
	<p className="text-center text-xs text-amber-400/60 mt-8 pb-8 border-t border-amber-900/40 pt-6">
  Авторы проекта — студенты ДГТУ группы УТС-11: Красавин Егор, Кравец Даниил, Костюков Сергей
</p>
    </div>
  );
}