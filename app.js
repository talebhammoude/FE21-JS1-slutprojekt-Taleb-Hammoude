// Weather objektet som innehåller variablar och funktioner
let weather = {

    apiKey: "0a519848631048f8abeeeea37c90ef42",
    //fetch funktionen
    fetchData: function (city) {
        //city används som dynamisk parameter, apiKey är definierad ovan och &lang=sv för svensk version.
        fetch(`https://api.weatherbit.io/v2.0/current?city=${city}&key=${this.apiKey}&lang=sv`)
        .then((response) => response.json())
        .then((data) => this.showData(data)); //använder funktionen showData och passar datan från API:et som parameter.
    },
    showData: function (data) {
        //distructar värden från json datan för att använda det senare.
        const { description } = data.data[0].weather;

        console.log(description);
    }

}