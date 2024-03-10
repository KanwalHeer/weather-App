//import readline-sync for user input, in which user put its city name:

import * as readlineSync from  'readline-sync'

//I get api for weather data from third party app:

const apiKey = 'a43cb225bda482d002879d08c4a5210b';

//i creat a async function for fatching data from my apikey:

async function fatchWearherFromkApi(city:string):Promise<void> {
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    // i am writting code within the try-catch block to catch error.
    try {
        const response =  await fetch(apiUrl)
        const weatherData=await  response.json();

        console.log(`
            City:${weatherData.name},${weatherData.sys.country}
            Weather:${weatherData.weather[0].description}
            Temperature:${weatherData.main.temp}°C
            Humidity:${weatherData.main.humidity}%
            Wind Speed:${weatherData.wind.speed}m/s
        `)

    } catch (error) {
        console.log(`Error fatching weather data`,error)
    }
    
}
   //creating a varaible to take input from user
   const city = readlineSync.question("Enter Your City name: ")

  // use above varaible (city) as an argument at the time of calling function:
   fatchWearherFromkApi(city)
