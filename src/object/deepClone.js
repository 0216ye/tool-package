/**
 *     实现深拷贝
        1). 大众乞丐版
            问题1: 函数属性会丢失
            问题2: 循环引用会出错
        2). 面试基础版本
            解决问题1: 函数属性还没丢失
        3). 面试加强版本
            解决问题2: 循环引用正常 
            思路:
                目标:--同一个数组/对象才能被创建一次
                创建拷贝对象前:如果拷贝的对象已经存在,直接返回
                创建拷贝对象后：保存拷贝的对象
                缓存的容器结构 : Map -->key:target,value :cloneTarget
        4). 面试加强版本2(优化遍历性能)
            数组: while | for | forEach() 优于 for-in | keys()&forEach() 
            对象: for-in 与 keys()&forEach() 差不多
 */
export function deepClone1 (target){
    return JSON.parse(JSON.stringify(target))
}


export function deepClone2 (target){
    if ( Array.isArray(target) || ( target !== null && typeof target === 'object' )){
        let cloneTarget = Array.isArray(target) ? [] : {}
        for (const key in target) {
            if ( target.hasOwnProperty(key)) {
                cloneTarget[key] = deepClone2(target[key])
            }
        }
        return cloneTarget
    }else{
        return target
    }
}


export function deepClone3 (target,map = new Map()){
    if ( Array.isArray(target) || ( target !== null && typeof target === 'object' )){
        //从map容器中获取拷贝的对象,如果已经存在，直接结束
        let cloneTarget = map.get(target)
        if (cloneTarget){
            return cloneTarget
        }

        cloneTarget = Array.isArray(target) ? [] : {}
        //将拷贝的对象保存到map容器中
        map.set(target,cloneTarget)

        for (const key in target) {
            if ( target.hasOwnProperty(key)) {
                //递归调用的同时，传入map容器,当拷贝过一次的对象就不再重复拷贝!
                cloneTarget[key] = deepClone3(target[key],map)
            }
        }
        return cloneTarget
    }else{
        return target
    }

}
export function deepClone4 (target,map = new Map()){
    if ( Array.isArray(target) || ( target !== null && typeof target === 'object' )){
        //从map容器中获取拷贝的对象,如果已经存在，直接结束
        let cloneTarget = map.get(target)
        if (cloneTarget){
            return
        }

        
        if ( Array.isArray(target) ){
            //数组->使用forEach效率高
            cloneTarget = []
            //将拷贝的对象保存到map容器中
            map.set(target,cloneTarget)
            target.forEach((item,index) => {
                cloneTarget[item] = deepClone4(target[item],map)
            });
            return cloneTarget
        }else{
            cloneTarget = {}
            map.set(target,cloneTarget)
            //对象->使用for...in
            for (const key in target) {
                if ( target.hasOwnProperty(key)) {
                    //递归调用的同时，传入map容器,当拷贝过一次的对象就不再重复拷贝!
                    cloneTarget[key] = deepClone4(target[key],map)
                }
            }
            return cloneTarget
        }
  
       
    }else{
        return target
    }

}