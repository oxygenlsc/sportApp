<template>
	<view class="content">
		<!-- <FootBar/> -->
		<button @click="getData">调用云函数使用callback的形式进行调用</button>
		<button type="default" @click="promiseSendData">使用promise调用</button>
	 <custom-tab-bar direction="horizontal" :show-icon="true" :selected="1" @onTabItemTap="onTabItemTap" >dddd</custom-tab-bar>
	</view>
</template>

<script>
	import FootBar from '../../components/layout-footer/layout-footer.vue'
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		components:{
			FootBar
		},
		methods: {
			getData () {
				uniCloud.callFunction({
					name:'test_level_1',
					data:{
						userName:'lsc',
						age:'20'
					},
					success(res){
						console.log(res,'res')
					}
				})
			},
			async promiseSendData() {
				const res = await uniCloud.callFunction({
					name:'test_level_2',
					data:{
						msg:'你好'
					}
				})
				console.log(res,'resss')
			}
		}
	}
</script>

<style lang='less' scoped>
	.content {
		position: relative;
		width: 100%;
		height: 90vh;
		background-color: red;
	}
</style>
