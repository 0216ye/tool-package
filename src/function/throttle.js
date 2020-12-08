//返回一个出来节流的工具函数
export function throttle (callback,time){
    let pre = 0 //上一次调用时的时间 , 0 -->保证第一次一定调用
    return function (event){//真正调用的函数 this为触发事件的标签
        const current = Date.now()
        if ( current - pre > time){//间隔 > 指定时间，才调用真正函数执行
            callback.call(this,event)
            // callback(event)
            //调用后，将上次调用的时间重置为当前时间
            pre = current
        }
    }
}