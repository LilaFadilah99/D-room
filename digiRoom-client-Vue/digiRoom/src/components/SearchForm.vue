<template>
  <form class="d-flex" role="search" @submit.prevent="submitSerch">
    <input
      class="p-0 text-center form-control border-0 search-form"
      type="search"
      placeholder="Accomodation"
      aria-label="Search"
      v-model="nameSearch"
    />
    <span class="vertikal-line"></span>
    <input
      class="p-0 text-center form-control border-0 search-form"
      type="search"
      placeholder="Price"
      aria-label="Search"
      v-model="priceSearch"
    />
    <span class="vertikal-line"></span>
    <input
      class="p-0 text-center form-control border-0 search-form"
      type="search"
      placeholder="Location"
      aria-label="Search"
      v-model="locationSearch"
    />
    <button class="btn btn-danger btn-sm rounded-circle" type="submit">
      <i class="fa-solid fa-magnifying-glass"></i>
    </button>
  </form>
</template>

<script>
import { mapActions, mapWritableState } from "pinia";
import { useAccomodationStore } from "../stores/accomodation.js";
export default {
  name: "SearchForm",
  computed: {
    ...mapWritableState(useAccomodationStore, [
      "priceSearch",
      "nameSearch",
      "locationSearch",
    ]),
  },
  methods: {
    ...mapActions(useAccomodationStore, ["handleGetAccomodation"]),
    submitSerch() {
      this.handleGetAccomodation();
    },
  },
};
</script>

<style>
.vertikal-line {
  border-left: 1px solid #a5a9ad;
  height: 30px;
}
</style>