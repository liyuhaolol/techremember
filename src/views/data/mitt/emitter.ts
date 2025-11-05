import mitt from 'mitt'

//调用mitt得到emitter，emitter可以绑定事件
const emitter = mitt()

//绑定事件
emitter.on('test1', () => {
  console.log('test1被触发')
})

//触发事件
emitter.emit('test1')

//暴露emitter
export default emitter