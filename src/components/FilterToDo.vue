<template>
<div class="card">
  <h3>Filter-To-Do</h3>
  <div class="card">
    <input type="checkbox" id="personal" checked @change="setFilter"/>
    <label for="personal">Personal</label>
  </div>
  <div class="card">
    <input type="checkbox" id="business" checked  @change="setFilter"/>
    <label for="business">Business</label>
  </div>
  <div  class="card">
    <input type="checkbox" id="important" checked  @change="setFilter"/>
    <label for="important">Important</label>
  </div>
  <div  class="card">
    <input type="checkbox" id="notimportant" checked  @change="setFilter"/>
    <label for="notimportant">Not-Important</label>
  </div  >
  <div class="card">
    <input type="checkbox" id="routine" checked  @change="setFilter"/>
    <label for="routine">Routine</label>
  </div>
</div>
</template>

<script>
export default {
  name:"FilterToDo",
  emits:['change-filter'],
  data(){
    return{
      filters:{
        personal: true,
        business: true,
        important: true,
        notimportant: true,
        routine: true,
      }
    };
  },
 methods:{
    setFilter(event){
      const inputId = event.target.id;
      const isActive = event.target.checked;
      const updatedFilters = {
        ...this.filters,
        [inputId]:isActive
      };
      this.filters = updatedFilters;
      this.$emit('change-filter', updatedFilters);
    }
 }
}
</script>

<style scoped>
h3{
  font-weight: bolder;
  color: #0c5460;
}
.card{
  display:inline-block;
  margin-right: 1rem;
}
input{
  color: #000c19;
}
</style>