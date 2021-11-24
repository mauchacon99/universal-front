import Vue from 'vue'

import Toasted from 'vue-toasted'

import ClickOutside from '@/vue/click-outside'

import BreakpointsDetector from '@/vue/breakpoints-detector'

import ScrollLocker from '@/vue/scroll-locker'

Vue.use(BreakpointsDetector)

Vue.use(Toasted)

Vue.directive('click-outside', ClickOutside)

Vue.directive('scroll-locker', ScrollLocker)
