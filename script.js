const date = document.getElementById("date");
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");

const today = new Date();


const weekDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const Months = ["Junuary","February","March","April","May","June","July","August","September","October","November","December"];

date.innerHTML = today.getDate();
if(date<10){
    date.innerHTML = "0" + today.getDate()
}
day.innerHTML = weekDays[today.getDay()]
month.innerHTML = Months[today.getMonth()+1]
year.innerHTML = today.getFullYear();
