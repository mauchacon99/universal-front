export const endpoints = {
    baseUrl: 'https://test/api/v1' /* Cambiar por url real */,
    pages: {
        home: {
            path: '/pages/home',
            feedbacks: {}
        }
    },
    layout: {}
}

export type endpointsStruct = typeof endpoints
