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

          <h4 class="project-title item">Мультиплеерный режим Ghost of Tsushima: Legends получит аниме от Aniplex</h4>
    
      <div class="card-image bg-green-100">
        <img
          class="object-cover w-full h-72 md:h-96"
          src="/assets/images/kpaT4Ylhcq.webp"
        />
      </div>
               <h4 class="font-work_sans text-black font-bold text-2xl tracking-wider ">Компания Aniplex анонсировала аниме-адаптацию для мультиплеерного режима Ghost of Tsushima, который носит название Ghost of Tsushima: Legends. Режиссером этого сериала выступит Таканобу Мизуно, а за композицию серий будет отвечать Ген Уробучи. Производством займется Kamikaze Douga, а продюсерами выступят Sony Music и Aniplex.Дополнительной информации о данном аниме пока нет, но премьера ожидается в 2027 году на Crunchyroll.</h4>


  
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
