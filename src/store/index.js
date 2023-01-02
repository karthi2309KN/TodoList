import {createStore} from "vuex";
import AddToDoModule from './module/AddToDo/index.js';

const store = createStore({
    modules:{
        AddToDo : AddToDoModule,
    }
});

export default store;