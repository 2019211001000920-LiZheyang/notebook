<template>
	<view id="upcoming">
		<nav-bar>
			<view class="nav-text">
				<view class="head">{{CategoryName}}</view>
				<view class="count">{{upcomings.length}}个待办</view>
			</view>
		</nav-bar>
		<search-bar></search-bar>
		<upcoming-scroll :upcomings="upcomings"></upcoming-scroll>
	</view>
</template>

<script>
	import NavBar from "../../components/navBar/NavBar.vue"
	import SearchBar from "../../components/items/SearchBar.vue"
	import UpcomingScroll from "../../components/scroll/UpcomingScroll.vue"
	export default {
		name: "Upcoming",
		components: {
			NavBar,
			SearchBar,
			UpcomingScroll
		},
		data() {
			return {
				upcomingCounts: 0,
				CategoryName: "全部待办",
				upcomings: [
					{
						upcomingTask: "牛逼牛逼牛逼1",
						upcomgingTime: "4月20号"
					},
					{
						upcomingTask: "牛逼牛逼牛逼2",
						upcomgingTime: "4月20号"
					},
					{
						upcomingTask: "牛逼牛逼牛逼3",
						upcomgingTime: "4月20号"
					},
					{
						upcomingTask: "牛逼牛逼牛逼4",
						upcomgingTime: "4月20号"
					},
					{
						upcomingTask: "牛逼牛逼牛逼牛逼牛逼牛逼牛逼牛逼牛逼牛逼牛逼5",
						upcomgingTime: "4月20号"
					},
				]
			}
		},
		onLoad() {
			// this.getUpcomings()
		},
		methods: {
			async getUpcomings() {
				const res =  await this.$myRequest({
					url: '/note/findAll/1010'
				})
				console.log(res)
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
