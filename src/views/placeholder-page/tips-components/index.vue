<template>
  <button
    @click="
      Message.success({
        message: 'this is a message',
      })
    "
  >
    Success
  </button>
  <button
    @click="
      Message.warning({
        warning: 'this is a Warning',
      })
    "
  >
    Warning
  </button>
  <button
    @click="
      Message({
        type: types.MESSAGE,
        message: 'this is a message',
      })
    "
  >
    Message
  </button>

  <button
    @click="
      Message({
        time: 1000,
        type: types.ERROR,
        message: 'this is a error',
      })
    "
  >
    Error
  </button>
  <test-message :duration="5000" :type="'warning'" message="this is message"></test-message>
</template>

<script setup lang="ts">
import Message, { types } from '@/components/Message'
// import testMessage from '@/components/Message/Message.vue'
</script>

<style scoped></style>
