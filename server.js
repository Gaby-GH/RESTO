import { createReadStream } from "node:fs"
import {readFile, writeFile} from "node:fs/promises"
import {createServer} from "node:http"
import { SaveNewUser, UpdateDataUser } from "./fonctions/account.js"

createServer(async (req, res) => {
    let url = new URL(req.url, `http://${req.headers.host}`)
    console.log(req.method, url.pathname)
    if (req.method == "GET"){
        if (url.pathname == "/"){
            let index = await readFile("./app/index/index.html")
            res.setHeader("Content-Type", "text/html")
            res.write(index)
        }else if(url.pathname == "/style.css"){
            let style = await readFile("./app/index/style.css")
            res.setHeader("Content-Type", "text/css")
            res.write(style)
        }else if(url.pathname == "/script.js"){
            let script = await readFile("./app/index/script.js")
            res.write(script)
        }else if(url.pathname == "/images/burger.jpg"){
            let burger = await readFile("./images/burger.jpg")
            res.write(burger)
        }else if(url.pathname == "/logo.avif"){
            let logo = await readFile("./images/logo_gab_burger.avif")
            res.write(logo)

        }else if(url.pathname == "/carte.html"){
            let carte = await readFile("./app/carte/carte.html")
            res.write(carte)
        }else if(url.pathname == "/carte.css"){
            let carte = await readFile("./app/carte/carte.css")
            res.write(carte)
        }else if(url.pathname == "/carte.js"){
            let carte = await readFile("./app/carte/carte.js", "utf8")
            res.write(carte)
        }else if(url.pathname == "/images/eating_burger.jpg"){
            let burger = await readFile("./images/eating_burger.jpg")
            res.write(burger)
        }else if(url.pathname == "/storage/menu.json"){
            let file = await readFile("./storage/menu.json")
            res.write(file)
        }else if(url.pathname == "/storage/menu_accompagnements.json"){
            let file = await readFile("./storage/menu_accompagnements.json")
            res.write(file)
        }else if(url.pathname == "/storage/menu_boissons.json"){
            let file = await readFile("./storage/menu_boissons.json")
            res.write(file)
    
        }else if(url.pathname == "/infos.html"){
            let infos = await readFile("./app/infos/infos.html")
            res.write(infos)
        }else if (url.pathname == "/infos.css"){
            let file = await readFile("./app/infos/infos.css")
            res.write(file)
        }else if (url.pathname == "/infos.js"){
            let file = await readFile("./app/infos/infos.js")
            res.write(file)
        }else if (url.pathname == "/images/info_back.jpg"){
            let file = await readFile("./images/info_back.jpg")
            res.write(file)
        }else if(url.pathname == "/storage/horaires.json"){
            let file = await readFile("./storage/horaires.json")
            res.write(file)

        }else if(url.pathname == "/create.html"){
            let file = await readFile("./app/create_account/create.html")
            res.write(file)
        }else if(url.pathname == "/create.css"){
            let file = await readFile("./app/create_account/create.css")
            res.write(file)
        }else if(url.pathname == "/create.js"){
            let file = await readFile("./app/create_account/create.js")
            res.write(file)

        }else if(url.pathname == "/connexion.html"){
            let file = await readFile("./app/connexion/connexion.html")
            res.write(file)
        }else if(url.pathname == "/connexion.css"){
            let file = await readFile("./app/connexion/connexion.css")
            res.write(file)
        }else if(url.pathname == "/connexion.js"){
            let file = await readFile("./app/connexion/connexion.js")
            res.write(file)
        }else if(url.pathname == "/storage/compte.json"){
            let file = await readFile("./storage/compte.json")
            res.write(file)

        } else{
            console.log("not found")
            res.writeHead(404)
        }
    
    }else if (req.method == "PUT"){
        if (url.pathname == "/storage/compte.json"){
            req.on("data", (chunk) => {
                SaveNewUser(chunk.toString("utf8"))
            })

            res.writeHead(200)
        
        }else if (url.pathname == "/storage/user.json"){
            req.on("data", (chunk) => {
                UpdateDataUser(chunk.toString("utf8"))
            })

            res.writeHead(200)
        
        }else {
            console.log("PUT", "not found")
            res.writeHead(404)
        }
    }


    


    res.end()
}).listen(3008)