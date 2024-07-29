import {readFile, writeFile} from "node:fs/promises"
import {createServer} from "node:http"

createServer(async (req, res) => {
    let url = new URL(req.url, `http://${req.headers.host}`)
    console.log(req.method, url.pathname)
    if (req.method == "GET"){
        if (url.pathname == "/"){
            let index = await readFile("./app/index/index.html", "utf8")
            
            res.setHeader("Content-Type", "text/html")
            res.write(index)
        }else{
            res.writeHead(404)
        }
    }

    


    res.end()
}).listen(3008)