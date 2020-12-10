//将数组拆分成多个 size 长度的区块，每个区块组成小数组,整体组成一个二维数组
export function chunk (array,size=1){//没有传递size时，默认值为1
    const bigArr = []
    let smallArr = []

    //传入的为空数组
    if ( array.length === 0 ){
        return bigArr
    }

    //处理size
    if ( size < 1){
        size = 1
    }else if (size > array.length){
        size = array.length
    }

    array.forEach(item => {
        //将小数组添加到大数组(同一个只添加一次)
        if (smallArr.length === 0){
            bigArr.push(smallArr)
        }
        smallArr.push(item)

        //小数组长度=size,重新创建新数组
        if ( smallArr.length === size){
            smallArr = []
        }
    });
    return bigArr
}