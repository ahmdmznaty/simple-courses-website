




let ul = document.querySelector(".menu_ul")
let open = document.querySelector(".open")
let close = document.querySelector(".close")

ul.style.display = "flex"
if(window.innerWidth < 730){ul.style.display = "none"}

let menu = () => {
    if(window.innerWidth < 730){
        if(ul.style.display == "flex"){
            ul.style.display = "none"
            open.style.display = "block"
            close.style.display = "none"
        } else if(ul.style.display == "none"){
            ul.style.display = "flex"
            open.style.display = "none"
            close.style.display = "block"
        }
    }
}
window.addEventListener("resize", () => {
    if(window.innerWidth < 730) {
        ul.style.display = "none"
        open.style.display = "block"
        close.style.display = "none"
    }
    else if(window.innerWidth >= 730){
        ul.style.display = "flex"
        open.style.display = "none"
        close.style.display = "none"
    }
})































