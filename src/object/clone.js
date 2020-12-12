/**
 *  实现浅拷贝
        方法一: 利用ES6语法
        方法二: 利用ES5语法
 */
export function clone1 (target){
    //数组
    if ( Array.isArray(target) ){
        return [...target]

    }else if ( target !== null && typeof target === 'object' ){ //对象
        return {...target}

    }else { //基本类型
        return target
    }
}

//方法二: 利用ES5语法
export function clone2 (target){
    //对象或数组
    if ( Array.isArray(target) || ( target !== null && typeof target === 'object' ) ){
        const cloneTarget = Array.isArray(target) ? [] : {}
        //遍历该对象本身的属性，将其添加到obj上
        for (const key in target) {
            if (target.hasOwnProperty(key)) {
                cloneTarget[key] = target[key];
            }
        }
        return obj
    }else{
        return target
    }
}
