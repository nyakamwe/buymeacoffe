<template>
   <h1>{{ title }}</h1>
   <Layout />
   <Footer :time="timeStamp"></Footer>
 
</template>

<script>
import Layout from './components/Layout.vue';
import Footer from './components/Footer.vue';


export default {
  name: 'App',
  components: {
    Layout,
    Footer,
  },
  data(){
    return {
      title: 'Buy Me a Coffee',
      timeStamp: new Date().getFullYear()
    }
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1{
  text-transform: uppercase;
}

</style>
