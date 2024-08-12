import {readFile, writeFile} from "node:fs/promises"

export async function AppendRepasMenu(repas){
    let file = await readFile("storage/menu.json")
    let menu = await JSON.parse(file)
    repas = JSON.parse(repas)

    menu.push(repas)

    await writeFile("storage/menu.json", JSON.stringify(menu, null, 2))
}

export async function AppendRepasMenuBoissons(boisson){
    let file = await readFile("storage/menu_boissons.json")
    let menu_boissons = await JSON.parse(file)
    boisson = JSON.parse(boisson)

    menu_boissons.push(boisson)

    await writeFile("storage/menu_boissons.json", JSON.stringify(menu_boissons, null, 2))
}

export async function AppendRepasMenuAccompagnements(repas){
    let file = await readFile("storage/menu_accompagnements.json")
    let menu_accompagnements = await JSON.parse(file)
    repas = JSON.parse(repas)

    menu_accompagnements.push(repas)

    await writeFile("storage/menu_accompagnements.json", JSON.stringify(menu_accompagnements, null, 2))
}

export async function DeleteRepas(name){
        
    let file_1 = await readFile("storage/menu.json")
    let menu = await JSON.parse(file_1)
    let file_2 = await readFile("storage/menu_boissons.json")
    let menu_boissons = await JSON.parse(file_2)
    let file_3 = await readFile("storage/menu_accompagnements.json")
    let menu_accompagnements = await JSON.parse(file_3)

    for (let i in menu){
        if (menu[i].name == name){
            menu.splice(i, 1)
            await writeFile("storage/menu.json", JSON.stringify(menu, null, 2))
        }
    }
    
    for (let i in menu_boissons){

        if (menu_boissons[i].name == name){
            menu_boissons.splice(i, 1)
            await writeFile("storage/menu_boissons.json", JSON.stringify(menu_boissons, null, 2))
        }
    }

    for (let i in menu_accompagnements){
        if (menu_accompagnements[i].name == name){
            menu_accompagnements.splice(i, 1)
            await writeFile("storage/menu_accompagnements.json", JSON.stringify(menu_accompagnements, null, 2))
        }
    }
}