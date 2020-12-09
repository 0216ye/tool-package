/**
 *  语法: var new_array = slice(array, [begin[, end]])
    功能: 返回一个由 begin 和 end 决定的原数组的浅拷贝, 原始数组不会被改变
 */
export function slice (array,begin,end){
    const arr = []
    //如果为空数组
    if (array.length === 0){
        console.log('空数组')
        return arr
    }

    //没有指定
    begin = begin || 0
    end = end || array.length

    //超出范围
    if ( begin < 0){
        begin = 0
    }
    if ( end > array.length){
        end = array.length
    }
    for (let index = begin; index < end; index++) {
        arr.push(array[index])
    }
    return arr 
}