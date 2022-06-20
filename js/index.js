import { Router } from './router.js'

const router = new Router()
const buttonHome = document.querySelector('.home')
const buttonExplorer = document.querySelector('.explorer')
const buttonUniverse = document.querySelector('.universe')

router.add('/', '/pages/home.html')
router.add('/universe', '/pages/universe.html')
router.add('/explorer', '/pages/explorer.html')

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()

buttonHome.addEventListener('click', function () {
  document.body.style.backgroundImage = "url('../img/mountains-universe-1.jpg')"

  buttonHome.classList.add('active')
  buttonUniverse.classList.remove('active')
  buttonExplorer.classList.remove('active')
})

buttonUniverse.addEventListener('click', function () {
  document.body.style.backgroundImage = "url('../img/mountains-universe-2.jpg')"

  buttonUniverse.classList.add('active')
  buttonHome.classList.remove('active')
  buttonExplorer.classList.remove('active')
})

buttonExplorer.addEventListener('click', function () {
  document.body.style.backgroundImage = "url('../img/mountains-universe-3.jpg')"

  buttonExplorer.classList.add('active')
  buttonUniverse.classList.remove('active')
  buttonHome.classList.remove('active')
})

buttonExplorer.addEventListener('click', function () {
  document.body.style.backgroundImage = "url('../img/mountains-universe-3.jpg')"

  buttonExplorer.classList.add('active')
  buttonUniverse.classList.remove('active')
  buttonHome.classList.remove('active')
})
