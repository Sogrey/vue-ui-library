<template>
  <input :id="id" :name="name" :type="type" :value="modelValue" @input="onInput" :class="[
        ns.b(), 
        // ns.m(type), 
        ns.m('size', size) 
    ]" />
</template>
<script setup>

import { useNamespace } from '@vue3-ui-library/hooks'

const ns = useNamespace('input')

// 定义 props
const props = defineProps({
    id: String,
    name: String,
    modelValue: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    size: {
      type: String,
      default: 'default'
    }
})

// 定义 emits
const emit = defineEmits(['input', 'update:modelValue', 'change'])

// 输入事件处理
const onInput = (event) => {
  const value = event.target.value
  emit('input', value)
  emit('update:modelValue', value)
  emit('change', value)
}

</script>
<!-- <script>
export default {
  props: {
    value: String,
    type: {
      type: String,
      default: 'text'
    },
    size: {
      type: String,
      default: 'default'
    }
  },
  methods: {
    onInput(event) {
      this.$emit('input', event.target.value);
    }
  }
}
</script> -->

<style scoped src="./style/style.scss"></style>