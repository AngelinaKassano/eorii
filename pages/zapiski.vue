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


     </div>

 <div class="banner-2 space-y-10 pb-20" id="work">

          <h4 class="project-title item">Xl Media издаст ранобэ и мангу «Записки из лекарской лавки» — да, это «Монолог фармацевта»</h4>
    
      <div class="card-image bg-green-100">
        <img
          class="object-cover w-full h-72 md:h-96"
          src="/assets/images/EJ10iESUiO.webp"
        />
      </div>
               <h4 class="font-work_sans text-black font-bold text-2xl tracking-wider ">За пару недель до премьеры второго сезона аниме «Монолог фармацевта» издательство Xl Media анонсировало публикацию первоисточника на русском языке, причем сразу в двух вариантах.

В печать уйдет ранобэ Хьюги Нацу и Шино Токо — насчитывающая уже пятнадцать книг история родом с сайта Shousetsuka ni Narou, которую Shufunotomo под импринтом Hero Bunko выпускает с 2014 года, а также ее адаптация в виде манги от Нано Ицуки и Некокураге, взятую в оборот Square Enix: четырнадцать томов с 2017 года.

Xl Media издаст ранобэ и мангу «Записки из лекарской лавки» — да, это «Монолог фармацевта»
Рабочий перевод названия Kusuriya no Hitorigoto — «Записки из лекарской лавки». Что до формата, то в обоих случаях это будет твердый переплет с суперобложкой: ранобэ 13 х 20 см, двойные омнибусы для манги.</h4>
  
   
    </div>

      





</template>

<script setup lang="ts">
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
