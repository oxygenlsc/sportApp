<template>
	<view class="content">
		<!-- <FootBar/> -->
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
