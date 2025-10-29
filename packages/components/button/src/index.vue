<!-- button 按钮组件的 .vue 源代码 -->

<template>
    <button 
        :class="[ns.b(), type ? ns.m(type) : '']"
        :type="nativeType"
    >
        <slot>这是测试按钮</slot>
    </button>
</template>
<script setup>

import { useNamespace } from '@vue3-ui-library/hooks'

const ns = useNamespace('button')

// 定义 props
const props = defineProps({
    // 按钮类型：primary, success, warning, error, info, text
    type: {
        type: String,
        default: ''
    },
    // 原生按钮类型：button, submit, reset
    nativeType: {
        type: String,
        default: 'button'
    }
})

</script>
<style scoped src="./style/style.scss"></style>