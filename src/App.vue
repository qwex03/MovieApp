<script setup>
import { RouterLink, RouterView } from 'vue-router'
import {useThemeStore} from "@/stores/theme.js";

const themeStore = useThemeStore();
</script>

<template>
  <div :class="themeStore.theme">
    <header>
      <img src="@/assets/Logo.png" alt="Logo du site">
      <h1>
        MovieList app
      </h1>
      <nav>
        <ul>
          <li>
            <RouterLink to="/">Collection</RouterLink>
          </li>
          <li>
            <RouterLink to="/ajout">Ajouter</RouterLink>
          </li>
        </ul>
      </nav>
      <div @click="themeStore.ChangeTheme()">
        Theme
      </div>
    </header>

    <RouterView />
    <footer>
      &copy; 2023 Q.Lecordier
    </footer>
  </div>
</template>

<style scoped>
header {
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
  gap: 1em;
  padding: 1em;
}

h1 {
  display: flex;
  align-items: center;
}

nav ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 1.2em;
  align-items: center;
}

header div {
  margin-left: auto;
  font-size: 24px;
}

header div:hover {
  opacity: 0.8;
  cursor: pointer;
}


footer {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2em;
}
</style>
