<template>


  <div class="banner-1">
    <!-- NavBar -->
    <nav
      class="container px-6 mx-auto md:flex md:justify-between md:items-center"
    >
      <div class="flex items-center justify-between">
        <div class="relative w-16 h-16">
          <img
            class="rounded-full border border-gray-100 shadow-sm"
            src="/assets/images/logot.png"
            alt="user image"
          />
        </div>
        <!-- Mobile menu button -->
        <div @click="showMenu = !showMenu" class="flex md:hidden">
          <button
            type="button"
            class="text-gray-800 hover:text-gray-400 focus:outline-none focus:text-gray-400"
          >
            <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
              <path
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
      <ul
        :class="showMenu ? 'flex' : 'hidden'"
        class="flex-col items-end mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0"
      >
        <li class="menu-button"><a href="/">Главная</a></li>
        <li class="menu-button"><a href="/games">Игры</a></li>
        <li class="menu-button"><a href="/information">Информация</a></li>
        <li class="menu-button"><a href="/about">Контакты
      
        </a></li>
      </ul>
    </nav>
    <!-- End Navbar -->

    <div class="flex items-center">
  <div class="w-11/12 space-y-5 md:space-y-10">
    <h1
      class="3xl:text-5xl 2xl:text-6xl xl:text-5xl lg:text-3xl md:text-2xl sm:text-2xl text-lg font-Moscow2024 font-bold leading-tight text-gray-700"
    >
      Самые свежие
      <a>
        новости 
      </a>
      <br />
      из мира аниме
    </h1>

      </div>

   <div class="w-8/12 flex justify-end">
  <img
    class="3xl:h-[600px] 2xl:h-[450px] xl:h-[450px] lg:h-[450px] md:h-[350px] sm:h-[250px]"
    src="/assets/images/55.png"
    alt="user image"
  />
</div>
    </div>
  </div>

  <div class="banner-2 space-y-10 pb-20" id="work">
    <div class="card">
      <div class="space-y-5 py-8 px-8 md:py-16 md:px-20 md:w-1/2">
        <h2 class="project-title item">Автор «Атаки на титанов» выпустил новую мангу для сейю Эрена</h2>
        <p class="font-work_sans pr-12">
          На страницах свежего выпуска журнала Bessatsu Shounen Magazine читатели найдут ваншот Showaru Otoko to AI no Theory по проекту «Фрактал Соеги», которым Каджи Юки (голос Эрена Йегера) отметил двадцатилетие своей карьеры. 
        </p>
        <div></div>
        <a href="/atakat" class="text-sky-800 font-bold text-2xl tracking-wider">
  Подробнее
</a>
      </div>
      <div class="card-image bg-green-100">
        <img
          class="object-cover w-full h-72 md:h-96"
          src="/assets/images/3Az6c9g7DP.webp"
        />
      </div>
    </div>

    <div class="card">
      <div class="space-y-5 py-8 px-8 md:py-16 md:px-20 md:w-1/2">
        <h2 class="project-title item">Мультиплеерный режим Ghost of Tsushima: Legends получит аниме от Aniplex</h2>
        <p class="font-work_sans pr-12">
          Компания Aniplex анонсировала аниме-адаптацию для мультиплеерного режима Ghost of Tsushima, который носит название Ghost of Tsushima: Legends
           </p>
           <div></div>
        <a href="/ghost" class="text-sky-800 font-bold text-2xl tracking-wider">
  Подробнее
</a>
      </div>
      <div class="card-image">
        <img
          class="object-cover w-full h-48 md:h-96"
          src="/assets/images/kpaT4Ylhcq.webp"
        />
      </div>
    </div>
    

    <div class="card">
      <div class="space-y-5 py-8 px-8 md:py-16 md:px-20 md:w-1/2">
        <h2 class="project-title item">Анонсировано аниме «Реинкарнация аристократа»</h2>
        <p class="font-work_sans pr-12">
          Испытываете исекайную недостаточность? Так тут для вас анонсировали аниме «Реинкарнация аристократа: Благословенный с рождения сильнейшей силой» (Kizoku Tensei: Megumareta Umare kara Saikyou no Chikara wo Eru).
             </p>
             <div></div>
        <a href="/reincornation" class="text-sky-800 font-bold text-2xl tracking-wider">
  Подробнее
</a>
      </div>
      <div class="card-image">
        <img
          class="object-cover w-full h-48 md:h-96"
          src="/assets/images/N74FmiNGiR.webp"
        />
      </div>
    </div>
    <div class="card">
      <div class="space-y-5 py-8 px-8 md:py-16 md:px-20 md:w-1/2">
        <h2 class="project-title item">Трейлер и детали «Я белый аристократ-хрюшка, но с памятью о прошлой жизни»</h2>
        <p class="font-work_sans pr-12">
          Ответственной за аниме «Я белый аристократ-хрюшка, но с памятью о прошлой жизни, поэтому я воспитаю младшего братишку» оказалась Studio Comet («Салатница чудаков»), показавшая дебютный трейлер.
           </p>
           <div></div>
        <a href="/aristocrat" class="text-sky-800 font-bold text-2xl tracking-wider">
  Подробнее
</a>
      </div>
      <div class="card-image">
        <img
          class="object-cover w-full h-48 md:h-96"
          src="/assets/images/E1RejcsQAi.webp"
        />
      </div>
    </div>


     <div class="card">
      <div class="space-y-5 py-8 px-8 md:py-16 md:px-20 md:w-1/2">
        <h2 class="project-title item">Тизер «Bleach: Тысячелетняя война крови – Бедствие» — финала аниме</h2>
        <p class="font-work_sans pr-12">
          «Конфликт» окончен, впереди «Бедствие»: Pierrot («Наруто») завершила показ третьей и анонсировала четвертую часть аниме «Bleach: Тысячелетняя война крови», на которой адаптация манги и завершится.
           </p>
           <div></div>
        <a href="/bleach" class="text-sky-800 font-bold text-2xl tracking-wider">
  Подробнее
