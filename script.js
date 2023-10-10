let builds = ["headon", "láda","4 exhaustion","loopolos", "healer", "genrushos", "sneaky build", "infinite item", 
"sabos build", "power struggles build"]
let challenges = ["no pallet", "no ablak","cserélj ki egy perket no mitherre","dobj le minden palletet egyből amint átszaladsz rajta", 
"no gen ha már csinál valaki", "terror radius = fast vault", "ha valakit chaselnek csak csapatban lehet genezni", 
"csak healthy csapattárs healelhet"]
let items = ["kliki kliki", "medkit", "map", "kulcs", "toolbox"]

let selectedBuild
let selectedChallenge
let selectedItem

function roll() {
    generateBuild()
    generateChallenge()
    generateItem()
}


function generateBuild() {
    generator(builds, selectedBuild, "build")
}

function generateChallenge() {
    generator(challenges, selectedChallenge, "kihivas")
}

function generateItem() {
    generator(items, selectedItem, "item")
}


function generator(array, selected, div) {
    let item = array[Math.floor(Math.random() * array.length)]

    selected = document.getElementById(div).innerHTML

    if (item != selected) {
        document.getElementById(div).innerHTML = item
    } else {
        generator(array, selected, div)
    }
}

