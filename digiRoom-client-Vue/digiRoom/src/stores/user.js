import { defineStore } from "pinia";
import Axios from "axios";
import router from "../router/index.js";

export const useUserStore = defineStore({
  id: "user",
  state: () => {
    return {
      email: "",
      password: "",
      access_token: localStorage.access_token || null,
    };
  },

  actions: {
    handleLogin() {
      Axios.post("/user/login", {
        email: this.email,
        password: this.password,
      })
        .then(({ data }) => {
          console.log(data);
          let { access_token } = data;
          console.log(access_token);
          this.email = "";
          this.password = "";
          localStorage.setItem("access_token", access_token);
          this.access_token = access_token;
          router.push("/");
        })
        .catch((err) => {
          console.log(err);
        });
    },
    handleLogout() {
      localStorage.removeItem("access_token");
      this.access_token = null;
      router.push("/");
    },
  },
});
