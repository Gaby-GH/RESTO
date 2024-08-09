let div_around = document.querySelectorAll(".div_around")

function animation(entries, observer){
    entries.forEach((entry) => {
        if (entry.intersectionRatio > 0){
            entry.target.classList.add("animation")
        }

    })
}

function Observe(elements){

    let observer = new IntersectionObserver(animation, {})
    elements.forEach(element => {
        observer.observe(element)
    })
}

if (div_around.length > 0){
    Observe(div_around)
}

// Admin

async function IsAdmin() {
    let file = await fetch("http://localhost:3008/storage/user.json")
    let user = await file.json()

    if (user.admin){
        let nav_barre = document.querySelector("#nav_barre") 
        let template = document.querySelector("#temp_admin")

        nav_barre.append(template.content.cloneNode(true))
    }
}

IsAdmin()