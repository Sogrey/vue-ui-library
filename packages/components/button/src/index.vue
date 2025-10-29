<!-- button 按钮组件的 .vue 源代码 -->

<template>
    <button :class="[ns.b(), type ? ns.m(type) : '', round ? 'is-round' : '']" :type="nativeType">
        <!-- 使用插槽来渲染按钮内容 -->
        <slot>这是测试按钮</slot>{{ props.round }}
    </button>
</template>
<script setup>

import { useNamespace } from '@vue3-ui-library/hooks'

const ns = useNamespace('button')

// 定义 props
const props = defineProps({
    // 原生按钮类型：button, submit, reset
    nativeType: {
        type: String,
        default: 'button'
    },
    // 按钮类型：primary, success, warning, error, info, text
    type: {
        type: String,
        default: ''
    },
    // 是否圆角
    round: {
        type: Boolean,
        default: false
    }
})

</script>
<style scoped src="./style/style.scss"></style>