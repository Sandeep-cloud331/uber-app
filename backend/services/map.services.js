const axios = require('axios')

module.exports.getAddressCoordinate = async (address) => {
  const API_KEY = process.env.GOOGLE_MAPS_API;
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${API_KEY}`;

  try {
    const response = await axios.get(url);
    if (response.data.status === 'OK') {
      const location = response.data.results[0].geometry.location
      return {
        ltd: location.lat,
        lng: location.lng
      }

    } else {
      throw new Error("unable to fetch coordinates");

    }
  } catch (error) {
    console.error("error in map.services:",error);
    throw error;

  }
}