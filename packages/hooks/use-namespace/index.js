
// 组件库统一命名空间
const defaultNamespace = 'sgy'

export const useNamespace = (block) => {
    const namespace = defaultNamespace

    const b = () => {
        return `${namespace}-${block}`
    }

    // 判断是否存在modifier，存在则返回对应的class，否则返回空字符串
    const m = (modifier) => {
        return modifier ? `${namespace}-${block}--${modifier}` : ''
    }

    // 判断boolean值，返回对应的class
    const is = (key,value) => {
        return value ? `is-${key}` : ''
    }

    return {
        namespace,
        b,
        m,
        is
    }
}