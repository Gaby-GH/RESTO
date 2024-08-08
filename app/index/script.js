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

