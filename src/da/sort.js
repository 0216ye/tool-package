//冒泡排序
export function bubbleSort (arr){
    for (let i = arr.length -1 ; i > 0; i--) { //循环范围 : [0:i]
        for (let j = 0; j < i; j++) { // [0~i]
            if ( arr[j] > arr[j+1] ){
                [arr[j], arr[j+1]] = [ arr[j+1],arr[j] ]
            }
        }
    }
    return arr 
}
//选择排序
export function selectSort (arr){
    for (let i = 0; i < arr.length -1; i++) {
        for (let j = i + 1; j < arr.length -1 ; j++) {
            if ( arr[i] > arr[j] ){
                [arr[j], arr[i]] = [ arr[i],arr[j] ]
            }
        }        
    }
    return arr
}
//插入排序
export function insertSort (array){
    //默认第一个已经排好序
    for (let i = 1; i < array.length; i++) {
        //取出当前元素
        const start = array[i]
        let j
        //从右外左比较
        for ( j = i-1; j >=0; j--) {
            //当前的元素比start大,则都右移一位,
            if (array[j] > start){
                array[j+1] = array[j]
            }else{
                //array[j] < start 或者找不到 j= -1了,结束循环
                break
            }
        }
        //j=-1 或者找到比start小的,将其
        array[j+1] = start
    }
    return array
}