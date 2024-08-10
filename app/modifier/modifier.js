// delete

let input_name_delete = document.querySelector("#delete_name")
let btn_delete = document.querySelector("#btn_delete")
let p_red_delete = document.querySelector("#p_red_delete")

async function DeleteRepas(){

    if (input_name_delete.value.length != 0){

        await fetch("storage/menu.json", {
            method: "DELETE",
            body: input_name_delete.value
        })

    }else{
        p_red_delete.removeAttribute("hidden")
    }
}

btn_delete.addEventListener("click", DeleteRepas)

// Append

