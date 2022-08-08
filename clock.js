let name = prompt("Adınız Nedir?");

let myName = document.querySelector("#myName")
myName.innerHTML = `${myName.innerHTML} ${name}`

function showTime() {
    const weekday = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
    let tarih = new Date();
    let hour = tarih.getHours();
    let minute = tarih.getMinutes();
    let second = tarih.getSeconds();
    let day = tarih.getDay();

    tarih = (hour + ":" + minute + ":" + second  + " " + weekday[day] );

    let myClock = document.querySelector("#myClock")
    myClock.innerHTML = tarih
}

setInterval(showTime,1000)
