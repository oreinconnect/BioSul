export async function getName() {
    const token = localStorage.getItem("token")

    if(!token){
        return
    }

    const response = await fetch("https://edutecbackend-drab.vercel.app/getname", {
        headers: {
            "Authorization": token
        }
    }).then(response => response.json())

    return response.name
}