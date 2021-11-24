<template>
    <div class="home-index">
        <section class="hero-section">
            <h1 class="hero-section__title"></h1>
        </section>
        <section class="obituary-section">
            <h2 class="obituary-section__title"></h2>
            <ul class="obituary-section__list">
                <li class="obituary-section__element"></li>
            </ul>
        </section>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: 'Home'
})
</script>

<style lang="postcss">
.home-index {
    .hero-section {
        &__title {
        }
    }
    .obituary-section {
        &__title {
        }
        &__list {
        }
        &__element {
        }
    }
}
</style>
