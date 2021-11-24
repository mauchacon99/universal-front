const months = [
    'enero',
    'febrero',
    'marzo',
    'abril',
    'mayo',
    'junio',
    'julio',
    'agosto',
    'septiembre',
    'octubre',
    'noviembre',
    'diciembre'
]

export const currentDate = () => {
    const now = new Date()

    return {
        year: now.getFullYear().toString(),
        month: months[now.getMonth()],
        date: now.getDate().toString()
    }
}
