<template>
	<view class="card-box" @click="handleClick">
		<img :src="foodData.foodImg" alt="" srcset="">
	</view>
</template>

<script>
	export default {
		name:"food-card",
		props: {
			foodData:{
				type:Object,
				default: ()=>({})
			}
		},
		methods: {
			handleClick () {
				this.$emit('click',this.foodData)
			}
		}
	}
</script>

<style lang="less">
.card-box {
	width: 200rpx;
	height: 200rpx;
	margin: 6rpx;
	border-radius: 10rpx;
	-webkit-box-shadow: 0rpx 0rpx  12rpx #4c4c4c;
	box-shadow: 0rpx 0rpx  12rpx #4c4c4c;
	overflow: hidden;
	img {
		width: 100%;
		height: 100%;
	}
}
</style>