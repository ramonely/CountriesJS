class Country {
    constructor(name, lang, greeting, colors) {
        this.name = name;
        this.lang = lang;
        this.greeting = greeting;
        this.colors = colors;
    }
}

let usa = new Country("USA", "English", "Why hello there world! Have some McDonalds", ["red", "white", "blue"]);
let mexico = new Country("Mexico", "Spanish", "Hola Mundo!", ["red", "white", "green"]);
let algeria = new Country("Algeria", "Arabic and Berber", "مرحبا", ["blue", "yellow", "red"])
let russia = new Country("Russia", "Russian", "Привет мир", ["white", "blue", "red"])
let sweden = new Country("Sweden", "Swedish", "Hej världen", ["blue", "gold", "gold"])

function SwitchCountry() {
    let input = document.getElementById("CountryList").value;
    let country;

    if (input === "USA") { 
        country = usa;
        document.getElementById("CountryName").innerText = country.name;
        document.getElementById("OfficialLanguage").innerText = country.lang;
        document.getElementById("HelloWorld").innerText = country.greeting;
        document.getElementById("Color1").style.backgroundColor = country.colors[0];;
        document.getElementById("Color2").style.backgroundColor = country.colors[1];
        document.getElementById("Color3").style.backgroundColor = country.colors[2];

        let img =  document.getElementById("flag");
        img.src = "usa.png"; 
        
    }
    else if (input === "Mexico") {
        country = mexico;
        document.getElementById("CountryName").innerText = country.name;
        document.getElementById("OfficialLanguage").innerText = country.lang;
        document.getElementById("HelloWorld").innerText = country.greeting;
        document.getElementById("Color1").style.backgroundColor = country.colors[0];
        document.getElementById("Color2").style.backgroundColor = country.colors[1];
        document.getElementById("Color3").style.backgroundColor = country.colors[2];
        
        let img =  document.getElementById("flag");
        img.src = "mex.jpg"; 
    }
    else if (input === "Algeria") {
        country = algeria;
        document.getElementById("CountryName").innerText = country.name;
        document.getElementById("OfficialLanguage").innerText = country.lang;
        document.getElementById("HelloWorld").innerText = country.greeting;
        document.getElementById("Color1").style.backgroundColor = country.colors[0];
        document.getElementById("Color2").style.backgroundColor = country.colors[1];
        document.getElementById("Color3").style.backgroundColor = country.colors[2];

        let img =  document.getElementById("flag");
        img.src = "alg.png"; 
    }
    else if (input === "Russia") {
        country = russia;
        document.getElementById("CountryName").innerText = country.name;
        document.getElementById("OfficialLanguage").innerText = country.lang;
        document.getElementById("HelloWorld").innerText = country.greeting;
        document.getElementById("Color1").style.backgroundColor = country.colors[0];
        document.getElementById("Color2").style.backgroundColor = country.colors[1];
        document.getElementById("Color3").style.backgroundColor = country.colors[2];

        let img =  document.getElementById("flag");
        img.src = "rus.jpg"; 
    }
    else if (input === "Sweden") {
        country = sweden;
        document.getElementById("CountryName").innerText = country.name;
        document.getElementById("OfficialLanguage").innerText = country.lang;
        document.getElementById("HelloWorld").innerText = country.greeting;
        document.getElementById("Color1").style.backgroundColor = country.colors[0];
        document.getElementById("Color2").style.backgroundColor = country.colors[1];
        document.getElementById("Color3").style.backgroundColor = country.colors[2];

        let img =  document.getElementById("flag");
        img.src = "swe.png"; 
    }

}
