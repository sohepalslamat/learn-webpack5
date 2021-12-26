import join from 'lodash/join'

const btn = document.createElement('button')
btn.innerHTML = join(['Press', 'Me'], ' ')
consolle.log('hi')
btn.onclick = () => {
    const p = document.createElement('p')
    p.innerText = "Hi Btn"
    document.body.appendChild(p)
}

document.body.appendChild(btn)

