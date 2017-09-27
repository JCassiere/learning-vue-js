<template>
  <div id="app" class="container">
    <ul class="nav nav-tabs" role="tablist">
      <li v-for="(list, index) in shoppinglists" role="presentation" v-bind:class="index===0 ? 'active' : ''">
        <a :href="'#' + list.id" :aria-controls="list.id" role="tab" data-toggle="tab">{{ list.title }}</a>
      </li>
    </ul>
    <div class="tab-content">
      <div v-for="(list, index) in shoppinglists" class="tab-pane" :class="index===0 ? 'active' : ''"role="tabpanel" :id="list.id">
        <shopping-list-component :title="list.title" :items="list.items"></shopping-list-component>
      </div>
    </div>
  </div>
</template>

<script>
  import ShoppingListComponent from './components/ShoppingListComponent'

  export default {
    components: {
      ShoppingListComponent
    },
    data () {
      return {
        shoppinglists: [
          {
            id: 'groceries',
            title: 'Groceries',
            items: [{ text: 'Bananas', checked: true },
                    { text: 'Apples', checked: false }]
          },
          {
            id: 'clothes',
            title: 'Clothes',
            items: [{ text: 'black dress', checked: false },
                    { text: 'all start', checked: false }]
          }
        ]
      }
    }
  }
  // import AddItemComponent from './components/AddItemComponent'
  // import ItemsComponent from './components/ItemsComponent'
  // import ChangeTitleComponent from './components/ChangeTitleComponent'

  // export default {
  //   components: {
  //     AddItemComponent,
  //     ItemsComponent,
  //     ChangeTitleComponent
  //   },
  //   data () {
  //     return {
  //       items: [{ text: 'Bananas', checked: true },
  //               { text: 'Apples', checked: false }],
  //       title: 'My Shopping List'
  //     }
  //   },
  //   methods: {
  //     addItem (text) {
  //       this.items.push({
  //         text: text,
  //         checked: false
  //       })
  //     }
  //   }
  // }
</script>

<style>
</style>
