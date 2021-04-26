<template>
	<scroll>
		<view id="list">
			<notes-item v-for="(item, index) in notes" :key="index"
									:notes-item="item"
									@stickNote="stickNote(index)"
									@unstickNote="unstickNote(index)"
									@deleteClick="deleteClick(index)"
									@collect="collect(index)"></notes-item>
		</view>
	</scroll>
</template>

<script>
	import Scroll from "./Scroll.vue"
	import NotesItem from "../items/NotesItem.vue"
	export default {
		name: "MainScroll",
		components: {
			Scroll,
			NotesItem
		},
		data() {
			return {
			}
		},
		props: {
			notes: {
				type: Array,
				default() {
					return []
				}
			}
		},
		created() {
		},
		methods: {
			async stickNote(index) {
				console.log(1)
				let note = this.notes[index]
				const id = note.note_id
				this.notes.top_time = 'top'
				// const res = await this.$myRequest({
				// 	url: 'note/setTop/' + id
				// })
				this.notes.splice(index,1)
				this.notes.splice(0,0,note)
				console.log(1)
			},
			async unstickNote(index) {
				let sum = 0
				for(let data of this.notes) {
					if(data.top_time !== null) {
						sum++
					}
				}
				console.log(sum)
				let note = this.notes[index]
				const id = note.note_id
				this.notes.top_time = null
				// const res = await this.$myRequest({
				// 	url: 'note/setTop/' + id
				// })
				console.log(index)
				this.notes.splice(index,1)
				this.notes.splice(sum,0,note)
			},
			async deleteClick(index) {
				const id = this.notes[index].note_id
				// const res = await this.$myRequest({
				// 	url: 'note/delete/' + id,
				// 	method: 'POST'
				// })
				this.notes.splice(index,1)
			},
			async collect(index) {
				const id = this.notes[index].note_id
				// const res = await this.$myRequest({
				// 	url: 'note/collect/' + id
				// })
			}
		}
	}
</script>

<style>

</style>
