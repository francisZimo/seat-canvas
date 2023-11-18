<template>
	<view class="content">
		<canvas style="width: 400px; height: 400px;" canvas-id="seatCanvas" @touchstart="onCanvasTouchStart"
			id="seatCanvas"></canvas>
	</view>
</template>

<script>
	// const wxDraw = require('./wxdraw.min.js').wxDraw
	// const Shape = require('./wxdraw.min.js').Shape
	// let wxCanvas = null;
	export default {
		data() {
			return {
				title: 'Hello',
				canvasContext: null, // canvas上下文对象
				seatData: [
					// {
					// 	x: 0,
					// 	y: 0,
					// 	width: 50,
					// 	height: 50,
					// 	type: 'rect'
					// },
					// {
					// 	x: 50,
					// 	y: 50,
					// 	width: 100,
					// 	height: 100,
					// 	type: 'rect'
					// },
					{
						id: 1,
						x: 100,
						y: 100,
						radius: 50,
						type: 'circle',
						status: 'available'
					},
					{
						id: 2,
						x: 200,
						y: 200,
						radius: 50,
						type: 'circle',
						status: 'unavailable'
					},

				], // 座位数据
				selectedSeat: null, // 当前选中的座位
			}
		},
		onLoad() {

		},
		mounted() {
			// 获取canvas上下文对象
			this.canvasContext = uni.createCanvasContext('seatCanvas', this);

			// 加载座位数据
			// this.loadSeatData();

			// 绘制座位图
			this.drawSeatMap();
			// var context = wx.createCanvasContext('first'); //还记得 在wxml里面canvas的id叫first吗
			// this.wxCanvas = new wxDraw(context, 0, 0, 400, 500);
		},

		methods: {
			// 绘制多边形
			drawPolygon(context, points) {
				if (points.length < 3) {
					return;
				}

				context.beginPath();
				context.moveTo(points[0].x, points[0].y);

				for (let i = 1; i < points.length; i++) {
					context.lineTo(points[i].x, points[i].y);
				}

				context.closePath();
				context.stroke();
			},

			drawSeatMap() {
				// 清空画布
				// this.canvasContext.clearRect(0, 0, canvasWidth, canvasHeight);
				this.canvasContext.clearRect(0, 0, 1000, 1000);

				// 绘制座位
				this.seatData.forEach(seat => {
					if (seat.type === 'rect') {
						this.canvasContext.beginPath();
						this.canvasContext.rect(seat.x, seat.y, seat.width, seat.height);
						this.canvasContext.setFillStyle(seat.status === 'available' ? 'green' : 'red');
						this.canvasContext.fill();
						this.canvasContext.closePath();
					}

					if (seat.type === 'circle') {
						this.canvasContext.beginPath();
						this.canvasContext.arc(seat.x, seat.y, seat.radius, 0, 2 * Math.PI);
						this.canvasContext.setFillStyle(seat.status === 'available' ? 'green' : 'red');
						this.canvasContext.fill();
						this.canvasContext.closePath();
					}

				});

				// 绘制选中的座位
				// if (this.selectedSeat) {
				// 	this.canvasContext.beginPath();
				// 	this.canvasContext.rect(this.selectedSeat.x, this.selectedSeat.y, this.selectedSeat.width, this
				// 		.selectedSeat.height);
				// 	this.canvasContext.setStrokeStyle('blue');
				// 	this.canvasContext.setLineWidth(2);
				// 	this.canvasContext.stroke();
				// 	this.canvasContext.closePath();
				// }
				if (this.selectedSeat) {
					const {
						x,
						y,
						radius
					} = this.selectedSeat
					this.canvasContext.beginPath();
					this.canvasContext.arc(x, y, radius, 0, 2 * Math.PI);
					this.canvasContext.setFillStyle('blue');
					this.canvasContext.fill();
					this.canvasContext.closePath();
				}


				// 绘制完成

				this.canvasContext.draw();
			},

			onCanvasTouchStart1(event) {
				// // 获取触摸点坐标
				// const x = event.touches[0].x;
				// const y = event.touches[0].y;

				// // 判断是否点击到座位
				// const clickedSeat = this.seatData.find(seat => x >= seat.x && x <= seat.x + seat.width && y >= seat.y &&
				// 	y <= seat.y + seat.height);

				// // 更新选中的座位
				// this.selectedSeat = clickedSeat;
				// console.log(this.selectedSeat, '===seat')

				// // 重新绘制座位图
				// this.drawSeatMap();

			},
			onCanvasTouchStart(event) {
				// 获取触摸点坐标
				const x = event.touches[0].x;
				const y = event.touches[0].y;

				// 判断是否点击到座位
				const clickedSeat = this.seatData.find(seat => {
					const distance = Math.sqrt(Math.pow(x - seat.x, 2) + Math.pow(y - seat.y, 2));
					return distance <= seat.radius;
				});

				// 更新选中的座位
				this.selectedSeat = clickedSeat;
				console.log(this.selectedSeat, '圆形点击')
				this.drawSeatMap();
			},

		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>