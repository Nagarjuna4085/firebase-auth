<template>
  <nan v-if="$store.state.user" >
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <button @click="$store.dispatch('logout')">SignOut</button>
  </nan>
  <router-view/>
</template>
<script> 

import { onBeforeMount,onMounted } from "vue"
import {useStore} from 'vuex'
export default {
  setup(){
    const store = useStore()

    onBeforeMount(()=>{
      console.log(store.state.user)
      store.dispatch('fetchUser')
    })
    onMounted(()=>{
      console.log(store.state.user)

    })
    return{
      user:store.state.user
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
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
