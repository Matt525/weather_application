
window.addEventListener('load',()=>{
    let long;
    let lat; 
    let temp = document.getElementById('temperature-degrees');
    let description = document.getElementById('description');
    let location = document.getElementById('timezone-location');
    let weather_icon = document.getElementById('weather_icon');
    if(navigator.geolocation){
        // calling geolocation
        navigator.geolocation.getCurrentPosition(position =>{
            // setting longitude and latitude during callback of 'getCurrentPosition'
                        long = position.coords.longitude;
                        lat = position.coords.latitude;
                        let key = "b4ee95817344bbc19279b4538610ffb3"; 
                    
                        let proxy = "https://cors-anywhere.herokuapp.com/";
                        let url = `${proxy}https://api.darksky.net/forecast/${key}/${lat},${long}`
                        
                        
                        fetch(url).then(response =>{
                            return response.json()
                        }).then(data =>{
                                const {temperature, summary, icon} = data.currently;
                                // //Location
                                location.innerHTML = 'Charleston, SC';
                                // // Temperature
                                temp.innerHTML = temperature;
                                // // Description of weather
                                description.innerHTML = summary;
                                        // Set Icon depending on weather
                                setIcons(icon, weather_icon);
                        })

                                        

        })
    }
          function setIcons(icon, iconID){
                const skycons = new Skycons({"color": "#fff"});
                const currentIcon = icon.replace(/-/g, "_").toUpperCase();
                skycons.play();
                return skycons.set(iconID, Skycons[currentIcon]);
          }
    
});











