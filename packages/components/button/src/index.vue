<!-- button 按钮组件的 .vue 源代码 -->

<template>
    <button>
        这是测试按钮
    </button>
</template>
<script setup>

defineOptions({
    name: 's-button'
})

import { useNamespace } from '@vue3-ui-library/hooks'

const ns = useNamespace()

console.log('当前命名空间是',ns)

</script>
<style scoped></style>