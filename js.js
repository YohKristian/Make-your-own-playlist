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

//DOM
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