import { ref, computed, onMounted } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('runPine', {
  // state: 返回对象的函数
  state: () => {
    return {
      // 所有这些属性都将自动推断其类型
      counter: 1,
      name: 'Eduardo',
      isAdmin: true,
      users: [{ id: 175, name: '前三位' }, { id: 2175, name: '后四位' }],
      date: new Date()
    }
  },

  // Getter 完全等同于 Store 状态的 计算值。 
  // 它们可以用 defineStore() 中的 getters 属性定义。 
  // 他们接收“状态”作为第一个参数以鼓励箭头函数的使用
  getters: {
    // 自动将返回类型推断为数字
    doubleCount: (state) => state.counter * 2,

    // 返回类型必须明确设置
    doublePlusOne(): number {
      return this.counter
    },

    // 支持参数的传递
    getUserById: (state) => {
      return (userId: number) => state.users.find((user) => user.id === userId)
    },
  },

  // Actions 相当于组件中的 methods。 
  // 它们可以使用 defineStore() 中的 actions 属性定义，
  // 并且它们非常适合定义业务逻辑
  actions: {
    continuedDate() {
      setInterval(() => {
        this.date = new Date()
      });
    }

  }
})
