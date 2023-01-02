<template>
  <div class="card">
     <h3> Added to do list </h3>
    <AddForm @save-data="saveData"></AddForm>
  </div>
</template>
<script>
import AddForm from "@/components/AddForm";

export default {
  name:"AddToDo",
  components:{
AddForm
  },
  methods:{
    saveData(data){
        this.$store.dispatch('AddToDo/addTo',data);
        this.$router.replace('/Todo');
    }
  },
}
</script>

<style >

</style>