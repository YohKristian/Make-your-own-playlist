// PROCESSING JS
let data = [{
        judul: 'Save Your Tears',
        artis: 'The Weeknd',
        genre: 'R&B',
        link: 'https://www.youtube.com/watch?v=XXYlFuWEuKI'
    },
    {
        judul: `Don't Matter`,
        artis: 'Akon',
        genre: 'R&B',
        link: `https://www.youtube.com/watch?v=JWA5hJl4Dv0`
    },
    {
        judul: `Satru`,
        artis: 'Denny Caknan',
        genre: 'Koplo',
        link: `https://www.youtube.com/watch?v=fKVgm3_x-OI`
    },
    {
        judul: `Lemah Teles`,
        artis: 'Happy Asmara',
        genre: 'Koplo',
        link: `https://www.youtube.com/watch?v=3tmwbTeQWmk`
    },
    {
        judul: `Don't Look Back in Anger`,
        artis: 'Oasis',
        genre: 'Rock',
        link: `https://youtu.be/r8OipmKFDeM`
    },
    {
        judul: `I Miss You`,
        artis: 'Blink-182',
        genre: 'Rock',
        link: `https://www.youtube.com/watch?v=s1tAYmMjLdY`
    }
]


function sortingBy() {
    let sort = document.getElementById('sort').value
    data.sort((a, b) => {
        let byA = a[sort].toUpperCase()
        let byB = b[sort].toUpperCase()
        if (byA > byB) return 1
        if (byB > byA) return -1
    })
    cetak()
}

function action(song, act, i) {
    if (act === 'delete') delete song[i]
}

//DOM
function addButtonFunction() {
    let judulLagu = document.getElementById("judul_lagu")
    let genre = document.getElementById("genre")
    let artis = document.getElementById("artis")
    let link = document.getElementById("link")

    if (judulLagu.value.length <= 0) {
        alert("Judul lagu tidak boleh kosong");
        judulLagu.focus();
        return false;
    }
    if (artis.value.length <= 0) {
        alert("Artis tidak boleh kosong");
        artis.focus();
        return false;
    }
    if (link.value.length <= 0) {
        alert("Link lagu tidak boleh kosong");
        link.focus();
        return false;
    }
    if (genre.value == "Select Genre") {
        alert("Genre lagu tidak boleh kosong");
        genre.focus();
        return false;
    }

    data.push({
        judul: judulLagu.value,
        artis: artis.value,
        genre: genre.value,
        link: link.value
    })
    reset()

    //console.log(typeof link.value)
    //console.log(link.value.length)

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
        let btnEdit = `<td><button class="buttonKecil" type="button" onclick="editBaris(${x})">Edit</button></td>`
        let btnDelete = `<td><button class="buttonKecil" onclick="deleteBaris(${x})">Delete</button></td>`
        let btnPlay = `<td><button class="buttonKecil"><a href="${data[x].link}" target="_blank">Play</a></button></td>`
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

    document.getElementById("addButton").style.display = "none";
    document.getElementById("updateButton").style.display = null;
}

let updateeButton = document.getElementById("updateButton")

updateeButton.addEventListener("click", updateButtonFunction)

function updateButtonFunction() {
    let judulLagu = document.getElementById("judul_lagu")
    let genre = document.getElementById("genre")
    let artis = document.getElementById("artis")
    let link = document.getElementById("link")
    let index = document.getElementById("indexlagu")

    if (judulLagu.value.length <= 0) {
        alert("Judul lagu tidak boleh kosong");
        judulLagu.focus();
        return false;
    }
    if (artis.value.length <= 0) {
        alert("Artis tidak boleh kosong");
        artis.focus();
        return false;
    }
    if (link.value.length <= 0) {
        alert("Link lagu tidak boleh kosong");
        link.focus();
        return false;
    }
    if (genre.value == "Select Genre") {
        alert("Genre lagu tidak boleh kosong");
        genre.focus();
        return false;
    }

    data[index.value] = ({
        judul: judulLagu.value,
        artis: artis.value,
        genre: genre.value,
        link: link.value
    })

    document.getElementById("addButton").style.display = null;
    document.getElementById("updateButton").style.display = "none";

    reset()

    //console.log(data)
    cetak()
}

function search() {
    let input = document.getElementById("cari").value;
    let temp = [];
    let obj = data.find(function (post) {
        if (post.artis.toLowerCase() == input.toLowerCase() || post.judul.toLowerCase() == input.toLowerCase())
            return true;
    });

    temp.push(obj)
    if (obj !== undefined) {
        document.getElementById("kontenmusik").innerHTML = ""
        for (let x = 0; x < temp.length; x++) {
            //create TR
            let no = `<td>${x + 1}</td>`
            let judul = `<td>${temp[x].judul}</td>`
            let artis = `<td>${temp[x].artis}</td>`
            let genre = `<td>${temp[x].genre}</td>`
            let btnEdit = `<td><button class="buttonKecil" type="button" onclick="editBaris(${x})">Edit</button></td>`
            let btnDelete = `<td><button class="buttonKecil" onclick="deleteBaris(${x})">Delete</button></td>`
            let btnPlay = `<td><button class="buttonKecil"><a href="${temp[x].link}" target="_blank" style="text-decoration:none">Play</a></button></td>`
            document.getElementById("kontenmusik").innerHTML += `<tr>${no}${judul}${artis}${genre}${btnEdit}${btnDelete}${btnPlay}</tr>`
        }
    } else {
        cetak();
    }
}

function reset() {
    document.getElementById("judul_lagu").value = ""
    document.getElementById("genre").value = "Select Genre"
    document.getElementById("artis").value = ""
    document.getElementById("link").value = ""
    document.getElementById("indexlagu").value = ""
}
