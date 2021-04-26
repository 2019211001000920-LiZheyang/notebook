<template>
	<view id="notes">
		<scroll-view scroll-x="true"
								 class="moveScroll"
								 @scroll="moveScroll" 
								 @touchend="touchEnd"
								 :scroll-left="scrollEnd"
								 scroll-with-animation="true">
			<view class="note">
				<view class="mainNote" @click="itemClick">
					<view class="title">{{notesItem.note_title}}</view>
					<view class="content">
						<text class="topImg cuIcon-top" v-if="notesItem.top_time !== null"></text>
						<text class="loveImg cuIcon-favorfill" v-if="notesItem.note_collect === 1"></text>
						<text class="date">{{date}}</text>
						<text v-if="isNoteText">|</text>
						<text class="text">{{notesItem.note_content}}</text>
					</view>
				</view>
				<view class="edit">
					<view class="btn"><text :class="'cuIcon-' + topImage" class="topImage" @tap="topClick"></text></view>
					<view class="btn"><text :class="'cuIcon-' + categoryImage" class="categoryImage" @tap="categoryClick"></text></view>
					<view class="btn"><text :class="'cuIcon-' + loveImage" class="loveImage" @tap="loveClick"></text></view>
					<view class="btn"><text :class="'cuIcon-' + deleteImage" class="deleteImage" @tap="showModal" data-target="bottomModal" ></text></view>
				</view>
			</view>
			<view class="cu-modal bottom-modal" :class="modalName=='bottomModal'?'show':''">
				<view class="cu-dialog">
					<view class="cu-bar bg-white">
						<view class="action text-green" @tap="deleteClick">确定</view>
						<view class="action text-blue" @tap="hideModal">取消</view>
					</view>
					<view class="padding-xl">
						是否删除此笔记？
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		name: "NotesItem",
		data() {
			return {
				isTopImage: true,
				modalName: null,
				scrollLength: 0,
				scrollEnd: 0,
				topImage: 'top',
				categoryImage: 'apps',
				loveImage: 'favor',
				deleteImage: 'deletefill',
				notesList: {}
			}
		},
		props: {
			notesItem: {
				type: Object,
				default() {
					return {}
				}
			}
		},
		created() {
			// this.notesList = this.notesItem
		},
		computed:{
			isNoteText() {
				if(this.notesItem.note_content === '') {
					return false
				} else {
					return true
				}
			},
			date() {
				var nowDate = +new Date();
				var noteDate = +new Date(this.notesItem.note_date);
				var timeDiff = nowDate - noteDate
				var min = 60 * 1000;
				var hour = min * 60;
				var day = hour * 24;
				var week = day * 7;
				var month = week*4;
				var year = month*12;
				var exceedDay = Math.floor(timeDiff/day);
				var exceedHour = Math.floor(timeDiff/hour);
				var exceedMin = Math.floor(timeDiff/min);
				var exceedyear = Math.floor(timeDiff/year);
				var exceedmonth = Math.floor(timeDiff/month);
				var strs = new Array()
				strs = this.notesItem.note_date.split(/[- :]/)
				var year = parseInt(strs[0])
				var month = parseInt(strs[1])
				month = month > 10 ? month : strs[1].substr(1,1)
				var day = parseInt(strs[2])
				day = day > 10 ? day : strs[2].substr(1,1)
				if(exceedyear<100&&exceedyear>0) {
				  return year + '年' + month + '月' + day + '日';
				} else {
				  if(exceedmonth<12&&exceedmonth>0) {
				    return month + '月' + day + '日';
				  } else {
						if(exceedDay < 30 && exceedDay > 0){
							return month + '月' + day + '日';
					  } else{
					    if(exceedDay < 7 && exceedDay > 0) {
					      return exceedDay + '天前';
					    } else {
					      if(exceedHour < 24 && exceedHour > 0) {
					        return exceedHour + '小时前';
					      } else {
					        if(exceedMin==0) {
					          return '刚刚';
					        } else {
					          return exceedMin + '分钟前';
					        }                  
					      }
							}
				    }
				  }
				}
			}
		},
		methods: {
			itemClick() {
				uni.navigateTo({
					url: "../../pages/detail/Detail"
				})
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
				if(this.notesItem.top_time === null) {
					this.scrollEnd = 0
					this.notesItem.top_time = 'top'
					console.log(1)
					this.$emit('stickNote')
				} else {
					this.scrollEnd = 0
					this.notesItem.top_time = null
					this.$emit('unstickNote')
				}
			},
			loveClick() {
				if(this.notesItem.note_collect === 0) {
					// this.notesItem.note_collect = 1
					// console.log(this.notesItem.note_collect)
					this.$set(this.notesItem, 'note_collect', 1)
					this.scrollEnd = 0
					// this.$emit('collect')
				} else if(this.notesItem.note_collect === 1) {
					// this.notesList.note_collect = 0
					// console.log(this.notesItem.note_collect)
					this.$set(this.notesItem, 'note_collect', 0)
					this.scrollEnd = 0
					// this.$emit('collect')
				}
			},
			deleteClick() {
				this.scrollEnd = 0
				this.$emit('deleteClick')
				this.hideModal()
			},
			showModal(e) {
				this.modalName = e.currentTarget.dataset.target
			},
			hideModal(e) {
				this.modalName = null
			}
		}
	}
