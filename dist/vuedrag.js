!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("vuedrag",[],t):"object"==typeof exports?exports.vuedrag=t():e.vuedrag=t()}(this,function(){return function(e){function t(n){if(r[n])return r[n].exports;var i=r[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var r={};return t.m=e,t.c=r,t.i=function(e){return e},t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=2)}([function(e,t){var r={value:{type:Array,required:!1,default:null},tagName:{type:String,required:!1,default:"div"}},n={props:r,data:function(){return{coordinateStart:{}}},render:function(e){var t=this;return e(this.tagName,{on:{dragover:function(){var e=!0,r=t._self._events.beforeOver;r&&(e=r[0](event)),!1!==e&&event.preventDefault()},drop:function(){t.dragEnd(event),t.$emit("end",event)}}},[this.$scopedSlots.default({dragStart:t.dragStart})])},methods:{dragStart:function(){this._events.beforeStart[0](event);var e=event.currentTarget;event.dataTransfer.effectAllowed="move",this.coordinateStart={y:event.pageY,index:this.getOrder(e)}},getOrder:function(e){for(var t=e.parentNode.children,r=0;r<t.length;r++)if(e===t[r])return r},dragEnd:function(e){var t=0;e.preventDefault();for(var r=this.$el,n=r.querySelectorAll("[draggable]")||r.children,i=[],o=this.coordinateStart.index,a=0;a<n.length;a++){var u=r.children[a];i.push(u.clientHeight)}var d=e.pageY-this.coordinateStart.y,l=this.value[this.coordinateStart.index];if(0!==d){var s=0,c=d>0?o+1:o-1;if(d>0)for(;c<n.length;c++){if(t=this.getMargin(n[c]),s+=c-1===o?i[c]/2+t:i[c-1]/2+i[c]/2+t,d<s){if(c-1!==o)return this.value.splice(this.coordinateStart.index,1),void this.value.splice(c-1,0,l);return}c===n.length-1&&d>=s&&(this.value.splice(this.coordinateStart.index,1),this.value.splice(c,0,l))}else for(;c>-1;c--){if(t=this.getMargin(n[c].nextSibling),s+=c+1===o?i[c]/2+t:i[c+1]/2+i[c]/2+t,Math.abs(d)<s){if(c+1!==o)return this.value.splice(this.coordinateStart.index,1),void this.value.splice(c+1,0,l);return}0===c&&Math.abs(d)>=s&&(this.value.splice(this.coordinateStart.index,1),this.value.splice(c,0,l))}}},getMargin:function(e){return this.getComputedStyle(e,"marginTop")+this.getComputedStyle(e.previousSibling,"marginBottom")},getComputedStyle:function(e,t,r){return parseFloat(window.getComputedStyle?window.getComputedStyle(e,null)[t]:e.currentStyle[r])}}};e.exports=n},function(e,t){e.exports=function(e,t,r,n){var i,o=e=e||{},a=typeof e.default;"object"!==a&&"function"!==a||(i=e,o=e.default);var u="function"==typeof o?o.options:o;if(t&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns),r&&(u._scopeId=r),n){var d=Object.create(u.computed||null);Object.keys(n).forEach(function(e){var t=n[e];d[e]=function(){return t}}),u.computed=d}return{esModule:i,exports:o,options:u}}},function(e,t,r){var n=r(1)(r(0),null,null,null);e.exports=n.exports}])});