<template>
<span class="badge" :class="type">
  {{text}}
</span>
</template>

<script>
export default {
  name:"BaseBadge",
  props:['type', 'title'],
  computed:{
  text(){
    return this.title.toUpperCase();
  }
}
}
</script>

<style scoped>
.badge{
  background-color: #ccc;
  color: #252525;
  border-radius:30px;
  padding:0.5rem 1.5rem;
  margin-right: 0.5rem;
}
.important{
  background-color: red;
  color: white;
}

.personal{
  background-color: #71008d;
  color:white;
}

.business{
  background-color: #0c84ff;
  color:black;
}
.important{
  background-color: red;
  color: white;
}
.routine{
  background-color: #00bb00;
  color:black;
}



</style>