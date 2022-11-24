import types from "./types"
import MessageComponent from "./Message.vue"
import { createApp } from 'vue'

const Message = (options: any) => {
  const messageApp = createApp(MessageComponent, options)
  console.log(messageApp, '---createApp---');

  showMessage(messageApp, options)
}

Object.values(types).forEach((item: any) => {
  Message[item] = (options: any) => {
    options.item = item
    return Message(options)
  }
})

const showMessage = (app: any, options: any) => {
  let oEl = document.createDocumentFragment();
  app.mount(oEl);
  document.body.appendChild(oEl)
  hideMessage(app, options)
}

const hideMessage = (app: any, options: any) => {
  setTimeout(() => {
    app.unmount()
  }, options?.time || 3000);
}

export { types }

export default Message 