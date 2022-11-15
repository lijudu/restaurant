import catSource from './assets/zhang-kaiyv-unsplash.jpg'
import './styles.css'

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


function createHome() {

    const index = document.getElementById('index')
    const backImg = document.createElement('div')
    const cafeTitle = document.createElement('div')

    const bar = createBar('bar');
    
    cafeTitle.id = 'title'
    backImg.id = 'catImg'
    
    cafeTitle.innerText = 'Cat Cat Catfe'

    index.appendChild(backImg)
    index.appendChild(bar) 
    index.appendChild(cafeTitle)

    const image = document.getElementById('catImg')
    
    image.style.backgroundImage = "url('/Users/Lisa/Desktop/repos/restaurant/dist/d47c346547c960bf39cab6e6088d2755.jpg')"
    
    return 
}

function loadHome() {
    const index = document.getElementById('index');

    index.appendChild(createHome());
}

loadHome()



