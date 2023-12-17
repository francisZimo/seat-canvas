import Event from './eventBus.js'

// 圆形
class Circle extends Event {
    constructor(opts, ctx) {
        super()
        this.ctx = ctx
        this.config = opts,
        this.isSelect=false
        this.type='circle'
    }
    draw() {
        const ctx = this.ctx
        const {
            x,
            y,
            radius,
            fillStyle,
            info
        } = this.config
        this.isSelect=!!info.isSelect
            
        if(!this.isSelect){
            fillStyle&&(ctx.fillStyle = fillStyle)
            ctx.beginPath()
            ctx.arc(x, y, radius, 0, 2 * Math.PI)
            ctx.setStrokeStyle('black'); // 设置边框颜色
            ctx.setLineWidth(2); // 设置边框宽度
            ctx.stroke()
            ctx.closePath()
        }else{
            fillStyle&&(ctx.fillStyle = fillStyle)
            ctx.beginPath()
            ctx.arc(x, y, radius, 0, 2 * Math.PI)
            ctx.setStrokeStyle('red'); // 设置边框颜色
            ctx.setLineWidth(2); // 设置边框宽度
            ctx.stroke()
            ctx.closePath()
        }
       
    }

   
    isEventInRegion(clientX, clientY,scale) {
        const point={x:clientX,y:clientY}
        const {
            x,
            y,
            radius
        } = this.config
        const distance = Math.sqrt(Math.pow(point.x - x, 2) + Math.pow(point.y - y, 2))
        if (distance <= radius*scale) {
            return true
        }
        return false
    }

}





export {
    Circle
}