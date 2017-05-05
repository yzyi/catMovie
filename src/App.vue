<template>
  <div id="app">
    <router-view></router-view>
    <footer>
      <router-link to="/film">电影</router-link>
      <router-link to="/cinema">影院</router-link>
      <router-link to="/find">发现</router-link>
      <router-link to="/mine">我的</router-link>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align:center;
}
footer{
  position:fixed;
  bottom:0;
  width:100%;
  height:30px;
  display:flex;
  justify-content:space-around;
}
footer a{
  flex: 1 1 25%;
  text-align:center;
}
</style>
