# vue-drag

> vue drag based on HTML5

## Build Setup

# install
npm install vuedrag-html5

# use
```html
<vuedrag v-model="articles">
  <template scope="props">
    <li v-for="(article, index) in articles"
    draggable="true"
    @dragstart="props.dragStart">
      {{article.label}}<br>{{article.value}}
    </li>
  </template>
</vuedrag>
```
```javascript
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
```
## git
For detailed [git](https://github.com/juzhikan/vue-drag)
