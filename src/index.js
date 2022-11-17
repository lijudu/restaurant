import catSource from './assets/zhang-kaiyv-unsplash.jpg'
import './styles.css'

const index = document.getElementById('index');

function createBtn(id, text) {
    const btn = document.createElement('button');
    btn.setAttribute('id', id);
    const span = document.createElement('span');
    span.innerText = text;
    btn.appendChild(span);
   
    return btn;
}


function createBar(id) {
    const bar = document.createElement('div');
    bar.setAttribute('id', id);

    const homeBtn = createBtn('home', 'Home');
    const menuBtn = createBtn('menu', 'Menu');
    const contactBtn = createBtn('contact', 'Contact');

    bar.appendChild(homeBtn)
    bar.appendChild(menuBtn)
    bar.appendChild(contactBtn)

    return bar;
}

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

function createHome() {
    const backImg = document.createElement('div');

    const bar = createBar('bar');
    const mainTitle = createTitle('title', 'Cat Cat Catfe');
    const mainBlurb = createBlurb('blurb')
    
    backImg.id = 'catImg';

    index.appendChild(backImg)
    index.appendChild(bar) 
    index.appendChild(mainTitle)
    index.appendChild(mainBlurb)

    const image = document.getElementById('catImg')
    
    image.style.backgroundImage = "url('/Users/Lisa/Desktop/repos/restaurant/dist/d47c346547c960bf39cab6e6088d2755.jpg')"
    
}


createHome()


