
//自定义栈:后进先出,
function Stack (){
    const arr = []
    //进栈
    this.push = function (item){
        arr.push(item)
    }
    //出栈
    this.pop = function (){
        return arr.pop()
    }
    //查看栈数量
    this.size = function (){
        return arr.length
    }
    //查看栈顶
    this.peek = function (){
        return arr[arr.length -1]
    }
    //是否为空栈
    this.isEmpty = function (){
        return arr.length === 0
    }
}
export default Stack