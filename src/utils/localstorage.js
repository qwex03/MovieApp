const localStorageHelper = {
    save(key, value) {
        localStorage.setItem(key, JSON.stringify(value))
    },
    load(key){
        const value = localStorage.getItem(key);
        return value != null ? JSON.parse(value) : value;
    },
}

export default localStorageHelper;