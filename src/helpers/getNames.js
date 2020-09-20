const getNames = num => {
    return fetch(`https://randomuser.me/api/?results=${num}`)
        .then(response => { return response.json() })
        .then(data => {
            const names = data.results.map(obj => { return obj.name.first })
            const sessionData = sessionStorage.getItem('Names')

            if (sessionData) {
                // append the data from session data incase of loadmore
                const updatedData = [...JSON.parse(sessionData), ...names];
                sessionStorage.setItem('Names', JSON.stringify(updatedData))
                return names;
            }
            else {
                // initial load
                sessionStorage.setItem('Names', JSON.stringify(names))
                return names
            }
        })
        .catch(error => { console.error('Something went upon fetching the dogs:', error.message) })
}

export default getNames;