<template>
  <div>
    <header>
      <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/auth">AuthPage</router-link>
      </nav>
    </header>
    <router-view/>
    <footer>
      footer
    </footer>
  </div>
</template>
