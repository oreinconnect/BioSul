window.addEventListener("scroll", function(){
    let header = document.querySelector('#header')
    header.classList.toggle('rolagem', window.scrollY > 500)
})

const url = "./Login/index.html"

import { verifyToken } from "../verify-token.js"
import { getName } from "../get-name.js"
import { logout } from "../logout.js"

verifyToken(url)

const name = await getName()
const nameP = document.querySelector("#usuario")
nameP.innerText = "USUARIO: "+name


logout()
