import { VNodeDirective } from 'vue/types/vnode'

interface ClickOutsideBindingArgs {
    handler: (e: Event) => void
    closeConditional?: (e: Event) => boolean
    include?: () => HTMLElement[]
}

interface DirectiveElement extends HTMLElement {
    _clickOutside?: {
        lastMousedownWasOutside: Boolean
        onClick: EventListenerOrEventListenerObject
        onMousedown: EventListenerOrEventListenerObject
    }
}

interface ClickOutsideDirective extends VNodeDirective {
    value?: ((e: Event) => void) | ClickOutsideBindingArgs
}

function defaultConditional() {
    return true
}

function attachedRoot(node: Node): null | HTMLDocument | ShadowRoot {
    if (typeof node.getRootNode !== 'function') {
        while (node.parentNode) node = node.parentNode

        if (node !== document) return null

        return document
    }

    const root = node.getRootNode()

    if (root !== document && root.getRootNode({ composed: true }) !== document) return null

    return root as HTMLDocument | ShadowRoot
}
function checkEvent(e: PointerEvent, el: DirectiveElement, binding: ClickOutsideDirective): boolean {
    if (!e || checkIsActive(e, binding) === false) return false

    const root = attachedRoot(el)

    if (root instanceof ShadowRoot && root.host === e.target) return false

    const elements = ((typeof binding.value === 'object' && binding.value.include) || (() => []))()

    elements.push(el)

    return !elements.some((el) => el.contains(e.target as Node))
}

function checkIsActive(e: PointerEvent, binding: ClickOutsideDirective): boolean | void {
    const isActive = (typeof binding.value === 'object' && binding.value.closeConditional) || defaultConditional

    return isActive(e)
}

function directive(e: PointerEvent, el: DirectiveElement, binding: ClickOutsideDirective) {
    const handler = typeof binding.value === 'function' ? binding.value : binding.value!.handler

    el._clickOutside!.lastMousedownWasOutside &&
        checkEvent(e, el, binding) &&
        setTimeout(() => {
            checkIsActive(e, binding) && handler && handler(e)
        }, 0)
}

function handleShadow(el: DirectiveElement, callback: Function): void {
    const root = attachedRoot(el)

    callback(document.body)

    if (root instanceof ShadowRoot) {
        callback(root)
    }
}

export const ClickOutside = {
    inserted(el: DirectiveElement, binding: ClickOutsideDirective) {
        const onClick = (e: Event) => directive(e as PointerEvent, el, binding)
        const onMousedown = (e: Event) => {
            el._clickOutside!.lastMousedownWasOutside = checkEvent(e as PointerEvent, el, binding)
        }

        handleShadow(el, (app: HTMLElement) => {
            app.addEventListener('click', onClick, true)
            app.addEventListener('mousedown', onMousedown, true)
        })

        el._clickOutside = {
            lastMousedownWasOutside: true,
            onClick,
            onMousedown
        }
    },

    unbind(el: DirectiveElement) {
        if (!el._clickOutside) return

        handleShadow(el, (app: HTMLElement) => {
            if (!app || !el._clickOutside) return
            app.removeEventListener('click', el._clickOutside.onClick, true)
            app.removeEventListener('mousedown', el._clickOutside.onMousedown, true)
        })

        delete el._clickOutside
    }
}

export default ClickOutside
