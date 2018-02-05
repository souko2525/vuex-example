<template>
  <div class="antiair">
    <h1>{{ msg }}</h1>
    <ul>
        <li v-for="item in items.users">{{ item.age }}</li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'AntiAir',
  data () {
    return {
      msg: '対空計算機'
    }
  },
  components: {
  },
  created: function () {
    this.getItems()
  },
  methods: mapActions({
    getItems: 'getItems'
  }),
  computed: mapGetters({
    getTodoById: 'getTodoById',
    items: 'items'
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
