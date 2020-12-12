/**
 * 自定义instanceof工具函数
        语法: myInstanceOf(obj, Type)
        功能: 判断obj是否是Type类型的实例
        实现: Type的原型对象是否是obj的原型链上的某个对象, 如果是返回tru, 否则返回false
        思路：一直循环找__proto__,找到null为止(空Objec的原型对象,原型链尽头了)，
 */
export function myInstanceof (obj,Type){
    //将实例对象的隐式原型属性取出来
    let prototype = obj.__proto__
    //原型链的尽头是null
    while ( prototype !== null ){
        //如果等于Type类型的显示原型对象,表示找到了 
        if ( prototype === Type.prototype){
            return true 
        }
        //继续将prototype的下一个隐式原型赋值给它,
        prototype = prototype.__proto__
    }
    //循环结束,没找到，false
    return false
}