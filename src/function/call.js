export function call (fn,obj , ...args){
    //当第一个参数没有传时，this为window
    if ( obj === null || obj === undefined ){
        obj = window
    }
    //this(...args)//this为原函数
    //向obj添加一个函数temp:this
    obj.temp = fn
    //调用obj身上的temp函数执行
    const result = obj.temp(...args)
    //将temp函数从obj上面删除
    delete obj.temp
    //将原函数的返回值返回
    return result
}