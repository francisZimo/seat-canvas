import Event from './eventBus.js'
// import selectImg from './select.png'

// 圆形
class Circle extends Event {
    constructor(opts) {
        super()
        this.ctx = opts.context
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
        const angle=info.angle
    
        fillStyle&&(ctx.fillStyle = fillStyle)
        ctx.beginPath()  
        

        let curColor=angle&&angle.picture?'#CF3B34':'#C8C8C8'
        ctx.setStrokeStyle(curColor); // 设置边框颜色
        ctx.arc(x, y, radius, 0, 2 * Math.PI)
        ctx.closePath()
        ctx.setFillStyle(curColor);
        ctx.fill();
        ctx.stroke()


    
        if(this.isSelect){
            // const img = selectImg
            ctx.drawImage('/static/select.png', x - radius , y - radius, radius*2, radius*2)
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