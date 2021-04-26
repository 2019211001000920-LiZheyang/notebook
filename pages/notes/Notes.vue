<template>
	<view id="notes">
		<nav-bar class="navbar">
			<view class="nav-text">
				<view class="head">{{CategoryName}}</view>
				<view class="count">{{notes.length}}个笔记</view>
			</view>
		</nav-bar>
		<search-bar class="searchbar"></search-bar>
		<notes-scroll :notes="notes"></notes-scroll>
	</view>
</template>

<script>
	import NavBar from "../../components/navBar/NavBar.vue"
	import NotesScroll from "../../components/scroll/NotesScroll.vue"
	import SearchBar from "../../components/items/SearchBar.vue"
	export default {
		name: "Notes",
		components: {
			NavBar,
			NotesScroll,
			SearchBar
		},
		data() {
			return {
				notes: [],
				noteCounts: 0,
				CategoryName: "全部笔记"
		  }
	  },
		onLoad() {
			this.getNotes()
		},
		methods: {
			async getNotes() {
				const res =  await this.$myRequest({
					url: '/note/findAll/1010'
				})
				this.notes = res.data.data
			}
		}
  }
</script>

<style>
	.nav-text {
		position: float;
		float: left;
		height: 145upx;
	}
	
	.nav-text .head {
		font-size: 54.54upx;
		width: 218.18upx;
		height: 72.72upx;
		margin-top: 36.36upx;
	}
	
	.nav-text .count {
		font-size: 25.45upx;
		color: #999999;
	}
</style>
