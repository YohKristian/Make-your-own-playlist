// DOM
function addButtonFunction () {
    let judulLagu = document.getElementById("judul_lagu")
    let genre = document.getElementById("genre")
    let artis = document.getElementById("artis")
    let link = document.getElementById("link")

    if (link.lenght === 0) {
        link = "-"
    }

    console.log(judulLagu.value)
    console.log(genre.value)
    console.log(artis.value)
    console.log(link.value)
}

let addButtonId = document.getElementById("addButton")

addButtonId.addEventListener("click", addButtonFunction)