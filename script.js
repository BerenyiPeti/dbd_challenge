let builds = ["headon","láda","4 exhaustion","loopolos", "healer", "genrushos", "sneaky build", "infinite item", 
"sabos build", "power struggles build"]
let kihivasok = ["no pallet","no ablak","cserélj ki egy perket no mitherre","dobj le minden palletet egyből amint átszaladsz rajta", 
"no gen ha már csinál valaki", "terror radius = fast vault", "ha valakit chaselnek csak csapatban lehet genezni", 
"csak healthy csapattárs healelhet"]

function build() {
    let i = Math.floor(Math.random() * builds.length)
    let b = document.getElementById("build")
    b.innerHTML = "Build: " + builds[i]
    console.log(builds[i]);
}

function kihivas() {
    let i = Math.floor(Math.random() * kihivasok.length)
    let b = document.getElementById("kihivas")
    b.innerHTML = "Kihívás: " + kihivasok[i]
    console.log(kihivasok[i]);
}