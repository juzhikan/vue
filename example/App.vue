<template>
  <div id="app">
    <img src="./assets/logo.png">
    <vuedrag v-model="articles">
      <template scope="props">
        <li v-for="(article, index) in articles"
        draggable="true"
        @dragstart="props.dragStart">
          {{article.label}}<br>{{article.value}}
        </li>
      </template>
    </vuedrag>
  </div>
</template>

<script>
import vuedrag from 'vuedrag-html5'

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
    vuedrag
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
