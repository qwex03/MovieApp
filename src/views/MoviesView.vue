<script setup>
import {useMoviesStore} from "@/stores/movies.js";

const moviesStore = useMoviesStore();
</script>

<template>
  <main>
    <div class="container">
      <h1>Vos Films</h1>
      <div class="MovieList">
        <div class="Movie" @click="moviesStore.ShowDetails(index)" v-for="(movie, index) in moviesStore.movies">
          <img :src="movie.image" alt="affiche du film">
          <div class="Movie-description">
            <h2>{{ movie.title }}</h2>
            <img @click.stop="moviesStore.DeleteMovie(index)" src="src/assets/bin.png" alt="corbeille">
          </div>
        </div>
          <h3 v-if="moviesStore.movies.length == 0">
            Aucun film dans votre liste
          </h3>
      </div>
        <div class="Details" v-if="moviesStore.currentDetails != null">
          <div class="DetailsHeader">
          <h3>Film {{ moviesStore.currentDetails.title }}</h3>
          <span @click="moviesStore.CloseDetails()">X</span>
          </div>
          <div class="DetailsBody">
            <img :src="moviesStore.currentDetails.image" alt="">
            <div class="DetailsInfo">
              <p>Réalistaeur : {{ moviesStore.currentDetails.director }}</p>
              <p>Durée : {{ moviesStore.currentDetails.duration }}</p>
              <p>Genre : {{ moviesStore.currentDetails.genre }}</p>
            </div>
          </div>
        </div>
    </div>
  </main>
</template>
<style scoped>

main {
  position: relative;
}


.MovieList {
  margin-top: 2em;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2em;
}

.Movie {
  width: 200px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  cursor: pointer;
}

.dark .Movie {
  background-color: rgba(255, 255, 255, 0.901);
}

.Movie > img {
  object-fit: cover;
  object-position: center;
  max-width: 100%;
  height: 303px;
}
.Movie-description {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5em;
}

.Movie-description h2 {
  font-size: 1.2em;
}

.Movie-description img {
  height: 20px;
  width: 20px;
}

.Details {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 1;
  background-color: black;
  padding: 20px;
  max-width: 95%;
  max-height: 643px;
  color: white;
}

.DetailsHeader {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.DetailsHeader span {
  height: 30px;
  width: 30px;
  border: 2px solid white;
  border-radius: 50%;
  line-height: 30px;
  text-align: center;
}

.DetailsHeader span:hover {
  cursor: pointer;
  opacity: 0.8;
}


.DetailsBody img{
  width: 250px;
  height: 350px;
  object-fit: cover;
  object-position: center;
  margin-bottom: 20px;
}

.DetailsInfo {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter-active, .fade-leave-active {
  opacity: 0;
}

.bounce-enter-active {
  animation: bounce-in 0.5s;

}

.bounce-leave-active{
  animation: bounce-in 0.5s reverse;
}

@keyframes bounce-in {
  0%{
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}

</style>