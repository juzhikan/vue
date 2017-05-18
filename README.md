# vue-drag

> vue drag based on HTML5

## Build Setup

``` bash
# install
npm install vuedrag-html5

# use
``` html
<vuedraggable v-model="articles">
  <template scope="props">
    <li v-for="(article, index) in articles"
    draggable="true"
    @dragstart="props.dragStart">
      {{article.label}}<br>{{article.value}}
    </li>
  </template>
</vuedraggable>
```
``` js
import Vuedraggable from './components/vuedraggable'

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
```
```
For detailed [git](https://github.com/juzhikan/vue-drag)
