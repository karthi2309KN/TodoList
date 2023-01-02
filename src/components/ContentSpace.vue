<template>
  <div class="content-wrappers">
    <!-- Content Header (Page header) -->
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-1">
              To-Do-List
            </h1>
            <router-link to="/Todo">Home</router-link>
            <router-link to="/addList">Add</router-link>
            <router-link to="/deletedList">Delete</router-link>
          </div><!-- /.col -->
          <!-- /.col -->
        </div><!-- /.row -->
      </div><!-- /.container-fluid -->
    </div>
  </div>
  <div class="card">
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name:"ContentSpace",
}
</script>

<style scoped>
*{
  position:relative;
  align-items: center;
}
a{
  text-decoration: none;
  background: #0a0e14;
  border:1px solid transparent;
  color:white;
  cursor:pointer;
  border-radius: 12px;
  padding:0.5rem 1.5rem;
  display: inline-block;
  margin-left: 0.5rem;
}

a:hover,
a:active{
  color: #00a8c6;
  border-color: #00a87d;
  background-color: #1a252f;
}
.content-wrappers{
  height:100%;
  background-color: #f4f6f9;
}

</style>