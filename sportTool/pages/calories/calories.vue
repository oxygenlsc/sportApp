<template>
	<view class="food-container">
		<view class="search-box">
			<input class="uni-input" confirm-type="search" @input="handleDataFilter" placeholder="输入食物名称" />
		</view>
		<scroll-view @scrolltolower="handleToLower" class="food-list" scroll-y="true" >
			<view class="food-box">
					<food-card @click="handleShowDesc" v-for="item in dataList"  :key="item._id" :foodData="item"/>
			</view>
		</scroll-view>
		<food-desc-card v-if="descShow" :foodData="curDescFood" @closeDesc="handleClose"/>
	</view>
</template>

<script>
	import foodCard from '@/components/food-card/food-card.vue'
	import foodDescCard from '@/components/food-card/food-desc-card.vue'
	export default {
		components: {
			foodCard,
			foodDescCard
		},
		data() {
			return {
				originData: [],
				dataList: [],
				descShow: false,
				curDescFood: {}
			}
		},
		methods: {
			async handleDataFilter (e) {
				const val = e.detail.value
				console.log(val)
				const data = [...this.originData]
				this.dataList = data.filter(el=>(el.name.includes(val) || el.englishName.includes(val) ))
			},
			handleShowDesc (data) {
				this.descShow = true
				this.curDescFood = data
			},
			handleClose () {
				this.descShow = false
				this.curDescFood = {}
			},
			async getData () {
				const {result} = await uniCloud.callFunction({name:'getFoodList'})
				if(result.code === 0){
					this.dataList = result.data
					this.originData = result.data
				}
			}
		},
		mounted() {
			this.getData()
		}
	}
</script>

<style lang="less" scoped>
.food-container {
	padding: 10rpx;
	height: 86vh;
	background-color: #42b983;
	position: relative;
	.search-box {
		input {
			background: #fff;
			padding: 10rpx;
			width: 96%;
			border-radius: 8rpx;
			margin: 20rpx 6rpx;
			-webkit-box-shadow: 0rpx 0rpx  12rpx #4c4c4c;
			box-shadow: 0rpx 0rpx  12rpx #4c4c4c;
		}
	}
	.food-list {
		height: 100%;
		.food-box {
			display: flex;
			flex-wrap: wrap;
			flex-direction: row;
			justify-content: space-between;
		}
	}
}
</style>
