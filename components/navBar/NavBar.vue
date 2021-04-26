<template>
	<view class="navbar">
		<view class="nav">
			<view class="nav-button" 
						@touchstart="navTouchStart" 
						@touchend="navTouchEnd" 
						:class="{active: navIndex}">
				<image src="../../static/nav/nav.png"></image>
			</view>
		</view>
		<slot></slot>
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
	.navbar {
		height: 145upx;
		width: 100%;
		/* background-color: #fff; */
	}
	
	.nav {
		position: float;
		float: left;
		width: 145upx;
		height: 145upx;
	}
	
	.nav-button {
		width: 109.09upx;
		height: 109.09rpx;
		margin: 18.18upx;
		border-radius: 15px;
	}
	
	.set {
		position: float;
		float: right;
		width: 145upx;
		height: 145upx;
	}
	
	.set-button {
		width: 109.09upx;
		height: 109.09upx;
		margin: 18.18upx;
		border-radius: 15px;
	}
	
	.nav-button image {
		width: 54.54upx;
		height: 54.54upx;
		margin: 27.27upx;
	}
	
	.set-button image {
		width: 45.45upx;
		height: 45.45upx;
		margin: 31.81upx;
	}
	
	.active {
		background-color: #C0C0C0;
	}
</style>
