<template>
	<view class="scroll">
		<scroll-view scroll-y="true" class="scroll-Y">
			<slot></slot>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		name: "Scroll"
	}
</script>

<style>
	.scroll {
		width: 100%;
		overflow: hidden;
		white-space: nowrap;
	}
	.scroll-Y {
		height: 895upx;
	}
</style>
