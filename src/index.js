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