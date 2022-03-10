const btnBurger = document.getElementById('btnBurger')

btnBurger.addEventListener('click', toggleMenu)

function toggleMenu() {
  const navCollapse = document.getElementById('navCollapse')
  const menu = document.getElementById('navMenu')

  navCollapse.classList.toggle('active')
  menu.classList.toggle('active')
  btnBurger.classList.toggle('active')
}