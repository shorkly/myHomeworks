let playList = [{
        author: "LED ZEPPELIN",
        song: "STAIRWAY TO HEAVEN"
    },
    {
        author: "QUEEN",
        song: "BOHEMIAN RHAPSODY"
    },
    {
        author: "LYNYRD SKYNYRD",
        song: "FREE BIRD"
    },
    {
        author: "DEEP PURPLE",
        song: "SMOKE ON THE WATER"
    },
    {
        author: "JIMI HENDRIX",
        song: "ALL ALONG THE WATCHTOWER"
    },
    {
        author: "AC/DC",
        song: "BACK IN BLACK"
    },
    {
        author: "QUEEN",
        song: "WE WILL ROCK YOU"
    },
    {
        author: "METALLICA",
        song: "ENTER SANDMAN"
    }
];

function songs() {
    // debugger
    while (true) {
        let obj = playList.splice(0, 1);
        let div = document.createElement('div');
        div.innerHTML = `<ul><li>Author: ${Object.values(obj[0])[0]} <br> Song:${Object.values(obj[0])[1]}</li></ul><br><br>`;
        document.body.append(div);

    }
}