<template>
  <TopNav></TopNav>
  <SideBar></SideBar>
  <ContentSpace></ContentSpace>
</template>
<script>
import TopNav from "@/components/TopNav";
import SideBar from "@/components/SideBar";

import ContentSpace from "@/components/ContentSpace";
export default {
  name: 'App',
  components: {
    ContentSpace,
    TopNav,
    SideBar
  }
}
</script>

<style>
*{
box-sizing: border-box;
}
body{
  margin:0;
}
.borders{
  border:solid 1px;
  border-top-color:red;
  border-radius: 12px;
  margin-bottom:10px;
  padding:0.5rem 1rem;
}

.card{
  border-radius: 12px;
  box-shadow:0 2px 8px rgba(0,0,0,0.26);
  padding:1rem;
  margin:2rem auto;
  max-width: 40rem;
}

</style>
