export default {
    addTo(state,payload){
        state.ToDo.push(payload);
    },
    setTodo(state,payload){
        state.ToDo=payload;
    },
    /*setFetchTimestamp(state){
        state.lastFetch = new Date().getTime();
    },*/
    delete_todo(state,id){
        state.ToDo =  state.todo.filter((list)=>list.id !== id);
    }
};