// Gestion des menus

async function afficherMenu() {
    const reponse = await fetch("http://localhost:3008/storage/menu.json")
    const menu = await reponse.json()
    console.log(menu)

    let carte_burger = document.querySelector("#div_carte_burger")
    let template = document.querySelector("#temp_plats")

    for (let i of menu){
        let clone = template.content.cloneNode(true)
        clone.querySelector(".title_plat").textContent = i.name
        clone.querySelector(".ingredients_plat").textContent = i.ingredients
        clone.querySelector(".prix_burger").textContent = i.prix
        carte_burger.append(clone)
    }
}

async function afficherMenuAccompagnements(){
    const reponse_accompagnements = await fetch("http://localhost:3008/storage/menu_accompagnements.json")
    const menu_accompagnements = await reponse_accompagnements.json()
    console.log(menu_accompagnements)

    let carte_accompagnements = document.querySelector("#div_carte_accompagnements")
    let template = document.querySelector("#temp_plats")

    for (let u of menu_accompagnements){
        let clone = template.content.cloneNode(true)
        clone.querySelector(".title_plat").textContent = u.name
        clone.querySelector(".prix_burger").textContent = u.prix
        carte_accompagnements.append(clone)
    }
}

async function afficherMenuBoissons(){
    const reponse_boissons = await fetch("http://localhost:3008/storage/menu_boissons.json")
    const menu_boissons = await reponse_boissons.json()
    console.log(menu_boissons)

    let carte_boissons = document.querySelector("#div_carte_boissons")
    let template = document.querySelector("#temp_plats")

    for (let y of menu_boissons){
        let clone = template.content.cloneNode(true)
        clone.querySelector(".title_plat").textContent = y.name
        clone.querySelector(".prix_burger").textContent = y.prix

        carte_boissons.append(clone)
    }
}

afficherMenu()
afficherMenuAccompagnements()
afficherMenuBoissons()



// Gestion style de la page


// Finir Scrollspy --->
// Et regler problemes


let observer = null
let ratio = 0.1
let number = 0

function ElementAnimation(entries, observer){
    number += 1
    
    entries.forEach(function (entry){
        if (entry.intersectionRatio > 0 && number > 2){
            console.log(entry.target)
            entry.target.classList.add("animation")            
        }
    })
}

function Observe(elements){
    let y = Math.round(window.innerHeight * ratio)

    observer = new IntersectionObserver(ElementAnimation, {
        //rootMargin: `-${window.innerHeight - y - 1}px 0px -${y}px 0px`
    })
    spies.forEach((elem) => {
        observer.observe(elem)
    })

}

let spies = document.querySelectorAll(".spy")

if (spies.length > 0){
    spies.forEach((spy) => {
        Observe(spy)
        window.addEventListener("resize", () => {
            Observe(spies)
        })
    })
}