const inp = document.querySelector("input");
const btn = document.querySelector("button");
const output = document.querySelector(".output");
const body = document.querySelector("body");


const a1 = document.querySelector(".a1");
const a2 = document.querySelector(".a2");
const a3 = document.querySelector(".a3");
const a4 = document.querySelector(".a4");
const a5 = document.querySelector(".a5");



// background image changes using function call

function myapp(res, temp) {
    if (temp <= 0) {
        body.style.backgroundImage = "url('https://images.unsplash.com/photo-1510561467401-91b9835f745e?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDMxfDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')";
    } else if (res == 'overcast clouds') {
        body.style.backgroundImage = "url('https://images.unsplash.com/photo-1525920980995-f8a382bf42c5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8b3ZlcmNhc3QlMjBza3l8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60')";
    } else if (res == 'clear sky') {
        body.style.backgroundImage = "url('https://images.unsplash.com/photo-1606050716461-78add0ad1785?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fGNsZWFyJTIwc2t5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')";
    } else if (res == 'light rain' || res == 'heavy rain') {
        body.style.backgroundImage = "url('https://images.unsplash.com/photo-1576514864427-f0809d2b66eb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTB8fHJhaW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')";
    } else if (res == 'haze') {
        body.style.backgroundImage = "url('https://images.unsplash.com/photo-1447014421976-7fec21d26d86?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aGF6ZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')";
    } else {
        body.style.backgroundImage = "url('https://images.unsplash.com/photo-1500964757637-c85e8a162699?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHNjZW5lcnl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')"
    }


}


btn.addEventListener("click", (e) => {
    let CityName = inp.value;

    if (CityName != "") {
        output.style.display = "block";

        // declaration 
        let description;
        let temp;
        let tempMIN, tempMAX, tempAll;

        let time = new Date().toDateString();

        // fetching data from Api

        let api = `https://api.openweathermap.org/data/2.5/weather?q=${CityName}&appid=57d089aa08a6b287669bca5a71b82149`
        fetch(api)
            .then((result) => {
                return result.json();
            })
            .then((data) => {

                // Getting Data Values

                description = data.weather[0].description;
                temp = data.main.temp;
                tempMIN = data.main.temp_min;
                tempMAX = data.main.temp_max;


                //values
                temp = temp - 273.15;
                temp = Math.round(temp);

                // function call

                myapp(description, temp);

                temp = temp + "°C";

                //min temp value
                tempMIN = tempMIN - 273.15;
                tempMIN = Math.round(tempMIN);
                tempMIN = tempMIN + "°C";

                //max temp value
                tempMAX = tempMAX - 273.15;
                tempMAX = Math.round(tempMAX);
                tempMAX = tempMAX + "°C";


                tempAll = tempMIN + " (min) /" + tempMAX + " (max)";



                a1.innerText = time;
                a2.innerText = CityName;
                a3.innerText = temp;
                a4.innerText = tempAll;

                a5.innerText = description;


            })
            .catch((err) => {
                alert(err);
            });


        a1.setAttribute("class", "a1");
        a3.setAttribute("class", "a1");
        a5.setAttribute("class", "a1");


        inp.value = "";

    }


});