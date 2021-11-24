import { VNodeDirective } from 'vue/types'

export default {
    inserted(el: HTMLElement, binding: VNodeDirective) {
        if (binding.value.lock && document.documentElement.contains(el)) {
            document.documentElement.style.overflowY = 'hidden'
        }
    },
    unbind(el: HTMLElement, binding: VNodeDirective) {
        if (binding.value.lock) {
            if (binding.value.verifyPresence) {
                document.documentElement.contains(el) && (document.documentElement.style.overflowY = 'auto')
            } else {
                document.documentElement.style.overflowY = 'auto'
            }
        }
    }
}
