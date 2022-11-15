<template>
  <div>
    <main
      class="d-flex min-vh-100 justify-content-center align-items-center"
      style="background-color: #fadce4"
    >
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-lg-12 col-xl-10 shadow rounded-6">
            <div
              class="form row justify-content-center py-md-0 py-5"
              style="background-color: #f8f8fe"
            >
              <div class="text-center d-md-none">
                <h4>
                  Complete Your Knowledge <span>by Reading Digi-Traveller</span>
                </h4>
                <p class="text-secondary mt-1">Let's get started</p>
              </div>
              <div class="col-lg-5 col-md-5 col-7 p-2 my-auto">
                <img
                  src="../assets/bg-1.webp"
                  class="img-fluid w-100"
                  alt="Signup Logo"
                />
              </div>

              <div class="col-lg-6 col-md-6 col-12 p-lg-5 px-4 pe-md-2 py-md-5">
                <div class="mb-4 d-none d-md-block">
                  <h4>
                    Complete Your Knowledge by<span>
                      Reading Digi-Traveller</span
                    >
                  </h4>
                  <p class="text-secondary mt-1">Let's get started</p>
                </div>

                <form id="registForm" @submit.prevent="handleLogin">
                  <div class="mb-3">
                    <label for="email" class="form-label">E-mail</label>
                    <div class="input-group">
                      <span class="input-group-text" id="basic-addon1"
                        ><i class="far fa-at"></i
                      ></span>
                      <input
                        type="email"
                        class="form-control"
                        placeholder="Enter your email"
                        id="email"
                        autocomplete="off"
                        v-model="email"
                      />
                    </div>
                    <small class="text-danger d-none"
                      >Please enter a valid e-mail</small
                    >
                  </div>

                  <div class="mb-3">
                    <label for="password" class="form-label">Password</label>
                    <div class="input-group">
                      <span class="input-group-text" id="basic-addon1"
                        ><i class="far fa-lock"></i
                      ></span>
                      <input
                        type="password"
                        class="form-control"
                        placeholder="Enter your password"
                        id="password"
                        autocomplete="off"
                        v-model="password"
                      />
                    </div>
                    <small class="text-secondary"
                      >At least 8 character, number and alphabet</small
                    >
                  </div>

                  <div class="d-grid col-12 mt-md-4 mt-4 submit-button rounded">
                    <button type="submit" class="btn text-white">Login</button>
                  </div>
                  <!-- Google button -->
                  <div id="google-button-login" class="mt-2"></div>
                </form>

                <div class="mt-4">
                  <p class="mb-0">
                    Don't have an account?
                    <router-link
                      to="/"
                      class="text-primary text-decoration-none text-danger"
                      >Register</router-link
                    >
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { mapWritableState, mapActions } from "pinia";
import { useUserStore } from "../stores/user.js";
export default {
  name: "LoginPage",
  computed: {
    ...mapWritableState(useUserStore, ["email", "password"]),
  },
  methods: {
    ...mapActions(useUserStore, ["handleLogin"]),
  },
  // created() {
  //   this.handleLogin;
  // },
};
</script>

<style>
@import url("./FormStyle.css");
</style>