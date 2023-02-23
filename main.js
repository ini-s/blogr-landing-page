const open = document.querySelector(".open-menu")
const closeMenu = document.querySelector(".close-menu")
const sideNav = document.querySelector(".side-menu")
const navList = document.querySelectorAll(".nav-list")
const sideDropdown = document.querySelectorAll(".side-dropdown")

open.addEventListener("click", () => {
    sideNav.classList.add("active")
    closeMenu.classList.add("active")
    open.classList.add("inactive")
})

closeMenu.addEventListener("click", () => {
    sideNav.classList.remove("active")
    closeMenu.classList.remove("active")
    open.classList.remove("inactive")
})

// navList.forEach(list => {
//     list.addEventListener("click", () => {
//         console.log(list)
//         sideDropdown.forEach(dropdown => {
//             console.log(dropdown)
//             dropdown.classList.toggle("active")
//         })
//     })
// })
