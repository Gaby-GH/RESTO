let btn = document.querySelector("#btn")
let input_name = document.querySelector("#name")
let input_password = document.querySelector("#password")
let p_name = document.querySelector("#p_name")
let p_pw = document.querySelector("#p_pw")

async function UpdateDataUser() {
    let data = [["admin", true]]

    let file = await fetch("http://localhost:3008/storage/user.json", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })

    console.log(file.ok)
}

async function Connexion(name, password) {
    let file = await fetch("http://localhost:3008/storage/compte.json")
    let users = await file.json()

    let connected = false
    let admin = false

    for (let i of users){
        if (i.name == name && i.code == password){
            connected = true
            admin = i.admin
        }
    }

    if (connected){
        console.log("connecté(e)")

        if (admin == true){
            UpdateDataUser()
        }

        let div = document.querySelector("#div_connexion")
        let temp = document.querySelector("#temp_retour_menu")

        div.innerHTML = temp.innerHTML

    }else{
        console.log("echec de la connexion")
        let div = document.querySelector("#div_connexion")
        let temp = document.querySelector("#temp_ressayer")

        div.innerHTML = temp.innerHTML
    }
}

btn.addEventListener("click", () => {
    if (input_name.value.length < 2 || input_name.value.includes(" ")){
        p_name.removeAttribute("hidden")
        input_name.style.border = "2px solid red"
    }

    if (input_password.value.length < 2 || input_password.value.includes(" ")){
        p_pw.removeAttribute("hidden")
        input_password.style.border = "2px solid red"
    }

    if (input_name.value.length >= 2 && !input_name.value.includes(" ") && input_password.value.length >= 2 && !input_password.value.includes(" ")){
        Connexion(input_name.value, input_password.value)
    }
})