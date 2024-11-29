export function logout(){
    const button = document.querySelector("#usuario")
    button.addEventListener("click", () => {
        localStorage.removeItem("token")
        window.location.reload()
    })
}