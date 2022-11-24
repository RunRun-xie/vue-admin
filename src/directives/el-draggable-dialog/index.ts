import type { Directive } from 'vue'

export const elDraggableDialog: Directive = {
  beforeMount: (el, _) => {
    console.log(document.querySelector('.el-dialog'));
  }
}