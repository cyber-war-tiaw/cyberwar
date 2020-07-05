function comecarjogo () {
    
    window.location.href = "jogar-1.html"
}

function  trocarArena01 (){
    document.getElementById("imgArena").src="imagens/InGame/arenaAzul.png";
}

function  trocarArena02 (){
    document.getElementById("imgArena").src="imagens/InGame/arenaVerde.png";
}

function  trocarArena03 (){
    document.getElementById("imgArena").src="imagens/InGame/arenaQueimando.png";
}

function  trocarArena04 (){
    document.getElementById("imgArena").src="imagens/InGame/arenaPadrao.png";
}

//DB cartas

//Android

var ironGear={
    id: "ironGear",
    atk: 21,
    def: 9,
    img: "url"
}

var protectorXII={
    id: "protectorXII",
    atk: 10,
    def: 23,
    img: "url"
}

var viper={
    id: "viper",
    atk: 15,
    def: 8,
    img: "url"
}

var aracnodroid={
    id: "aracnodroid",
    atk: 17,
    def: 12,
    img: "url"
}

var oneSword={
    id: "oneSword",
    atk: 24,
    def: 5,
    img: "url"
}

var android04={
    id: "android04",
    atk: 8,
    def: 25,
    img: "url"
}

var drakar={
    id: "drakar",
    atk: 16,
    def: 13,
    img: "url"
}

var skank={
    id: "skank",
    atk: 17,
    def: 15,
    img: "url"
}

var tribuz={
    id: "tribuz",
    atk: 13,
    def: 16,
    img: "url"
}

var trazix={
    id: "trazix",
    atk: 10,
    def: 16,
    img: "url"
}

var t5={
    id: "t5",
    atk: 1,
    def: 35,
    img: "url"
}

var banboub={
    id: "banboub",
    atk: 15,
    def: 15,
    img: "url"
}

var whithez={
    id: "whithez",
    atk: 16,
    def: 14,
    img: "url"
}

var androidCanon={
    id: "androidCanon",
    atk: 18,
    def: 12,
    img: "url"
}

var t30={
    id: "t30",
    atk: 17,
    def: 13,
    img: "url"
}

var android23={
    id: "android23",
    atk: 22,
    def: 7,
    img: "url"
}

//Mecha

var titanKiller={
    id: "titanKiller",
    atk: 8,
    def: 24,
    img: "url"
}

var yellowBeast={
    id: "yellowBeast",
    atk: 17,
    def: 10,
    img: "url"
}

var rhinoplasma={
    id: "rhinoplasma",
    atk: 15,
    def: 12,
    img: "url"
}

var killerCrab={
    id: "killerCrab",
    atk: 14,
    def: 10,
    img: "url"
}

var avalanche={
    id: "avalanche",
    atk: 16,
    def: 10,
    img: "url"
}

var atlas={
    id: "atlas",
    atk: 10,
    def: 16,
    img: "url"
}

var raptor={
    id: "raptor",
    atk: 19,
    def: 8,
    img: "url"
}

var spykes={
    id: "spykes",
    atk: 12,
    def: 12,
    img: "url"
}

var littleMecha={
    id: "littleMecha",
    atk: 22,
    def: 7,
    img: "url"
}

var smasherIV={
    id: "smasherIV",
    atk: 12,
    def: 15,
    img: "url"
}

var colossus={
    id: "colossus",
    atk: 15,
    def: 13,
    img: "url"
}

var pigeonic={
    id: "pigeonic",
    atk: 16,
    def: 14,
    img: "url"
}

var gigaton={
    id: "gigaton",
    atk: 18,
    def: 10,
    img: "url"
}

var golemXVI={
    id: "golemXVI",
    atk: 9,
    def: 22,
    img: "url"
}

var cyclopes={
    id: "cyclopes",
    atk: 16,
    def: 13,
    img: "url"
}

var psypher={
    id: "psypher",
    atk: 20,
    def: 10,
    img: "url"
}

var decatron={
    id: "decatron",
    atk: 19,
    def: 10,
    img: "url"
}


//Cartas

var cartas = [
    [ironGear, protectorXII, viper, aracnodroid, oneSword, android04, drakar, skank, tribuz, trazix, t5, banboub, whithez, androidCanon, t30, android23],
    [titanKiller, yellowBeast, rhinoplasma, killerCrab, avalanche, atlas, raptor, spykes, littleMecha, smasherIV, colossus, pigeonic, gigaton, golemXVI, cyclopes, psypher, decatron],
];

localStorage.setItem("cartas", JSON.stringify(cartas));

// Resgatar valores do localStorage:
// JSON.parse(localStorage.getItem("cartas"))[0][1].atk