

window.addEventListener('load',()=>{
    // let dotenv = require('dotenv');
    let long;
    let lat; 
    let temp = document.getElementById('temperature-degrees');
    let description = document.getElementById('description');
    let location = document.getElementById('timezone-location');
    

    if(navigator.geolocation){
        // calling geolocation at currentposition
        navigator.geolocation.getCurrentPosition(position =>{
            // setting longitude and latitude during callback of 'getCurrentPosition'
                        long = position.coords.longitude;
                        lat = position.coords.longitude;
                        let proxy = "https://cors-anywhere.herokuapp.com/";
                        // let api_key = process.env.KEY;
                        //open weather api vvvvvvvvvv
                        // let url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${api_key}`;
                        let url = `${proxy}https://api.darksky.net/forecast/b4ee95817344bbc19279b4538610ffb3/${lat},${long}`
                        
                        
                                           fetch(url).then(response =>{
                                            return response.json()
                                        }).then(data =>{
                                                console.log(data);
                                                const {temperature, summary, icon} = data.currently;
                                                // //Location
                                                location.innerHTML = data.timezone;
                                                // // Temperature
                                                temp.innerHTML = temperature;
                                                // // Description of weather
                                                description.innerHTML = summary;
                                                        // Set Icon depending on weather
                                                setIcons(icon, document.getElementById('weather_icon'));
                                        })

                                        

        })
    }
          function setIcons(icon, iconID){
                const skycons = new Skycons({"color": "#fff"});
                const currentIcon = icon.replace(/-/g, "_").toUpperCase();
                skycons.play();
                return skycons.set(iconID, skycons[currentIcon]);
          }
    
});











