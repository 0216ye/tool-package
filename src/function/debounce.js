//返回处理防抖函数的工具函数
export function debounce (callback,time){
    return function (event){

        if (callback.hasOwnProperty("timeoutId")){
            clearTimeout(callback.timeoutId)
        }
        
        callback.timeoutId =  setTimeout(() => {
            //真正调用函数处理事件
            callback.call(this,event)
            //事件处理完成，清除标识
            delete callback.timeoutId
        },time)
    }
  }