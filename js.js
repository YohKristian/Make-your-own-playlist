// PROCESSING JS
let data = [
    {
        judul : 'Save Your Tears',
        artis : 'The Weeknd',
        genre : 'R&B',
        link : 'https://www.youtube.com/watch?v=XXYlFuWEuKI'
    },
    {
        judul : `Don't Matter`,
        artis : 'Akon',
        genre : 'R&B',
        link : `https://www.youtube.com/watch?v=JWA5hJl4Dv0`
    },
    {
        judul : `Satru`,
        artis : 'Denny Caknan',
        genre : 'Koplo',
        link : `https://www.youtube.com/watch?v=fKVgm3_x-OI`
    },
    {
        judul : `Lemah Teles`,
        artis : 'Happy Asmara',
        genre : 'Koplo',
        link : `https://www.youtube.com/watch?v=3tmwbTeQWmk`
    },
    {
        judul : `Don't Look Back in Anger`,
        artis : 'Oasis',
        genre : 'Rock',
        link : `https://www.youtube.com/watch?v=fKVgm3_x-OI`
    },
    {
        judul : `I Miss You`,
        artis : 'Blink-182',
        genre : 'Rock',
        link : `https://www.youtube.com/watch?v=s1tAYmMjLdY`
    }
]


function sortingBy() {
    let sort = document.getElementById('sort').value
    data.sort((a,b) => {
        let byA = a[sort].toUpperCase()
        let byB = b[sort].toUpperCase()
        if (byA > byB) return 1
        if (byB > byA) return -1
    })
    cetak()
}

function action(song, act, i) {
    // if (act === 'edit') {
    // }
    if (act === 'delete') delete song[i] 
}

//DOM
function addButtonFunction () {
    let judulLagu = document.getElementById("judul_lagu")
    let genre = document.getElementById("genre")
    let artis = document.getElementById("artis")
    let link = document.getElementById("link")

    //console.log(typeof link.value)
    //console.log(link.value.length)

    for (let i = 0; i < data.length; i++) {
        document.getElementById("myTable").deleteRow(1);
    }

    data.push({judul : judulLagu.value,
    artis : artis.value,
    genre : genre.value,
    link : link.value})

    //console.log(data)
    cetak()

    // console.log(judulLagu.value)
    // console.log(genre.value)
    // console.log(artis.value)
    // console.log(link.value)
}

let addButtonId = document.getElementById("addButton")

addButtonId.addEventListener("click", addButtonFunction)

//DOM TABLE
let table = document.querySelector(".cetakTable")

function cetak() {
    document.getElementById("kontenmusik").innerHTML = ""
    for (let x = 0; x < data.length; x++) {
        //create TR
        let no = `<td>${x + 1}</td>`
        let judul = `<td>${data[x].judul}</td>`
        let artis = `<td>${data[x].artis}</td>`
        let genre = `<td>${data[x].genre}</td>`
        let btnEdit = `<td><button type="button" onclick="editBaris(${x})">Edit</button></td>`
        let btnDelete = `<td><button onclick="deleteBaris(${x})">Delete</button></td>`
        let btnPlay = `<td><button><a href="${data[x].link}" target="_blank">Play</a></button></td>`
        document.getElementById("kontenmusik").innerHTML += `<tr>${no}${judul}${artis}${genre}${btnEdit}${btnDelete}${btnPlay}</tr>`
    }
}
cetak()

function deleteBaris(index) {
    data.splice(index, 1)
    cetak()
}

function editBaris(index) {
    document.getElementById("judul_lagu").value = data[index].judul
    document.getElementById("genre").value = data[index].genre
    document.getElementById("artis").value = data[index].artis
    document.getElementById("link").value = data[index].link
    document.getElementById("indexlagu").value = index
}

let updateeButton = document.getElementById("updateButton")

updateeButton.addEventListener("click", updateButtonFunction)

function updateButtonFunction () {
    let judulLagu = document.getElementById("judul_lagu")
    let genre = document.getElementById("genre")
    let artis = document.getElementById("artis")
    let link = document.getElementById("link")
    let index = document.getElementById("indexlagu")

    data[index.value] = ({judul : judulLagu.value,
    artis : artis.value,
    genre : genre.value,
    link : link.value})
    
    document.getElementById("judul_lagu").value = ""
    document.getElementById("genre").value = "R&B"
    document.getElementById("artis").value = ""
    document.getElementById("link").value = ""
    document.getElementById("indexlagu").value = ""

    //console.log(data)
    cetak()
}