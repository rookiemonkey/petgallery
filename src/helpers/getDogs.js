const getDogs = num => {
    return fetch(`https://dog.ceo/api/breeds/image/random/${num}`)
        .then(response => { return response.json() })
        .then(data => {

            const sessionData = sessionStorage.getItem('Dogs')

            if (sessionData) {
                // append the data from session data incase of loadmore
                const updatedData = [...JSON.parse(sessionData), ...data.message];
                sessionStorage.setItem('Dogs', JSON.stringify(updatedData))
                return data.message
            }
            else {
                // initial load
                sessionStorage.setItem('Dogs', JSON.stringify(data.message))
                return data.message
            }
        })
        .catch(error => { console.error('Something went upon fetching the dogs:', error.message) })
}

export default getDogs;