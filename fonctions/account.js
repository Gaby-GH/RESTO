import { readFile, writeFile } from "node:fs/promises"

export async function SaveNewUser(data_user) {
    let file = await readFile("storage/compte.json")
    let USERS = await JSON.parse(file)

    USERS.push(JSON.parse(data_user))
    await writeFile("storage/compte.json", JSON.stringify(USERS, null, 2))
}