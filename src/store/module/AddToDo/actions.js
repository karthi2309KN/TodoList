export default {
    async addTo(context,data) {
        const id = data.id;
        const addtoDo={
            userId:data.userId,
            title:data.title,
            category:data.category,
        };

      const response = await fetch(`https://todolist-e8bec-default-rtdb.firebaseio.com/List/${id}.json`,{
            method:'PUT',
            body: JSON.stringify(addtoDo)
        });


      if(!response.ok){
          //error
      }

        context.commit('addTo',{
            ...addtoDo,
            id: id
        });
    },
    async loadTodos(context){
     /*  if(!payload.forceRefresh &&!context.getters.shouldUpdate){
           return;
       }*/
     const response = await  fetch(`https://todolist-e8bec-default-rtdb.firebaseio.com/List.json`);
        const responseData = await response.json();
        console.log(responseData)
        if(!response.ok){
            //....
        }
       const List = [];

       for (const key in responseData){
           const content={
               id:key,
               userId:responseData[key].userId,
               title:responseData[key].title,
               category:responseData[key].category,
           }
           List.push(content);
       }
       context.commit('setTodo',List);
    /*   context.commit('setFetchTimestamp');*/
    },
    deleteTodo(context,list){
       context. commit('delete_todo',list)
    }
}