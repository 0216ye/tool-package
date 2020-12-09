/**
 * 1. 理解: 
        取出嵌套数组(多维)中的所有元素放到一个新数组(一维)中
        如: [1, [3, [2, 4]]]  ==>  [1, 3, 2, 4]
    2. 实现:
        方法一: 递归 + reduce() + concat()
        方法二: ... + some() + concat()
 */

/**
 * 
 *  方法一: 递归 + reduce() + concat() -->[1, [3, [2, 4]]]
 *  1. [1]
 * 
 *  2. [3]
 * 
 *  3. [2,4]
 * 
 *  4. [3,2,4]
 *  
 *  5. [1,3,2,4]
 */
export function flattenDeep1 (array){
    return array.reduce((pre,item)=>{
        //判断每一个item是否为数组，false则直接添加,
       if ( !Array.isArray(item) ){
           pre.push(item)
       }else{
           //item为数组,递归,因为函数返回一个数组，使用扩展运算符解开，再2通过concat和原来的数组合并
          pre = pre.concat(...flattenDeep1(item))
       }
        //将数组返回
        return pre
    },[])
}


// 方法二: ... + some() + concat()
export function flattenDeep2 (array){
    //通过和concat解开一层，并和空数组合并到一起
    let arr = [].concat(...array)
    //判断arr里面的item是否还有为数组的-->some：只要有一项为true则true
    while ( arr.some( item => Array.isArray(item)) ) {
        //再次使用concat解开一层数组,
        arr = [].concat(...arr)
    }
    //循环结束,数组中的每个item都不再是数组了!
    return arr 
}