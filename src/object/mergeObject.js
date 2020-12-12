/**
 *  语法: object mergeObject(...objs)
    功能: 合并多个对象,相同的属性的值合并成数组, 返回一个合并后对象(不改变原对象)
    如： obj1 = {a:[1,2],b:{b:1},c:'c'}
            obj2 = {a:1,b:2}
            合并后: obj = {a:[1,2,3], b:[{b:1},2] ,c:'c'} 
 */
export function mergeObject (...objects){
    const obj = {}
    objects.forEach( object =>{
        for (const key in object) {
            //对象中不存在该属性,直接添加
            if ( !obj.hasOwnProperty(key)) {
                const value = object[key];
                obj[key] = value
            }else{
                //对象中存在该属性-->使用concat,将原本value和新value合并成一个数组赋值给该属性key
                obj[key] = [].concat( obj[key],object[key])
            }
        }
    })
    return obj
}