export const upperFirst = (sourceText: string) => {
    return sourceText.charAt(0).toUpperCase() + sourceText.substr(1)
}

export const replacePlaceholders = (text?: string, placeholders?: { [key: string]: string }[]) => {
    if (!text?.trim()) return ''

    return placeholders?.reduce((prev, placeholder) => {
        return prev.replace(Object.keys(placeholder)[0], Object.values(placeholder)[0])
    }, text)
}

export const textShortener = (text: string, length: number) => {
    if (!text) return ''

    let joined = ''

    const splited = text.split(' ')

    for (const word of splited) {
        if (joined.length + word.length > length) {
            joined = joined.concat('...')

            break
        }

        joined = joined.concat(' ' + word)
    }

    return joined
}

const latinCharacters = 'ÃÀÁÄÂÈÉËÊÌÍÏÎÒÓÖÔÙÚÜÛãàáäâèéëêìíïîòóöôùúüûÑñÇç'
const asciiCharacters = 'AAAAAEEEEIIIIOOOOUUUUaaaaaeeeeiiiioooouuuunncc'
const replaceMap: { [key: string]: string } = {}

for (let i = 0, j = latinCharacters.length; i < j; i++)
    replaceMap[latinCharacters.charAt(i)] = asciiCharacters.charAt(i)

export const latinCharactersCleaner = (text: string) => {
    if (!text) return ''

    const asciiAlphanumeric = []

    for (let i = 0, j = text.length; i < j; i++) {
        const c = text.charAt(i)

        if (replaceMap[c]) asciiAlphanumeric.push(replaceMap[c])
        else asciiAlphanumeric.push(c)
    }

    return asciiAlphanumeric.join('').trim()
}

export const urlCleaner = (text: string) => {
    if (!text) return ''

    return latinCharactersCleaner(text)
        .toLowerCase()
        .replace(/[^A-Za-z0-9\s]+/g, '')
        .replace(/[^A-Za-z0-9]+/g, '-')
}

export const shadeText = (text: string, term: string) => {
    const index = latinCharactersCleaner(text).toLowerCase().indexOf(latinCharactersCleaner(term).toLowerCase())

    if (index >= 0) {
        const coincidence = text.substring(index, index + term.length)

        const shade = `<span style="color: #000000; font-weight: 600">${coincidence}</span>`

        return text.replace(coincidence, shade)
    } else return text
}
