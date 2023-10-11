let builds = ["headon", "láda", "4 exhaustion", "loopolos", "healer", "genrushos", "sneaky build", "infinite item",
    "sabos build", "power struggles build"]
let challenges = ["no pallet", "no ablak", "cserélj ki egy perket no mitherre", "dobj le minden palletet egyből amint átszaladsz rajta",
    "no gen ha már csinál valaki", "terror radius = fast vault", "ha valakit chaselnek csak csapatban lehet genezni",
    "csak healthy csapattárs healelhet"]
let items = ["alexesToolbox.png", "brokenKey.png", "commodiousToolbox.png", "dullKey.png", "engeneersToolbox.png", "firstAidKit.png", "greenMap.png",
    "mechanicsToolbox.png", "medkit.png", "rainbowMap.png", "rangersMedkit.png", "rundownMedkit.png", "skeletonKey.png", "sportFlashlight.png", "toolbox.png",
    "utilityFlashlight.png", "wornoutToolbox.png", "yellowFlashlight.png"]
let addons = ["addon1", "addon2", "addon3", "addon4"]
let itemss = [
    {
        src: "alexesToolbox.png",
        rarity: "purple"
    },
    {
        src: "brokenKey.png",
        rarity: "green"
    },
    {
        src: "commodiousToolbox.png",
        rarity: "green"
    }
]

let selectedBuild
let selectedChallenge
let selectedItem
let selectedAddon

function roll() {
    console.log(itemss[1].src);
    generateBuild()
    generateChallenge()
    generateItem()
    generateAddons()
}


function generateBuild() {
    generator(builds, selectedBuild, "build")
}

function generateChallenge() {
    generator(challenges, selectedChallenge, "kihivas")
}

function generateItem() {
    let index = Math.floor(Math.random() * itemss.length)
    let item = itemss[index].src
    let rarity = itemss[index].rarity
    document.getElementById("item").innerHTML = `<img src="pictures/${item}" alt="item">`
    document.getElementById("item").style.backgroundColor = rarity

}

function generateAddons() {
    let add1 = addons[Math.floor(Math.random() * addons.length)]
    let add2 = addons[Math.floor(Math.random() * addons.length)]

    do {
        add2 = addons[Math.floor(Math.random() * addons.length)]
    } while (add1 == add2);

    document.getElementById("addon1").innerHTML = add1
    document.getElementById("addon2").innerHTML = add2
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

function defaultButton() {
    document.getElementById("uniqueButton").removeAttribute("disabled")
    document.getElementById("defaultButton").setAttribute("disabled", "")
    document.getElementById("uniqueDiv").style.display = "none"

}

function uniqueButton() {
    document.getElementById("defaultButton").removeAttribute("disabled")
    document.getElementById("uniqueButton").setAttribute("disabled", "")
    document.getElementById("uniqueDiv").style.display = "block"
}

