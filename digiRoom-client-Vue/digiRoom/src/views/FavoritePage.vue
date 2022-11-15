<template>
  <div>
    <CustomNavbar />
    <!-- Favorite list -->
    <section>
      <div class="container-fluid my-5">
        <div class="container">
          <h2 class="fw-bold">Favorite List</h2>
          <p class="mb-5 fw-bold">
            Temukan akomodasi terbaik mu bersama
            <span class="bolder" style="color: #ee2656">D-</span
            ><span>Room</span>
          </p>
          <div class="row justify-content-center">
            <div class="col-9">
              <!-- Favorite Card -->
              <CardFavorite
                v-for="favorite in dataFavorite"
                :key="favorite"
                :favorite="favorite"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- end Favorite list -->
  </div>
</template>

<script>
import CustomNavbar from "../components/CustomNavigationBar.vue";
import CardFavorite from "../components/CardFavorite.vue";
import { mapActions, mapState } from "pinia";
import { useAccomodationStore } from "../stores/accomodation.js";

export default {
  name: "FavoritePage",
  components: {
    CustomNavbar,
    CardFavorite,
  },
  computed: {
    ...mapState(useAccomodationStore, ["dataFavorite"]),
  },
  methods: {
    ...mapActions(useAccomodationStore, ["handleGetFavorites"]),
  },
  created() {
    this.handleGetFavorites();
  },
};
</script>

<style>
</style>