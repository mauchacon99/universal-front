<template>
    <a v-if="external" v-bind="$attrs" :href="path">
        <slot></slot>
    </a>
    <NLink v-else v-bind="$attrs" :to="path">
        <slot></slot>
    </NLink>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: 'MiscLink',
    props: {
        external: {
            type: Boolean,
            default: false
        },
        path: {
            type: [String, Object],
            default: '/'
        }
    }
})
</script>
