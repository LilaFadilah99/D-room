<template>
  <!-- favorite -->
  <div class="row my-3 rounded-3 py-2 card-favorite">
    <div class="col-4">
      <img
        :src="favorite.Accommodation.imgUrl"
        alt=""
        class="img-fluid rounded-2"
        style="width: 900px; height: 200px; object-fit: cover"
      />
    </div>
    <div class="col-8">
      <div class="row">
        <div class="col-11">
          <p class="text-secondary p-size">
            {{ favorite.Accommodation.location }}
          </p>
        </div>
        <div class="col-1 delete-favorite">
          <i
            @click="handleDeleteFavorite(favorite.Accommodation.id)"
            class="fa-solid fa-heart"
          ></i>
        </div>
      </div>
      <p class="fw-bold">{{ favorite.Accommodation.name }}</p>
      <hr style="width: 40px" />
      <p class="text-secondary p-size">
        {{ favorite.Accommodation.roomCapacity }} tamu . 3 kamar tidur . 1 kamar
        mandi + toilet
      </p>

      <div class="row mt-5 justify-content-between">
        <div class="col-4">
          <p class="p-size mb-0">
            <i class="fa-solid fa-star"></i>&nbsp;
            <span class="fw-bold">5,0</span
            ><span class="text-secondary">(40 ulasan)</span>
          </p>
        </div>
        <div class="col-5">
          <p class="fw-bold mb-0">
            {{
              favorite.Accommodation.price?.toLocaleString("id-ID", {
                style: "currency",
                currency: "IDR",
              })
            }}
            / malam
          </p>
        </div>
        <div class="col-3">
          <p
            @click="handleShowDetail(favorite.Accommodation.id)"
            class="show-detail"
          >
            Show Detail
          </p>
        </div>
      </div>
    </div>
  </div>
  <!-- end favorite row 1 -->
</template>

<script>
import { mapActions } from "pinia";
import { useAccomodationStore } from "../stores/accomodation.js";

export default {
  name: "CardFavorite",
  props: ["favorite"],
  methods: {
    ...mapActions(useAccomodationStore, [
      "handleDeleteFavorite",
      "handleShowDetail",
    ]),
  },
};
</script>

<style>
.card-favorite {
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
}
.delete-favorite:hover {
  color: black;
}
.delete-favorite {
  font-size: 22px;
  color: #ee2656;
}
.show-detail {
  color: orange;
  cursor: pointer;
}
.show-detail:hover {
  color: #ee2656;
  cursor: pointer;
}
</style>