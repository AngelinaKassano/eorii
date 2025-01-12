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


<div class="w-8/12 flex justify-end">
  <img
    class="3xl:h-[600px] 2xl:h-[450px] xl:h-[450px] lg:h-[450px] md:h-[350px] sm:h-[250px]"
    src="/assets/images/55.png"
    alt="user image"
  />
</div>
    </div>
  

  <div class="banner-2 space-y-10 pb-20" id="work">
   
      
        <div></div>
    
            <h1 class="project-title item text-gray-700 md:text-2xl text-1xl font-Eczar mb- font-bold">Информация предоставленная на сайте является ознакомительной и взята с открытых источников и сайтов рецензий. Мы не призываем вас к пропаганде и распространению *ЛГБТ и наш ресурс против данного движения. Мы не несем ответсвенности за какую либо пропаганду внутри фильма, игры, визуальной новеллы и сам сюжет.</h1>

      
      </div>


 <div class="banner-1 flex h-full items-center">
    <div class="w-7/12 p-12">
      <h2 class="text-gray-700 md:text-2xl text-1xl font-Eczar mb-4 font-bold">
        * «Деятельность „Международного общественного движения ЛГБТ“ запрещена в Российской Федерации».
      </h2>
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
