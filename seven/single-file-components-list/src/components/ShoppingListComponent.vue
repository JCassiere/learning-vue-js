<template>
  <div :style='styleObject'>
    <h2>{{ title }}</h2>
    <add-item-component @add="addItem" :id="id"></add-item-component>
    <items-component :items="items" :id="id"></items-component>
    <div class="footer">
      <hr/>
      <change-title-component :id="id" :title="title" :background-color="background-color"></change-title-component>
    </div>
  </div>
</template>

<script>
  import AddItemComponent from './AddItemComponent'
  import ItemsComponent from './ItemsComponent'
  import ChangeTitleComponent from './ChangeTitleComponent'

  export default {
    components: {
      AddItemComponent,
      ItemsComponent,
      ChangeTitleComponent
    },
    props: ['title', 'items', 'id', 'styleObject'],
    methods: {
      addItem (text) {
        this.items.push({
          text: text,
          checked: false
        })
      },
      onChangeTitle (text) {
        this.$emit('changeTitle', this.id, text)
      }
    }
  }
</script>

<style scoped>
  .footer {
    font-size: 0.7em;
    margin-top: 20vh;
  }
</style>
