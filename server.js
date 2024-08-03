import { createReadStream } from "node:fs"
import {readFile, writeFile} from "node:fs/promises"
import {createServer} from "node:http"

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

        } else{
            console.log("not found")
            res.writeHead(404)
        }
    }

    


    res.end()
}).listen(3008)