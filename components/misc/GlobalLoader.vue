<template>
    <transition name="fade">
        <div v-if="loading" class="loader">
            <div class="sk-chase">
                <div class="dot"></div>

                <div class="dot"></div>

                <div class="dot"></div>

                <div class="dot"></div>

                <div class="dot"></div>

                <div class="dot"></div>
            </div>
        </div>
    </transition>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: 'Loader',
    data() {
        return {
            loading: false,
            timeout: setTimeout(() => null, 0)
        }
    },
    methods: {
        start() {
            this.timeout = setTimeout(() => (this.loading = true), 200)
        },
        finish() {
            ;(!this.loading ? () => clearTimeout(this.timeout) : () => setTimeout(() => (this.loading = false), 500))()
        }
    }
})
</script>

<style lang="postcss">
.loader {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
    background-color: #eeeeeece;
}

.sk-chase {
    position: absolute;
    top: calc(50% - 25px);
    left: calc(50% - 25px);
    width: 60px;
    height: 60px;
    animation: sk-chase 2.5s infinite linear both;
}

.dot {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    animation: dot 2s infinite ease-in-out both;
}

.dot:before {
    content: '';
    display: block;
    width: 25%;
    height: 25%;
    background-color: theme('colors.brand.secondary.DEFAULT');
    border-radius: 100%;
    animation: dot-before 2s infinite ease-in-out both;
}

.dot:nth-child(1) {
    animation-delay: -1.1s;
}
.dot:nth-child(2) {
    animation-delay: -1s;
}
.dot:nth-child(3) {
    animation-delay: -0.9s;
}
.dot:nth-child(4) {
    animation-delay: -0.8s;
}
.dot:nth-child(5) {
    animation-delay: -0.7s;
}
.dot:nth-child(6) {
    animation-delay: -0.6s;
}
.dot:nth-child(1):before {
    animation-delay: -1.1s;
}
.dot:nth-child(2):before {
    animation-delay: -1s;
}
.dot:nth-child(3):before {
    animation-delay: -0.9s;
}
.dot:nth-child(4):before {
    animation-delay: -0.8s;
}
.dot:nth-child(5):before {
    animation-delay: -0.7s;
}
.dot:nth-child(6):before {
    animation-delay: -0.6s;
}

@keyframes sk-chase {
    100% {
        transform: rotate(360deg);
    }
}

@keyframes dot {
    80%,
    100% {
        transform: rotate(360deg);
    }
}

@keyframes dot-before {
    50% {
        transform: scale(0.4);
    }
    100%,
    0% {
        transform: scale(1);
    }
}
</style>
