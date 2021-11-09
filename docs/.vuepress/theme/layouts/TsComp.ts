import { defineComponent,h } from 'vue'

export default defineComponent({
    name: 'TsComp',
    setup() {
        return () => {
            return h('div', ['TsComp'])
        }
    }
})