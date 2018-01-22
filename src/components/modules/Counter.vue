<template>
  <h1>{{count}}</h1>  
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters({
    count: 'counter'
  })
}
</script>
