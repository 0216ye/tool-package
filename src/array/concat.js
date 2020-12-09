//语法: var new_array = concat(array, value1[, value2[, ...[, valueN]]]) 
// 功能: 将n个数组或值与当前数组合并生成一个新数组, 原始数组不会被改变 
export function concat (array,...value){
    const arr = [...array]
    value.forEach( item =>{
        //如果item为数组，则解开后在push，只解开一维数组
        if (Array.isArray(item)){
            arr.push(...item)
        }else{
            arr.push(item)
        }
    })
    return arr 
}