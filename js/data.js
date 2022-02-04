function f_date()

{

temp_date = new Date();

day = temp_date.getDate();

month = temp_date.getMonth() + 1;

year = temp_date.getFullYear();

if (day < 10) {

day = "0" + day;

}

if (month <10) {

month = "0" + month;

}

document.getElementById('dateFolder').innerHTML = day + "." + month + "." + year;

}
f_date()
