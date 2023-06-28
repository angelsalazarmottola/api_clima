window.addEventListener('load', () => {
    let lon
    let lat

    const card = document.getElementById('container')
    let temperaturaValue = document.getElementById('temperatura-value')
    let temperaturaDescription = document.getElementById('temperatura-description')
    let ubication = document.getElementById('ubication')
    let iconAnimated = document.getElementById('icon-animated')
    let vientoVelocidad = document.getElementById('viento-velocidad')

    async function search(query) {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=4ea60f841f27ec0089b3e227582b0eec&lang=e`)
            const data = await response.json();
            card.style.display = 'block';

            let temp = Math.round(data.main.temp - 273.15)
                    temperaturaValue.textContent = `${temp} °C`

            let desc = data.weather[0].description
            temperaturaDescription.textContent = desc.toUpperCase()

            let ubic = (data.name)
            ubication.textContent = ubic

            vientoVelocidad.textContent = `${data.wind.speed} m/s` 

            console.log(data.weather[0].main);

                    switch (data.weather[0].main) {
                        case 'Thunderstorm':
                            iconAnimated.src= 'animated/thunder.svg'
                            console.log('Tormenta');
                            break;
                        case 'Drizzle':
                            iconAnimated.src= 'animated/rainy-1.svg'
                            console.log('Llovizna');
                            break;
                        case 'Rain':
                            iconAnimated.src= 'animated/rainy-7.svg'
                            console.log('Lluvia');
                            break;
                        case 'Snow':
                            iconAnimated.src= 'animated/snowy-6.svg'
                            console.log('Nieve');
                            break;
                        case 'Clear':
                            iconAnimated.src= 'animated/day.svg'
                            console.log('Limpio');
                            break;
                        case 'Atmosphere':
                            iconAnimated.src= 'animated/weather.svg'
                            console.log('Atmosfera');
                            break;
                        case 'Clouds':
                            iconAnimated.src= 'animated/cloudy-day-1.svg'
                            console.log('Nubes');
                            break;
                        default:
                            iconAnimated.src= 'animated/cloudy-day-1.svg'
                            console.log('por defecto');
                    }

            console.log(data)
        } catch (error) {
            console.log(error);
            alert ('Error')
        }
    }

    function onSubmit(e) {
        e.preventDefault();
        search(searchbox.value)

    }

    const searchform = document.getElementById('form')
    const searchbox = document.getElementById('city')
    form.addEventListener('submit', onSubmit, true);
});



//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition((position) => {
//             // console.log(position);
//             lon = position.coords.longitude;
//             lat = position.coords.latitude;

//             // const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=4ea60f841f27ec0089b3e227582b0eec`
//             const url = `https://api.openweathermap.org/data/2.5/weather?q=lima&appid=4ea60f841f27ec0089b3e227582b0eec&lang=es`
//             // console.log(url);

//             fetch(url)
//                 // .then( response => { return response.json() })
//                 // .then(data => {
//                 //     let temp = Math.round(data.main.temp - 273.15)
//                 //     temperaturaValue.textContent = `${temp} °C`

//                 //     let desc = data.weather[0].description
//                 //     temperaturaDescription.textContent = desc.toUpperCase()

//                 //     let ubic = (data.name)
//                 //     ubication.textContent = ubic

//                 //     console.log(data.wind.speed);

//                 //     vientoVelocidad.textContent = `${data.wind.speed} m/s` 

                    
//                     // const { temp } = data.main
//                     // const { description, icon } = data.weather[0]
//                     // const { speed } = data.wind
//                     // const { name } = data

//                     // Formula para convertir de kelvin a celsius
//                     // temperaturaValue.textContent = Math.round(temp - 273.15)
//                     // temperaturaDescription.textContent = description
//                     // ubication.textContent = name
//                     // vientoVelocidad.textContent = speed
//                     // iconAnimated.src = `http://openweathermap.org/img/w/${icon}.png`

//                         console.log(data.weather[0].main);
//                     switch (data.weather[0].main) {
//                         case 'Thunderstorm':
//                             iconAnimated.src= 'animated/thunder.svg'
//                             console.log('Tormenta');
//                             break;
//                         case 'Drizzle':
//                             iconAnimated.src= 'animated/rainy-1.svg'
//                             console.log('Llovizna');
//                             break;
//                         case 'Rain':
//                             iconAnimated.src= 'animated/rainy-7.svg'
//                             console.log('Lluvia');
//                             break;
//                         case 'Snow':
//                             iconAnimated.src= 'animated/snowy-6.svg'
//                             console.log('Nieve');
//                             break;
//                         case 'Clear':
//                             iconAnimated.src= 'animated/day.svg'
//                             console.log('Limpio');
//                             break;
//                         case 'Atmosphere':
//                             iconAnimated.src= 'animated/weather.svg'
//                             console.log('Atmosfera');
//                             break;
//                         case 'Clouds':
//                             iconAnimated.src= 'animated/cloudy-day-1.svg'
//                             console.log('Nubes');
//                             break;
//                         default:
//                             iconAnimated.src= 'animated/cloudy-day-1.svg'
//                             console.log('por defecto');
//                     }

//                 })
//                 .catch(err => console.log(err))
//         });
//     }
// });