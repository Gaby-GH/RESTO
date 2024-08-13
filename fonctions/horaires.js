import { readFile, writeFile } from "node:fs/promises"

export async function ChangeHoraires(new_horaires){

    let file = await readFile("storage/horaires.json")
    let horaires = await JSON.parse(file)
    new_horaires = JSON.parse(new_horaires)

    if (new_horaires.service == "midi"){
        horaires[new_horaires.index].midi = [new_horaires.ouverture, new_horaires.fermeture]
    }else if(new_horaires == "soir"){
        horaires[new_horaires.index].soir = [new_horaires.ouverture, new_horaires.fermeture]
    }

    await writeFile("storage/horaires.json", JSON.stringify(horaires, null, 2))
}