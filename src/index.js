import catSource from './assets/zhang-kaiyv-unsplash.jpg'
import './styles.css'

// function createHome() {

//     const catImg = document.createElement('div');
//     const createImg = document.createElement('img')
//     catImg.id = 'catImg'
//     createImg.id = 'backImg'
//     createImg.src = catSource
//     catImg.appendChild(createImg)

//     return catImg
// }

// function loadHome() {
//     const index = document.getElementById('index');
//     index.appendChild(createHome());
// }

// loadHome()


const index = document.getElementById('index')
const backImg = document.createElement('div')
const cafeTitle = document.createElement('div')
const topMenu = document.createElement('div')
const topList = document.createElement('LI')
const topHome = document.createElement('LI')
const topContact = document.createElement('LI')

cafeTitle.id = 'title'
topMenu.id = 'bar'
backImg.id = 'catImg'

cafeTitle.innerText = 'Cat Cat Catfe'
topList.innerText = 'Menu'
topHome.innerText = 'Home'
topContact.innerText ='Contact'

index.appendChild(backImg)
index.appendChild(topMenu)
index.appendChild(cafeTitle)

const bar = document.getElementById('bar')
const image = document.getElementById('catImg')

image.style.backgroundImage = "url('/Users/Lisa/Desktop/repos/restaurant/dist/d47c346547c960bf39cab6e6088d2755.jpg')"

bar.appendChild(topHome)
bar.appendChild(topList)
bar.appendChild(topContact)

