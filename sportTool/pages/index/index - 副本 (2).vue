<template>
	<view class="content">
		<text>用户名</text>
		<input type="text" v-model="userName" />
		<text>年龄</text>
		<input type="text" v-model="age" />
		<button type="default" @click="sendUserInfo">提交表单</button>
		<button type="default" @click="uploadImg">图片上传</button>
	</view>
</template>

<script>
	import FootBar from '../../components/layout-footer/layout-footer.vue'
	export default {
		data() {
			return {
				userName: '',
				age:''
			}
		},
		onLoad() {
			this.getUserList()
		},
		components:{
			FootBar
		},
		methods: {
			async sendUserInfo(){
				const data = await uniCloud.callFunction({
					name:'add_user',
					data: {
						userName:this.userName,
						age:this.age
					}
				})
			},
			async getUserList() {
				const data = await uniCloud.callFunction({
					name:'get_user'
				})
				console.log(data)
			},
			async uploadImg(){
				 uni.chooseImage({
				async success(res) {
						const file = res.tempFilePaths[0]
						const data = await uniCloud.uploadFile({
						 	cloudPath:'test.jpg',
							filePath:file
						 })
						 console.log(data,'ddddd')
					}
				})
			}
		},
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
