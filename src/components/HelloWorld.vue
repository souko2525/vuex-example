<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
      <li><router-link :to="{ name: 'AntiAir'}">対空計算機</router-link></li>
    </ul>
	<button v-on:click="add">{{add_button}}</button>
	<button v-on:click="sub">{{sub_button}}</button>
	<counter></counter>
  </div>
</template>

<script>
import Counter from './modules/Counter'
import { mapActions } from 'vuex'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      add_button: '+1',
      sub_button: '-1'
    }
  },
  components: {
    Counter
  },
  methods: mapActions({
    add: 'increment',
    sub: 'decreasement'
  })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
