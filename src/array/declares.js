export function map (callback){
    const arr = []
    //遍历本来的数组(array),调用回调,添加到新数组中
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        //传入item,index,返回一个值
        let result =  callback(element,index)
        arr.push(result)
    }
    //最终返回一个新数组
    return arr 
}

export function reduce ( array,callback,initValue){
    //赋初始化给回调的第一个参数
    let total = initValue
    //遍历本来的数组(array),调用回调,
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        //传total,item,index,返回一个值
        let result =  callback(total,element,index)
        //赋值给回调的第一个参数，达到累计效果
        total = result
    }
    //最终返回一个值
    return total 
}

export function filter ( array,callback){
    const arr = []
    //遍历本来的数组(array),调用回调
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        //传入item,index,返回一个布尔值，true则添加
        callback(element,index) ? arr.push(element) : null
    }
    //最终返回一个新数组
    return arr 
}


export function find ( array,callback){
    
    //遍历本来的数组(array),调用回调
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        //传入item,index,
        let result =  callback(element,index)
        // 回调返回值为true，则将该元素返回
        if ( result ){
            return element
        }
    }
    return undefined
}

export function findIndex ( array,callback){
    
    //遍历本来的数组(array),调用回调
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        //传入item,index,
        let result =  callback(element,index)
        // 回调返回值为true，则将该下标返回
        if ( result ) return index
    }
    return -1
}

export function every ( array,callback){
    
    //遍历本来的数组(array),调用回调
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        //传入item,index,
        let result =  callback(element,index)
        // 只要有假，直接返回false
        if ( !result ) return false
    }
    //全部为真,才返回true
    return true
}


export function some ( array,callback){
    
    //遍历本来的数组(array),调用回调
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        //传入item,index,
        let result =  callback(element,index)
        // 回调返回true,
        if ( result ) return true
    }
    return false
}