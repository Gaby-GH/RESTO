import { readFile, writeFile } from "node:fs/promises"

export async function InitDataUser(){
    let defaultData = {
        "admin": false
    }

    await writeFile("storage/user.json", JSON.stringify(defaultData, null, 2))
}

export async function SaveNewUser(data_user) {
    let file = await readFile("storage/compte.json")
    let USERS = await JSON.parse(file)

    USERS.push(JSON.parse(data_user))
    await writeFile("storage/compte.json", JSON.stringify(USERS, null, 2))
}

export async function UpdateDataUser(Data) {
    let file = await readFile("storage/user.json")
    let user = await JSON.parse(file)

    // Pas fait avec Data pas trouver comment dico."i[0]"
    
    user.admin = true

    await writeFile("storage/user.json", JSON.stringify(user, null, 2))
}