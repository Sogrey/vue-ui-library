<!-- button 按钮组件的 .vue 源代码 -->

<template>
    <button :class="[
        ns.b(), 
        ns.m(type), 
        ns.is('round', round),
        // ns.is('disabled', disabled),
        ns.m('size', size), 
        ns.is('cricle', cricle)
    ]" :type="nativeType" :disabled="disabled" @click="onClick">
        <!-- 使用插槽来渲染按钮内容 -->
        <slot>这是测试按钮</slot>
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
    },
    // 是否禁用
    disabled: {
        type: Boolean,
        default: false
    },
    // 按钮尺寸：mini, small, medium, large
    size: {
        type: String,
        default: 'medium'
    },
    // 是否圆形
    cricle:{
        type: Boolean,
        default: false
    }

})

// 定义 emits
const emit = defineEmits(['click'])

// 点击事件处理
const onClick = (event) => {
  if (!props.disabled) {
    emit('click', event)
  }
}

</script>
<style scoped src="./style/style.scss"></style>