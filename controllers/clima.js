const axios = require('axios')
const { MAPBOX_KEY, OPEN_WEATHER_KEY } = require("../config");



async function clima(req,res) {
  const data = req.body;
  
  const lugar = data.ciudad;
  const intance = axios.create({
    baseURL:`https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
    params: {
      'access_token': MAPBOX_KEY,
      'limit': 5,
      'language': 'es'
    }
  })
  const  resp =  await intance.get();

  if(resp){
    res.status(200).send({ code: 200, message: resp.data.features });
  }


}

function temperatura(req,res) {
  
  const lon = req.body[0];
  const lat = req.body[1];
console.log(req.body);
  axios.get('https://api.openweathermap.org/data/2.5/weather', {
    params: {
      lat:lat,
      lon:lon,
      appid:'8f0a2d1b46c409ef0bca159104a01d12',
      lang:'es',
      units:'metric'
    }
  })
  .then(function (response) {
    
     res.status(200).send({ code: 200, message: response.data });
  })
  .catch(function error(error) {
    console.log(error);
  })













  // const intance = axios.create({
  //   baseURL:`api.openweathermap.org/data/2.5/weather?lat=17.98694&lon=-92.91944&appid=8f0a2d1b46c409ef0bca159104a01d12&lang=es&units=metric`,
  //   // params: {
  //   //   'lat': lat,
  //   //   'lon': lon,
  //   //   'appid': OPEN_WEATHER_KEY,
  //   //  'lang':'es',
  //   //  'units':'metric'
  //   // }
  // })

  // const  resp =  await intance.get();
  // console.log(resp);

}





module.exports = {
    clima,
    temperatura,
}