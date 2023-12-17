import Event from './eventBus.js'
import {Circle} from './graphic.js'

const eventList = [
  'touchstart',
  'touchmove',
  'touchend',
]


class Canvas extends Event {
  defaultOpts = {}
  constructor(option) {
    super()
    const {ctx}=option
    this.ctx=ctx
    this.children = []
    this.initEvent()
  }



  initEvent() {
    // eventList.forEach(eventName => {
    //   this.canvas.addEventListener(eventName, this.handleEvent)
    // })
  }

  reset(){
    this.children=[]
  }



  handleEvent = (event,canvasInfo) => {    
    this.children
    .filter(shape => {
        let x= event.touches[0]?.x||event?.changedTouches[0]?.x
        let y= event.touches[0]?.y||event?.changedTouches[0]?.y
        x=(x-canvasInfo.curOffset.x)/canvasInfo.scale
        y=(y-canvasInfo.curOffset.y)/canvasInfo.scale
        const isEventInRegion = shape.isEventInRegion(x,y,canvasInfo.scale)
        return isEventInRegion
    })
    .forEach(shape => {
        console.log(shape,'==shape')
        shape.isSelect=!shape.isSelect
        shape.touchPosition={
            x:event.touches[0]?.x||event?.changedTouches[0]?.x,
            y:event.touches[0]?.y||event?.changedTouches[0]?.y
        }
        shape.emit(event.type, shape)
    })
  }
//   handleEvent = (event) => {
//     this.children
//     .filter(shape => shape.isEventInRegion(event.x, event.y))
//     .forEach(shape => shape.emit(event.type, event))
//   }

  addChild(shape) {
    this.children.push(shape)
  }

  draw() {
    this.children.forEach(shape => shape.draw())
  }
  
    circle(config) {
        const circle = new Circle(config, this.ctx)
        circle.draw()
        this.addChild(circle)
        return circle
    }
}

export default Canvas
