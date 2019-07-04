<template>
  <div id="app">
		<pageTitle></pageTitle>
    <router-view></router-view>
  </div>
</template>
<script>
	import pageTitle from './components/pageTitle'
	export default{
		components:{pageTitle}
	}
</script>


<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
	padding: 50px 0 60px 0;

}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
