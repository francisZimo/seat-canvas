<template>
	<view class="content">
		<view v-if="isShowSeatImg" class="seat-view" :style="seatPosition">
			<img class="seat-img" :src="imgUrl" alt="">
		</view>
		<canvas class="canvas-box" :style="canvasStyle" canvas-id="myCanvas" @touchstart="onCanvasTouchStart"
			@touchmove="onCanvasTouchMove" ref="myCanvas" id="myCanvas" @touchend="onCanvasTouchEnd"></canvas>
		<view class="btn" @click="zoomIn">放大</view>
		<view class="btn" @click="zoomOut">缩小</view>
		<view class="btn" @click="reset">还原</view>
	</view>
</template>

<script>
import {
	seatInfo
} from './seatData.js'
import {
	throttle
} from 'lodash'
import CanvasBase from './utils/canvas.js'

let initialDistance = 0;
let seatInfoList = seatInfo.datas;
export default {
	data() {
		return {
			wrapperBox: {
				width: 400,
				height: 400
			},
			scaleBase: 1,
			baseXPoint: 0,
			baseYPoint: 0,
			canvasClass: null,
			width: 300,
			height: 300,
			cssWidth: 300,
			cssHeight: 300,
			maxScale: 8,
			minScale: 0.4,
			scaleStep: 0.1,
			ctx: null,
			scale: 1,
			preScale: 1,
			offset: {
				x: 0,
				y: 0
			},
			curOffset: {
				x: 0,
				y: 0
			},
			mousePos: {
				x: 0,
				y: 0
			},

			widthRatio: 1,
			heightRatio: 1,
			startX: 0,
			startY: 0,
			canvasStyle: 'width: 300px; height: 300px; border: 1px solid blue;',
			imgUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F35a87c2e-fd4b-4d46-92d8-58886d5caeea%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1705415354&t=743620e4a460804f9783ad939be4912d',
			seatPosition: '',
			isShowSeatImg: false,
		}
	},
	onLoad() {

	},
	onReady() {
		// this.init()

	},

	mounted() {

		this.initPage()
		this.init()

	},
	methods: {

		initPage() {
			const rectCanvas = this.calculateBoundingRectangle()
			this.canvasInfo = rectCanvas;
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
			this.scaleBase = scale;
			this.scale = scale;
			this.preScale = scale;
			this.minScale = scale;
			this.maxScale = 2;
			this.widthRatio = 1.5;
			this.heightRatio = 1.5;
			const style = `width: ${this.wrapperBox.width}px; height: ${this.wrapperBox.height}px; border:1px solid blue;`
			this.canvasStyle = style;
			this.wrapperStyleBase = this.canvasWrapperStyle = style;
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
		myClick() {
			console.log('myClick')
		},
		init() {
			const ctx = uni.createCanvasContext('myCanvas', this);
			this.ctx = ctx;
			this.canvasContext = ctx;
			const canvasBase = new CanvasBase({
				ctx
			})
			this.canvasClass = canvasBase;
			this.draw()
		},
		draw() {
			this.canvasClass.reset()
			this.clearCanvas();
			this.ctx.translate(this.offset.x, this.offset.y);
			this.ctx.scale(this.scale, this.scale);
			this.userDraw();
		},

		// 放大
		zoomIn() {
			console.log('==放大')
			this.scale += this.scaleStep;
			if (this.scale > this.maxScale) {
				this.scale = this.maxScale;
				return;
			}
			this.zoom.call(this);
		},

		// 缩小
		zoomOut() {
			console.log('==缩小')
			this.scale -= this.scaleStep;
			if (this.scale < this.minScale) {
				this.scale = this.minScale;
				return;
			}
			this.zoom.call(this);
		},

		/**
		 * 缩放操作
		 * isMouse 是否鼠标为中心缩放，true:鼠标中心缩放 false:画布中间缩放
		 */
		zoom() {
			// 是否居中放大
			this.mousePos.x = this.width / 2;
			this.mousePos.y = this.height / 2;
			console.log('先', this.offset)
			this.offset.x = this.mousePos.x - ((this.mousePos.x - this.offset.x) * this.scale) / this.preScale;
			this.offset.y = this.mousePos.y - ((this.mousePos.y - this.offset.y) * this.scale) / this.preScale;
			this.draw();
			this.preScale = this.scale;
			this.curOffset.x = this.offset.x;
			this.curOffset.y = this.offset.y;
		},
		clearCanvas() {
			this.ctx.clearRect(0, 0, this.width, this.height);
		},
		// 还原
		reset() {
			this.clear();
			this.draw();
		},
		// 清除地图并还原对象所有设置
		clear() {
			this.clearCanvas();
			this.scale = this.scaleBase; // 当前缩放
			this.preScale = this.scaleBase; // 当前缩放
			this.offset = { x: 0, y: 0 }; // 拖动偏移
			this.curOffset = { x: 0, y: 0 }; // 当前偏移
			this.mousePos = { x: 0, y: 0 }; //
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
		// 处理座位
		handleSeat(info) {
			const position = info.p;
			const circleInfo = {
				ctx: this.canvasContext,
				radius: position.height / 2,
				x: position.location.x - this.baseXPoint,
				y: position.location.y - this.baseYPoint,
				info
			}
			const circleInstance = this.canvasClass.circle(circleInfo)
			circleInstance.on('touchend', (shapeInfo) => {
				console.log('==shapeInfo', shapeInfo)
				const originData = shapeInfo.config.info
				if (originData.c) {
					for (let i = 0; i < seatInfoList.length; i++) {
						const item = seatInfoList[i]
						if (JSON.stringify(originData.c) === JSON.stringify(item.c)) {
							seatInfoList[i].isSelect = !seatInfoList[i].isSelect;
							if (seatInfoList[i].isSelect) {

								const { config } = shapeInfo

								// this.seatPosition = {
								// 	left: (config.x - this.curOffset.x) / this.scale + 'px',
								// 	bottom: (config.y - this.curOffset.y) / this.scale - 100 + 'px'
								// }
								// const left = (config.x + this.curOffset.x) / this.scale + 'px'
								// const bottom = (config.y + this.curOffset.y) / this.scale - 100 + 'px'
								// (x-canvasInfo.curOffset.x)/canvasInfo.scale
								const left = config.x * this.scale + this.curOffset.x + 'px'
								const top = config.y * this.scale + this.curOffset.y - config.radius * this.scale - 115 + 'px'
								console.log(left, top, '==left, bottom')
								this.seatPosition = `left: ${left}; top: ${top};`
								this.isShowSeatImg = true;

							} else {
								this.isShowSeatImg = false;
							}
							break;
						}
					}
				}
				this.draw()

			})
		},

		userDraw(isDraw = true) {
			seatInfoList.forEach((item) => {
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
					console.log('==region')
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

			isDraw && this.ctx.draw();

			// this.ctx.draw()
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


		onCanvasTouchStart(e) {
			console.log('touchStart', e.touches[0].x, e.touches[0].y)
			if (e.touches.length >= 2) {
				// 计算两点之间的距离
				let xMove = e.touches[0].x - e.touches[1].x;
				let yMove = e.touches[0].y - e.touches[1].y;
				initialDistance = Math.sqrt(xMove * xMove + yMove * yMove);
				console.log('缩放 2指间')
			}
			this.startX = e.touches[0].x
			this.startY = e.touches[0].y


		},
		onCanvasTouchMove: throttle(function (e) {
			console.log('onCanvasTouchMove')
			if (e.touches.length >= 2) {
				let xMove = e.touches[0].x - e.touches[1].x;
				let yMove = e.touches[0].y - e.touches[1].y;

				// 新的触摸点间距离
				let distance = Math.sqrt(xMove * xMove + yMove * yMove);

				// 计算新旧触摸点间距离差异, 得到缩放值
				const scale = distance / initialDistance;
				console.log(scale, '==scale')
				if (scale >= 1) {
					this.zoomIn()
				} else {
					this.zoomOut()
				}

				initialDistance = distance;

			} else {

				this.offset.x = this.curOffset.x + (e.touches[0].x - this.startX) * this.widthRatio;
				this.offset.y = this.curOffset.y + (e.touches[0].y - this.startY) * this.heightRatio;
				this.draw();
			}

		}, 200),
		onCanvasTouchEnd(e) {
			console.log('onCanvasTouchEnd', e, e.type)
			this.curOffset.x = this.offset.x;
			this.curOffset.y = this.offset.y;
			this.canvasClass.handleEvent(e, { curOffset: this.curOffset, scale: this.scale })

		}


	}
}
</script>

<style lang="scss" scoped>
.content {
	width: 750rpx;
	height: 500px;
	// overflow: scroll;
	position: relative;
	overflow: hidden;

	.seat-view {
		position: absolute;
		width: 100px;
		height: 100px;
		border: 1px solid red;
		top: 0;
		left: 0;
		z-index: 999;
		transform: translateX(-50%);

		.seat-img {
			width: 100%;
			height: 100%;
			border-radius: 2px;
		}

		// 三角
		&::after {
			content: '';
			position: absolute;
			left: 50%;
			transform: translateX(-50%);
			bottom: -10px;
			width: 0;
			height: 0;
			border-top: 10px solid red;
			border-left: 10px solid transparent;
			border-right: 10px solid transparent;
			border-bottom: 0 solid transparent;
		}
	}
}

.canvas-box {
	// position: absolute;
	// left: 0;
	// top: 0;
	width: 750rpx;
	height: 400px;
	border: 1px solid red;
}

.btn {
	width: 50px;
	height: 30px;
	border: 1px solid red;
	margin-bottom: 10px;
}
</style>