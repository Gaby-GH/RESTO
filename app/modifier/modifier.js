// Menu
// Append

let select = document.querySelector("#select_cate")
let input_name = document.querySelector("#input_name")
let input_description = document.querySelector("#input_description")
let input_prix = document.querySelector("#input_prix")

let btn_append = document.querySelector("#btn_valider")

let p_red_name = document.querySelector("#p_red_name")
let p_red_description = document.querySelector("#p_red_des")
let p_red_prix = document.querySelector("#p_red_prix")

async function AppendRepas(){
    
    if (input_name.value == ""){
        p_red_name.removeAttribute("hidden")
    }

    if (select.value == "menu" && input_description.value == ""){
        p_red_description.removeAttribute("hidden")
    }

    if (input_prix.value == ""){
        p_red_prix.removeAttribute("hidden")
    }

    if (input_name != "" && (select.value != "menu" || input_description.value != "") && input_prix != ""){
        
        if (select.value == "menu"){

            let data = {
                name: input_name.value,
                ingredients : input_description.value, 
                prix: input_prix.value
            }

            await fetch("/storage/menu.json", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data) 
            }).then(() => {
                input_name.value = ""
                input_description.value = ""
                input_prix.value = ""
            })

        }else if (select.value == "boissons"){

            let data = {
                name: input_name.value,
                prix: input_prix.value
            }

            await fetch("/storage/menu_boissons.json", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }).then(() => {
                input_name.value = ""
                input_description.value = ""
                input_prix.value = ""
            })

        }else if (select.value == "accompagnements"){
            let data = {
                name: input_name.value,
                prix: input_prix.value
            }

            await fetch("/storage/menu_accompagnements.json", {
                method: "PUT",
                headers: {
                    "Conent-Type": "application/json"
                },
                body: JSON.stringify(data)
            }).then(() => {
                input_name.value = ""
                input_description.value = ""
                input_prix.value = ""
            })

        }
    }
}

btn_append.addEventListener("click", AppendRepas)

// delete

let input_name_delete = document.querySelector("#delete_name")
let btn_delete = document.querySelector("#btn_delete")
let p_red_delete = document.querySelector("#p_red_delete")

async function DeleteRepas(){

    if (input_name_delete.value.length != 0){

        await fetch("storage/menu.json", {
            method: "DELETE",
            body: input_name_delete.value
        }).then(() => {
            input_name_delete.value = ""
        })

    }else{
        p_red_delete.removeAttribute("hidden")
    }
}

btn_delete.addEventListener("click", DeleteRepas)


// Horaires


