<template>
	<view class="bmi-container">
			<view class="bmi-panel">
				<view class="bmi-title">
					BMI值
				</view>
				<view class="bmi-number">{{BMI}}</view>
				<view class="result">
					<text>身体状况：{{bodyStatus}}</text>
					<text>身高标准体重：{{normalRange}}</text>
				</view>
				<view class="ill-test">
					相关疾病发病危险性：{{illStatus}}
				</view>
			</view>
			<view class="bmi-test">
				<view class="height common">身高 <view class="common-input"><input type="number" v-model="height" />cm</view></view>
				<view class="weight common">体重 <view class="common-input"> <input type="number" v-model="weight" />kg</view></view>
				<view class="test-btn"><button type="default" @click="madeBim">生成Bmi</button></view>
			</view>
			<view class="bim-table">
				<view class="table-title">标准对照表</view>
				<view class="table-item blue">
					<text>BMI值</text>
					<text>身体状况</text>
				</view>
				<view class="table-item gray">
					<text><18.5</text>
					<text>偏瘦</text>
				</view>
				<view class="table-item green">
					<text>18.5~23.9</text>
					<text>正常</text>
				</view>
				<view class="table-item yellow">
					<text>24~27.9</text>
					<text>偏胖</text>
				</view>
				<view class="table-item orage">
					<text>≥28</text>
					<text>肥胖</text>
				</view>
			</view>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				height:'',
				weight:'',
				BMI:'0'
			}
		},
		computed:{
			bodyStatus(){
				if(this.BMI==0){
					return''
				}
				if(+this.BMI<18.5){
					return '偏瘦'
				}else if(+this.BMI>=18.5&&+this.BMI<23.9){
					return '正常'
				}else if(+this.BMI>=24&&+this.BMI<27.9){
					return '偏胖'
				}else if(+this.BMI>=28){
					return '肥胖'
				}
			},
			normalRange(){
				if(this.BMI == 0 || this.height == ''){
					return ''
				}
				const minWeight = 18.5*((this.height/100)*(this.height/100))
				const maxWeight = 23.9*((this.height/100)*(this.height/100))
				return `${minWeight.toFixed(0)}kg~${maxWeight.toFixed(0)}kg`
			},
			illStatus(){
				if(this.BMI==0){
					return''
				}
				if(+this.BMI<18.5){
					return '低（但其它疾病危险性增加）'
				}else if(+this.BMI>=18.5&&+this.BMI<23.9){
					return '平均水平'
				}else if(+this.BMI>=24&&+this.BMI<27.9){
					return '增加'
				}else if(+this.BMI>=28){
					return '中度增加'
				}
			}
		},
		methods:{
			madeBim(){
				if(this.height==''){
					uni.showToast({
						icon:'error',
					    title: '请输入身高',
					    duration: 2000
					});
					return
				}
				if(this.weight==''){
					uni.showToast({
						icon:'error',
					    title: '请输入体重',
					    duration: 2000
					});
					return
				}
				const bmi = this.weight/((this.height/100)*(this.height/100))
				this.BMI  = bmi.toFixed(2)
			}
		}
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
		.bim-table {
			width: 600rpx;
			margin: 0 auto;
			padding: 20rpx;
			.table-title{
				color:#a6a6a6 ;
			}
			.table-item{
				height: 60rpx;
				display: flex;
				align-items: center;
				text{
					width: 49%;
					display: inline-block;
					text-align: center;
				}
			}
			.blue{
				background-color: #0097e2;
			}
			.gray{
				background-color: #d1d1d1;
			}
			.green {
				background-color: #4CD964;
			}
			.yellow{
				background-color: #ffff00;
			}
			.orage{
				background-color: #fda900;
			}
		}
	}
</style>