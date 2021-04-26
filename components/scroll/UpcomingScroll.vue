<template>
	<scroll>
		<upcoming-item v-for="(item, index) in upcomings" :upcoming-item="item" :key="index"></upcoming-item>
	</scroll>
</template>

<script>
	import Scroll from "./Scroll.vue"
	import UpcomingItem from "../items/UpcomingItem.vue"
	export default {
		name: "UpcomingScroll",
		components: {
			Scroll,
			UpcomingItem
		},
		data() {
			return {
			}
		},
		props: {
			upcomings: {
				type: Array,
				deflaut() {
					return []
				}
			}
		},
		computed: {
			
		},
		methods: {
			
		}
	}
</script>

<style>
</style>
