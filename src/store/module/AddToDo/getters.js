export default {
    ToDo(state){
        return state.ToDo;
    },
    hasToDo(state){
        return state.ToDo && state.ToDo.length > 0;
    },
};