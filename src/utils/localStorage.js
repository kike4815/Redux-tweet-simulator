export const getStateLocalStorage = () => {
    const tweetsLocal = localStorage.getItem('tweets')
    if (tweetsLocal === null) return undefined
    return JSON.parse(tweetsLocal)
}

export const setLocalStorage = (state) => {
    localStorage.setItem('tweets', JSON.stringify(state))
}
