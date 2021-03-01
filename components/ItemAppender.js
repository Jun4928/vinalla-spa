import Component from '../core/Component.js'

export default class ItemAppender extends Component {
  template() {
    return `
      <input type="text" class="appender" placeholder="아이템 내용" />
    `
  }

  setEvent() {
    const { addItem } = this.$props
    this.addEvent('keyup', '.appender', (e) => {
      const { key, target } = e
      if (key !== 'Enter') return
      addItem(target.value)
    })
  }
}
