<template>
  <div id="app" class="container">
    <ul class="nav nav-tabs" role="tablist">
      <li v-for="(list, index) in shoppinglists" role="presentation" v-bind:class="index===0 ? 'active' : ''">
        <shopping-list-title-component :id="list.id" :title="list.title"></shopping-list-title-component>
      </li>
    </ul>
    <div class="tab-content">
      <div v-for="(list, index) in shoppinglists" class="tab-pane" :class="index===0 ? 'active' : ''"role="tabpanel" :id="list.id">
        <shopping-list-component :id="list.id" :items="list.items" :title="list.title"></shopping-list-component>
      </div>
    </div>
  </div>
</template>

<script>
  import ShoppingListComponent from './components/ShoppingListComponent'
  import ShoppingListTitleComponent from './components/ShoppingListTitleComponent'
  import _ from 'underscore'
  import store from './vuex/store'
  import { mapGetters, mapActions } from 'vuex'

  export default {
    components: {
      ShoppingListComponent,
      ShoppingListTitleComponent
    },
    computed: mapGetters({
      shoppinglists: 'getLists'
    }),
    methods: mapActions(['changeTitle', 'populateShoppingLists']),
    store,
    mounted () {
      this.populateShoppingLists()
    }
    // methods: {
    //   onChangeTitle (id, text) {
    //     _.findWhere(this.shoppinglists, { id: id }).title = text
    //   }
    // }
  }
</script>

<style>
</style>
