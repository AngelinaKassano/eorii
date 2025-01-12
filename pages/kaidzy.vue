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

          <h4 class="project-title item">Второй сезон аниме "Кайдзю номер 8" покажут в июле 2025 года</h4>
    
      <div class="card-image bg-green-100">
        <img
          class="object-cover w-full h-72 md:h-96"
          src="/assets/images/3UMhsxTTHn.webp"
        />
      </div>
               <h4 class="font-work_sans text-black font-bold text-2xl tracking-wider ">Авторы аниме-адаптации манги "Кайдзю No. 8" (Kaiju 8-gou) сообщили о том, что продолжение одного из лучших аниме весны 2024 года будет транслироваться летом 2025 года. В частности речь идет о том, что полноценный второй сезон стартует в июле будущего года, но перед этим фанатов ждет фильм-рекап первого сезона.

Второй сезон аниме Кайдзю номер 8 покажут в июле 2025 года
Нового трейлера в честь данного анонса нам не предоставили, а потому в наличии только свежий постер с одним из новых (для смотрящих аниме) героев. Производством сериала продолжит заниматься студия Production I.G.</h4>

    
 
  <div class>
    
      <h2 class>
        
      </h2>
      <a class="underline text-1xl text-black-400 font-work_sans" 
        ></a  
        
      >
   </div>
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


