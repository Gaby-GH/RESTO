// VOIR QUELLE REQUETE MEILLEUR : fetch() , xmlhttp() ?

async function afficherMenu() {
    const reponse = await fetch("http://localhost:3008/storage/menu.json")
    const menu = await reponse.json()
    console.log(menu)
    

    let carte = document.querySelector("#div_carte_burger")
    let template = document.querySelector("#temp_plats")

    for (let i of menu){
        // AFFICHER LE MENU
    }
}

afficherMenu()
