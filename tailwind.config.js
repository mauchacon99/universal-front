module.exports = {
    purge: [
        './components/**/*.{vue,js}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './nuxt.config.{js,ts}'
    ],
    theme: {
        container: {
            center: true
        },
        screens: {
            mb: '414px',
            xs: '540px',
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px'
        },
        extend: {
            colors: {
                blue:{
                    '500':'#006CAD'
                },
                golden:{
                    default:'#C4AD76'
                },
                gray:{
                    '500':'#707070'
                },
                brand: {
                    primary: {
                        DEFAULT: '#fff',
                        dark: '#fff'
                    },
                    secondary: {
                        DEFAULT: '#fff',
                        dark: '#fff'
                    },
                    tertiary: {
                        DEFAULT: '#fff',
                        dark: '#fff'
                    }
                },
                twitter: {
                    DEFAULT: '#47C7FA'
                },
                whatsapp: {
                    DEFAULT: '#1BD741'
                },
                messenger: {
                    DEFAULT: '#2196F3'
                },
                telegram: {
                    DEFAULT: '#039BE5'
                }
            },
            minHeight: {
                inherit: 'inherit'
            }
        }
    },
    variants: {
        extend: {
            borderWidth: ['hover', 'focus'],
            fontWeight: ['hover']
        },
        variants: {
            // ...
            container: []
        }
    },
    plugins: [require('@tailwindcss/line-clamp'), require('@tailwindcss/typography'), require('@tailwindcss/forms')]
}
