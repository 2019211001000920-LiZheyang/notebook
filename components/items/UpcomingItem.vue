<template>
	<view id="upcomings">
		<scroll-view scroll-x="true" 
								 class="moveScroll"
								 @scroll="moveScroll" 
								 @touchend="touchEnd"
								 :scroll-left="scrollEnd"
								 scroll-with-animation="true">
			<view class="upcoming">
				<view class="circle">
					<text class="circleImage" :class="'cuIcon-' + imageName" @click="circleClick"></text>
				</view>
				<view class="content">
					<view class="task" :class="{completed: imageIndex}">{{upcomingItem.upcomingTask}}</view>
					<view v-if="!imageIndex">
						<text class="cuIcon-top top" v-if="!isTopImage"></text>
						<view class="time">{{upcomingItem.upcomgingTime}}</view>
					</view>	
				</view>
				<view class="edit">
					<view class="btn"><text :class="'cuIcon-' + topImage" class="topImage" @click="topClick"></text></view>
					<view class="btn"><text :class="'cuIcon-' + deleteImage" class="deleteImage" @click="deleteClick"></text></view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		name: "UpcomingItem",
		data() {
			return {
				imageIndex: 0,
				imageName: 'round',
				isTopImage: true,
				scrollLength: 0,
				scrollEnd: 0,
				topImage: 'top',
				deleteImage: 'deletefill'
			}
		},
		props: {
			upcomingItem: {
				type: Object,
				default() {
					return {}
				}
			}
		},
		methods: {
			circleClick() {
				if(this.imageIndex === 0) {
					this.imageName = 'roundcheck'
					this.imageIndex = 1
					this.isTopImage = true
				} else if(this.imageIndex === 1) {
					this.imageName = 'round'
					this.imageIndex = 0
				}
			},
			moveScroll(e) {
				if(e.detail.deltaX < 0) {
					if(e.detail.scrollLeft > 0) {
						this.scrollLength = e.detail.scrollWidth
					} else {
						this.scrollLength = 0
					}
				} else {
					if(e.detail.scrollLeft < 9 * e.detail.scrollWidth / 10) {
						this.scrollLength = 0
					} else {
						this.scrollLength = e.detail.scrollWidth
					}
				}
			},
			touchEnd() {
				this.scrollEnd = this.scrollLength
			},
			topClick() {
				if(this.isTopImage) {
					this.isTopImage = false
					this.scrollEnd = 0
				} else {
					this.isTopImage = true
					this.scrollEnd = 0
				}
			},
			deleteClick() {
				
			}
		}
	}
</script>

<style>
	.moveScroll {
		width: 100%;
		height: 109.09rpx;
		margin: 0 auto 10px;
	}
	
	.edit {
		display: inline-block;
		width: 218.18rpx;
		height: 109.09rpx;
		margin: 0 0 0 71rpx;
	}
	
	.btn {
		float: left;
	}
	
	.topImage {
		display: block;
		font-size: 45.45rpx;
		width: 72.72rpx;
		height: 72.72rpx;
		font-weight: bold;
		color: #fefeff;
		margin: 18.18rpx;
		background-color: #46cc47;
		text-align: center;
		line-height: 72.72rpx;
		border-radius: 50%;
	}
	
	.deleteImage {
		display: block;
		width: 72.72rpx;
		height: 72.72rpx;
		font-size: 45.45rpx;
		color: #fefeff;
		margin: 18.18rpx;
		border-radius: 50%;
		background-color: #fb2a2d;
		text-align: center;
		line-height: 72.72rpx;
	}
	
	.upcoming {
		position: relative;
		margin: 0 auto;
		width: 90%;
		height: 109rpx;
		background-color: #fefeff;
		border-radius: 12px;
	}
	
	.circle {
		float: left;
		width: 47.27rpx;
		height: 47.27rpx;
		margin: 30.9rpx 27.27rpx;
	}
	
	.circle .circleImage {
		font-size: 47.27rpx;
	}
	
	.content {
		position: relative;
		float: left;
		width: 545rpx;
		height: 109rpx;
		font-size: 25.45rpx;
		/* margin: 18rpx auto; */
	}
	
	.content .task {
		margin-top: 20rpx;
		width: 418.18upx;
		font-size: 14px;
		vertical-align: middle;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
	}
	
	.content .top {
		font-size: 21.81rpx;
		font-weight: bold;
		color: #007AFF;
		padding-right: 9.09rpx;
	}
	
	.content .time {
		margin-top: 12rpx;
		font-size: 21.81rpx;
		display: inline-block;
	}
	
	.completed {
		text-decoration: line-through;
		color: #999999;
		position: absolute;
		bottom: 36.36rpx;
	}
</style>
