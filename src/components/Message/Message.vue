<template>
  <Transition name="test-message-fade">
    <div :class="styleClass">{{ message }}</div>
  </Transition>
</template>

<script setup lang="ts">
import types from './types'
import { computed } from 'vue'

const props = defineProps({
  type: {
    type: String,
    default: types.MESSAGE,
    validator(value: string) {
      return Object.values(types).includes(value)
    }
  },
  message: {
    type: String,
    default: types.MESSAGE
  },
  duration: {
    type: Number,
    default: 2000
  }
})

const styleClass = computed(() => ['test-message', props.type])
</script>

<style lang="scss" scoped>
.test-message {
  position: fixed;
  left: 50%;
  width: 380px;
  height: 40px;
  border-radius: 5px;
  font-size: 14px;
  text-align: center;
  z-index: 9999;
  // margin-left: 190px;
  top: 20%;
  line-height: 40px;

  &.warning {
    background-color: #fdf6ec;
    color: #b88230;
  }

  &.success {
    background-color: rgba(242, 249, 236);
    color: #67c23a;
  }

  &.error {
    background-color: rgba(252, 241, 240);
    color: #f56c6c;
  }

  &.message {
    background-color: rgba(204, 225, 252);
    color: #409eff;
  }
}
</style>