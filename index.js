window.addEventListener('load',()=>{    
    let long;
    let lat;
    let weather_icon = document.getElementById('icon'); 
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
                        let api_key = '9667912ea99a511d160c3adf756caac2';
                        let url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${api_key}`;




                                        fetch(url).then(response =>{
                                            
                                            return response.json();
                                        }).then(data =>{
                                
                                            console.log(data);
                                            const {main, weather} = data;
                                            //Location
                                            location.innerHTML;
                                            // Temperature
                                            temp.innerHTML = main.temp;
                                            // Description of weather
                                            description.innerHTML = weather[0].description;
                                        })

        })
    }
    
});











