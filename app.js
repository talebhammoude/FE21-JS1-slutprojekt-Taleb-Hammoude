// Weather objektet som innehåller variablar och funktioner
let weather = {

    apiKey: "0a519848631048f8abeeeea37c90ef42",

    //fetch funktionen för current weather
    fetchData: function (city) {
        //city används som dynamisk parameter, apiKey är definierad ovan och &lang=sv för svensk version.
        fetch(`https://api.weatherbit.io/v2.0/current?city=${city}&key=${this.apiKey}&lang=sv`)
        .then((response) => response.json())
        .then((data) => this.showData(data)); //använder funktionen showData och passar datan från API:et som parameter.
    },

    showData: function (data) {
        //distructar värden från json datan för att använda det senare.
        const { description, icon } = data.data[0].weather;
        const { city_name, temp, wind_spd, rh } = data.data[0];
        //Lägg in värden i Html 
        document.querySelector(".city").innerText = "Vädret i " + city_name;
        document.querySelector(".decription").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".weather-icon").src = `https://www.weatherbit.io/static/img/icons/${icon}.png`;
        document.querySelector(".wind-speed").innerText = "Vindhastighet: " + wind_spd + "m/s";
        document.querySelector(".fukt").innerText = "Fuktighet: " + rh + "%";
    },

    //aktivera sök
    search: function () {
        this.fetchData(document.querySelector(".search-input").value);
    }

};


//Sök vid click av sök-button.
document.querySelector(".search-btn").addEventListener("click", ()=>{
    weather.search();
    document.querySelector(".search-input").value = "";
});