<script type="text/javascript">
  const props = {
    value: {
      type: Array,
      required: false,
      default: null
    },
    tagName: {
      type: String,
      required: false,
      default: 'div'
    }
  }

  const draggableComponent = {
    props,
    data () {
      return {
        coordinateStart: {}
      }
    },
    render (h) {
      var vm = this
      return h(
        this.tagName,
        {
          on: {
            dragover () {
              var result = true
              var beforeOver = vm._self._events.beforeOver
              if (beforeOver) result = beforeOver[0](event)
              if (result === false) return
              event.preventDefault()
            },
            drop () {
              vm.dragEnd(event)
              vm.$emit('end', event)
            }
          }
        },
        [
          this.$scopedSlots.default({
            dragStart: vm.dragStart
          })
        ]
      )
    },
    methods: {
      dragStart () {
        this._events.beforeStart[0](event)
        var target = event.currentTarget
        event.dataTransfer.effectAllowed = 'move'
        this.coordinateStart = {
          y: event.pageY, // pageY不会受到滚动条影响
          index: this.getOrder(target)
        }
      },
      getOrder (node) {
        var children = node.parentNode.children
        for (var i = 0; i < children.length; i++) {
          if (node === children[i]) return i
        }
      },
      dragEnd (event) {
        var margin = 0
        event.preventDefault()
        var dragWrp = this.$el
        var dragWrpChildren = dragWrp.querySelectorAll('[draggable]') || dragWrp.children
        var dragArr = []
        var sort = this.coordinateStart.index
        for (var j = 0; j < dragWrpChildren.length; j++) {
          var item = dragWrp.children[j]
          dragArr.push(item.clientHeight)
        }
        var dragDst = event.pageY - this.coordinateStart.y
        var shift = this.value[this.coordinateStart.index]
        if (dragDst === 0) return
        var judgeDst = 0
        var i = dragDst > 0 ? sort + 1 : sort - 1
        if (dragDst > 0) {
          for (; i < dragWrpChildren.length; i++) {
            margin = this.getMargin(dragWrpChildren[i])
            if (i - 1 === sort) {
              judgeDst += (dragArr[i] / 2 + margin)
            } else {
              judgeDst += (dragArr[i - 1] / 2 + dragArr[i] / 2 + margin)
            }
            if (dragDst < judgeDst) {
              if (i - 1 !== sort) {
                this.value.splice(this.coordinateStart.index, 1)
                this.value.splice(i - 1, 0, shift)
                return
              }
              return
            }
            if (i === dragWrpChildren.length - 1 && dragDst >= judgeDst) {
              this.value.splice(this.coordinateStart.index, 1)
              this.value.splice(i, 0, shift)
            }
          }
        } else {
          for (; i > -1; i--) {
            margin = this.getMargin(dragWrpChildren[i].nextSibling)
            if (i + 1 === sort) {
              judgeDst += (dragArr[i] / 2 + margin)
            } else {
              judgeDst += (dragArr[i + 1] / 2 + dragArr[i] / 2 + margin)
            }
            if (Math.abs(dragDst) < judgeDst) {
              if (i + 1 !== sort) {
                this.value.splice(this.coordinateStart.index, 1)
                this.value.splice(i + 1, 0, shift)
                return
              }
              return
            }
            if (i === 0 && Math.abs(dragDst) >= judgeDst) {
              this.value.splice(this.coordinateStart.index, 1)
              this.value.splice(i, 0, shift)
            }
          }
        }
      },
      getMargin (node) {
        return this.getComputedStyle(node, 'marginTop') + this.getComputedStyle(node.previousSibling, 'marginBottom')
      },
      getComputedStyle (node, lexical1, lexical2) {
        return parseFloat(window.getComputedStyle ? window.getComputedStyle(node, null)[lexical1] : node.currentStyle[lexical2])
      }
    }
  }
  module.exports = draggableComponent
</script>

