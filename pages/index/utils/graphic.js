import Event from './eventBus.js'
import selectImg from './select.png'

// 圆形
class Circle extends Event {
    constructor(opts, context) {
        super()
        this.ctx = context
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
      
 
        
            fillStyle&&(ctx.fillStyle = fillStyle)
            ctx.beginPath()  
            ctx.setStrokeStyle('black'); // 设置边框颜色
            ctx.arc(x, y, radius, 0, 2 * Math.PI)
            ctx.closePath()
            ctx.setFillStyle('white');
            ctx.fill();
            ctx.stroke()
            
      
            // fillStyle&&(ctx.fillStyle = fillStyle)
            // ctx.beginPath()
            // ctx.setStrokeStyle('red'); // 设置边框颜色
            // ctx.arc(x, y, radius, 0, 2 * Math.PI)
            // ctx.closePath()
            // ctx.setFillStyle('white');
            // ctx.fill();
            // ctx.stroke();


            // 绘制一个对号
            // ctx.beginPath();
            // ctx.setStrokeStyle('red'); // 设置边框颜色
            // ctx.moveTo(x - radius / 2, y);
            // ctx.lineTo(x, y + radius / 2);
            // ctx.lineTo(x + radius / 2, y - radius / 2);
            // ctx.stroke();
            // ctx.closePath();


            // 已经有了对号图片，添加上去
         

        
        if(this.isSelect){
            const img = selectImg
            ctx.drawImage(img, x - radius , y - radius, radius*2, radius*2)
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