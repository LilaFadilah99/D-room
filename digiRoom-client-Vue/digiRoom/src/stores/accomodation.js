import { defineStore } from "pinia";
// import Axios from "axios";
import Axios from "../config/axios";
import router from "../router";
import { createToaster } from "@meforma/vue-toaster";
const toaster = createToaster({
  /* options */
});

export const useAccomodationStore = defineStore({
  id: "accomodation",
  state: () => {
    return {
      accomodations: [],
      detailAccomodation: {},
      dataFavorite: [],
      nameSearch: "",
      priceSearch: null,
      page: 1,
      totalPage: 0,
      locationSearch: "",
      checkin: "",
      checkout: "",
      roomPrice: null,
      serviceCharge: null,
      cleaningFee: null,
      transactionToken: null,
      dataBooking: {},
      location: "",
      imageApi: {},
      venue: {},
    };
  },

  actions: {
    handleGetAccomodation(page = 1) {
      Axios({
        method: "GET",
        url: `/accomodation?page=${page}&name=${this.nameSearch}&price=${this.priceSearch}&location=${this.locationSearch}`,
      })
        .then(({ data }) => {
          this.accomodations = data.rows;

          this.page = page;
          this.totalPage = data.totalPage;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    handleShowDetail(id) {
      Axios({
        method: "GET",
        url: `/accomodation/all/${id}`,
      })
        .then(({ data }) => {
          console.log(data);
          this.detailAccomodation = data;
          this.roomPrice = data.price;
          this.serviceCharge = data.serviceCharge;
          this.cleaningFee = data.cleaningFee;
          this.location = data.location;
          router.push({
            name: "detail",
            params: {
              id: data.id,
            },
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    handleAddToFavorite(id) {
      Axios({
        method: "post",
        url: `/accomodation/favorites/${id}`,
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      })
        .then(({ data }) => {
          console.log(data);

          toaster.info("Success add data favorite");
        })
        .catch((err) => {
          console.log(err);
          if (err.response.data.message === "Favorite data has been added") {
            toaster.info(`${err.response.data.message}`);
          }
        });
    },
    handleGetFavorites() {
      Axios({
        method: "GET",
        url: "/accomodation/favorites",
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      })
        .then(({ data }) => {
          console.log(data);
          this.dataFavorite = data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    handleDeleteFavorite(id) {
      Axios({
        method: "delete",
        url: `/accomodation/favorites/${id}`,
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      })
        .then(({ data }) => {
          console.log(data);
          this.handleGetFavorites();
          toaster.info(`success delete favorite`);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    handlePayment(id) {
      Axios({
        method: "POST",
        url: `/accomodation/payment/${id}`,
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      })
        .then(({ data }) => {
          this.transactionToken = data.transactionToken;
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    },

    handleBookingRoom(id) {
      Axios({
        method: "post",
        url: `/accomodation/booking/${id}`,
        data: {
          checkin: this.checkin,
          checkout: this.checkout,
        },
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      })
        .then(({ data }) => {
          console.log(data);
          router.push(`/payment/${id}`);
        })
        .catch((err) => {
          console.log(err);
          if (err.response.data.message[0] === "checkin date cannot empty") {
            toaster.error(`please input checkin and checkout date first`);
          }
        });
    },

    handleGetBookingRoom(id) {
      Axios({
        method: "GET",
        url: `/accomodation/booking/${id}`,
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      })
        .then(({ data }) => {
          console.log(data);
          this.dataBooking = data;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    handleGetImageApi(id) {
      Axios({
        method: "GET",
        url: `/imageApi/${id}`,
      })
        .then(({ data }) => {
          console.log(data);
          this.imageApi = data;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    handleGetVenue(id) {
      Axios({
        method: "GET",
        url: `/event/${id}`,
      })
        .then(({ data }) => {
          console.log(data);
          this.venue = data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
});
