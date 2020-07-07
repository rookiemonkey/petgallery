const setImage = url => {
    fetch(url)
        .then(res => { return res.blob() })
        .then(data => {
            const url = URL.createObjectURL(data)
            sessionStorage.setItem('ChosenDog', url)
        })
        .catch(err => { console.error('There was an error upon saving an image to localstorage') })
}

export default setImage;