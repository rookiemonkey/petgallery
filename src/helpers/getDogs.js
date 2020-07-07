const getDogs = num => {
    return fetch(`https://dog.ceo/api/breeds/image/random/${num}`)
        .then(r => { return r.json() })
        .then(d => {
            sessionStorage.setItem('Dogs', JSON.stringify(d.message))
            return d.message
        })
        .catch(e => { console.error('Something went upon fetching the dogs:', e.message) })
}

export default getDogs;