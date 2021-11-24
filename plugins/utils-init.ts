import { Plugin } from '@nuxt/types'

import { MetaInfo } from 'vue-meta/types'

import { textShortener, urlCleaner, upperFirst, shadeText, replacePlaceholders } from '@/libs/string-functions'

type utilType = {
    replacePlaceholders: (
        text?: string | undefined,
        placeholders?:
            | {
                  [key: string]: string
              }[]
            | undefined
    ) => string | undefined
    optionalsElements: (
        response: any[],
        optionals: any[],
        index: number,
        limit?: number
    ) => { result: any[]; indexLimit: number | undefined }
    textShortener: typeof textShortener
    urlCleaner: typeof urlCleaner
    shadeText: typeof shadeText
    upperFirst: typeof upperFirst
    metaInit: (
        tags: { [key: string]: string }[],
        title: string
    ) => {
        meta: {
            [key: string]: string
        }[]
        title: string
    }
    host: string | undefined
}

declare module 'vue/types/vue' {
    interface Vue {
        $util: utilType
    }
}

declare module '@nuxt/types' {
    interface Context {
        $util: utilType
    }
}

const util: Plugin = (ctx, inject) => {
    inject('util', {
        optionalsElements: (response: any[], optionals: any[], index: number, limit?: number) => {
            let indexLimit: number | undefined

            let result: any[]

            if (response.length) {
                if (limit && response.length >= limit) {
                    result = response
                    indexLimit = index
                } else {
                    indexLimit = limit ? index + (limit - response.length) : undefined
                    result = [...response, ...optionals.slice(index, indexLimit)]
                }
            } else {
                indexLimit = limit && index + limit
                result = optionals.slice(index, indexLimit)
            }

            return {
                result,
                indexLimit
            }
        },
        replacePlaceholders,
        textShortener,
        urlCleaner,
        shadeText,
        upperFirst,
        host: (() => {
            if (ctx.req !== undefined) return 'https://' + ctx.req.headers.host

            if (window !== undefined) return 'https://' + window.location.host
        })(),
        metaInit: (tags: { [key: string]: string }[], title: string) => {
            const init: {
                meta: { [key: string]: string }[]
                title: string
            } = {
                meta: [],
                title: ''
            }

            if (tags.length) {
                tags.forEach((meta) => {
                    const name = Object.keys(meta)[0]

                    const value = Object.values(meta)[0]

                    const type = /og:/.test(name) ? 'property' : 'name'

                    !!value &&
                        init.meta.push({
                            [type]: name,
                            content: value,
                            hid: name
                        })
                })
            }

            init.title = (title || (ctx.app?.head as MetaInfo).title) as string

            return init
        }
    })
}

export default util
