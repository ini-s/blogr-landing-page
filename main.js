const openMenu = document.querySelector(".open-menu")
const closeMenu = document.querySelector(".close-menu")
const sideNav = document.querySelector(".side-menu")
const sideNavlist = document.querySelectorAll(".side-nav .nav-list")

openMenu.addEventListener("click", () => {
    sideNav.classList.add("active")
    closeMenu.classList.add("active")
    openMenu.classList.add("inactive")
})

closeMenu.addEventListener("click", () => {
    sideNav.classList.remove("active")
    closeMenu.classList.remove("active")
    openMenu.classList.remove("inactive")
})

sideNavlist.forEach(list => {
    list.addEventListener("click", (e) => {
        console.log(e.target.parentElement.lastElementChild)
        const dropdown = e.target.parentElement.lastElementChild
        console.log(list)
        dropdown.classList.toggle("active")
    })
})

