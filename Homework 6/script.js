localStorage.clear();


const url = "api.openweathermap.org/data/2.5/weather?q="
const urlfive ="api.openweathermap.org/data/2.5/forecast?q="
const apikey = "f1dccc2e120053022e00d20001c1a591"

// 1 Day Current Function //


function master(){
  local();
  ajax1();

}
//apend//
function local(){

  var localsearch = document.getElementById("search").value;
console.log(localsearch);

  let cityarray;

  if(localStorage.getItem('cities') === null ) {
    cityarray = [];
  } else {
    cityarray = JSON.parse(localStorage.getItem('cities'));
  }

  console.log(cityarray)

  cityarray.push(localsearch)

  localStorage.setItem('cities', JSON.stringify(cityarray))


$(document).ready(function() {
  $('#searchcity').append(
    $('<div>').prop({
      id: 'citydiv',
      innerHTML: cityarray,
      className: 'border pad'
    })
  );
});

}
function ajax1(){
    // Selecting the input element and get its value 
    var usersearch = document.getElementById("search").value;

    // Displaying the value
    console.log(usersearch);


// ajax call \\

var query = usersearch + '&appid='
var complete = 'https://' + url + query + apikey
console.log(complete)


 $.ajax({
    type:"GET",
    url: complete,
    data: {
    },
    success: function (data) {
        console.log(data)
    
      //cityname var
      var cityname = data.name
      console.log(cityname)
      //date var
      var date = new Date();
            console.log(date)
      //iconrep var
      var iconrep = data.main.temp
      console.log(iconrep)
      //humidity var
      var humidity = data.main.humidity
      console.log(humidity)
            //temp var
            var temp = data.main.temp
            console.log(temp)
      //wind speed var
      var windspeed = data.wind.speed
      console.log(windspeed)


//append funcs

$('#cityname').text(cityname);

$('#date').text(date);

$('#weathericon').text(weathericon);

$('#temp').text(temp + ' Kelvin');

$('#humidity').text(humidity + '%');

$('#windspeed').text(windspeed);





    },
  });
}
// Five Day Function //

function fiveday(){
  var usersearch = document.getElementById("search").value;
var query5 = usersearch + '&appid='
var complete = 'https://' + urlfive + query5 + apikey
console.log(complete)

  $.ajax({
    type:"GET",
    url: complete,
    data: {
    },
    success: function (data) {
        console.log(data)
    

        var onedate = data.list[0].dt_txt
        var twodate = data.list[7].dt_txt
        var threedate = data.list[15].dt_txt
        var fourdate = data.list[23].dt_txt
        var fivedate = data.list[35].dt_txt

        $('#dateone').text(onedate);
        $('#datetwo').text(twodate);
        $('#datethree').text(threedate);
        $('#datefour').text(fourdate);
        $('#datefive').text(fivedate);



        var oneicon 
        var twoicon 
        var threeicon 
        var fouricon 
        var fiveicon 

        $('#tempone').text('Temperature will be ' + onetemp + ' Kelvin');
        $('#temptwo').text('Temperature will be ' + twotemp + ' Kelvin');
        $('#tempthree').text('Temperature will be ' + threetemp + ' Kelvin');
        $('#tempfour').text('Temperature will be ' + fourtemp + ' Kelvin');
        $('#tempfive').text('Temperature will be ' + fivetemp + ' Kelvin');

        var onetemp = data.list[0].main.temp
        console.log(onetemp)

        var twotemp = data.list[8].main.temp
        console.log(twotemp)

        var threetemp = data.list[16].main.temp
        console.log(threetemp)

        var fourtemp = data.list[24].main.temp
        console.log(fourtemp)

        var fivetemp = data.list[36].main.temp
        console.log(fivetemp)

        $('#tempone').text('Temperature will be ' + onetemp + ' Kelvin');
        $('#temptwo').text('Temperature will be ' + twotemp + ' Kelvin');
        $('#tempthree').text('Temperature will be ' + threetemp + ' Kelvin');
        $('#tempfour').text('Temperature will be ' + fourtemp + ' Kelvin');
        $('#tempfive').text('Temperature will be ' + fivetemp + ' Kelvin');



        var onehum = data.list[0].main.humidity
        console.log(onehum)

        var twohum = data.list[8].main.humidity
        console.log(twohum)

        var threehum = data.list[16].main.humidity
        console.log(threehum)

        var fourhum = data.list[24].main.humidity
        console.log(fourhum)

        var fivehum = data.list[36].main.humidity
        console.log(fivehum)

        $('#humone').text('Humidity will be ' + onehum + ' ');
        $('#humtwo').text('Humidity will be ' + twohum + ' ');
        $('#humthree').text('Humidity will be ' + threehum + ' ');
        $('#humfour').text('Humidity will be ' + fourhum + ' ');
        $('#humfive').text('Humidity will be ' + fivehum + ' ');
  



}
  })
}

// icons //
  