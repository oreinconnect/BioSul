export async function verifyToken(url){
    const token = localStorage.getItem("token")

    if(!token){
        window.location.href = url
        return
    }

    const response = await fetch("https://edutecbackend-drab.vercel.app/verify",{
        headers:{
            "Authorization": token
        }
    }).then(response => response.json())
    

    if(!response.ok){
        alert(response.message)
        window.location.href = url
    }
}

verifyToken()