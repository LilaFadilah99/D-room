<template>
  <!-- row 1 -->
  <div class="col-3 ticket-location mb-3">
    <img
      :src="accomodation.imgUrl"
      alt=""
      class="img-fluid rounded-4"
      style="width: 300px; height: 240px; object-fit: cover"
      @click="handleShowDetail(accomodation.id)"
    />
    <br /><br />
    <h4 class="favorite-button" @click="handleAddToFavorite(accomodation.id)">
      <i class="fa-solid fa-heart"></i>
    </h4>
    <p class="fw-bold">{{ accomodation.name }}</p>
    <p class="text-secondary">{{ accomodation.location }}</p>
    <p class="fw-bold">
      {{
        accomodation.price?.toLocaleString("id-ID", {
          style: "currency",
          currency: "IDR",
        })
      }}
    </p>
  </div>
</template>

<script>
import { mapActions } from "pinia";
import { useAccomodationStore } from "../stores/accomodation.js";

export default {
  name: "CardAccomodation",
  props: ["accomodation"],
  methods: {
    ...mapActions(useAccomodationStore, [
      "handleShowDetail",
      "handleAddToFavorite",
    ]),
  },
};
</script>

<style></style>
