async function horaires(){
    let file = await fetch("http://localhost:3008/storage/horaires.json")
    let horaires = await file.json()

    let mardi_mo = document.querySelector("#mardi_mo")
    let mardi_mf = document.querySelector("#mardi_mf")
    let mardi_so = document.querySelector("#mardi_so")
    let mardi_sf = document.querySelector("#mardi_sf")

    let mercredi_mo = document.querySelector("#mercredi_mo")
    let mercredi_mf = document.querySelector("#mercredi_mf")
    let mercredi_so = document.querySelector("#mercredi_so")
    let mercredi_sf = document.querySelector("#mercredi_sf")

    let jeudi_mo = document.querySelector("#jeudi_mo")
    let jeudi_mf = document.querySelector("#jeudi_mf")
    let jeudi_so = document.querySelector("#jeudi_so")
    let jeudi_sf = document.querySelector("#jeudi_sf")

    let vendredi_mo = document.querySelector("#vendredi_mo")
    let vendredi_mf = document.querySelector("#vendredi_mf")
    let vendredi_so = document.querySelector("#vendredi_so")
    let vendredi_sf = document.querySelector("#vendredi_sf")

    let samedi_mo = document.querySelector("#samedi_mo")
    let samedi_mf = document.querySelector("#samedi_mf")
    let samedi_so = document.querySelector("#samedi_so")
    let samedi_sf = document.querySelector("#samedi_sf")

    mardi_mo.textContent = `${horaires[0].midi[0]}h`
    mardi_mf.textContent = `${horaires[0].midi[1]}h`
    mardi_so.textContent = `${horaires[0].soir[0]}h`
    mardi_sf.textContent = `${horaires[0].soir[1]}h`

    mercredi_mo.textContent = `${horaires[1].midi[0]}h`
    mercredi_mf.textContent = `${horaires[1].midi[1]}h`
    mercredi_so.textContent = `${horaires[1].soir[0]}h`
    mercredi_sf.textContent = `${horaires[1].soir[1]}h`

    jeudi_mo.textContent = `${horaires[2].midi[0]}h`
    jeudi_mf.textContent = `${horaires[2].midi[1]}h`
    jeudi_so.textContent = `${horaires[2].soir[0]}h`
    jeudi_sf.textContent = `${horaires[2].soir[1]}h`

    vendredi_mo.textContent = `${horaires[3].midi[0]}h`
    vendredi_mf.textContent = `${horaires[3].midi[1]}h`
    vendredi_so.textContent = `${horaires[3].soir[0]}h`
    vendredi_sf.textContent = `${horaires[3].soir[1]}h`

    samedi_mo.textContent = `${horaires[4].midi[0]}h`
    samedi_mf.textContent = `${horaires[4].midi[1]}h`
    samedi_so.textContent = `${horaires[4].soir[0]}h`
    samedi_sf.textContent = `${horaires[4].soir[1]}h`
}

horaires()

// Scrollspy

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