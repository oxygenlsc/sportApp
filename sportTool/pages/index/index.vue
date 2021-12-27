<template>
	<view class="bmi-container">
			<view class="bmi-panel">
				<view class="bmi-title">
					BMI值
				</view>
				<view class="bmi-number">24.2</view>
				<view class="result">
					<text>身体状况：偏胖</text>
					<text>身高标准体重：67.4kg</text>
				</view>
				<view class="ill-test">
					相关疾病发病危险性：平均水平
				</view>
			</view>
			<view class="bmi-test">
				<view class="height common">身高 <view class="common-input"><input type="number" value="" />cm</view></view>
				<view class="weight common">体重 <view class="common-input"> <input type="number" value="" />kg</view></view>
				<view class="test-btn"><button type="default">生成Bmi</button></view>
			</view>
			<view class="bim-table">
				<view class="">
						<view class="">标准对照表</view>
				</view>
			</view>
	</view>
</template>

<script>
	export default {
		
	}
</script>

<style scoped lang="less">
	.bmi-container{
		width: 100%;
		margin: 0 auto;
		.bmi-panel{
			color: #fff;
			height: 360rpx;
			background-color:#42b983;
			padding: 10rpx 40rpx;
			.bmi-title{
				font-size: 26rpx;
				padding: 10rpx 0;
				font-weight: bold;
			}
			.bmi-number {
				font-size: 80rpx;
				margin-bottom: 40rpx;
			}
			.result {
				font-size: 20rpx;
				display: flex;
				justify-content: space-between;
			}
			.ill-test {
				font-size: 20rpx;
				margin-top: 60rpx;
			}
		}
		.bmi-test {
			width: 600rpx;
			margin: 0 auto;
			padding: 20rpx;
			.common{
				display: flex;
				justify-content: space-between;
				height: 90rpx;
				align-items: center;
				color:#a6a6a6;
				border-bottom: 1px solid #ebebeb;
				margin-bottom: 30rpx;
				.common-input{
					display: flex;
					justify-content: space-between;
					width: 400rpx;
				}
				input {
					border: 1px solid #ccc;
					border-radius: 8rpx;
					background-color: #ebebeb;
					height: 50rpx;
					color:#42b983 ;
					font-weight: bold;
					text-align: center;
					width: 320rpx;
				}
			}
			.test-btn{
				button{
					background-color: #42b983;
					color: #fff;
				}
			}
		}
	}
</style>