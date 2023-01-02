<template>
<li>
  <div class="card">
     <h5 :class="{'active':isActive}" @dblclick="toggle">{{title}}</h5>
      <button  class="btn-outline-primary" ><i class="fas fa-edit" ></i> </button>
     <button @click="deleteTodo(ToDo.id)" class="btn-outline-danger"><i class="fas fa-trash-restore"></i>  </button>
  </div>
</li>

</template>

<script>
export default {
  name:"ToDoItems",
  props:['userId','id','title','category'],
  data(){
    return{
      isActive:false,

    };
  },
  methods:{
    toggle() {
      this.isActive= !this.isActive;
    },
    deleteTodo() {
      this.$store.dispatch('ToDo'/'deleteTodo');
    }
  }
}
</script>

<style scoped>
button{
width:3rem;
  padding:5px;
  margin:1rem;
  border-radius: 12px;
}npm

.card{
  border-top: solid 0.2rem;
  border-top-color: #0c84ff;
  border-radius: 50px;
  justify-content: space-between;
}

.active{
  text-decoration: line-through;
}

.button-control{
  display:flex;
  justify-content: center;
}

</style>