import loaderToggler from './loader'

const request = async (reource) => {
    loaderToggler(true)
    const req = await fetch(reource)
    if (!req.ok) {
        loaderToggler(false)
        throw new Error("Something went wrong :(")
    }
    const data = await req.json()
    loaderToggler(false)
    return data
}

export default request