<template>
	<movable-area>
		<movable-view direction="all" out-of-bounds>text</movable-view>
	</movable-area>

	<!-- <movable-area :scale-area="true" class="area-wrap"
		:style="{ width: wrapperBox.width + 'px', height: wrapperBox.height + 'px' }">
		<movable-view class="view-wrap" direction="all" out-of-bounds scale scale-min="0.1" scale-max="10"
			:style="{ width: canvasInfo.width*scaleRatio + 'px', height: canvasInfo.height*scaleRatio + 'px' }"
			@scale="onScale">

			<canvas class="canvas-box" :style="canvasStyle" canvas-id="seatCanvas" @touchstart="onCanvasTouchStart"
					@touchmove="onCanvasTouchMove" @touchend="onCanvasTouchEnd" id="seatCanvas"></canvas>
		</movable-view>
	</movable-area> -->
	<!-- <view class="content" :style="{ width: wrapperBox.width + 'px', height: wrapperBox.height + 'px' }">
		<movable-area>
			<movable-view :x="x" :y="y" direction="all" @change="onChange">


				<canvas class="canvas-box" :style="canvasStyle" canvas-id="seatCanvas" @touchstart="onCanvasTouchStart"
					@touchmove="onCanvasTouchMove" @touchend="onCanvasTouchEnd" id="seatCanvas"></canvas>

			</movable-view>
		</movable-area>
	</view> -->
</template>

<script>
import {
	seatInfo
} from './seatData.js'
// import { throttle } from 'lodash';
import _ from 'lodash'


