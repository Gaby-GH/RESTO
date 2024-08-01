import {readFile} from "node:fs/promises"

console.log("ca marche pas")


let path = "../../storage/menu.json"

let menu = await readFile(path, "utf8")
menu =  JSON.parse(menu)

let carte_burger = document.querySelector("#div_carte_burger")

for (let i of menu){
    let element = document.createElement("p")
    element.textContent = i
    carte_burger.append(element)
}