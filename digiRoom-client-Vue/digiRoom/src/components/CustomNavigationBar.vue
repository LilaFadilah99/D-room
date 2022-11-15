<template>
  <div>
    <!-- Navbar -->
    <nav
      class="navbar navbar-expand-lg pt-3 nav-1 d-flex justify-content-center"
    >
      <div class="container d-flex justify-content-between">
        <a class="navbar-brand text-danger fw-bold" href="#"
          ><span class="text-dark">D</span> -Room</a
        >
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse d-flex justify-content-end"
          id="navbarNav"
        >
          <ul class="navbar-nav justify-content-center">
            <div class="col-9 rounded-pill px-5 py-2 nav-search-bar">
              <div class="row">
                <div class="col p-0">
                  <SearchForm />
                </div>
              </div>
            </div>
          </ul>
          <ul class="navbar-nav">
            <li class="nav-item me-3">
              <router-link
                class="nav-link active fw-bold find-accomodation"
                aria-current="page"
                to="/"
                >Mulai Temukan Penginapan</router-link
              >
            </li>
            <!-- profile -->
            <div class="btn-group">
              <button
                type="button"
                class="
                  btn btn-outline-secondary
                  dropdown-toggle
                  rounded-pill
                  px-3
                "
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i
                  class="fa-solid fa-user p-2 rounded-circle"
                  style="
                    background-color: #a5a9ad;
                    font-size: 12px;
                    color: #495966;
                  "
                ></i>
              </button>
              <ul class="dropdown-menu" style="left: -90px">
                <li v-if="access_token">
                  <router-link class="dropdown-item" to="/favorite"
                    >Favorit</router-link
                  >
                </li>
                <li v-if="access_token">
                  <a class="dropdown-item" href="#">Pesanan</a>
                </li>
                <li v-if="access_token">
                  <a class="dropdown-item" href="#">Akun</a>
                </li>
                <li v-if="access_token"><hr class="dropdown-divider" /></li>
                <li v-if="!access_token">
                  <router-link class="dropdown-item" to="/login"
                    >Login</router-link
                  >
                </li>
                <li v-if="!access_token">
                  <a class="dropdown-item" href="#">Daftar</a>
                </li>
                <li v-if="access_token">
                  <a class="dropdown-item" href="#" @click="handleLogout"
                    >Logout</a
                  >
                </li>
              </ul>
            </div>
          </ul>
        </div>
      </div>
    </nav>
    <hr />
    <!-- end Navbar -->
  </div>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useUserStore } from "../stores/user.js";
import SearchForm from "../components/SearchForm.vue";

export default {
  name: "CustomNavigationBar",
  components: {
    SearchForm,
  },
  computed: {
    ...mapState(useUserStore, ["access_token"]),
  },
  methods: {
    ...mapActions(useUserStore, ["handleLogout"]),
  },
};
</script>

<style lang="css" scoped>
.nav-search-bar {
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
}
.find-accomodation:hover {
  color: #ee2656;
}
</style>
