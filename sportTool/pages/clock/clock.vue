<template>
	<view class="clock-container">
		<view :class='`timer-set-drawer ${showClass}`' ref='timeDrawer'>
			<view class="change-default-time">
				<input type="number" v-model="defaultTime"  />
				<button type="default" @click="handleChangeTime">确认</button>
			</view>
		</view>
		<!-- <audio src="../../static/sound/clock.mp3" :loop="true" ></audio> -->
		<view class="time-box">
			<view class="set-box">
					<view class="set-common" @click="setDefaultTime" >
					  <image src="../../static/img/set.png" ></image>
					  <view class="lock-for-set" v-show='!status'>
					  	<image src="../../static/img/lock.png" ></image>
					  </view>
					</view>
					<view class="set-common" @click="resetTime">
						<image src="../../static/img/reset.png"></image>
						<view class="lock-for-set" v-show='!status'>
							<image src="../../static/img/lock.png" ></image>
						</view>
					</view>
			</view>
			<view class="time-show">
				{{showTime}}
			</view>
		</view>
		<view class="start-btn" @click="handleStopOrStart">
			<image src="../../static/img/start.png" mode="" v-if="status"></image>
			<image src="../../static/img/stop.png" mode="" v-else></image>
		</view>
		
	</view>
</template>

<script>
	const sound = uni.createInnerAudioContext()
	sound.src='../../static/sound/clock.mp3'
	// sound.loop = true
	// loop
	export default {
		data() {
			return {
				status:true,
				defaultTime:60,
				showTime:60,
				timer:null,
				showClass:''
			}
		},
		methods: {
			handleStopOrStart(){
				this.status = !this.status
				clearInterval(this.timer)
				if(!this.status){
					this.timer = setInterval(()=>{
						if(this.showTime==0){
							clearInterval(this.timer)
							this.status = !this.status
							return
						}
						sound.play()
						this.showTime--
					},1000)
				}
				
			},
			resetTime (){
				if(!this.status){
					return
				}
				this.showTime = this.defaultTime
			},
			setDefaultTime () {
				if(!this.status){
					return
				}
				this.showClass='show-drawer'
			},
			handleChangeTime () {
				this.showTime = this.defaultTime
				this.showClass=''
			},
			init(){
				clearInterval(this.timer)
				this.showTime = this.defaultTime;
				this.status = true;
				this.showClass=''
			}
		},
		onHide() {
			this.init()
		}
	}
</script>

<style lang='less' scoped>
	.clock-container{
		width: 100%;
		height: 86vh;
		background-color: #42b983;
		position: relative;
		.timer-set-drawer {
			position: absolute;
			width: 100%;
			height: 400px;
			background-color: rgba(0,0,0,.5);
			z-index: 2;
			top: -400px;
			transition: top .5s cubic-bezier(0.42,-0.25, 0.79, 1.48);
			.change-default-time{
				width: 300px;
				margin: 20px auto;
				margin-top: 100px;
				input {
					border: 1px solid #18BC37;
					height: 30px;
					margin-bottom: 20px;
					border-radius: 4px;
					color: #fff;
					text-align: center;
				}
			}
		}
		.show-drawer {
			top: 0;
		}
		.time-box{
			color: #fff;
			height: 360rpx;
			padding: 10rpx 40rpx;
			.set-box {
				width: 200rpx;
				display: flex;
				justify-content: space-between;
				margin: 20rpx auto;
				.set-common{
					position: relative;
					width: 60rpx;
					height: 60rpx;
					box-shadow: 0px 0px 10px #000;
					border-radius: 50%;
					image{
						width: 100%;
						height: 100%;
					}
					.lock-for-set{
						position: absolute;
						width: 30rpx;
						height: 30rpx;
					}
				}
				
			}
			
			.time-show {
				min-width: 100rpx;
				height: 100rpx;
				margin: 0rpx auto;
				text-align: center;
				line-height: 100rpx;
				font-size: 100rpx;
				margin-top: 100rpx;
			}
		}
		.start-btn {
			width: 300rpx;
			height: 300rpx;
			margin: 0 auto;
			margin-top: 100rpx;
			image{
				width: 100%;
				height: 100%;
			}
		}
	}
</style>
