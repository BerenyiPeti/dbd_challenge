let builds = ["headon", "láda","4 exhaustion","loopolos", "healer", "genrushos", "sneaky build", "infinite item", 
"sabos build", "power struggles build"]
let challenges = ["no pallet", "no ablak","cserélj ki egy perket no mitherre","dobj le minden palletet egyből amint átszaladsz rajta", 
"no gen ha már csinál valaki", "terror radius = fast vault", "ha valakit chaselnek csak csapatban lehet genezni", 
"csak healthy csapattárs healelhet"]

let selectedBuild
let selectedChallenge

function roll() {
    generateBuild()
    generateChallenge()
}

function generateBuild() {
    let build = builds[randomize(builds.length)]
    selectedBuild = document.getElementById("build").innerHTML

    if (build != selectedBuild) {
        document.getElementById("build").innerHTML = build
    } else {
        generateBuild()
    }


}

function generateChallenge() {
    let challenge = challenges[randomize(challenges.length)]
    selectedChallenge = document.getElementById("kihivas").innerHTML

    if (challenge != selectedChallenge) {
        document.getElementById("kihivas").innerHTML = challenge
    } else {
        generateChallenge()
    }
}

function randomize(hossz) {
    return Math.floor(Math.random() * hossz)

}