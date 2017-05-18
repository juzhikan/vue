<template>
  <div id="app">
    <img src="./assets/logo.png">
    <vuedraggable v-model="articles">
      <template scope="props">
        <li v-for="(article, index) in articles"
        draggable="true"
        @dragstart="props.dragStart">
          {{article.label}}<br>{{article.value}}
        </li>
      </template>
    </vuedraggable>
  </div>
</template>

<script>
import Vuedraggable from '../src/drag.vue'

export default {
  name: 'app',
  data () {
    return {
      articles: [
        {
          label: '第一个',
          value: 10
        },
        {
          label: '第二个',
          value: 20
        },
        {
          label: '第三个',
          value: 30
        }
      ]
    }
  },
  components: {
    Vuedraggable
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
