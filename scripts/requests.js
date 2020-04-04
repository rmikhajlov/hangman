const getPuzzle = async (wordCount) => {
    const response = await fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    
    if (response.status === 200) {
        const data = await response.json()
        return data.puzzle
    } else {
        throw new Error('Unable to get puzzle')
    }
}

const getCountry = async (countryCode) => {
    const response = await fetch('//restcountries.eu/rest/v2/all')
    if (response.status === 200) {
        const data = await response.json()
        return data.find((element) => element.alpha2Code === countryCode)
    } else {
        throw new Error ('Unable to fetch country data')
    }
}

const getLocation = async () => {
    const response = await fetch('//ipinfo.io/json?token=5ef445a6ae9d70')
        if (response.status === 200) {
            const data = await response.json()
            return data
        } else {
            throw new Error('Unable to fetch data')
        }
}

getCurrentCountry = async () => {
    const location = await getLocation()
    const currentCountry = await getCountry(location.country)
    return currentCountry
}