import Vue from 'vue'
import AddItemComponent from 'src/components/AddItemComponent'

var vm, addItemComponent

vm = new Vue({
	template: '<add-item-component :items="items" :id="id" ref="additemcomponent">' +
	'</add-item-component>',
	components: {
		AddItemComponent
	},
	data() {
		return {
			items: [],
			id: 'niceId'
		}
	},
	store
}).$mount()

addItemComponent = vm.$refs.additemcomponent

describe('AddItemComponent.vue', () => {
	describe('initialization', () => {
		it('should initialize the component with empty string newItem', () => {
			expect(AddItemComponent.data()).to.eql({
				newItem: ''
			})
		})
	})
})