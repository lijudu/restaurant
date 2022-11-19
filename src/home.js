function createTitle(id, text) {
    const cafeTitle = document.createElement('div')
    cafeTitle.setAttribute('id', id)
    cafeTitle.innerText = text

    return cafeTitle
}

function createBlurb(id) {
    const mainText = document.createElement('div')
    mainText.setAttribute('id', id)
    const mainBlurb = document.createElement('p')
    
    mainText.appendChild(mainBlurb)
    mainBlurb.innerText = "DroLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa ultricies mi quis hendrerit dolor magna eget est lorem."

    return mainText
}

function fullTitle() {
    // const index = document.getElementById('index')
    // index.innerText = ""
    const mainTitle = createTitle('title', 'Cat Cat Catfe');
    const mainBlurb = createBlurb('blurb')

    index.appendChild(mainTitle)
    index.appendChild(mainBlurb)
}


export { createTitle, createBlurb, fullTitle }