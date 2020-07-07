const getNames = num => {
    return fetch(`https://randomuser.me/api/?results=${num}`)
        .then(r => { return r.json() })
        .then(d => { return d.results.map(o => { return o.name.first }) })
        .catch(e => { console.error('Something went upon fetching the dogs:', e.message) })
}

export default getNames;