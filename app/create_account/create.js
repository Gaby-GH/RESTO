let input_name = document.querySelector("#user")
let input_mdp = document.querySelector("#password")
let button = document.querySelector("#btn")

let p_red_name = document.querySelector("#p_red_name")
let p_red_mdp = document.querySelector("#p_red_mdp")

function SetPage(){
    let div = document.querySelector("#div_create")
    let template = document.querySelector("#temp_new_page")

    div.innerHTML = template.innerHTML
}

async function Send(user_name, password) {
    let new_account = {
        "name": `${user_name}`,
        "code": `${password}`,
        "admin": false
    }
    let response = await fetch("http://localhost:3008/storage/compte.json", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(new_account)
    })

    console.log(response)

    if (response.ok == true){
        SetPage()
    }
}

button.addEventListener("click", () => {
    console.log(input_mdp.value, input_name.value)

    if (input_name.value.length < 2 || input_name.value.includes(" ")){
        input_name.style.border = "2px solid red"
        p_red_name.removeAttribute("hidden")
    }

    if (input_mdp.value.length < 2 || input_mdp.value.includes(" ")){
        input_mdp.style.border = "2px solid red"
        p_red_mdp.removeAttribute("hidden")
    }

    if (input_mdp.value.length >= 2 && input_name.value.length >= 2 && !input_name.value.includes(" ") && !input_mdp.value.includes(" ")){
        Send(input_name.value, input_mdp.value)
    }
})