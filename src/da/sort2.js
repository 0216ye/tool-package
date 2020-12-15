/**
 * 希尔排序
 *     1。有一个递减的增量数值:通过折半,不断递减，最终为1
 *      distance = arr.len
 *      distance = Math.floor(distance/2)
 * 
 *     2.以当前的增量值对数组进行分组,分成多个小数组：
 *          对每个小组进行插入排序
 *          每个小组的排序是交替进行的
 */
function shellSort (array){
    const len = array.length
    let distance = len
    while (distance > 1){
        distance = Math.floor(distance/2)
        for (let i = distance; i < len; i++) { 
            //取出当前元素
            const start = array[i]  
            let j = i - distance  
            //从右外左比较
            while ( j>= 0 && array[j] >start) {
                array[j+distance] = array[j]
                j -= distance
            }
            array[j+distance] = start 
        }
    }
    return array
}

function shellSort (arr){
    let distance = arr.length

    while (distance > 1) {
        distance = Math.floor(distance/2)
        for (let i = distance; i < arr.length; i++) {
            const start = arr[i]
            let j 
            for ( j =  i - distance; j >= 0 ; j-= distance) {
                if (arr[j] > start){
                    arr[j+distance] = arr[j]
                }else{
                    break
                }
            }

            arr[j + distance] = start
        }
        
    }
    return arr
}
console.log(shellSort([2,4,3,5]))