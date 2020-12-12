/**
 * 入口文件
 */
export {call} from './function/call'
export {apply} from './function/apply'
export {bind} from './function/bind'
export {throttle} from './function/throttle'
export {debounce} from './function/debounce'

export { map,filter,find,findIndex,reduce,every,some} from './array/declares'
export { unique1,unique2,unique3 } from './array/unique'
export { concat } from './array/concat'
export { slice } from './array/slice'
export { flattenDeep1,flattenDeep2 } from './array/flattenDeep'
export { default as compact} from './array/compact'
export { chunk } from './array/chunk'
export { differences } from './array/difference'
export { mergeArray } from './array/mergeArray'
export { pull,pullAll } from './array/pull'
export { drop,dropRight } from './array/drop'

export { newInstance} from './object/newInstance'
export { myInstanceof} from './object/myInstanceof'
export { mergeObject} from './object/mergeObject'
export { clone1,clone2} from './object/clone'
export { deepClone1,deepClone2,deepClone3,deepClone4 } from './object/deepClone'

export { reverseString,palindrome,truncate} from './string/index'

export { default as Promise} from './promise/index'
export { default as PubSub} from './pub-sub/index'
export { default as axios} from './axios/index'
export { default as eventBus} from './event-bus/index'

export { default as Stack } from './da/stack'

