// 绘制矩形
const drawRectangle=(payload)=> {
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
}

// 处理舞台
const handleStage=(stageInfo,drawInfo) =>{
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
}


const handleRegion=(info)=> {
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
}

const handleShapeRegion=(info)=> {
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
}

// 处理row提示
const handleRow=(info)=> {
    const style = info.s
    const position = info.p
    const payload = {
        context: this.canvasContext,
        x: position.location.x - this.baseXPoint + (style['label.xoffset'] || 0),
        y: position.location.y - this.baseYPoint + (style['label.yoffset'] || 0),
        name: position.name
    }
    this.drawText(payload)
}
// 处理座位
const handleSeat=(info) =>{
    const position = info.p;
    const circleInfo = {
        context: this.canvasContext,
        radius: position.height / 2,
        x: position.location.x - this.baseXPoint,
        y: position.location.y - this.baseYPoint,
    }
    this.drawCircle(circleInfo)
}


