<template>
	<view class="food-desc-container" @click="closeDesc">
		<view class="food-img">
			<img :src="foodData.foodDescImg" alt="" srcset="">
		</view>
		<view class="common-item">
			食物名称：{{foodData.name}}（{{foodData.englishName}})
		</view>
		<view class="common-item">食物卡路里：{{foodData.calories}}</view>
		<view class="common-item">食物营养：{{foodData.desc}}</view>
		<view class="common-item">建议：{{foodData.desc}}</view>
	</view>
</template>

<script>
	export default {
		name:"food-desc-card",
		props: {
			foodData:{
				type:Object,
				default: ()=>({})
			}
		},
		methods: {
			closeDesc () {
				this.$emit('closeDesc')
			}
		}
	}
</script>

<style lang="less" scoped>
	@keyframes cardRun {
		0% {
			transform:translate(-50%, -50%)  rotateY(0) scale(0);
		}
		100% {
			transform:translate(-50%, -50%) rotateY(360deg) scale(1);
		}
	}
	.food-desc-container {
		font-size: 36rpx;
		position: absolute;
		transform-origin: center;
		width: 95%;
		height: 92%;
		left: 50%;
		top: 50%;
		background-color: rgba(255, 255, 255, 0.1);
		border-radius: 20px;
		backdrop-filter: blur(10px);
		transition: 0.5s ease;
		box-shadow: 0rpx 0rpx  30rpx #2f2f2f;
		animation: 1s cardRun linear forwards;
		.common-item {
			margin-bottom: 10rpx;
			text-align: center;
		}
		.food-img {
			width: 400rpx;
			height: 400rpx;
			border-radius: 10rpx;
			overflow: hidden;
			margin: 40px auto;
			box-shadow: 0rpx 0rpx  18rpx #4c4c4c;
			img {
				width: 100%;
				height: 100%;
			}
		}
	}
</style>