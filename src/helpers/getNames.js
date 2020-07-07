const getNames = num => {
    return fetch(`https://randomuser.me/api/?results=${num}`)
        .then(r => { return r.json() })
        .then(d => {
            const names = d.results.map(o => { return o.name.first })
            sessionStorage.setItem('Names', JSON.stringify(names))
            return names
        })
        .catch(e => { console.error('Something went upon fetching the dogs:', e.message) })
}

export default getNames;