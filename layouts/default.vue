<template>
    <div class="layout-default">
        <TemplateHeader />

        <Transition name="slide-left">
            <Nuxt class="layout-default__outlet" />
        </Transition>

        <MiscScrollToTop />

        <TemplateFooter />
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: 'Default'
})
</script>

<style lang="postcss">
.layout-default {
    @apply min-h-screen;

    &__outlet {
        min-height: calc(100vh - theme('spacing.16'));

        @screen lg {
            min-height: calc(100vh - theme('spacing.32'));
        }
    }
}
</style>
