const axios = require("axios")

const getComponentsForAddress = async function (address, apikey) {

  try {

    const {
      data: { candidates: [{ place_id: placeID }] }
    } = await axios({
      "method": "GET",
      "url": "https://maps.googleapis.com/maps/api/place/findplacefromtext/json",
      "crossdomain": true,
      "headers": {
        "Access-Control-Allow-Origin": "*",
      },
      "params": {
        "input": address,
        "inputtype": "textquery",
        "key": apikey
      }
    });

    const { data: { result: { address_components } } } = await axios({
      "method": "GET",
      "url": "https://maps.googleapis.com/maps/api/place/details/json",
      "crossdomain": true,
      "headers": {
        "Access-Control-Allow-Origin": "*",
      },
      "params": {
        "place_id": placeID,
        "fields": "formatted_address,address_components",
        "key": apikey
      }
    })

    return [address_components, null];
    
  } catch (err) {
    return [null, err]
  }

}

exports.getComponentsForAddress = getComponentsForAddress;