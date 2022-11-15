<template>
  <div
    class="row p-3 border"
    style="
      border-radius: 15px;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
        rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    "
  >
    <!-- pict -->
    <div class="row pt-3">
      <div class="col-4">
        <img
          :src="detailAccomodation.imgUrl"
          alt=""
          class="img-fluid rounded-3"
          style="width: 200px; height: 80px; object-fit: cover"
        />
      </div>
      <div class="col-8">
        <p class="text-content mb-0">{{ detailAccomodation.name }}</p>
        <p class="text-content text-secondary">
          {{ detailAccomodation.location }}
        </p>
        <p class="p-font-size text-secondary">
          <i class="fa-solid fa-star"></i
          ><span class="text-dark fw-bold">4,38</span>(120 ulasan)&nbsp; .
          &nbsp;
          <span><i class="fa-solid fa-medal"></i> Hos Teladan</span>
        </p>
      </div>
    </div>
    <hr />
    <h5 class="py-3">
      Pesanan dilindungi oleh
      <span class="fw-bolder"><span style="color: #ee2656">D-</span>cover</span>
    </h5>
    <hr />
    <!-- biaya tambahan -->
    <div class="row my-3 p-size">
      <h4 class="fw-bold mb-3">Perincian Harga</h4>
      <div class="row">
        <div class="col-6">
          <p>{{ roomPrice }} X 3</p>
        </div>
        <div class="col-6 text-end">
          <p>Rp.900.000</p>
        </div>
      </div>
      <div class="row">
        <div class="col-6">
          <p>Biaya kebersihan</p>
        </div>
        <div class="col-6 text-end">
          <p>Rp.50.000</p>
        </div>
      </div>
      <div class="row">
        <div class="col-6">
          <p>Biaya layanan</p>
        </div>
        <div class="col-6 text-end">
          <p>Rp.0</p>
        </div>
      </div>
    </div>
    <hr />
    <div class="row">
      <div class="col-6">
        <h5 class="fw-bold">Total</h5>
      </div>
      <div class="col-6 text-end">
        <p class="fw-bold">Rp.900.000</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PaymentForm",
  props: ["detailAccomodation", "roomPrice"],
};
</script>

<style>
</style>