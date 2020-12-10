/**
 * 
   1. pull(array, ...values): 
        删除原数组中与value相同的元素, 返回所有删除元素的数组
        说明: 原数组发生了改变
        如: pull([1,3,5,3,7], 2, 7, 3, 7) ===> 原数组变为[1, 5], 返回值为[3,3,7]
    2. pullAll(array, values): 
        功能与pull一致, 只是参数变为数组
        如: pullAll([1,3,5,3,7], [2, 7, 3, 7]) ===> 数组1变为[1, 5], 返回值为[3,3,7] 
 */
export function pull (array,...values){
    const arr = []

    if (values.length === 0){
        return arr
    }
    for (let index = 0; index < array.length; index++) {
        const item = array[index];
        //找到同value值一样的item
        if ( values.indexOf(item) !== -1){
            //删除item
            array.splice(index,1)
            //将删除的item添加到数组中
            arr.push(item)

            index-- //因为array删除了一个元素,如果下标不-1，每次循环会跳过一个item
        }
    }

    return arr

}
export function pullAll (array,value){
    return pull(array,...value)
}