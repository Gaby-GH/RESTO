import {watch} from "node:fs/promises"
import {spawn} from "node:child_process"

function SpawnNode(){
    let [node, _, file] = process.argv

    let pr = spawn(node, [file])
    pr.stdout.on("data", (data) => {
        console.log(data.toString("utf8"))
    })
    
    pr.stderr.on("data", (data) => {
        console.log(data.toString("utf8"))
    })
    
    pr.on("close", (code) => {
        console.log("close " + code)
    })
}

let ChildNodeProcess = SpawnNode()

let watcher = watch("./", {recursive: true})
for await (let i of watcher){
    if (i.eventType == "change" && i.filename.endsWith(".js")){
        ChildNodeProcess = SpawnNode()
    }
}