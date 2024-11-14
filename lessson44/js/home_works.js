const charactersList = document.querySelector('#charactersList')

const fetcher = (url) => {
    const request = new XMLHttpRequest()
    request.open('GET', url)
    request.setRequestHeader('Content-type', 'application/json')
    request.responseType = 'json'
    request.send()
    return request
}

const renderCharactersList = (data) => {
    data.forEach((character) => {

        const characterCard = document.createElement('div')
        characterCard.classList.add('character-card')

        const characterImage = document.createElement('img')
        characterImage.setAttribute('src', character.image)

        const characterName = document.createElement('p')
        characterName.innerText = character.name

        const characterAge = document.createElement('span')
        characterAge.innerText = `Age: ${character.age}`

        characterCard.append(characterImage)
        characterCard.append(characterName)
        characterCard.append(characterAge)

        charactersList.append(characterCard)
    })
}

const request = fetcher('../data/persons.json')
const request2 = fetcher('../data/todos.json')

request.onload = () => renderCharactersList(request.response)
request2.onload = () => console.log(request2.response)
