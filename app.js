const search = document.querySelector(".search");
const city = document.querySelector(".name .city");
const country = document.querySelector(".name .country");
const time = document.querySelector(".time");
const value = document.querySelector(".value span");
const shortDesc = document.querySelector(".short-desc");
const visibility = document.querySelector(".visibility span");
const wind = document.querySelector(".wind span");
const sun = document.querySelector(".sun span");
const body = document.querySelector("body");
const weather = document.querySelector(".weather");
const content = document.querySelector(".content");

function changeWeatherUI(searchValue) {
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=d78fd1588e1b7c0c2813576ba183a667`;
    fetch(apiURL)
        .then((res) => res.json())
        .then((data) => {
            if (data.cod === 200) {
                content.classList.remove("hide");
                city.innerText = data.name;
                country.innerText = data.sys.country;
                time.innerText = new Date().toLocaleString("vi");
                let temp = Math.round(data.main.temp);
                value.innerText = temp;
                shortDesc.innerText = 'Anh yêu em😘';
                visibility.innerText = data.visibility + "(m)";
                wind.innerText = data.wind.speed + "(m/s)";
                sun.innerText = data.clouds.all + "(%)";

                if (temp >= 30) {
                    body.style.background =
                        "linear-gradient(0deg, rgba(0,0,0,0.9), rgba(0,0,0,0.7)), url(img/hot.png) no-repeat center/cover";
                    weather.style.background =
                        "url(img/260959454_583750139383681_5955654051355496671_n.jpg) no-repeat center/cover";
                } else if (temp >= 25) {
                    body.style.background =
                        "linear-gradient(0deg, rgba(0,0,0,0.9), rgba(0,0,0,0.7)), url(img/ny.jpg) no-repeat center/cover";
                    weather.style.background =
                        "url(img/ny.jpg) no-repeat center/cover";
                } else if (temp >= 20) {
                    body.style.background =
                        "linear-gradient(0deg, rgba(0,0,0,0.9), rgba(0,0,0,0.7)), url(img/warn.jpg) no-repeat center/cover";
                    weather.style.background =
                        "url(img/warn.jpg) no-repeat center/cover";
                } else {
                    body.style.background =
                        "linear-gradient(0deg, rgba(0,0,0,0.9), rgba(0,0,0,0.7)), url(img/cold.png) no-repeat center/cover";
                    weather.style.background =
                        "url(img/cold.png) no-repeat center/cover";
                }
            } else {
                content.classList.add("hide");
            }
        });
}

search.addEventListener("keypress", function (e) {
    const searchValue = e.target.value.trim();
    if (e.key === "Enter") {
        changeWeatherUI(searchValue);
        search.value = "";
    }
});

changeWeatherUI("ha noi");
