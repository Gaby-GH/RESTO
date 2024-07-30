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

        }else if(url.pathname == "/infos.html"){

            let infos = await readFile("./app/infos/infos.html")
            res.write(infos)

        } else{
            console.log("not found")
            res.writeHead(404)
        }
    }

    


    res.end()
}).listen(3008)