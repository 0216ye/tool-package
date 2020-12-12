// //自定义new工具函数
// 语法: newInstance(Fn, ...args)
// 功能: 创建Fn构造函数的实例对象
// 实现: 创建空对象obj, 调用Fn指定this为obj, 返回obj
export function newInstance(Fn, ...args) {
    const obj = {}

    //调用Fn指定this为obj
    let result = Fn.apply(obj,args)

    /**判断构造函数的返回结果-->
     * 返回的是一个对象类型的数据(数组/函数/对象),则new的结果是return的结果，否则为新建的对象
    */
   if ( result instanceof Object){
       return result
   }
    //将obj的__proto__指向Fn的原型对象
    obj.__proto__ = Fn.prototype  //将构造函数的显示原型属性赋值给实例对象的隐式原型属性
    return obj
}