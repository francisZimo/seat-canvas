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
            ctx.setStrokeStyle('black'); // 设置边框颜色
            ctx.arc(x, y, radius, 0, 2 * Math.PI)
            ctx.closePath()
            ctx.setFillStyle('white');
            ctx.fill();
            ctx.stroke()
            
        }else{
            fillStyle&&(ctx.fillStyle = fillStyle)
            ctx.beginPath()
            ctx.setStrokeStyle('red'); // 设置边框颜色
            ctx.arc(x, y, radius, 0, 2 * Math.PI)
            ctx.closePath()
            ctx.setFillStyle('white');
            ctx.fill();
            ctx.fill();
        }
         // 恢复之前的填充颜色
    //   this.ctx.setFillStyle(currentFillStyle);
    
       
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