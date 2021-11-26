<template>
    <NLink v-if="link" :to="link" :class="[reset ? [fixedClasses] : [classes, padding, backgrounds, fixedClasses]]">
        {{ title }}
    </NLink>
    <button
        v-else
        :class="[reset ? [fixedClasses] : [classes, padding, backgrounds, fixedClasses, styleText]]"
        @click="$emit('click')"
        @blur="$emit('blur')"
    >
        {{ label }}
    </button>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: 'Generic',
    props: {
        label: {
            type: String,
            required: true,
            default: ''
        },
        reset: {
            type: Boolean,
            required: false,
            default: false
        },
        link: {
            type: String,
            required: false,
            default: ''
        },
        backgrounds: {
            type: String,
            required: false,
            default: `bg-blue-500`
        },
        fixedClasses: {
            type: String,
            required: false
        },
        styleText: {
            type: String,
            required: false,
            default: 'text-white'
        },
        classes: {
            type: String,
            required: false,
            default: `
            rounded
            shadow-sm
            disabled:opacity-50
            justify-center
            `
        },
        padding: {
            type: String,
            required: false,
            default: 'px-4 py-2'
        }
    }
})
</script>

<style lang="postcss"></style>
