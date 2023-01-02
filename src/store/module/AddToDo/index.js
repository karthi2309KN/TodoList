import mutations from './mutations';
import actions from './actions';
import getters from './getters';

export default{
    namespaced: true,
    state(){
        return{
            todos:[
                {
                    "userId": 1,
                    "id": 1,
                    "title": "chosen or",
                    "completed": false
                },
                {
                    "userId": 1,
                    "id": 2,
                    "title": "who is easy and whose duties",
                    "completed": false
                },
            ]
        };
    },
    mutations,
    actions,
    getters
}