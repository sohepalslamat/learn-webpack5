// import el from './index1'
import './main.css'

const element = document.createElement('h2')
element.innerHTML = "hello webpack"
element.classList.add('red')
const img = document.createElement('img')
img.src = require('./webpack.png')

document.body.appendChild(element)
document.body.appendChild(img)