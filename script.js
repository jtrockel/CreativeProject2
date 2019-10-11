document.getElementById("dateSubmit").addEventListener("click", function(event) {
    event.preventDefault();
    let dt = document.getElementById("example-date-input").value;
    const url = "https://api.nasa.gov/planetary/apod?api_key=K4uso027ELhtppj6rVtqlnBSZadsh2EUTixqep9W&date="+dt;
    fetch(url)
        .then(function(response) {
            return response.json();
        }).then(function(json) {
            let results = "";
            console.log(json.hdurl);
            results += '<img src="' + json.hdurl +' "style=" margin:auto;height:50%; width:50%; display: block;">';

            document.getElementById("weatherResults").innerHTML = results;
        });
});

document.getElementById("weatherSubmit").addEventListener("click", function(event) {
    event.preventDefault();
    let month = randomIntFromInterval(1,12);
    let day = randomIntFromInterval(1,27);
    
    const url = "https://api.nasa.gov/planetary/apod?api_key=K4uso027ELhtppj6rVtqlnBSZadsh2EUTixqep9W&date=2018-"+month+"-"+day;
    fetch(url)
        .then(function(response) {
            return response.json();
        }).then(function(json) {
            let results = "";
            console.log(json.hdurl);
            results += '<img src="' + json.hdurl +' "style=" margin:auto;height:50%; width:50%; display: block;">';

            document.getElementById("weatherResults").innerHTML = results;
        });

});





function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}