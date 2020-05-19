const axios = require("axios")

const getComponentesForAddress = async function (address, apikey) {

  try {

    const {
      data: { candidates: [{ place_id: placeID }] }
    } = await axios({
      "method": "GET",
      "url": "https://maps.googleapis.com/maps/api/place/findplacefromtext/json",
      "params": {
        "input": address,
        "inputtype": "textquery",
        "key": apikey
      }
    });

    const { data: { result: { address_components } } } = await axios({
      "method": "GET",
      "url": "https://maps.googleapis.com/maps/api/place/details/json",
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


  return [null, null]

}

exports.getComponentesForAddress = getComponentesForAddress;