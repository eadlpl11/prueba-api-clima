var count = 0;
function getInputValue(){

    var city = document.getElementById("Ciudad").value;
    
    $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=0992980022c954f778d9af015783d3b4",function(data){
    console.log(data);

    var icon = "http://api.openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    var temp = data.main.temp;
    var weather = data.weather[0].main;


    $('.icon').attr('src', icon);
    $('.weather').append(weather);
    $('.temp').append(temp);
    
    count ++;
    document.getElementById("button").innerHTML = "Limpiar";
    document.getElementById("Ciudad").innerHTML = "";

    if(count > 1){
    location.reload();
    count = 0;
    
    }
});
}



