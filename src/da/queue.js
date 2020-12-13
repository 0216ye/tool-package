/**自定义队列 : 先进先出
 * 入队列:enqueue()
 * 出队列:dequeue()
 * 查看队列头:front()
 * 查看队列元素个数:size()
 * 判断队列是否为空:isEmpty()
 * */
function Queue (){
    const arr = []

    this.enqueue = function (item){
        arr.push(item)
    }
    this.dequeue = function (){
        return arr.shift()
    }
    this.front = function (item){
        return arr[0]
    }
    this.size = function (item){
        return arr.length
    }
    this.isEmpty = function (item){
        return arr.length === 0 
    }

    
}
export default Queue