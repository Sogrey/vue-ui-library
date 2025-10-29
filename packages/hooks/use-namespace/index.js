
// 组件库统一命名空间
const defaultNamespace = 'sgy'

export const useNamespace = (block) => {
    const namespace = defaultNamespace
    
    const b = () => {
        return `${namespace}-${block}`
    }
    
    const e = (element) => {
        return `${namespace}-${block}__${element}`
    }
    
    const m = (modifier) => {
        return `${namespace}-${block}--${modifier}`
    }

    return {
        namespace,
        b,
        e,
        m
    }
}