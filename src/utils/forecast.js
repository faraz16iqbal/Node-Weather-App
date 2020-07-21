const request = require('postman-request');

const forecast = (lat,long,callback) =>{
const url = 'http://api.weatherstack.com/current?access_key=4e947870df4bc9b6e6474eed7c20f0cf&query='+encodeURIComponent(long) + ',' + encodeURIComponent(lat) + '&units=f';

request({url:url, json:true}, (error,{body}) =>{
    if(error){
        callback('Unable to connect to location services!', undefined);
    }
    
    else if(body.error){
        callback('Could not fetch data!Try Again', undefined);
    }

    else{
        console.log(body)
        callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out there');
    }  
})

}

module.exports = forecast;