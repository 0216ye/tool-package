/**
 * 优先级队列,数值越小，优先级越高,优先级大的在队列的前面
 */
function PriorityQueue (){
    const arr = []
    this.enqueue = function (data,priority){
        const element = {data,priority}
        //如果数组为空，直接添加
        if ( arr.length === 0 ){
            arr.push(element)
        }else {
            //根据当前优先级(priority)与数组中的优先级比较，当前优先级大于数组元素当前的优先级，则在左边-->数值小优先级大!!
            for (let index = 0; index < arr.length; index++) {
                if ( priority < arr[index].priority ){
                    arr.splice(index,0,element)
                    return
                }
            }
            //循环结束,该元素数值最大，优先级最低,直接添加到队列尾
            arr.push(element)
        }
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
export default PriorityQueue