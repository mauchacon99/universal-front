<template>
    <button v-show="showButton" class="button" @click="scrollTop">
        <img draggable="false" class="icon" :src="$assets.white.arrowDown" alt="Subir" />
    </button>
</template>

<script>
export default {
    name: 'MiscScrollToTop',
    data() {
        return {
            showButton: false,
            listener: null
        }
    },
    mounted() {
        this.listener = () => {
            const { scrollTop, scrollHeight, clientHeight } = document.documentElement

            this.showButton = scrollTop / (scrollHeight - clientHeight) > 0.3
        }

        document.addEventListener('scroll', this.listener)
    },
    methods: {
        scrollTop() {
            document.documentElement.style.scrollBehavior = 'smooth'

            window.scroll(0, 1)

            document.documentElement.style.scrollBehavior = 'unset'
        }
    }
}
</script>
<style lang="postcss" scoped>
.button {
    @apply fixed z-50 flex items-center justify-center w-12 h-12 rounded-full bottom-5 right-5 bg-brand-primary border border-white;
}
.icon {
    @apply h-5 transform -rotate-180;
}
@media print {
    .button {
        @apply hidden;
    }
}
</style>
