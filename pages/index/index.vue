<template>
	<view>
		<view class="content">
			<!-- <cover-view :style="thumbnailStyle" class="thumbnail-box">
				<cover-image :src="thumbnailImg" class="thumbnail-img" ></cover-image>
				<cover-view :style="visibleAreaStyle" class="visible-area"></cover-view>
			</cover-view> -->
			<view :style="thumbnailStyle" class="thumbnail-box">
				<img :src="thumbnailImg" class="thumbnail-img" />
				<view :style="visibleAreaStyle" class="visible-area"></view>
			</view>
			<view :style="canvasStyle" class="canvas-wrapper">
				<canvas class="canvas-box" :style="canvasStyle" id="myCanvas" canvas-id="myCanvas"
					@touchstart="onCanvasTouchStart" @touchmove="onCanvasTouchMove" @touchend="onCanvasTouchEnd"></canvas>
				<cover-view v-if="isShowSeatImg" class="seat-view" :style="seatPosition">
					<cover-view class="seat-anchor"></cover-view>
					<cover-image class="seat-img" :src="imgUrl" alt=""></cover-image>
					<cover-view class="blank-space"></cover-view>
				</cover-view>
			</view>
		</view>
		<canvas class="temp-canvas-box" canvas-id="tempCanvas"></canvas>

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
			// 系统信息
			wrapperBox: {
				width: 750,
				height: 400
			},
			scaleBase: 1,
			baseXPoint: 0,
			baseYPoint: 0,
			canvasClass: null,
			maxScale: 8,
			minScale: 0.4,
			scaleStep: 0.2,
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
			canvasStyle: 'width: 400px; height: 400px; border: 1px solid blue;',
			tempStyle: 'width: 500px; height: 500px; border: 1px solid blue;',
			imgUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F35a87c2e-fd4b-4d46-92d8-58886d5caeea%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1705415354&t=743620e4a460804f9783ad939be4912d',
			seatPosition: '',
			isShowSeatImg: false,
			curSelectSeat: null,
			thumbnailImg: '',
			thumbnailInfo: {
				width: 200,
				height: 200
			},
			thumbnailStyle: '',
			isShowCanvas: false,
			visibleAreaStyle: '',
			canvasInitInfo: {
				width: 400,
				height: 400
			},
			thumbnailScale: 1,
			seatBoxHeight: 115,
			hasOffScreenCanvasData: false,
			isTouchMoving: false,
			canvasType: '' // 当前canvas类型 cache(缓存资源:伪离屏canvas) || target(目标)

		}
	},
	onLoad() {

	},
	onReady() {

	},

	mounted() {
		const systemInfo = uni.getSystemInfoSync();
		this.wrapperBox.width = systemInfo.windowWidth;

		this.init()


	},
	methods: {
		exportThumbnail() {

			console.log(this.canvasInfo, '===this.canvasInitInfo')
			// const style = `width: ${this.canvasInfo.width}px; height: ${this.canvasInfo.height}px;`
			// console.log(style, '==style')
			// this.tempStyle = style;
			const tempCtx = uni.createCanvasContext('tempCanvas', this);
			this.canvasContext = tempCtx;
			tempCtx.setLineWidth(4)
			this.canvasType = 'cache'
			this.userDraw()
			// 导出为临时文件路径
			// destWidth: this.canvasInfo.width,
			// 	destHeight: this.canvasInfo.height,
			uni.canvasToTempFilePath({
				canvasId: 'tempCanvas',
				success: (res) => {
					console.log('输出res了')
					uni.getFileSystemManager().readFile({
						filePath: res.tempFilePath,
						encoding: 'base64',
						success: (data) => {
							console.log('出现base64了')
							const base64Data = 'data:image/png;base64,' + data.data;
							this.thumbnailImg = base64Data;
							console.log(this.thumbnailImg, '==base64')
							this.visibleAreaStyle = `width: ${this.thumbnailInfo.width - 3}px; height: ${this.thumbnailInfo.height - 3}px;`;
							this.startTargeCanvas()
						},

					});

				},

			}, this);


		},

		initData() {
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
			// if (width > height) {
			// 	scale = this.wrapperBox.width / width
			// } else {
			// 	scale = this.wrapperBox.height / height
			// }
			scale = this.wrapperBox.width / width
			this.scaleBase = scale;
			this.scale = scale;
			this.preScale = scale;
			this.minScale = scale;
			this.maxScale = 2;
			this.widthRatio = 1.5;
			this.heightRatio = 1.5;



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
		async sleep(time = 1000) {
			return new Promise((resolve) => {
				setTimeout(() => {
					resolve()
				}, time)
			})
		},
		async init() {
			this.initData()
			this.tempStyle = `width: ${this.canvasInfo.width}px; height: ${this.canvasInfo.height}px;`

			try {
				// this.exportThumbnail()
				// await this.sleep(3000)
				this.startTargeCanvas()
				console.log('==结束')

			} catch (e) {
				console.log(e, '===错误')
			}
			// await this.exportThumbnail()
			// await this.sleep(3000)

			// let width = this.canvasInfo.width * this.scale
			// let height = this.canvasInfo.height * this.scale
			// console.log('==开始正式渲染', width, height)
			// this.canvasInitInfo = {
			// 	width,
			// 	height
			// }
			// const thumbnailScale = this.canvasInitInfo.width / this.thumbnailInfo.width;
			// this.thumbnailScale = thumbnailScale
			// this.thumbnailInfo = {
			// 	width: this.thumbnailInfo.width,
			// 	height: this.canvasInitInfo.height / thumbnailScale
			// }
			// this.thumbnailStyle = `width: ${this.thumbnailInfo.width}px; height: ${this.thumbnailInfo.height}px; border: 1px solid blue;`
			// let style = `width: ${width}px; height: ${height}px; border:1px solid blue;`
			// this.canvasStyle = style;
			// const ctx = uni.createCanvasContext('myCanvas', this);
			// this.canvasContext = ctx;
			// this.canvasType = 'target'
			// const canvasBase = new CanvasBase({
			// 	ctx
			// })
			// this.canvasClass = canvasBase;
			// this.draw()
			// this.isShowCanvas = true;
			// setTimeout(() => {
			// 	this.exportThumbnail()
			// }, 500)


			// setTimeout(() => {
			// 	style = `width: ${this.wrapperBox.width}px; height: ${this.wrapperBox.height}px;`
			// 	this.wrapperStyleBase = this.canvasWrapperStyle = style;
			// 	this.canvasStyle = style;
			// 	this.isShowCanvas = true;
			// }, 500)
			// this.exportThumbnail()
			// style = `width: ${this.wrapperBox.width}px; height: ${this.wrapperBox.height}px;`
			// this.wrapperStyleBase = this.canvasWrapperStyle = style;
			// this.canvasStyle = style;

		},

		startTargeCanvas() {
			let width = this.canvasInfo.width * this.scale
			let height = this.canvasInfo.height * this.scale
			console.log('==开始正式渲染', width, height)
			this.canvasInitInfo = {
				width,
				height
			}
			const thumbnailScale = this.canvasInitInfo.width / this.thumbnailInfo.width;
			this.thumbnailScale = thumbnailScale
			this.thumbnailInfo = {
				width: this.thumbnailInfo.width,
				height: this.canvasInitInfo.height / thumbnailScale
			}
			this.thumbnailStyle = `width: ${this.thumbnailInfo.width}px; height: ${this.thumbnailInfo.height}px; border: 1px solid blue;`
			let style = `width: ${width}px; height: ${height}px; border:1px solid blue;`
			this.canvasStyle = style;
			const ctx = uni.createCanvasContext('myCanvas', this);
			this.canvasContext = ctx;
			this.canvasType = 'target'
			const canvasBase = new CanvasBase({
				ctx
			})
			this.canvasClass = canvasBase;
			this.draw()
			this.isShowCanvas = true;
		},

		draw() {
			this.canvasClass.reset()
			this.clearCanvas();
			this.canvasContext.translate(this.offset.x, this.offset.y);
			this.canvasContext.scale(this.scale, this.scale);
			this.canvasContext.setLineWidth(4); // 设置边框宽度
			if (this.isTouchMoving) {
				if (this.thumbnailImg) {
					console.log('绘制图片')
					this.canvasContext.drawImage(this.thumbnailImg, 0, 0, this.canvasInfo.width, this.canvasInfo.height);
					this.canvasContext.draw()
				}
			} else {
				console.log('重新绘制')
				this.userDraw();
			}



			// 弹窗定位
			if (this.curSelectSeat) {
				const config = this.curSelectSeat
				const left = config.x * this.scale + this.offset.x + 'px'
				const top = config.y * this.scale + this.offset.y - config.radius * this.scale - this.seatBoxHeight + 'px'
				this.seatPosition = `left: ${left}; top: ${top};`
			}

			// 缩略图展示
			const { width, height } = this.thumbnailInfo;
			const diffScale = this.scale / this.scaleBase
			const changeWidth = width / diffScale;
			const changeHeight = height / diffScale;
			const changeStyle = `width: ${changeWidth - 2}px; height:${changeHeight - 2}px; `
			this.visibleAreaStyle = `${changeStyle} left:${-this.offset.x / this.thumbnailScale / diffScale}px; top:${-this.offset.y / this.thumbnailScale / diffScale}px;`
		},

		// 放大
		zoomIn() {
			this.scale += this.scaleStep;
			if (this.scale > this.maxScale) {
				this.scale = this.maxScale;
				return;
			}
			this.zoom.call(this);
		},

		// 缩小
		zoomOut() {
			this.scale -= this.scaleStep;
			if (this.scale < this.minScale) {
				this.scale = this.minScale;
				return;
			}
			this.zoom.call(this);
		},

		zoom() {
			// 是否居中放大
			this.mousePos.x = this.canvasInitInfo.width / 2;
			this.mousePos.y = this.canvasInitInfo.height / 2;
			// 放大系数：this.scale / this.preScale =>n
			// 先偏移后缩放：offsetX = x*n-x;  偏移为：-offsetX
			this.offset.x = this.mousePos.x - ((this.mousePos.x - this.offset.x) * this.scale) / this.preScale;
			this.offset.y = this.mousePos.y - ((this.mousePos.y - this.offset.y) * this.scale) / this.preScale;
			this.draw();
			this.preScale = this.scale;
			this.curOffset.x = this.offset.x;
			this.curOffset.y = this.offset.y;
		},
		clearCanvas() {

			this.canvasContext.clearRect(0, 0, this.canvasInitInfo.width, this.canvasInitInfo.height);

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
				context: this.canvasContext,
				radius: position.height / 2,
				x: position.location.x - this.baseXPoint,
				y: position.location.y - this.baseYPoint,
				info
			}
			if (this.canvasType === 'target') {
				const circleInstance = this.canvasClass.circle(circleInfo)
				circleInstance.on('touchend', (shapeInfo) => {

					const originData = shapeInfo.config.info
					if (originData.c) {
						for (let i = 0; i < seatInfoList.length; i++) {
							const item = seatInfoList[i]
							if (JSON.stringify(originData.c) === JSON.stringify(item.c)) {
								seatInfoList[i].isSelect = !seatInfoList[i].isSelect;
								if (seatInfoList[i].isSelect) {
									const { config } = shapeInfo
									this.curSelectSeat = config
									const left = config.x * this.scale + this.offset.x + 'px'
									const top = config.y * this.scale + this.offset.y - config.radius * this.scale - this.seatBoxHeight + 'px'
									this.seatPosition = `left: ${left}; top: ${top};`
									this.isShowSeatImg = true;

								} else {
									this.isShowSeatImg = false;
								}

							} else {
								seatInfoList[i].isSelect = false
							}
						}
					}
					this.draw()

				})
			} else {
				// 绘制圆形
				this.drawCircle(circleInfo)

			}

		},

		userDraw(isDraw = true) {
			console.log('==用户绘制')
			seatInfoList.forEach((item) => {
				console.log('==遍历中')
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
			console.log('绘制结束')
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
			context.setStrokeStyle('black'); // 设置边框颜色
			context.rect(x, y, width, height);
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
			context.beginPath()
			context.setTextAlign('center');
			context.setTextBaseline('middle');
			context.setFillStyle('black');
			context.fillText(name, x, y);
			context.closePath()

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
			context.setStrokeStyle('black')
			context.arc(x, y, radius, 0, 2 * Math.PI);
			context.closePath();
			context.setFillStyle('white');
			context.fill();
			context.stroke()

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
			context.closePath();
			context.stroke()

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
			this.isTouchMoving = false
			if (e.touches.length >= 2) {
				// 计算两点之间的距离
				let xMove = e.touches[0].x - e.touches[1].x;
				let yMove = e.touches[0].y - e.touches[1].y;
				initialDistance = Math.sqrt(xMove * xMove + yMove * yMove);
			}
			this.startX = e.touches[0].x
			this.startY = e.touches[0].y



		},
		onCanvasTouchMove: throttle(function (e) {
			this.isTouchMoving = true
			if (e.touches.length >= 2) {
				let xMove = e.touches[0].x - e.touches[1].x;
				let yMove = e.touches[0].y - e.touches[1].y;

				// 新的触摸点间距离
				let distance = Math.sqrt(xMove * xMove + yMove * yMove);

				// 计算新旧触摸点间距离差异, 得到缩放值
				const scale = distance / initialDistance;
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
			this.isTouchMoving = false
			this.curOffset.x = this.offset.x;
			this.curOffset.y = this.offset.y;
			this.draw()
			this.canvasClass.handleEvent(e, { curOffset: this.curOffset, scale: this.scale })

		}


	}
}
</script>

<style lang="scss" scoped>
.content {
	width: 750rpx;
	height: 600px;
	// overflow: scroll;
	// position: absolute;
	// left: 0;
	// top: 0;
	overflow: hidden;
	border: 1px solid red;
	display: flex;
	align-items: center;
	background-color: #f8f8f8;


	.thumbnail-box {
		width: 200px;
		height: 200px;
		background-color: rgba(0, 0, 0, 0.7);
		position: absolute;
		top: 0;
		right: 3px;
		z-index: 999;
		overflow: hidden;

		.thumbnail-img {
			width: 100%;
			height: 100%;
		}

		.visible-area {
			position: absolute;
			top: 0;
			left: 0;
			z-index: 100;
			border: 2px solid red;
		}
	}

	.canvas-wrapper {
		position: relative;
	}

	.seat-view {
		position: absolute;
		width: 100px;
		top: 0;
		left: 0;
		z-index: 200;
		transform: translateX(-50%);


		.seat-img {
			width: 100px;
			height: 100px;
			border-radius: 2px;
		}

		.blank-space {
			width: 100%;
			height: 10px;
		}

		// 三角形
		.seat-anchor {
			position: absolute;
			left: 50%;
			transform: translateX(-50%);
			bottom: 0;
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
	width: 750rpx;
	height: 800px;
	border: 1px solid red;

}

.temp-canvas-box {
	width: 500px;
	height: 500px;
	border: 1px solid blue;
}

.btn {
	width: 50px;
	height: 30px;
	border: 1px solid red;
	margin-bottom: 10px;
}
</style>