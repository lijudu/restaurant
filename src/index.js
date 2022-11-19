import './styles.css'
import testMenu from '/Users/Lisa/Desktop/repos/restaurant/src/menu.js'
import testContact from '/Users/Lisa/Desktop/repos/restaurant/src/contact.js'
import { createTitle, createBlurb, fullTitle } from '/Users/Lisa/Desktop/repos/restaurant/src/home.js'


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

    // homeBtn.addEventListener('click', function() {
    //     fullTitle
    // })
    // menuBtn.addEventListener('click', testMenu)
    // contactBtn.addEventListener('click', testContact)

    bar.appendChild(homeBtn)
    bar.appendChild(menuBtn)
    bar.appendChild(contactBtn)

    homeBtn.addEventListener('click', function(){
        index.innerHTML = ""
        createHome()
        fullTitle()
    })
    
    menuBtn.addEventListener('click', function() {
        index.innerHTML = ""
        createHome()
        testMenu()
    })

    contactBtn.addEventListener('click', function(){
        index.innerHTML = ""
        createHome()
        testContact()
    })

    return bar;
}

function createHome() {
    const backImg = document.createElement('div');
    backImg.id = 'catImg';
    index.appendChild(backImg)
    const image = document.getElementById('catImg')
    image.style.backgroundImage = "url('/Users/Lisa/Desktop/repos/restaurant/dist/d47c346547c960bf39cab6e6088d2755.jpg')"

    const bar = createBar('bar');

    index.appendChild(bar)

}


createHome()

const returnHome = document.getElementById('home')
const showMenu = document.getElementById('menu')

// returnHome.addEventListener('click', function(){
//     index.innerHTML = ""
//     createHome()
//     fullTitle()
// })

// showMenu.addEventListener('click', function() {
//     index.innerHTML = ""
//     createHome()
//     testMenu()
// })

// contactBtn.addEventListener('click', function(){
//     index.innerHTML = ""
//     createHome()
//     testContact()
// })