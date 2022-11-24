interface stateMessage {
  SUCCESS: string;
  WARING: string
  MESSAGE: string
  ERROR: string
}

export default <stateMessage>{
  SUCCESS: 'success',
  WARING: 'warning',
  MESSAGE: 'message',
  ERROR: 'error'
}