let initialDistance = null;
let scale = 1;
console.log(seatInfo, '==seatInfo')
export default {
	data() {
		return {
			scaleValue: 1,
			x: 0,
			y: 0,
			old: {
				x: 0,
				y: 0
			},
			wrapperBox: {
				width: 400,
				height: 400
			},
			canvasInfo: {}, // 当前画布信息
			canvasWrapperStyle: '',
			scaleRatio: 1, // canvas 缩放比例
			scaleRationBase: 1, // 底层缩放
			lastTapTime: null,
			lastTapPos: {
				x: null,
				y: null
			},
			baseXPoint: 0,
			baseYPoint: 0,
			canvasStyle: 'border: 1px solid red',
			title: 'Hello',
			canvasContext: null, // canvas上下文对象
			seatData: [{
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
		const systemInfo = uni.getSystemInfoSync();
		this.wrapperBox = {
			width: systemInfo.windowWidth,
			// height: systemInfo.windowHeight,
			height: systemInfo.windowHeight - 300
		}
	},
	mounted() {
		this.initCanvas()
		// 获取canvas上下文对象
		this.canvasContext = uni.createCanvasContext('seatCanvas', this);
		//  this.canvasInfo
		this.canvasContext.scale(this.scaleRatio, this.scaleRatio)

		// 加载座位数据
		// this.loadSeatData();

		// 绘制座位图
		// this.drawSeatMap();

		this.drawData()

		// var context = wx.createCanvasContext('first'); //还记得 在wxml里面canvas的id叫first吗
		// this.wxCanvas = new wxDraw(context, 0, 0, 400, 500);
	},

	methods: {
		onScale(e) {
			console.log(e.detail.scale, '==scale')
		},
		tap: function (e) {
			this.x = this.old.x
			this.y = this.old.y
			this.$nextTick(function () {
				this.x = 30
				this.y = 30
			})
		},
		onTouchStart() {
			console.log("touchstart");
		},
		onTouchMove() {
			console.log("touchmove");
		},
		onTouchEnd() {
			console.log("touchend");
		},
		onChange(e) {
			console.log(e, '==e')
			console.log("change");
		},

		// onChange: function (e) {
		// 	console.log(e, '===e')
		// 	this.old.x = e.detail.x
		// 	this.old.y = e.detail.y
		// },
		initCanvas() {
			const rectCanvas = this.calculateBoundingRectangle()
			this.canvasInfo = rectCanvas

			const {
				x,
				y,
				width,
				height
			} = rectCanvas
			this.baseXPoint = x;
			this.baseYPoint = y;
			let scale = 1;
			if (width > height) {
				scale = this.wrapperBox.width / width
			} else {
				scale = this.wrapperBox.height / height
			}
			this.scaleRatio = scale;
			this.scaleRationBase = scale;


			// this.canvasStyle = `width: ${width}px; height: ${height}px;`;
			this.canvasStyle = `width: ${width * this.scaleRatio}px; height: ${height * this.scaleRatio}px;`;


		},

		calculateBoundingRectangle() {
			let minX = Infinity;
			let minY = Infinity;
			let maxX = -Infinity;
			let maxY = -Infinity;
			const data = seatInfo.datas
			for (let i = 0; i < data.length; i++) {
				const item = data[i];
				const x = item.p.location.x;
				const y = item.p.location.y;
				if (!item.p.width) {
					// console.log(item)
				}
				if (!item.p.height) {
					// console.log(item)
				}

				const width = item.p.width || 0;
				const height = item.p.height || 0;
				minX = Math.min(minX, x);
				minY = Math.min(minY, y);
				maxX = Math.max(maxX, x + width);
				maxY = Math.max(maxY, y + height);
			}

			const width = maxX - minX;
			const height = maxY - minY;

			return {
				x: minX,
				y: minY,
				width: width,
				height: height
			};
		},
		// 绘制矩形
		drawRectangle(payload) {
			const {
				context,
				x,
				y,
				width,
				height
			} = payload;
			context.beginPath();
			context.setStrokeStyle('#000000'); // 设置边框颜色
			context.setLineWidth(2); // 设置边框宽度
			context.rect(x, y, width, height);
			context.stroke(); // 绘制边框
			context.closePath();
			context.stroke();
		},
		// 绘制文本
		drawText(payload) {
			const {
				context,
				x,
				y,
				name
			} = payload;
			context.setTextAlign('center');
			context.setTextBaseline('middle');
			context.fillText(name, x, y);
		},
		// 绘制圆形
		drawCircle(payload) {
			const {
				context,
				x,
				y,
				radius,
			} = payload;
			context.beginPath();
			context.arc(x, y, radius, 0, 2 * Math.PI);
			context.setStrokeStyle()
			context.stroke()
			context.closePath();

		},
		// 绘制多边形
		drawPolygon(info) {
			const {
				context,
				points
			} = info
			if (points.length < 3) {
				return;
			}
			context.beginPath();
			context.moveTo(points[0].x, points[0].y);

			for (let i = 1; i < points.length; i++) {
				context.lineTo(points[i].x, points[i].y);
			}
			context.setStrokeStyle('black')
			context.stroke()
			context.closePath();
		},
		handleShapeRegion(info) {
			const position = info.p
			const positionList = position.points;
			const points = positionList.map((item) => {
				return {
					x: item.x - this.baseXPoint,
					y: item.y - this.baseYPoint
				}
			})

			this.drawPolygon({
				context: this.canvasContext,
				points
			})
		},


		handleStage(stageInfo) {

			const StagePayload = {
				context: this.canvasContext,
				x: stageInfo.p.location.x - this.baseXPoint,
				y: stageInfo.p.location.y - this.baseYPoint,
				width: stageInfo.p.width,
				height: stageInfo.p.height,
			}

			this.drawRectangle(StagePayload)
			const textInfo = {
				context: this.canvasContext,
				name: stageInfo.p.name,
				x: StagePayload.x + StagePayload.width / 2,
				y: StagePayload.y + StagePayload.height / 2
			}
			this.drawText(textInfo)
		},
		handleRegion(info) {
			const style = info.s
			const position = info.p
			if (style['vector.shape'] && style['vector.shape'] === 'rectangle') {
				this.drawRectangle({
					context: this.canvasContext,
					x: position.location.x - this.baseXPoint,
					y: position.location.y - this.baseYPoint,
					width: position.width,
					height: position.height,
				})
			}

			if (style['vector.shape'] && style['vector.shape'] === 'circle') {
				this.drawCircle({
					context: this.canvasContext,
					x: position.location.x - this.baseXPoint + position.width / 2,
					y: position.location.y - this.baseYPoint + position.height / 2,
					radius: position.height / 2
				})
			}


		},
		// 处理row提示
		handleRow(info) {
			const style = info.s
			const position = info.p
			const payload = {
				context: this.canvasContext,
				x: position.location.x - this.baseXPoint + (style['label.xoffset'] || 0),
				y: position.location.y - this.baseYPoint + (style['label.yoffset'] || 0),
				name: position.name
			}

			this.drawText(payload)
		},

		// 处理座位
		handleSeat(info) {
			const position = info.p;
			const circleInfo = {
				context: this.canvasContext,
				radius: position.height / 2,
				x: position.location.x - this.baseXPoint,
				y: position.location.y - this.baseYPoint,
			}
			this.drawCircle(circleInfo)
		},
		drawData(isDraw = true) {
			const seatList = seatInfo.datas;
			seatList.forEach((item) => {
				let type = 'seat'
				if (item.class.indexOf('StageNode') > -1) {
					type = 'stage'
				}
				if (item.class.indexOf('RegionNode') > -1 && item.class.indexOf('ShapeRegionNode')) {
					type = 'region'
				}
				if (item.class.indexOf('ShapeRegionNode') > -1) {
					type = 'shapeRegion'
				}
				if (item.class.indexOf('RowNode') > -1) {
					type = 'row'
				}
				if (item.class.indexOf('SeatNode') > -1) {
					type = 'seat'
				}
				if (type === 'stage') {
					this.handleStage(item)
				}

				if (type === 'region') {

					this.handleRegion(item)
				}


				if (type === 'shapeRegion') {
					this.handleShapeRegion(item)
				}

				if (type === 'row') {
					this.handleRow(item)
				}
				if (type === 'seat') {
					this.handleSeat(item)
				}
			})

			isDraw && this.canvasContext.draw();
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
		zoomIn() {
			console.log('双击放大')

		},
		onCanvasTouchStart(e) {
			const event = e
			console.log(e.touches, '==touches')
			if (e.touches.length >= 2) {
				// 计算两点之间的距离
				let xMove = event.touches[0].x - event.touches[1].y;
				let yMove = event.touches[0].x - event.touches[1].y;
				initialDistance = Math.sqrt(xMove * xMove + yMove * yMove);
				console.log('缩放 2指间', initialDistance)
				return;
			}
			// 获取触摸点坐标
			const x = e.touches[0].x;
			const y = e.touches[0].y;
			console.log(x, y, '==xy')
			let currentTime = e.timeStamp;
			let gapTime = currentTime - (this.lastTapTime ? this.lastTapTime : 0);
			// 判断是否为双击（两次点击间隔小于300ms）
			if (gapTime < 300 && Math.abs(this.lastTapPos.x - e.touches[0].x) < 10 && Math.abs(this.lastTapPos.y - e
				.touches[0].y) < 10) {
				console.log('double tap');


				// // 根据缩放比例计算真实坐标
				let offsetX = x / this.scaleRatio;
				let offsetY = y / this.scaleRatio;
				this.drawData(false)
				const cOffsetX = -offsetX + this.wrapperBox.width / 2;
				const cOffsetY = -offsetY + this.wrapperBox.height / 2;
				this.canvasStyle =
					` width: ${this.canvasInfo.width}px; height: ${this.canvasInfo.height}px; left: ${cOffsetX}px; top: ${cOffsetY}px;`
				this.canvasContext.draw()
				this.lastTapTime = null;
				this.lastTapPos = {
					x: null,
					y: null
				};
			} else {
				// console.log('chufa')
				this.lastTapTime = currentTime;
				this.lastTapPos = {
					x: e.touches[0].x,
					y: e.touches[0].y
				};
				// console.log(this.lastTapPos, '===lastTables')
			}

			// // 判断是否点击到座位
			// const clickedSeat = this.seatData.find(seat => {
			// 	const distance = Math.sqrt(Math.pow(x - seat.x, 2) + Math.pow(y - seat.y, 2));
			// 	return distance <= seat.radius;
			// });

			// // 更新选中的座位
			// this.selectedSeat = clickedSeat;
			// console.log(this.selectedSeat, '圆形点击')
			// this.drawSeatMap();


		},
		onCanvasTouchMove: _.throttle(function (event) {
			console.log('move')
			// if (event.touches.length >= 2) {
			// 	console.log('双指 缩放')
			// 	let xMove = event.touches[0].x - event.touches[1].x;
			// 	let yMove = event.touches[0].y - event.touches[1].y;

			// 	// 新的触摸点间距离
			// 	let distance = Math.sqrt(xMove * xMove + yMove * yMove);
			// 	console.log(distance, '==distance')
			// 	// 判断是放大还是缩小
			// 	let isShrink = distance < initialDistance;


			// 	// 计算新旧触摸点间距离差异, 得到缩放值
			// 	scale *= distance / initialDistance;
			// 	scale *= 0.5
			// 	scale = isShrink ? -scale : scale

			// 	// 确保scale值在  范围内 
			// 	// scale = Math.max(this.scaleRatio, Math.min(scale, 1));

			// 	console.log(scale, '===scale')
			// 	this.scaleRatio += scale;
			// 	scale = Math.max(this.scaleRationBase, Math.min(this.scaleRatio, 1));
			// 	this.scaleRatio = Math.abs(scale);
			// 	console.log(this.scaleRatio, '===this.scaleRatio')


			// 	// 处理缩放
			// 	this.drawData(false)
			// 	// const offsetX = this.wrapperBox.width / 2 * (this.scaleRatio - 1)
			// 	// const offsetY = this.wrapperBox.height / 2 * (this.scaleRatio - 1)
			// 	const offsetX = this.canvasInfo.width * this.scaleRatio / 2 + this.wrapperBox.width / 2
			// 	const offsetY = this.canvasInfo.height * this.scaleRatio / 2 + this.wrapperBox.height / 2
			// 	console.log(offsetX, offsetY, '==offest', this.scaleRatio)
			// 	// this.canvasContext.scale(this.scaleRatio, this.scaleRatio)
			// 	// this.canvasContext.scale(1, 1)

			// 	this.canvasContext.draw()
			// 	this.canvasStyle =
			// 		` width: ${this.canvasInfo.width}px; height: ${this.canvasInfo.height}px;`
			// 	// this.canvasStyle =
			// 	// 	` width: ${this.canvasInfo.width}px; height: ${this.canvasInfo.height}px; left: ${offsetX}px; top: ${offsetY}px;`
			// 	// 更新initialDistance为当前distance
			// 	initialDistance = distance;

			// }
		}, 100),
		onCanvasTouchEnd(event) {
			// 重置
			initialDistance = null;

		}


	}
}
</script>

<style lang="scss" scoped>
.content {
	width: 750rpx;
	height: 400rpx;
	overflow: scroll;
	position: relative;

	/* display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center; */
	.canvas-wrapper {
		position: absolute;
		left: 0;
		top: 0;
	}

}

.canvas-box {
	// position: absolute;
	// left: 0;
	// top: 0;
}

.box {
	width: 100px;
	height: 100px;
	background-color: red;
}

.area-wrap {
	width: 400rpx;
	height: 300rpx;
	border: 1px solid red;
	background-color: #f8f8f8;
	display: flex;
	align-items: center;
	justify-content: center;
	overflow: hidden;
}

.view-wrap {
	width: 100px;
	height: 100px;
	border: 1px solid blue;
	overflow: hidden;
	background: blue;
}

// movable-view {
// 	display: flex;
// 	align-items: center;
// 	justify-content: center;
// 	height: 150rpx;
// 	width: 150rpx;
// 	background-color: #007AFF;
// 	color: #fff;
// }

// movable-area {
// 	height: 300rpx;
// 	width: 100%;
// 	background-color: #D8D8D8;
// 	overflow: hidden;
// }

// .max {
// 	width: 500rpx;
// 	height: 500rpx;
// }
</style>
<style>
movable-view {
	display: flex;
	align-items: center;
	justify-content: center;
	height: 150rpx;
	width: 150rpx;
	background-color: #007AFF;
	color: #fff;
}

movable-area {
	height: 300rpx;
	width: 100%;
	background-color: #D8D8D8;
	overflow: hidden;
}

.max {
	width: 500rpx;
	height: 500rpx;
}
</style>