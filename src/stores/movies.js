//Fichier js qui gère la liste de film
import {ref} from "vue";
import {defineStore} from "pinia";
import localStorageHelper from "../utils/localstorage";

//Chargement de la liste de film sauvegardé dans le local storage
const savedMovies = localStorageHelper.load("movielist-movies");
//Chargement des détails du film sauvegardé dans le local storage
const savedDetails = localStorageHelper.load("movielist-details");


export const useMoviesStore = defineStore("movies", ()=>{
    //movies prend les valeurs stockés dans le local storage si il y a des éléments stocké sinon les autres valeurs
    const movies = ref(savedMovies || [{title: "Avatar", image:"src/assets/Avatar.jpg", director:"James cameron", duration:"2h42", genre:"Aventure"}, 
        {title: "Cars", image:"src/assets/Cars.jpg", director:"John Lasseter", duration:"1h57", genre:"Animation"}, 
        {title: "Oldboy", image:"src/assets/Oldboy.jpg", director:"Park Chan-wook", duration:"2h12", genre:"Drame"}, 
        {title: "Star wars II", image:"src/assets/StarWars.jpg", director:"Georges Lucas", duration:"2h16", genre:"SF"}, 
        {title: "Avatar 2", image:"src/assets/Avatar2.jpeg", director:"James cameron", duration:"3h12", genre:"Aventure"},
]);
    //si il y a des données sauvegardés dans le local storage movielist-details prend cette valeur sinon elle prend la valeur null
    const currentDetails = ref(savedDetails || null);
    
    //fonction qui affiche les détails d'un film
    function ShowDetails(index) {
        currentDetails.value = movies.value[index];
        localStorageHelper.save("movielist-details", currentDetails.value);
    }

    //fonction pour fermer les détails d'un film 
    function CloseDetails(){
        currentDetails.value = null;
        localStorageHelper.save("movielist-details", currentDetails.value);
    }

    //fonction qui gère l'ajout d'un film
    function AddNewMovie(obj) {
        //si un des champs du form est vide on return
        if(obj.title == "" || obj.director == "" || obj.genre == "" || obj.duration == "" || obj.image == "") {
            return;
        }
        movies.value.unshift({...obj});
        localStorageHelper.save("movielist-movies", movies.value);
        //réinitialise tout les champs du formulaire après l'ajout d'un film
        obj.title = obj.director = obj.genre = obj.duration = obj.image = "";
    }

    //fonction qui s'occupe de la suppresion d'un film au clique de la souris sur la corbeille
    function DeleteMovie(index) {
        //vérification pour savoir si le film qui va être supprimé et le même que celui dont les détails sont affichés actuellement
        if (movies.value[index] == currentDetails.value) {
            //si c'est le cas on supprime les données car le film n'existe plus dans notre liste 
            currentDetails.value = null;
            localStorageHelper.save("movielist-details", currentDetails.value);
        }
        movies.value.splice(index, 1);
        localStorageHelper.save("movielist-movies", movies.value);
    }

    return {movies, currentDetails, DeleteMovie, ShowDetails, AddNewMovie, CloseDetails};
})