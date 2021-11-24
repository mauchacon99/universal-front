<template>
    <div class="misc-server-content" v-html="content"></div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: 'MiscServerContent',
    props: {
        content: {
            type: String
        }
    }
})
</script>

<style lang="postcss">
.misc-server-content {
    @apply prose max-w-none;
    p,
    h2,
    h3,
    h4,
    h5,
    h6 {
        @apply mt-0 mx-0 mb-3;
    }
}
</style>
