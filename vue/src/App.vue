<template>
  <div>
    <header class="text-gray-600 body-font">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 500 658" fill="none">
            <path d="M422.733 599.417V423.29H475.35V657.873H0.43335V423.29H53.05V599.417H422.733Z" fill="#BCBBBB"/>
            <path d="M111.133 406.589L369.433 466.563L380.367 408.866L122.067 348.892L111.133 406.589V406.589ZM145.3 269.939L384.467 393.683L406.333 340.541L167.167 216.038L145.3 269.939ZM211.583 139.362L414.533 326.876L448.017 282.085L245.067 94.5713L211.583 139.362V139.362ZM342.783 0.434631L300.417 35.3563L457.583 270.698L499.95 235.776L342.783 0.434631V0.434631ZM105.667 540.202H369.433V481.746H105.667V540.202Z" fill="#F48023"/>
          </svg>
          <span class="ml-3 text-xl">Clone Stack Overflow</span>
        </a>
        <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <router-link to="/" class="mr-5 hover:text-gray-900">Главная страница</router-link>
          <router-link to="/questions/" class="mr-5 hover:text-gray-900">Список вопросов</router-link>
          <router-link to="/auth" class="mr-5 hover:text-gray-900">Авторизация</router-link>
        </nav>
        <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
          Задать вопрос
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </header>
    <router-view/>
    <footer class="text-gray-600 body-font">
      <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 500 658" fill="none">
            <path d="M422.733 599.417V423.29H475.35V657.873H0.43335V423.29H53.05V599.417H422.733Z" fill="#BCBBBB"/>
            <path d="M111.133 406.589L369.433 466.563L380.367 408.866L122.067 348.892L111.133 406.589V406.589ZM145.3 269.939L384.467 393.683L406.333 340.541L167.167 216.038L145.3 269.939ZM211.583 139.362L414.533 326.876L448.017 282.085L245.067 94.5713L211.583 139.362V139.362ZM342.783 0.434631L300.417 35.3563L457.583 270.698L499.95 235.776L342.783 0.434631V0.434631ZM105.667 540.202H369.433V481.746H105.667V540.202Z" fill="#F48023"/>
          </svg>
          <span class="ml-3 text-xl">Clone Stack Overflow</span>
        </a>
        <p class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2022 Clone Stack Overflow —
          <a href="#" class="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">Misery</a>
        </p>
        <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a class="text-gray-500">
            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </a>
          <a class="ml-3 text-gray-500">
            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
          </a>
          <a class="ml-3 text-gray-500">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>
          <a class="ml-3 text-gray-500">
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
              <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </a>
        </span>
      </div>
    </footer>
  </div>
</template>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
