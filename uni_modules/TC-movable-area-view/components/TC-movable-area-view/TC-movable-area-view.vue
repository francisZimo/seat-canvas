
<template>
	<view>
		<view class="text">
			指定的全区域拖动
		</view>
		<movable-area class="A">
			<movable-view class="A-B" :x="x" :y="y" direction="all" @change="onChange">随机拖动</movable-view>
		</movable-area>
		<view @tap="tap" class="text">
			<!-- 点击这里移动至 (60px, 60px) -->
		</view>
	</view>


	<view class="B">
		<view class="text">
			指定全区域左右拖动
		</view>
		<movable-area class="A">
			<movable-view class="B-B" direction="all">左右拖动</movable-view>
		</movable-area>
	</view>

	<view class="B">
		<view class="text">
			指定全区域上下竖向拖动
		</view>
		<movable-area class="A">
			<movable-view class="C-C" direction="vertical">上下拖动</movable-view>
		</movable-area>
	</view>

	<view class="B">
		<view class="text">
			指定全区域左右横向拖动
		</view>
		<movable-area class="A">
			<movable-view class="D-D" direction="horizontal">左右拖动</movable-view>
		</movable-area>
	</view>

	<view>
		<view class="text">
			超出全区域拖动
		</view>
		<movable-area class="A">
			<movable-view out-of-bounds="true" class="A-B" :x="x" :y="y" direction="all"
				@change="onChange">随机拖动</movable-view>
		</movable-area>
	</view>

	<view>
		<view class="text">
			全区域拖动块放大缩小
		</view>
		<movable-area class="A" @touchstart="handleTouchStart" @touchmove="handleTouchMove" @touchend="handleTouchEnd">
		      <movable-view :style="getMovableStyle" class="F-F" direction="all">放大缩小</movable-view>
		    </movable-area>
		<view class="button">
			<button @click="fangda" type="primary" size="mini">放大</button>
			<button @click="suoxiao" type="primary" size="mini" style="margin-left: 100rpx;">缩小</button>
		</view>

	</view>

</template>

<script>
	export default {
		data() {
			return {
				x: 0,
				y: 0,
				old: {
					x: 0,
					y: 0
				},
				zhiwidth: 100, //Movable-view的初始宽度
				      zhiheight: 100, //Movable-view的初始高度
				      zhi: 1, //Movable-view的初始缩放比例
				      zuixiaozhi: 0.5, //最小缩放比例
				      zuidazhi: 2, //最大缩放比例
				      startDistance: 0, //双指触摸起始距离
				      currentDistance: 0, //双指触摸当前距离

			}
		},
		 computed: {
		    getMovableStyle() {
		      return {
		        width: this.zhiwidth * this.zhi + 'px',
		        height: this.zhiheight * this.zhi + 'px',
		        transform: `scale(${this.zhi}, ${this.zhi})`,
		        'transform-origin': 'center center'
		      }
		    }
		  },
		methods: {
			handleTouchStart(event) {
			      if (event.touches.length === 2) { //判断是否为双指触摸
			        const x1 = event.touches[0].clientX;
			        const y1 = event.touches[0].clientY;
			        const x2 = event.touches[1].clientX;
			        const y2 = event.touches[1].clientY;
			        const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2); //计算两指间距
					console.log("A",distance)
			        this.startDistance = distance;
			      }
			    },
				  handleTouchMove(event) {
				       if (event.touches.length === 2) { //判断是否为双指触摸
				         const x1 = event.touches[0].clientX;
				         const y1 = event.touches[0].clientY;
				         const x2 = event.touches[1].clientX;
				         const y2 = event.touches[1].clientY;
				         const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2); //计算两指间距
				         const scale = distance / this.startDistance; //计算缩放比例
				         this.zhi = this.zhi * scale; //更新缩放比例
						 console.log("B",this.zhi)
				         if (this.zhi < this.zuixiaozhi) { //限制最小缩放比例
				           this.zhi = this.zuixiaozhi;
				         }
				         if (this.zhi > this.zuidazhi) { //限制最大缩放比例
				           this.zhi = this.zuidazhi;
				         }
				         this.startDistance = distance; //更新起始距离为当前距离
				       }
				     },
				     handleTouchEnd() { //触摸结束时重置起始距离为0
				       this.startDistance = 0;
				     },
			tap: function(e) {
				this.x = this.old.x
				this.y = this.old.y
				this.$nextTick(function() {
					this.x = 30
					this.y = 30
				})
			},
			onChange: function(e) {
				this.old.x = e.detail.x
				this.old.y = e.detail.y
			},
			fangda() {
				
				let zhii = this.zhi += 0.5;
				
				
				let width = this.zhiwidth += 50
				let height = this.zhiheight += 50
				this.zhiwidth = width
				this.zhiheight = height
				if (zhii < 0.5) {
					uni.showModal({
						title: "低于0.5倍了",
						icon: null
					})
					
				} else if (zhii > 2) {
					uni.showModal({
						title: "太大了",
						icon: null
					})

					
				} if (zhii = 0){
				this.zhiwidth = width + 50
				this.zhiheight = height + 50
				}
				
				
				
			},
			suoxiao() {
				
				let zhii = this.zhi -= 0.5;
				
			    let width = this.zhiwidth -= 50
				let height = this.zhiheight -= 50
				this.zhiwidth = width
				this.zhiheight = height
				
				if (zhii < 0.5) {
					uni.showModal({
						title: "低于0.5倍了",
						icon: null
					})
				
				} else if (zhii > 2) {
					uni.showModal({
						title: "太大了",
						icon: null
					})
					
				}
				
			},
		}
	}
</script>

<style>
	.text {
		text-align: center;
		font-weight: bold;
		margin-bottom: 20rpx;
		margin-top: 20rpx;
	}

	.A {
		width: 100%;
		height: 400rpx;
		background-color: coral;
	}

	.A-B {
		width: 200rpx;
		height: 200rpx;
		background-color: #5555ff;
		justify-content: center;
		align-items: center;
		display: flex;
		color: #ffffff;
	}

	.B-B {
		width: 400rpx;
		height: 100%;
		background-color: #5555ff;
		justify-content: center;
		align-items: center;
		display: flex;
		color: #ffffff;
	}

	.C-C {
		width: 200rpx;
		height: 200rpx;
		background-color: #5555ff;
		justify-content: center;
		align-items: center;
		display: flex;
		color: #ffffff;
	}

	.D-D {
		width: 200rpx;
		height: 200rpx;
		background-color: #5555ff;
		justify-content: center;
		align-items: center;
		display: flex;
		color: #ffffff;
	}

	.button {
		padding: 80rpx;
		text-align: center;
	}
	.F-F{

	background-color: #5555ff;
	justify-content: center;
	align-items: center;
	display: flex;
	color: #ffffff;	
	font-size: 10rpx;
	}
</style>