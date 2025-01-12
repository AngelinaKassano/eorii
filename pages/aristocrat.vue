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

          <h4 class="project-title item">Первый трейлер и детали «Я белый аристократ-хрюшка, но с памятью о прошлой жизни, поэтому я воспитаю младшего братишку»</h4>
    
      <div class="card-image bg-green-100">
        <img
          class="object-cover w-full h-72 md:h-96"
          src="/assets/images/E1RejcsQAi.webp"
        />
      </div>
               <h4 class="font-work_sans text-black font-bold text-2xl tracking-wider ">Ответственной за аниме «Я белый аристократ-хрюшка, но с памятью о прошлой жизни, поэтому я воспитаю младшего братишку» оказалась Studio Comet («Салатница чудаков»), показавшая дебютный трейлер.

В деле режиссер Сато Масафуми («Размеренная жизнь фармацевта-читера: Открыть аптеку в другом мире»), сценарист Хирота Мицутака, дизайнер персонажей Миякава Томоко («Сладкое перевоплощение») и композитор Окехазама Ариса («Монолог фармацевта», «Магическая битва»). Иллюстраторы ранобэ и манги keepout и Yokowake подготовили памятные арты.</h4>

    <div class="space-y-5 py-8 px-8 md:py-16 md:px-20 md:w-1/2">
      <h2 class="project-title item">Sheepify State</h2>

      <button class="text-sky-800 font-bold text-2xl tracking-wider">
        View Case Study
      </button>
    </div>

      </div>





</template>

<script setup lang="ts">
const showMenu = ref<boolean>(false)

useSeoMeta({
  title: 'Eori Аниме светильники 3D',
  ogTitle: 'Eori Аниме светильники 3D',
  description: 'Купите уникальные ночные светильники 3D и аниме, включая светильники в стиле Геншин, тян, тяночка, неко тян и GTA5.',
  ogDescription: 'Купите уникальные ночные светильники 3D и аниме, включая светильники в стиле Геншин, тян, тяночка, неко тян и GTA5.',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
})
</script>
