<template>
    <div class="relative bg-white invisible md:visible">
        <div class="max-w-full mx-auto px-4 sm:px-6">
            <div class="flex justify-between items-center py-6 md:justify-start md:space-x-10">
                <div class="flex md:w-1/3 lg:justify-start space-x-0 lg:flex-1 items-center">
                    <div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="mr-16"
                            width="40.233"
                            height="40.105"
                            viewBox="0 0 31.233 22.105"
                        >
                            <g id="menu" transform="translate(0.25 -75.75)" class="space-y-3">
                                <g id="Grupo_3118" data-name="Grupo 3118" transform="translate(0 85.606)">
                                    <g id="Grupo_3117" data-name="Grupo 3117" transform="translate(0 0)">
                                        <path
                                            id="Trazado_1"
                                            data-name="Trazado 1"
                                            d="M29.536,236H1.2a1.2,1.2,0,1,0,0,2.4H29.536a1.2,1.2,0,0,0,0-2.4Z"
                                            transform="translate(0 -236)"
                                            fill="#006cad"
                                            stroke="#fff"
                                            stroke-width="0.5"
                                        />
                                    </g>
                                </g>
                                <g id="Grupo_3120" data-name="Grupo 3120" transform="translate(0 76)">
                                    <g id="Grupo_3119" data-name="Grupo 3119">
                                        <path
                                            id="Trazado_2"
                                            data-name="Trazado 2"
                                            d="M29.536,76H1.2a1.2,1.2,0,1,0,0,2.4H29.536a1.2,1.2,0,0,0,0-2.4Z"
                                            transform="translate(0 -76)"
                                            fill="#006cad"
                                            stroke="#fff"
                                            stroke-width="0.5"
                                        />
                                    </g>
                                </g>
                                <g id="Grupo_3122" data-name="Grupo 3122" transform="translate(0 95.21)">
                                    <g id="Grupo_3121" data-name="Grupo 3121">
                                        <path
                                            id="Trazado_3"
                                            data-name="Trazado 3"
                                            d="M29.536,396H1.2a1.2,1.2,0,1,0,0,2.4H29.536a1.2,1.2,0,1,0,0-2.4Z"
                                            transform="translate(0 -396)"
                                            fill="#006cad"
                                            stroke="#fff"
                                            stroke-width="0.5"
                                        />
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </div>
                    <div>
                        <a href="#">
                        <img
                            class="h-16 w-64 sm:h-10"
                            src="https://www.eluniversal.com.mx/sites/all/themes/eluniversal/images/logo-el-universal.svg"
                            alt=""
                        />
                    </a>
                    </div>
                </div>
                <nav
                    class="flex w-1/2 flex-grow md:justify-around lg:justify-end items-center md:space-x-2 lg:space-x-10"
                >
                    <a href="#" class="lg:text-base md:text-sm text-gray-900"> Obituario </a>
                    <a href="#" class="lg:text-base md:text-sm text-gray-900"> Preparate </a>
                    <a href="#" class="lg:text-base md:text-sm text-gray-900"> Funeraria </a>
                    <div class="relative">
                        <ButtonGeneric backgrounds="bg-golden-default" padding="md:p-2 lg:px-7 lg:py-2" label="PUBLICAR" />
                    </div>
                    <label class="relative text-gray-default block">
                        <input
                            id="search"
                            type="text"
                            name="search"
                            placeholder="Obituario, funerarias y flores"
                            class="border border-gray-300 md:text-xs lg:text-base py-3 px-4 bg-white placeholder-gray-default appearance-none w-full block lg:mr-36 focus:outline-none"
                        />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="pointer-events-none w-4 h-4 bg-white absolute top-1/2 transform -translate-y-1/2 right-3"
                            viewBox="0 0 20.503 21.226"
                        >
                            <path
                                id="search"
                                d="M21.151,19.318,16.1,14.068a8.561,8.561,0,1,0-6.555,3.054,8.472,8.472,0,0,0,4.907-1.554l5.091,5.291a1.117,1.117,0,1,0,1.61-1.549ZM9.547,2.235a6.331,6.331,0,1,1-6.33,6.33,6.331,6.331,0,0,1,6.33-6.33Z"
                                transform="translate(-0.986 0)"
                                fill="#000000"
                            />
                        </svg>
                    </label>
                </nav>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: 'Desktop'
})
</script>

<style lang="postcss"></style>
