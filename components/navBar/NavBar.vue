<template>
	<view>
		<view class="nav">
			<view class="nav-button" 
						@touchstart="navTouchStart" 
						@touchend="navTouchEnd" 
						:class="{active: navIndex}">
				<image src="../../static/nav/nav.png"></image>
			</view>
		</view>
		<view class="nav-text">
			<view class="head">全部笔记</view>
			<view class="count">?个笔记</view>
		</view>
		<view class="set">
			<view class="set-button" 
						@touchstart="setTouchStart" 
						@touchend="setTouchEnd" 
						:class="{active: setIndex}">
				<image src="../../static/nav/set.png"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "NavBar",
		data() {
			return {
				navIndex: 0,
				setIndex: 0
			}
		},
		methods: {
			navTouchStart() {
				this.navIndex = 1
			},
			navTouchEnd() {
				this.navIndex = 0
			},
			setTouchStart() {
				this.setIndex = 1
			},
			setTouchEnd() {
				this.setIndex = 0
			}
		}
	}
</script>

<style>
	.nav {
		position: float;
		float: left;
		width: 80px;
		height: 80px;
	}
	
	.nav-button {
		width: 60px;
		height: 60px;
		margin: 10px;
		border-radius: 15px;
	}
	
	.nav-text {
		position: float;
		float: left;
		height: 80px;
	}
	
	.nav-text .head {
		font-size: 30px;
		width: 120px;
		height: 40px;
		margin-top: 20px;
	}
	
	.nav-text .count {
		font-size: 14px;
		color: #999999;
	}
	
	.set {
		position: float;
		float: right;
		width: 80px;
		height: 80px;
	}
	
	.set-button {
		width: 60px;
		height: 60px;
		margin: 10px;
		border-radius: 15px;
	}
	
	.nav-button image,
	.set-button image {
		width: 30px;
		height: 30px;
		margin: 15px;
	}
	
	.active {
		background-color: #C0C0C0;
	}
</style>
