import { observable } from 'mobx'

const counterStore = observable({
  counter: 0,

  increment() {
    this.counter++
  },

})
export default counterStore