</a>
      </div>
      <div class="card-image">
        <img
          class="object-cover w-full h-48 md:h-96"
          src="/assets/images/KMVxGyr39w.webp"
        />
      </div>
    </div>

<div class="card">
      <div class="space-y-5 py-8 px-8 md:py-16 md:px-20 md:w-1/2">
        <h2 class="project-title item">Xl Media издаст ранобэ и мангу «Записки из лекарской лавки» — да, это «Монолог фармацевта»</h2>
        <p class="font-work_sans pr-12">
          За пару недель до премьеры второго сезона аниме «Монолог фармацевта» издательство Xl Media анонсировало публикацию первоисточника на русском языке, причем сразу в двух вариантах.
           </p>
           <div></div>
        <a href="/zapiski" class="text-sky-800 font-bold text-2xl tracking-wider">
  Подробнее
</a>
      </div>
      <div class="card-image">
        <img
          class="object-cover w-full h-48 md:h-96"
          src="/assets/images/EJ10iESUiO.webp"
        />
      </div>
    </div>


<div class="card">
      <div class="space-y-5 py-8 px-8 md:py-16 md:px-20 md:w-1/2">
        <h2 class="project-title item">Второй сезон аниме "Кайдзю номер 8" покажут в июле 2025 года</h2>
        <p class="font-work_sans pr-12">
          Авторы аниме-адаптации манги "Кайдзю No. 8" (Kaiju 8-gou) сообщили о том, что продолжение одного из лучших аниме весны 2024 года будет транслироваться летом 2025 года. В частности речь идет о том, что полноценный второй сезон стартует в июле будущего года, но перед этим фанатов ждет фильм-рекап первого сезона.

Второй сезон аниме Кайдзю номер 8 покажут в июле 2025 года
Нового трейлера в честь данного анонса нам не предоставили, а потому в наличии только свежий постер с одним из новых (для смотрящих аниме) героев. Производством сериала продолжит заниматься студия Production I.G.
           </p>
           <div></div>
        <a href="/kaidzy" class="text-sky-800 font-bold text-2xl tracking-wider">
  Подробнее
</a>
      </div>
      <div class="card-image">
        <img
          class="object-cover w-full h-48 md:h-96"
          src="/assets/images/3UMhsxTTHn.webp"
        />
      </div>
    </div>


<div class="card">
      <div class="space-y-5 py-8 px-8 md:py-16 md:px-20 md:w-1/2">
        <h2 class="project-title item">Поднятие уровня в одиночку» продолжится 4 января, смотрим первый трейлер новых эпизодов</h2>
        <p class="font-work_sans pr-12">
          A-1 Pictures (Sword Art Online) выпустила дебютный трейлер аниме «Поднятие уровня в одиночку: Восстань из тени», второго сезона вроде как популярной истории про порталы, монстров и охотников на них.
           </p>
           <div></div>
        <a href="/sword" class="text-sky-800 font-bold text-2xl tracking-wider">
  Подробнее
</a>
      </div>
      <div class="card-image">
        <img
          class="object-cover w-full h-48 md:h-96"
          src="/assets/images/GsZisVh7p6.webp"
        />
      </div>
    </div>


  </div>

  <div class="banner-2 md:flex items-center md:justify-evenly" id="about">
    <img
      class="md:h-[500px] h-[400px]"
      src="/assets/images/55.png"
      alt="user image"
    />
    <div class="space-y-5 py-8 px-8 md:py-16 md:px-20 md:w-1/2">
      <h4 class="project-title item">Sheepify States</h4>
      <p class="font-work_sans">
        I am Salman Khan from Lucknow, India. I am working in an Indian Startup
        as a User Eperience Designer for the past two years.
        <br />
        I got featured various times on many big and small marketplaces,
        portfolio websites and blogs. I also received some awards and
        recognitions from some of the big and small award companies. Besides
        designing, I like to watch anime, read books and solve sudoku.
      </p>
      <button class="text-sky-800 font-bold text-2xl tracking-wider">
        View Case Study
      </button>
    </div>
  </div>

  <div class="banner-1 flex h-full items-center">
    <div class="w-7/12 p-12">
      <h2 class="text-gray-700 md:text-2xl text-1xl font-Eczar mb-4 font-bold">
        Если вы являетесь правообладателем или автором поста который размещен у нас и вы против размещения или хотите внести правки, то вы можете сообщить нам об этом на почту.
      </h2>
      <a class="underline text-1xl text-black-400 font-work_sans" 
        >📧 hire@author.com</a  
        
      >
   </div>
  </div>
 
</template>

<script setup lang="ts">
import Yandexreklama from '~/components/Yandexreklama.vue';

const showMenu = ref<boolean>(false)

useSeoMeta({
  title: 'Eori новостями из мира аниме',
  ogTitle: 'Eori новостями из мира аниме',
  description: 'Следите за свежими новостями из мира аниме: обзоры новинок, лучшие аниме игры, мобильные проекты и горячие релизы. Всё, что нужно фанатам аниме!',
  ogDescription: 'Узнайте о самых популярных новостях аниме, новинках игр и мобильных аниме проектах. Читайте обзоры, следите за событиями и будьте в курсе!',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
})

</script>
