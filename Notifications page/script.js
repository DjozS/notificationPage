const readBtn = document.querySelector('.readBtn')
const mark = document.querySelector('.mark')
const angela = document.querySelector('.angela')
const jacob = document.querySelector('.jacob')
const dot1 = document.querySelector('.dot1')
const dot2 = document.querySelector('.dot2')
const dot3 = document.querySelector('.dot3')
const number = document.querySelector('.number')
readBtn.addEventListener("click", function(){
    mark.style.background = "white"
    angela.style.background = "white"
    jacob.style.background = "white"
    dot1.style.display = "none"
    dot2.style.display = "none"
    dot3.style.display = "none"
    number.style.display = "none"
})