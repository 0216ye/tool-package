/**
 * 将arr2与arr1的元素进行合并(如果arr1中存在该元素,则保留arr1的，抛弃其他的)组成一个新的数组(不改变原数组)
        如: mergeArray([1,3,5,7,5], [5, 8],[6]) ==> [1, 3, 5, 7, 5, 8,6]
 */
export function mergeArray (array,...arrays){
    const arr = [...array]

    //处理异常
    if (arrays.length === 0){
        return arr
    }

    //遍历二维
    arrays.forEach(itemArr =>{
        //遍历一维
        itemArr.forEach( item => {
            //找不到相同
            if (arr.indexOf(item) === -1){
                arr.push(item)
            }
        });
    })

    return arr 
}