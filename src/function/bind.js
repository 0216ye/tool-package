import {call} from './call'
export function bind (fn,obj,...args){
    return  (...args2) =>{
        //返回一个函数，并且调用该函数执行时，旧函数自动触发调用，参数列表为args+args2
        call(fn,obj,...args,...args2)
    }
}