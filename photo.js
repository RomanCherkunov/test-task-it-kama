const inputElement = findUrlInput()
const photoItem = findPhotoItem()
const imagesUrls = []
bindClick(inputElement)
restorePhoto()




function findUrlInput() {
    return document.querySelector('.photo input')
}

function findPhotoItem() {
    return document.querySelector('.photo-item')
}

function bindClick(inputElement) {
    inputElement.addEventListener('keyup', (event) => {
        if(event.key === 'Enter') {
            const image = document.createElement('img')
            image.setAttribute('src', `${inputElement.value}`)
            image.classList.add('image')
            photoItem.append(image)
        //    photoItem.setAttribute('src', `${inputElement.value}`)
            imagesUrls.push(inputElement.value)
        }
        localStorage.setItem('savedImages', JSON.stringify(imagesUrls))
    })
}

function restorePhoto() {
    let savedImages = localStorage.getItem('savedImages')
    if(photoItem){
        savedImages = JSON.parse(savedImages)
        savedImages.forEach(el => {
            imagesUrls.push(el)
            const image = document.createElement('img')
            image.setAttribute('src', el)
            image.classList.add('image')
            photoItem.appendChild(image)
        })
    }
}