window.addEventListener("scroll", function(){
    let header = document.querySelector('#header')
    header.classList.toggle('rolagem', window.scrollY > 500)
})

const url = "./Login/index.html"

import { verifyToken } from "../verify-token.js"

verifyToken(url)