// https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&APPID=4939584db0029b94f9d6ec9287eab007

const appConstants = {
    apiKey: "4939584db0029b94f9d6ec9287eab007",
    baseUrl: "https://api.openweathermap.org/data/2.5/weather",
    units: "metric",
    unknownValue: "NA",
    imgUrl: "http://openweathermap.org/img/wn/"
}

function getinputinfo(event) {
    event.preventDefault();
    const location = document.querySelector(".input")[0].value;


    fetch(`${appConstants.baseUrl}?q=${location}&units=${appConstants.units}&APPID=${appConstants.apiKey}`)

        .then((response) => {
            if (response.status === 200) {
                return response.json();
            }
            throw Error("Error fetching data.");
        })

        .then((data) => {
            updateDom(data);
        })
        .catch((error) => {
            console.log(error);
            alert(`Error getting information for ${location}`);
        });
}

function updateDom(data) {
    const dateInformation = getDateInfo();
    document.querySelector(".day").innerHTML = dateInformation.day;
    document.querySelector(".Date").innerHTML = `${dateInformation.date} ${dateInformation.month} ${dateInformation.year}`
    document.querySelector(".location").innerHTML = `${data?.name || appConstants.unknownValue}, ${data?.sys?.country || appConstants.unknownValue}`
    document.querySelector(".img").setAttribute("src", `${appConstants.imgUrl}${data?.weather?.[0]?.icon}.png`);
    document.querySelector(".temp").innerHTML = `${parseInt(data?.main?.temp || 0)}&deg;C`;
    document.querySelector(".name").innerHTML = `${data?.weather?.[0]?.main || appConstants.unknownValue}`;

    document.querySelector(".deg").innerHTML = `${data?.main?.humidity || appConstants.unknownValue}%`;
    document.querySelector(".speed").innerHTML = `${data?.wind?.speed || appConstants.unknownValue}KM/HR`;
    document.querySelector(".visi").innerHTML = `${data?.visibility || appConstants.unknownValue}`;
    document.querySelector(".tmp").innerHTML = `${parseInt((data?.main?.["temp_min"] + data?.main?.["temp_max"]) / 2)}&deg;C`;
}

function getDateInfo() {
    const Months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const Days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const d = new Date();
    const day = Days[d.getDay()];
    const date = d.getDate();
    const month = Months[d.getMonth()];
    const year = d.getFullYear();
    return {
        day, date, month, year,
    };
}

function initialload(event) {

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=mumbai&units=metric&APPID=4939584db0029b94f9d6ec9287eab007`)
        .then((response) => {
            if (response.status === 200) {
                return response.json();
            }
            throw Error("Error fetching data.");
        })

        .then((data) => {
            updateDom(data);
        })
        .catch((error) => {
            console.log(error);
            alert(`Error getting information for ${location}`);
        });
}
window.onload = initialload();


function abc(){
    document.getElementById("info1").style.display = "none";
    document.getElementById("info2").style.display = "block";
    document.getElementById("rightarw").style.display = "block";
    document.getElementById("containers").style.width = "400px";
    document.getElementById("right").style.display = "block";
    document.getElementById("rightarw").style.marginLeft = "350px";
}

function def(){
    document.getElementById("info2").style.display = "none";
    document.getElementById("info1").style.display = "block";
    document.getElementById("right").style.display = "none";
}