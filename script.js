const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('dropdown')[0]


toggleButton.addEventListener('click',()=>{
    navbarLinks.classList.toggle('active')
})