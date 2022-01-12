<template>
    <div class="container">
<div id="nav" class="bg-primary text-white">
    <h4>
        <router-link class="text-white navLink" to="/">Home</router-link>
        <span style="float:right;">
            <router-link class="text-white navLink" id="showblogsLink" to="/">Show Blogs  </router-link>
            <router-link class="text-white navLink" to="/create">Create</router-link>
        </span>
    </h4>
</div>
<router-view />
</div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}
#nav{
    padding: 10px;
}
.navLink{
    text-decoration: none;
}
#showblogsLink{
    margin-right: 10px;
}
</style>
