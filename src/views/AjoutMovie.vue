<script setup>
import { ref } from 'vue';
import {useMoviesStore} from "@/stores/movies.js";

const newMovie = ref({title:"", image:"", director:"", duration:"", genre:""});
const moviesStore = useMoviesStore();

//fonction qui gère l'ajout d'une image quand il y a un changement sur le input file
const prepareImage = (event) => {
  if (event.target.files.length > 0) {
    const reader = new FileReader();
    reader.onload = () => {
      newMovie.value.image = reader.result;
    };
  reader.readAsDataURL(event.target.files[0]);  
  }
}
  
</script>
<template>
  <main>
    <div class="container">
      <h1>Ajouter un Film dans votre collection</h1>
      <form action="#" onsubmit="return false">
        <input v-model="newMovie.title" type="text" placeholder="Titre" required>
        <input v-model="newMovie.director" type="text" placeholder="Réalisateur" required>
        <input v-model="newMovie.duration" type="text" placeholder="Durée" required>
        <input v-model="newMovie.genre" type="text" placeholder="Genre" required>
        <input @change="prepareImage" type="file" accept="image/*">
        <img :src="newMovie.image" alt="">
        <input :class="{ disabled: newMovie.title == '' || newMovie.director == '' || newMovie.genre == '' || newMovie.duration == '' || newMovie.image == ''}" @click="moviesStore.AddNewMovie(newMovie)" type="submit" value="Ajouter le film">
      </form>
    </div>
  </main>
</template>

<style scoped>
form {
  margin-top: 2em;
}

input {
  width: 100%;
  height: 40px;
  margin-bottom: 1em;
  font-size: 20px;
}

form img {
  max-height: 12em;
  object-fit: cover;
  object-position: center;
}

.disabled {
  pointer-events: none;
  opacity: 0.5;
}
</style>
