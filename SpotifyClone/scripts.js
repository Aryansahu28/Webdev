

console.log("let's start javascript")

async function getImages() {
    let a = await fetch("http://127.0.0.1:3000/assets/");
    let response = await a.text();
    // console.log(response)
    let div = document.createElement('div');
    div.innerHTML = response;
    let as = div.getElementsByTagName('a');
    // console.log(as)
    images = [];
    for (i = 0; i < as.length; i++) {
        let element = as[i];
        if (element.href.endsWith(".jpeg")) {
            images.push(element.href)
        }
    }
    console.log(images)
    return images
}

async function getSongs() {
    let a = await fetch("http://127.0.0.1:3000/songs/");
    let response = await a.text();
    // console.log(response)
    let div = document.createElement('div');
    div.innerHTML = response;
    let as = div.getElementsByTagName('a');
    // console.log(as)
    songs = [];
    for (i = 0; i < as.length; i++) {
        let element = as[i];
        if (element.href.endsWith(".mp3")) {
            songs.push(element.href)
        }
    }
    return songs

}





main()

let gridcontainer = document.body.querySelector(".gridcontainer")
function creategridcard(images, artistnames, title) {
    let div = document.createElement('div')
    div.className = "gridbox";
    gridcontainer.append(div);
    div.innerHTML = `<img src=${images} alt="image"> <button
                            class="playbutton"><img src="icons/play.svg" alt="play"></button>
                            <div class="baseimagetitle">${title}</div>
                        <div class="artistnames">${artistnames}</div>`
}


// image = "assets/ab67616d00001e02e5e73c74d92e7c97645106d7.jpeg"




async function main() {
    let images = await getImages()

    let songs = await getSongs()
    console.log(songs)
    console.log(images)
    console.log(images[0])
    var audio = new Audio(songs[0]);
    // audio.play();
    title = ["Aya Sher (from New Movie)(Telugu)", "Holi Mix Songs"]
    artistnames = ["Renoadult dEsngseo sfeg,Kamini kumar", "Ravi Shankar, Charan Shankar , Kailash Kher"]
    console.log(title[0])
    console.log(artistnames[0])
    for (let i = 0; i < 2; i++){
    console.log(images[i])
    creategridcard(images[i],artistnames[i],title[i]);

    }


}