//数组去重

//方式一：利用双重循环，forEach+indexOf，效率比较低
export function unique1 (array){
    const  arr = []
    array.forEach(element => {
        //新数组arr中不存在该元素，push
        if ( arr.indexOf(element) === -1){//内部也用了循环
            arr.push(element)
        }
    });
    return arr
}

/*方式二：利用循环+对象容器，只需要遍历一次，效率较高
            对象的key为item，value不关注，直接赋值true
*/
export function unique2 (array){
    const arr = []
    const obj = {}
    array.forEach(element => { 
        //判断对象中是否存在该元素,不存在则push
        if ( !obj.hasOwnProperty(element) ){
            arr.push(element)
            //数组中添加该元素后，也将该元素添加到对象中
            obj[element] = true
        }
    });
    return arr
}

/**
 * 方式三：利用Array.from + set对象
 */
export function unique3 (array){
    // return [...new Set(array)]
    return Array.from(new Set(array))
}