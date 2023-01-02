import { createRouter, createWebHistory } from 'vue-router';
import AddToDo from "@/pages/AddToDo";
import DeletedToDo from "@/pages/DeletedToDo";
import ListToDo from "@/pages/ListToDo";
import NotFound from "@/components/NotFound";
const router = createRouter({
    history:createWebHistory(),
    routes:[
        {path:'/',redirect:'/Todo'},
        { path:'/addList', component:AddToDo},
        { path:'/deletedList', component:DeletedToDo},
        { path: '/Todo', component:ListToDo},
        {path:'/:notFound(.*)', component:NotFound}
    ]
});

export default router;