// Current Weather objektet som innehåller variablar och funktioner
let weatherCurrent = {

    apiKey: "0a519848631048f8abeeeea37c90ef42",

    //fetch funktionen för current weather
    fetchData: function (city) {
        //city används som dynamisk parameter, apiKey är definierad ovan och &lang=sv för svensk version.
        fetch(`https://api.weatherbit.io/v2.0/current?city=${city}&key=${this.apiKey}&lang=sv`)
        .then((response) => response.json())
        .then((data) => this.showData(data)); //använder funktionen showData och passar datan från API:et som parameter.
    },

    showData: function (data) {

        document.querySelector(".current-weather-txt").style = "block";

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




// Forecast Weather objektet som innehåller variablar och funktioner
let weatherForecast = {

    apiKey: "0a519848631048f8abeeeea37c90ef42",

    //fetch funktionen för current weather
    fetchData: function (city) {
        //city används som dynamisk parameter, apiKey är definierad ovan och &lang=sv för svensk version.
        fetch(`https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&key=${this.apiKey}&days=5&lang=sv`)
        .then((response) => response.json())
        .then((data) => this.showData(data)); //använder funktionen showData och passar datan från API:et som parameter.
    },

    showData: function (data) {

        document.querySelector(".forecast-weather-txt").style = "block";


        for( i=0; i<5; i++) {

            const { description, icon } = data.data[i].weather;
            const { temp } = data.data[i];

            let descDiv = document.createElement('div');
            let iconDiv = document.createElement('img');
            let tempDiv = document.createElement('div');

            descDiv.classList.add(`day-description${i}`);
            iconDiv.classList.add(`day-icon${i}`);
            tempDiv.classList.add(`day-temp${i}`);
            
            document.querySelector(".weather-info-5-days").appendChild(descDiv);
            document.querySelector(".weather-info-5-days").appendChild(iconDiv);
            document.querySelector(".weather-info-5-days").appendChild(tempDiv);

            //Lägg in värden i Html 
            document.querySelector(`.day-description${i}`).innerText = description;
            document.querySelector(`.day-temp${i}`).innerText = temp + "°C";
            document.querySelector(`.day-icon${i}`).src = `https://www.weatherbit.io/static/img/icons/${icon}.png`;

        }
        
    },

    //aktivera sök
    search: function () {
        this.fetchData(document.querySelector(".search-input").value);
    }

};






//Sök vid click av sök-button.
document.querySelector(".search-btn").addEventListener("click", ()=>{
    weatherCurrent.search();
    weatherForecast.search();
    document.querySelector(".search-input").value = "";
});