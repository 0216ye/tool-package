/**自定义队列 : 先进先出
 * 出队列:dequeue()
 * 查看队列头:front()
 * 查看队列元素个数:size()
 * 判断队列是否为空:isEmpty()
 * */
function Queue (){
    const arr = []
    //入队列:enqueue()
    this.enqueue = function (item){
        arr.push(item)
    }
    //出队列:dequeue()
    this.dequeue = function (){
        return arr.shift()
    }
    // 查看队列头:front()
    this.front = function (item){
        return arr[0]
    }
    //查看队列元素个数:size()
    this.size = function (item){
        return arr.length
    }
    // 判断队列是否为空:isEmpty()
    this.isEmpty = function (item){
        return arr.length === 0 
    }
}
export default Queue