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


function sortingBy(song, sort) {
    song.sort((a,b) => {
        let byA = a[sort].toUpperCase()
        let byB = b[sort].toUpperCase()
        if (byA > byB) return 1
        if (byB > byA) return -1
    })
    return song
}
// console.log(sortingBy(data, 'judul'));

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
    console.log(link.value.length)

    if (link.value.length === 0) {
        data.push({judul : judulLagu.value,
            artis : artis.value,
            genre : genre.value,
            link : "-"})
    }

    data.push({judul : judulLagu.value,
    artis : artis.value,
    genre : genre.value,
    link : link.value})

    console.log(data)
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
    for (let x = 0; x < data.length; x++) {
        //create TR
        let tr = document.createElement("tr")
        table.appendChild(tr)
        
        //Create New TD
        let newTD1 = document.createElement("td")
        newTD1.innerText = data[x].judul
        tr.appendChild(newTD1)
        let newTD2 = document.createElement("td")
        newTD2.innerText = data[x].artis
        tr.appendChild(newTD2)
        let newTD3 = document.createElement("td")
        newTD3.innerText = data[x].genre
        tr.appendChild(newTD3)
        let newTD4 = document.createElement("td")
        newTD4.innerText = data[x].link
        tr.appendChild(newTD4)
    }
}
cetak()
