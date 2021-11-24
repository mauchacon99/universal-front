<template>
    <div class="overlay" :class="modes[mode]" @click="handler"></div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: 'Overlay',
    props: {
        mode: {
            type: String,
            default: 'base'
        },
        handler: Function
    },
    data() {
        return {
            modes: {
                base: 'bg-opacity-50',
                dark: 'bg-opacity-70',
                light: 'bg-opacity-30'
            }
        }
    }
})
</script>

<style lang="postcss" scoped>
.overlay {
    @apply bg-black fixed inset-0 bg-black backdrop-filter;
}
</style>
