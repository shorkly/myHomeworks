let LeafIcon = L.Icon.extend({
    options: {
        iconSize:     [38, 40],
        iconAnchor:   [30, 40],
        popupAnchor:  [-3, -26]
    }
});

let pinkMarker = new LeafIcon({iconUrl: 'img/pink.png'});
let whiteMarker = new LeafIcon({iconUrl: 'img/white.png'});
let blueMarker = new LeafIcon({iconUrl: 'img/blue.png'});

const map = L.map('map').setView([46.9678031704717, 31.990463746359698], 10);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

const MAP = [
    {
        latitude: 46.95381661052434,
        longitude: 31.99436315567691,
        icon: pinkMarker,
        description: '<img src="img/portal.jpg"><div class="descrip">тц Portal</div>'
    },
    {
        latitude: 46.97148747257815,
        longitude: 31.98917154033393,
        icon: whiteMarker,
        description: '<img src="img/coffee-shop.jpg"><div class="descrip">Кав\'ярня-книгарня\n</div>'
    },
    {
        latitude: 46.96684158950465,
        longitude: 32.002140155677345,
        icon: pinkMarker,
        description: '<img src="img/citycenter.jfif"><div class="descrip">трц CityCenter</div>'
    },
    {
        latitude: 46.96261433308769,
        longitude: 31.990120189299986,
        icon: whiteMarker,
        description: '<img src="img/theatre.jpg"><div class="descrip">Академический украинсткий театр</div>'
    },
    {
        latitude: 46.96092520488975,
        longitude: 32.02012599800545,
        icon: blueMarker,
        description: '<img src="img/beetroot.jpg"><div class="descrip">Beetroot Academy</div>'
    },
    {
        latitude: 46.985449337819,
        longitude: 31.995729901500276,
        icon: whiteMarker,
        description: '<img src="img/park.jpg"><div class="descrip">Парк Победы</div>'
    },
    {
        latitude: 46.965981408088744,
        longitude: 31.986516296338753,
        icon: pinkMarker,
        description: '<img src="img/fairytale.jpg"><div class="descrip">Детский городок Сказка</div>'
    },
    {
        latitude: 46.974151757964684,
        longitude: 31.958371011800423,
        icon: pinkMarker,
        description: '<img src="img/yaht-club.jpg"><div class="descrip">Яхт-клуб</div>'
    },
    {
        latitude: 46.97599103355949,
        longitude: 31.99401724730455,
        icon: pinkMarker,
        description: '<img src="img/square.jpeg"><div class="descrip">Соборна Площа</div>'
    },
    {
        latitude: 46.972443218782004,
        longitude: 31.99215183157591,
        icon: whiteMarker,
        description: '<img src="img/sqver.jpeg"><div class="descrip">Каштановый сквер</div>'
    },
]

MAP.forEach((point)=>{
    L.marker([point.latitude, point.longitude], {icon:point.icon}).addTo(map)
        .bindPopup(point.description)
        .closePopup();
});

let  LC  =  L .control . locate ( {
    position : 'topright' ,
    strings : {
        title : "Покажи мне, где я, йоу!"
    }
} ) . addTo (map) ;