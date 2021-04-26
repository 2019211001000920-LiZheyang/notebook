<template>
	<view>
		<view class="search">
			<view class="search-form">
				<view class="searchIcon"><image src="../../static/search.png" class="searchImage"></image></view>
				<input class="searchInput" adjust-position="false" type="text" confirm-type="search" placeholder="搜索笔记"></input>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "SearchBar",
		data() {
			return {
				InputBottom: 0
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	.search-form {
		width: 90%;
		height: 54.54rpx;
		margin: 18.18rpx auto;
	}
	.searchIcon {
		float: left;
		width: 10%;
		height: 54.54rpx;
		background-color: #e5e5e5;
		border-radius: 36.36rpx 0 0 36.36rpx;
	}
	.searchIcon .searchImage {
		width: 32.72rpx;
		height: 32.72rpx;
		margin: 10.9rpx 9.09rpx 10.9rpx 21.81rpx;
	}
	.search-form .searchInput {
		float: left;
		width: 90%;
		height: 54.54rpx;
		padding: 0 25.45rpx 0 0;
		background-color: #e5e5e5;
		border-radius: 0 36.36rpx 36.36rpx 0;
	}
</style>
