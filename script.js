let builds = ["headon","láda","4 exhaustion","loopolos"]
let kihivasok = ["no pallet","no ablak","cserélj ki egy perket no mitherre","dobj le minden palletet egyből amint átszaladsz rajta"]

function build() {
    let i = Math.floor(Math.random() * builds.length)
    let b = document.getElementById("build")
    b.innerHTML = builds[i]
    console.log(builds[i]);
}

function kihivas() {
    let i = Math.floor(Math.random() * builds.length)
    let b = document.getElementById("kihivas")
    b.innerHTML = kihivasok[i]
    console.log(kihivasok[i]);
}