</script>

<style>
	.moveScroll {
		width: 100%;
		height: 145.45rpx;
		margin: 0 auto 10px;
	}
	
	.edit {
		display: inline-block;
		width: 436.36rpx;
		height: 145.45rpx;
		margin: 0 0 0 30rpx;
	}
	
	.btn {
		float: left;
		width: 109.09rpx;
		height: 145.45rpx;
	}
	
	.topImage {
		display: block;
		font-size: 45.45rpx;
		width: 72.72rpx;
		height: 72.72rpx;
		font-weight: bold;
		color: #fefeff;
		margin: 36.36rpx 18.18rpx;
		background-color: #46cc47;
		text-align: center;
		line-height: 72.72rpx;
		border-radius: 50%;
	}
	
	.categoryImage {
		display: block;
		font-size: 45.45rpx;
		width: 72.72rpx;
		height: 72.72rpx;
		color: #fefeff;
		margin: 36.36rpx 18.18rpx;
		background-color: #007AFF;
		text-align: center;
		line-height: 72.72rpx;
		border-radius: 50%;
	}
	
	.loveImage {
		display: block;
		font-size: 45.45rpx;
		width: 72.72rpx;
		height: 72.72rpx;
		color: #fefeff;
		margin: 36.36rpx 18.18rpx;
		background-color: #FBBD08;
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
		margin: 36.36rpx 18.18rpx;
		border-radius: 50%;
		background-color: #fb2a2d;
		text-align: center;
		line-height: 72.72rpx;
	}
	
	.note {
		position: relative;
		margin: 0 auto 10px;
		width: 90%;
		height: 145.45upx;
		background-color: #fefeff;
		border-radius: 12px;
	}
	.mainNote {
		width: 100%;
		height: 145.45rpx;
		float: left;
	}
	.title {
		position: absolute;
		width: 545.45upx;
		text-align: left;
		margin: 27.27upx 0 18.18upx 27.27rpx;
	}
	.content {
		position: absolute;
		width: 545.45upx;
		margin: 81.81upx 0 27.27upx 27.27upx;
	}
	.content .topImg {
		font-size: 21.81upx;
		padding-right: 9.09upx;
		color: #007AFF;
		font-weight: bold;
	}
	.content .loveImg {
		font-size: 21.81upx;
		padding-right: 9.09upx;
		color: #FBBD08;
	}
	.content text {
		font-size: 21.81upx;
		display: inline-block;
		padding-right: 9.09upx;
	}
	.content .text {
		width: 454.54rpx;
		vertical-align: middle;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
	}
</style>
