//Fichier js qui gère le thème de l'app
import {ref} from "vue";
import {defineStore} from "pinia";
import localStorageHelper from "../utils/localstorage";

//Chargement du thème sauvegardé dans le local storage
const savedTheme = localStorageHelper.load("app-theme");


export const useThemeStore = defineStore("theme", ()=>{
    //si il y a des données sauvegardés dans le local storage theme prend cette valeur sinon elle prend un tableau vide
    const theme = ref(savedTheme || []);
    
    //fonction qui s'occupe de changer le thème
    function ChangeTheme () {
        // si le thème est égale à vide on le passe en dark et on sauvegarde le thème
        if (theme.value == "") {
            theme.value = "dark";
            localStorageHelper.save("app-theme", theme.value);
        //si le thème est différent de vide on le repasse en vide et on sauvegarde le thème
        } else {
            theme.value = ""; 
            localStorageHelper.save("app-theme", theme.value);
        }
    }

    return {theme, ChangeTheme};
})