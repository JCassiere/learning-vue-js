// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */

var data = {
  items: [{ text: 'Bananas', checked: true },
          { text: 'Apples', checked: false }],
  title: 'My Shopping List',
  newItem: ''
}

var ItemsComponent = Vue.extend({
  data: function () {
    return data
  },
  template: '<ul>' +
  '            <li v-for="item in items" :class="{ \'removed\': item.checked }">' +
  '              <div class="checkbox">' +
  '                <label>' +
  '                  <input type="checkbox" v-model="item.checked"> {{ item.text }}' +
  '                </label>' +
  '               </div>' +
  '             </li>' +
  '           </ul>'
})

var ChangeTitleComponent = Vue.extend({
  data: function () {
    return data
  },
  template: '<input v-model="title"/>'
})

var AddItemComponent = Vue.extend({
  data: function () {
    return data
  },
  methods: {
    addItem: function () {
      var text

      text = this.newItem.trim()
      if (text) {
        this.items.push({
          text: text,
          checked: false
        })
        this.newItem = ''
      }
    }
  },
  template:
  '<div class="input-group">' +
    '<input v-model="newItem" @keyup.enter="addItem" ' +
    'placeholder="add shopping list item" type="text" class="form-control">' +
      '<span class="input-group-btn">' +
      ' <button @click="addItem" class="btn btn-default" ' +
        'type="button">Add!</button>' +
      '</span>' +
    '</div>'
})

Vue.component('items-component', ItemsComponent)
Vue.component('change-title-component', ChangeTitleComponent)
Vue.component('add-item-component', AddItemComponent)

new Vue({
  el: '#app',
  router,
  data: data,
  template: '<App/>',
  components: { App }
})

// new Vue({
//   el: '#app',
//   router,
//   template: '<App/>',
//   components: { App }
// })
