<template>
  <section>
      <FilterToDo @change-filter="setFilters"></FilterToDo>
      <button class="btn btn-outline-secondary" @click="loadTodos">Refresh</button>
  </section>
  <ul v-if="hasToDo" >
    <ToDoItems
        v-for="list in filteredToDo"
        :key="list.userId"
        :id="list.id"
        :title="list.title"
        :category="list.category"
    ></ToDoItems>
  </ul>
  <h3 v-else> No To Do List Found </h3>
</template>

<script>
import ToDoItems from "@/pages/ToDoItems";
import FilterToDo from "@/components/FilterToDo";
export default {
  name:"ListToDo",
  components:{
    ToDoItems,
    FilterToDo
  },
  data(){
    return{
      activeFilters:{
        personal: true,
        business: true,
        important: true,
        notimportant: true,
        routine: true,
      }

    };
  },
  computed:{
    filteredToDo(){
      const todo = this.$store.getters['AddToDo/ToDo'];
      return todo.filter(list =>{
        if(this.activeFilters.personal && list.category.includes('personal')){
          return true;
        }
        if(this.activeFilters.business && list.category.includes('business')){
          return true;
        }
        if(this.activeFilters.important && list.category.includes('important')){
          return true;
        }
        if(this.activeFilters.notimportant && list.category.includes('notimportant')){
          return true;
        }
        if(this.activeFilters.routine && list.category.includes('routine')){
          return true;
        }
        return false;
      })
    },
    hasToDo(){
      return this.$store.getters['AddToDo/hasToDo']
    }
  },
  created(){
    this.loadTodos()
  },
  methods:{
    setFilters(updatedFilters){
        this.activeFilters = updatedFilters;
    },
    loadTodos(){
      this.$store.dispatch('AddToDo/loadTodos');
    },
  }
}
</script>

<style scoped>

</style>