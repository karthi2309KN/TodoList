<template>
<form @submit.prevent="submitForm">
  <div class="form-control">
    <label for="userid">UserId</label>
    <input type="number" id="userid" v-model.number="userId">
  </div>
  <div class="form-control">
    <label for="id">Id</label>
    <input type="number" id="id" v-model.number="id">
  </div>
  <div class="form-control">
    <label for="title">Title</label>
    <input type="text" id="title" v-model.trim="title">
  </div>
  <div class="card">
    <h3> Select The Category of the ToDo </h3>
    <div>
     <input type="checkbox" id="personal" value="personal" v-model="category">
     <label for="personal">Personal</label>
   </div>
    <div>
      <input type="checkbox" id="business" value="business" v-model="category">
      <label for="business">Business</label>
    </div>
    <div>
      <input type="checkbox" id="important" value="important" v-model="category">
      <label for="important">Important</label>
    </div>
    <div>
      <input type="checkbox" id="notimportant" value="notimportant" v-model="category">
      <label for="notimportant">NotImportant</label>
    </div>
    <div>
      <input type="checkbox" id="routine" value="routine" v-model="category">
      <label for="routine">Routine</label>
    </div>
    </div>

  <div>
    <button class="btn-outline-success btn-block">Add</button>
  </div>

</form>
</template>

<script>
export default {
  name:"AddForm",
  emits:['save-data'],
  data(){
    return{
      userId:null,
      id:null,
      title:'',
      category:[],
    };
  },
  methods:{
    submitForm(){
      const formData={
        userId: this.userId,
        id: this.id,
        title: this.title,
        category: this.category,
      };
      this.$emit('save-data',formData);
    }
  }
}
</script>

<style scoped>
.card{
  text-align: center;
}
.form-control{
  display:flex;
  justify-content: center;
}
label{
  margin-right: 10px;
}
#id{
  margin-left: 20px;
}
button{
  padding: 0.5rem;
  border-radius: 12px;

}


</style>