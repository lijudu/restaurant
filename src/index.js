import catImg from './assets/zhang-kaiyv-unsplash.jpg'
import './styles.css'

const index = document.getElementById('index')
const cafeTitle = document.createElement('div')
const topMenu = document.createElement('div')
const topList = document.createElement('LI')
const topHome = document.createElement('LI')
const topContact = document.createElement('LI')


index.style.backgroundImage = "url('/Users/Lisa/Desktop/repos/restaurant/dist/d47c346547c960bf39cab6e6088d2755.jpg')"

cafeTitle.id = 'title'
topMenu.id = 'bar'

cafeTitle.innerText = 'Cat Cat Catfe'
topList.innerText = 'Menu'
topHome.innerText = 'Home'
topContact.innerText ='Contact'


index.appendChild(topMenu)
index.appendChild(cafeTitle)

const bar = document.getElementById('bar')

bar.appendChild(topHome)
bar.appendChild(topList)
bar.appendChild(topContact)
