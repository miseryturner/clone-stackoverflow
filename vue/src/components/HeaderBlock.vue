<template>
    <header 
      :class="{
        'text-gray-400 bg-gray-900': theme == 'dark',
        'text-gray-600': theme == 'light'
      }"
      class="transition body-font"> 
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a 
          :class="{
            'text-white': theme == 'dark',
            'text-gray-900': theme == 'light'
          }"
          class="transition flex title-font font-medium items-center mb-4 md:mb-0"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 500 658" fill="none">
            <path d="M422.733 599.417V423.29H475.35V657.873H0.43335V423.29H53.05V599.417H422.733Z" fill="#BCBBBB"/>
            <path d="M111.133 406.589L369.433 466.563L380.367 408.866L122.067 348.892L111.133 406.589V406.589ZM145.3 269.939L384.467 393.683L406.333 340.541L167.167 216.038L145.3 269.939ZM211.583 139.362L414.533 326.876L448.017 282.085L245.067 94.5713L211.583 139.362V139.362ZM342.783 0.434631L300.417 35.3563L457.583 270.698L499.95 235.776L342.783 0.434631V0.434631ZM105.667 540.202H369.433V481.746H105.667V540.202Z" fill="#F48023"/>
          </svg>
          <span class="ml-3 text-xl">Clone Stack Overflow</span>
        </a>
        <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <router-link 
            :class="{
              'hover:text-white': theme == 'dark',
              'hover:text-gray-900': theme == 'light'
            }"
            to="/" class="transition mr-5"
          >Главная страница</router-link>
          <router-link
            :class="{
              'hover:text-white': theme == 'dark',
              'hover:text-gray-900': theme == 'light'
            }" 
            to="/questions/" class="transition mr-5 hover:text-gray-900"
          >Список вопросов</router-link>
          <router-link 
            :class="{
              'hover:text-white': theme == 'dark',
              'hover:text-gray-900': theme == 'light'
            }" 
            to="/auth" class="transition mr-5 hover:text-gray-900"
          >Авторизация</router-link>
        </nav>
        <router-link
          :class="{
            'bg-gray-800 hover:bg-gray-700': theme == 'dark',
            'bg-gray-100 hover:bg-gray-200': theme == 'light'
          }"
          to="/make-question" class="transition inline-flex items-center border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
        >
          Задать вопрос
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </router-link>
        <button
          :class="{
            'bg-gray-800 hover:bg-gray-700': theme == 'dark',
            'bg-gray-100 hover:bg-gray-200': theme == 'light'
          }"
          @click="changeTheme(theme)"
          class="transition inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none w-16 flex justify-center hover:bg-gray-200 rounded text-base mt-4 md:mt-0 ml-5"
        >
        {{theme}}
        </button>
      </div>
    </header>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      theme: 'changeTheme'
    })
  },
  methods: {
    ...mapMutations([
      'updateTheme'
    ]),
    changeTheme(theme) {
      this.updateTheme(theme)
    }
  }
}
</script>