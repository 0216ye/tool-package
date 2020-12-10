/**
 *  差集：得到当前数组元素中不与其他数组元素相同的元素(不改变原数组)
        如: difference([1,3,5,7,6], [5, 8],[5,6])  ==> [1, 3, 7]
 */
export function differences (array,...arrays){
    const arr = []

    if (array.length === 0){
        return arr
    }else if (arrays.length == 0){
        return [...array]
    }

    array.forEach(item => {
        let result = true //默认为true --> 添加
        //遍历二维数组arrays
        for (let index = 0; index < arrays.length; index++) {
            //如果在一维数组(arrays[index])中找到与item相同,则为false-->不添加
            if ( arrays[index].indexOf(item) !== -1){
                result = false 
                //找到相同了,不添加 -->后续不需要在查找
                break
            }
        }
        if ( result ){
            arr.push(item)
        }
    })

    return arr 
}