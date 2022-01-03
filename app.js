let weather = {

    apiKey: "0a519848631048f8abeeeea37c90ef42",
    fetchData: function (city) {
        fetch(`https://api.weatherbit.io/v2.0/current?city=${city}&key=${this.apiKey}&lang=sv`)
        .then((response) => response.json())
        .then((data) => this.showData(data));
    },
    showData: function (data) {
        const { description } = data.data[0].weather;

        console.log(description);
    }

}