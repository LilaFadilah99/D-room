const Axios = require("axios");
const { Accommodation, History, User, Favorite, BookingRoom } = require("../models");

class ApiController {
  static async getImageApi(request, response, next) {
    const { id } = request.params;
    const accomodation = await Accommodation.findByPk(id);
    if (accomodation) {
      Axios({
        method: "GET",
        url: `https://imsea.herokuapp.com/api/1?q=${accomodation.location}`,
      })
        .then(({ data }) => {
          response.status(200).json({
            image1: data.results[0],
            image2: data.results[2],
            image3: data.results[4],
            image4: data.results[6],
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  static async handlegetEventApi(request, response, next) {
    const { id } = request.params;
    const accomodation = await Accommodation.findByPk(id);
    const location = accomodation.location.split(",")[1];
    if (accomodation) {
      Axios({
        method: "GET",
        url: `https://api.seatgeek.com/2/venues?client_id=MjkyOTM2NDR8MTY2MzkyMzI4Ni45NjU3Njk1&city=${location}`,
      })
        .then(({ data }) => {
          response.status(200).json(data.venues);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
}

module.exports = ApiController;
